import {useEffect, useRef} from 'react';

import styles from './styles.module.css';

type NodePoint = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  alpha: number;
  color: string;
};

type RenderMode = 'small' | 'compact' | 'full';

type NetworkTuning = {
  minNodes: number;
  maxNodes: number;
  density: number;
  drift: number;
  minRadius: number;
  maxRadius: number;
  minAlpha: number;
  maxAlpha: number;
  connectionDistance: number;
  lineOpacity: number;
  lineWidth: number;
  glowBlur: number;
  glowBoost: number;
};

const ACCENT_COLORS = ['67, 240, 191', '88, 228, 214', '54, 196, 167'];
const BASE_PADDING = 96;
const MAX_DPR = 1.5;
const FRAME_INTERVAL = 1000 / 48;
const SMALL_SCREEN_BREAKPOINT = 640;
const COMPACT_BREAKPOINT = 980;

const NETWORK_TUNING: Record<RenderMode, NetworkTuning> = {
  small: {
    minNodes: 30,
    maxNodes: 48,
    density: 14000,
    drift: 0.06,
    minRadius: 1.5,
    maxRadius: 2.5,
    minAlpha: 0.24,
    maxAlpha: 0.38,
    connectionDistance: 170,
    lineOpacity: 0.26,
    lineWidth: 0.92,
    glowBlur: 13,
    glowBoost: 0.14,
  },
  compact: {
    minNodes: 48,
    maxNodes: 76,
    density: 17000,
    drift: 0.09,
    minRadius: 1.75,
    maxRadius: 2.9,
    minAlpha: 0.26,
    maxAlpha: 0.42,
    connectionDistance: 200,
    lineOpacity: 0.32,
    lineWidth: 1.08,
    glowBlur: 17,
    glowBoost: 0.16,
  },
  full: {
    minNodes: 72,
    maxNodes: 108,
    density: 18500,
    drift: 0.125,
    minRadius: 2,
    maxRadius: 3.6,
    minAlpha: 0.3,
    maxAlpha: 0.52,
    connectionDistance: 232,
    lineOpacity: 0.38,
    lineWidth: 1.22,
    glowBlur: 20,
    glowBoost: 0.18,
  },
};

const getRenderMode = (width: number): RenderMode => {
  if (width < SMALL_SCREEN_BREAKPOINT) {
    return 'small';
  }

  if (width < COMPACT_BREAKPOINT) {
    return 'compact';
  }

  return 'full';
};

const createNodes = (
  width: number,
  height: number,
  mode: RenderMode,
  staticMode: boolean,
): NodePoint[] => {
  const config = NETWORK_TUNING[mode];
  const area = width * height;
  const count = Math.max(
    config.minNodes,
    Math.min(config.maxNodes, Math.round(area / config.density)),
  );

  return Array.from({length: count}, (_, index) => {
    const drift = staticMode ? 0 : config.drift;
    const direction = (index % 2 === 0 ? 1 : -1) * (0.5 + Math.random() * 0.8);

    return {
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() * drift + drift * 0.65) * direction,
      vy: (Math.random() * drift + drift * 0.5) * (Math.random() > 0.5 ? 1 : -1),
      radius: config.minRadius + Math.random() * (config.maxRadius - config.minRadius),
      alpha: config.minAlpha + Math.random() * (config.maxAlpha - config.minAlpha),
      color: ACCENT_COLORS[index % ACCENT_COLORS.length],
    };
  });
};

export default function NeuralBackground(): JSX.Element {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) {
      return undefined;
    }

    const context = canvas.getContext('2d', {alpha: true});

    if (!context) {
      return undefined;
    }

    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    let reducedMotion = motionQuery.matches;
    let width = window.innerWidth;
    let height = window.innerHeight;
    let mode = getRenderMode(width);
    let staticMode = reducedMotion;
    let nodes = createNodes(width, height, mode, staticMode);
    let animationFrame = 0;
    let lastTimestamp = 0;
    let isDisposed = false;

    const configureCanvas = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      mode = getRenderMode(width);
      staticMode = reducedMotion;

      const dpr = Math.min(window.devicePixelRatio || 1, MAX_DPR);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      context.setTransform(dpr, 0, 0, dpr, 0, 0);
      nodes = createNodes(width, height, mode, staticMode);
    };

    const drawFrame = () => {
      const config = NETWORK_TUNING[mode];

      context.clearRect(0, 0, width, height);

      for (let firstIndex = 0; firstIndex < nodes.length; firstIndex += 1) {
        const firstNode = nodes[firstIndex];

        for (let secondIndex = firstIndex + 1; secondIndex < nodes.length; secondIndex += 1) {
          const secondNode = nodes[secondIndex];
          const dx = secondNode.x - firstNode.x;
          const dy = secondNode.y - firstNode.y;
          const distance = Math.hypot(dx, dy);

          if (distance > config.connectionDistance) {
            continue;
          }

          const opacity =
            Math.pow(1 - distance / config.connectionDistance, 1.06) *
            config.lineOpacity;

          context.strokeStyle = `rgba(86, 236, 214, ${opacity})`;
          context.lineWidth = config.lineWidth;
          context.beginPath();
          context.moveTo(firstNode.x, firstNode.y);
          context.lineTo(secondNode.x, secondNode.y);
          context.stroke();
        }
      }

      for (const node of nodes) {
        context.beginPath();
        context.fillStyle = `rgba(${node.color}, ${node.alpha})`;
        context.shadowBlur = config.glowBlur;
        context.shadowColor = `rgba(${node.color}, ${Math.min(node.alpha + config.glowBoost, 0.62)})`;
        context.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        context.fill();
      }

      context.shadowBlur = 0;
    };

    const tick = (timestamp: number) => {
      if (isDisposed) {
        return;
      }

      if (timestamp - lastTimestamp < FRAME_INTERVAL) {
        animationFrame = window.requestAnimationFrame(tick);
        return;
      }

      const delta = Math.min((timestamp - lastTimestamp) / 16.67 || 1, 1.35);
      lastTimestamp = timestamp;

      for (const node of nodes) {
        node.x += node.vx * delta;
        node.y += node.vy * delta;

        if (node.x < -BASE_PADDING) {
          node.x = width + BASE_PADDING;
        } else if (node.x > width + BASE_PADDING) {
          node.x = -BASE_PADDING;
        }

        if (node.y < -BASE_PADDING) {
          node.y = height + BASE_PADDING;
        } else if (node.y > height + BASE_PADDING) {
          node.y = -BASE_PADDING;
        }
      }

      drawFrame();
      animationFrame = window.requestAnimationFrame(tick);
    };

    const onResize = () => {
      configureCanvas();
      drawFrame();

      if (!staticMode && !animationFrame) {
        animationFrame = window.requestAnimationFrame(tick);
      }
    };

    const onMotionChange = (event: MediaQueryListEvent) => {
      reducedMotion = event.matches;
      configureCanvas();
      drawFrame();

      if (staticMode) {
        if (animationFrame) {
          window.cancelAnimationFrame(animationFrame);
          animationFrame = 0;
        }

        return;
      }

      if (!animationFrame) {
        animationFrame = window.requestAnimationFrame(tick);
      }
    };

    configureCanvas();
    drawFrame();

    if (!staticMode) {
      animationFrame = window.requestAnimationFrame(tick);
    }

    window.addEventListener('resize', onResize, {passive: true});
    motionQuery.addEventListener('change', onMotionChange);

    return () => {
      isDisposed = true;
      window.removeEventListener('resize', onResize);
      motionQuery.removeEventListener('change', onMotionChange);

      if (animationFrame) {
        window.cancelAnimationFrame(animationFrame);
      }
    };
  }, []);

  return (
    <div className={styles.background} aria-hidden="true">
      <canvas ref={canvasRef} className={styles.canvas} />
      <div className={styles.edgeTint} />
      <div className={styles.centerMask} />
    </div>
  );
}