import Layout from '@theme-original/Layout';
import type {Props} from '@theme/Layout';

import NeuralBackground from '@site/src/components/NeuralBackground';

import styles from './styles.module.css';

export default function LayoutWrapper(props: Props): JSX.Element {
  return (
    <div className={styles.siteShell}>
      <NeuralBackground />
      <div className={styles.layoutContent}>
        <Layout {...props} />
      </div>
    </div>
  );
}