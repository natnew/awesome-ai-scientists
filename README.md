# Awesome Physical AI [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

> A curated collection of resources for building, deploying, and advancing Physical AI and Embodied Intelligence systems—where AI meets the real world through robots that perceive, reason, and act.

Physical AI (also called Embodied AI) represents the frontier where foundation models meet physical reality: robots that learn from demonstrations, reason about their environment, and execute complex tasks in unstructured settings. This list bridges the gap between cutting-edge research and practical implementation.

## Contents

- [Conceptual Framework](#conceptual-framework)
- [Foundation Models for Robotics](#foundation-models-for-robotics)
- [Simulation Environments](#simulation-environments)
- [Datasets and Benchmarks](#datasets-and-benchmarks)
- [Learning Paradigms](#learning-paradigms)
- [Hardware Platforms](#hardware-platforms)
- [Perception Systems](#perception-systems)
- [Navigation and SLAM](#navigation-and-slam)
- [Manipulation and Grasping](#manipulation-and-grasping)
- [Motion Planning and Control](#motion-planning-and-control)
- [Software Frameworks](#software-frameworks)
- [Safety, Evaluation, and Governance](#safety-evaluation-and-governance)
- [Research Groups and Labs](#research-groups-and-labs)
- [Courses and Learning Resources](#courses-and-learning-resources)
- [Communities and Conferences](#communities-and-conferences)
- [Open Problems](#open-problems)
- [Contributing](#contributing)

## Conceptual Framework

Understanding the architecture of Physical AI systems before diving into implementation.

### What is Physical AI?

Physical AI systems integrate perception, reasoning, and action in the real world. Unlike disembodied AI that operates on text or images, Physical AI must:

1. **Perceive** - Process multimodal sensor data (vision, depth, tactile, proprioception)
2. **Reason** - Plan actions, understand affordances, predict consequences
3. **Act** - Execute precise, safe movements in dynamic environments
4. **Learn** - Improve from experience, demonstrations, and simulation

### Reference Architecture

```
┌─────────────────────────────────────────────────────────────────────┐
│                     Physical AI System Architecture                  │
├─────────────────────────────────────────────────────────────────────┤
│  Foundation Layer    │ VLMs, LLMs, World Models, Robot FMs          │
├─────────────────────────────────────────────────────────────────────┤
│  Perception Layer    │ Vision, Depth, LiDAR, Tactile, Audio         │
├─────────────────────────────────────────────────────────────────────┤
│  Reasoning Layer     │ Task Planning, Motion Planning, Safety       │
├─────────────────────────────────────────────────────────────────────┤
│  Control Layer       │ Trajectory Execution, Force Control, Balance │
├─────────────────────────────────────────────────────────────────────┤
│  Actuation Layer     │ Motors, Grippers, Locomotion Systems         │
├─────────────────────────────────────────────────────────────────────┤
│  Governance Layer    │ Safety Constraints, Ethics, Human Oversight  │
└─────────────────────────────────────────────────────────────────────┘
```

### Key Surveys

- [Foundation Models in Robotics: Applications, Challenges, and the Future](https://journals.sagepub.com/doi/10.1177/02783649241281508) - Comprehensive survey covering LLM/VLM integration patterns in robotics (Firoozi et al., 2025).
- [Real-World Robot Applications of Foundation Models: A Review](https://www.tandfonline.com/doi/full/10.1080/01691864.2024.2408593) - Practical review of foundation model deployment in real robots (Advanced Robotics, 2024).
- [Robot Learning in the Era of Foundation Models: A Survey](https://dl.acm.org/doi/10.1016/j.neucom.2025.129963) - Survey on how foundation models transform robot learning (Neurocomputing, 2025).
- [Toward General-Purpose Robots via Foundation Models](https://arxiv.org/abs/2312.08782) - Survey and meta-analysis of foundation model approaches for generalist robots.
- [Embodied AI Survey](https://github.com/HCPLab-SYSU/Embodied_AI_Paper_List) - Continuously updated paper list covering perception, interaction, and sim-to-real.

## Foundation Models for Robotics

Models that bring web-scale knowledge to physical systems.

### Vision-Language-Action (VLA) Models

- [RT-2](https://deepmind.google/blog/rt-2-new-model-translates-vision-and-language-into-action/) - Google DeepMind's vision-language-action model that transfers web knowledge to robotic control.
- [RT-X and Open X-Embodiment](https://arxiv.org/abs/2310.08864) - Cross-embodiment robotics dataset and models from 21 institutions covering 22 robots and 527 skills.
- [OpenVLA](https://arxiv.org/abs/2406.09246) - Open-source vision-language-action model enabling fine-tuning for robot manipulation.
- [Octo](https://arxiv.org/abs/2405.12213) - Open-source generalist robot policy trained on Open X-Embodiment data.
- [RDT-1B](https://arxiv.org/abs/2410.07864) - Diffusion Foundation Model for bimanual manipulation with 1B parameters.

### Embodied Multimodal Models

- [PaLM-E](https://arxiv.org/abs/2303.03378) - Google's embodied multimodal language model for reasoning and robot planning.
- [VIMA](https://arxiv.org/abs/2210.03094) - General robot manipulation with multimodal prompts (visual and language).
- [GR00T](https://developer.nvidia.com/project-groot) - NVIDIA's foundation model for generalist humanoid robots.

### Code and Planning with LLMs

- [Code as Policies](https://code-as-policies.github.io/) - Using LLMs to generate robot control code from natural language.
- [SayCan](https://say-can.github.io/) - Grounding LLMs in robotic affordances for long-horizon tasks.
- [TidyBot](https://arxiv.org/abs/2305.05658) - Personalized robot assistance with large language models.
- [LM-Nav](https://arxiv.org/abs/2207.04429) - Robotic navigation using large pretrained models of language, vision, and action.

## Simulation Environments

Where virtual training meets physical reality.

### General-Purpose Simulators

- [NVIDIA Isaac Sim](https://developer.nvidia.com/isaac-sim) - High-fidelity robotics simulator with GPU acceleration, photorealistic rendering, and domain randomization.
- [MuJoCo](https://mujoco.org/) - Fast physics engine for robotics and RL research, now open-source from DeepMind.
- [PyBullet](https://pybullet.org/) - Open-source physics engine for robotics simulation and reinforcement learning.
- [Gazebo](https://gazebosim.org/) - Open-source robotics simulator with strong ROS/ROS2 integration.
- [Isaac Lab](https://isaac-sim.github.io/IsaacLab/) - NVIDIA's framework for robot learning built on Isaac Sim with parallel environment support.

### Specialized Environments

- [AI2-THOR](https://ai2thor.allenai.org/) - Interactive 3D environments for embodied AI research from Allen AI.
- [Habitat](https://aihabitat.org/) - Meta's platform for embodied AI research with photorealistic indoor environments.
- [SAPIEN](https://sapien.ucsd.edu/) - Simulation environment for articulated objects and robot manipulation.
- [ManiSkill3](https://github.com/haosulab/ManiSkill) - GPU-parallelized robotics simulation for generalizable embodied AI.
- [RoboSuite](https://robosuite.ai/) - Standardized benchmark for robot learning with modular design.

### Comparison Resources

- [Best of Robot Simulators](https://github.com/knmcguire/best-of-robot-simulators) - Weekly-updated comparison of robotics simulators.
- [Review of Nine Physics Engines for RL Research](https://arxiv.org/html/2407.08590v1) - Comprehensive evaluation of Brax, MuJoCo, PyBullet, Gazebo, and more.
- [Robotics Knowledgebase - Simulator Guide](https://roboticsknowledgebase.com/wiki/robotics-project-guide/choose-a-sim/) - Decision framework for choosing simulation tools.

## Datasets and Benchmarks

Training data and evaluation standards for Physical AI.

### Large-Scale Robot Datasets

- [Open X-Embodiment](https://robotics-transformer-x.github.io/) - 1M+ trajectories from 22 robot embodiments across 21 institutions.
- [RoboNet](https://www.robonet.wiki/) - Large-scale multi-robot video dataset for self-supervised learning.
- [BridgeData V2](https://rail-berkeley.github.io/bridgedata/) - Diverse robot manipulation dataset for imitation learning.
- [DROID](https://droid-dataset.github.io/) - Distributed Robot Interaction Dataset with diverse manipulation demonstrations.

### Benchmarks and Evaluation

- [CALVIN](https://github.com/mees/calvin) - Long-horizon language-conditioned tasks benchmark.
- [RLBench](https://sites.google.com/view/rlbench) - Large-scale benchmark for vision-guided manipulation.
- [LIBERO](https://lifelong-robot-learning.github.io/LIBERO/) - Lifelong robot learning benchmark with procedural generation.
- [MetaWorld](https://meta-world.github.io/) - Multi-task benchmark for meta-reinforcement learning.
- [Franka Kitchen](https://robotics.farama.org/envs/franka_kitchen/) - Long-horizon manipulation benchmark in kitchen environment.

### Navigation Benchmarks

- [Habitat Challenge](https://aihabitat.org/challenge/) - Annual competition for embodied AI navigation and rearrangement.
- [R2R (Room-to-Room)](https://bringmeaspoon.org/) - Vision-and-language navigation benchmark.
- [ALFRED](https://askforalfred.com/) - Action learning from realistic environments and directives.

## Learning Paradigms

How robots acquire skills from data and experience.

### Imitation Learning

- [Diffusion Policy](https://diffusion-policy.cs.columbia.edu/) - Visuomotor policy learning via action diffusion, enabling dexterous manipulation.
- [ACT (Action Chunking with Transformers)](https://tonyzhaozh.github.io/aloha/) - Predicts action chunks for fine-grained bimanual manipulation.
- [ALOHA Unleashed](https://aloha-unleashed.github.io/) - Recipe for robot dexterity combining large-scale data with diffusion policies.
- [Mobile ALOHA](https://mobile-aloha.github.io/) - Bimanual mobile manipulation with whole-body teleoperation.
- [Behavior Transformers](https://arxiv.org/abs/2206.11251) - Cloning multiple modes with a single transformer model.

### Reinforcement Learning

- [DemoStart](https://deepmind.google/blog/advances-in-robot-dexterity/) - DeepMind's RL approach for dexterous manipulation in simulation.
- [DrQ-v2](https://arxiv.org/abs/2107.09645) - Data-efficient image-based reinforcement learning.
- [SAC (Soft Actor-Critic)](https://arxiv.org/abs/1801.01290) - Off-policy maximum entropy RL for continuous control.
- [PPO](https://arxiv.org/abs/1707.06347) - Proximal Policy Optimization, widely used for robot learning.

### Sim-to-Real Transfer

- [Domain Randomization](https://arxiv.org/abs/1703.06907) - Training with randomized simulation parameters for robust transfer.
- [System Identification](https://arxiv.org/abs/1610.03518) - Learning physical parameters for accurate simulation.
- [Digital Twins for Embodied AI](https://www.oaepublish.com/articles/ir.2025.11) - Using digital twins to bridge the sim-to-real gap.

## Hardware Platforms

Physical systems for embodied AI research and deployment.

### Humanoid Robots

| Robot | Company | Key Features | Price Range |
|-------|---------|--------------|-------------|
| [Atlas](https://bostondynamics.com/atlas/) | Boston Dynamics | All-electric, extreme agility, backflips | Research only |
| [Optimus](https://www.tesla.com/AI) | Tesla | 40+ actuators, neural net control, mass production target | ~$20-30K target |
| [Figure 02](https://www.figure.ai/) | Figure AI | 16 DoF hands, BMW partnership, warehouse tasks | Commercial pilots |
| [H1/G1](https://www.unitree.com/) | Unitree | 23-43 DoF, ~$16K starting, reinforcement learning ready | $16K-90K |
| [Digit](https://agilityrobotics.com/) | Agility Robotics | Bird-leg design, Amazon warehouse testing | Commercial |
| [Apollo](https://apptronik.com/) | Apptronik | Mercedes-Benz partnership, intralogistics | Commercial pilots |
| [NEO](https://www.1x.tech/) | 1X Technologies | Bipedal design, home applications focus | Development |

### Manipulation Platforms

- [ALOHA 2](https://aloha-2.github.io/) - Low-cost bimanual teleoperation platform for data collection (~$20K).
- [Franka Emika Panda](https://www.franka.de/) - 7-DoF research arm with torque sensing and compliant control.
- [Universal Robots (UR)](https://www.universal-robots.com/) - Collaborative robot arms widely used in research and industry.
- [Kinova](https://www.kinovarobotics.com/) - Lightweight arms designed for research and assistive applications.
- [xArm](https://www.ufactory.cc/) - Cost-effective robot arms with ROS support.

### Mobile Platforms

- [Boston Dynamics Spot](https://bostondynamics.com/products/spot/) - Quadruped robot for inspection, mapping, and research.
- [Unitree Go2](https://www.unitree.com/) - Affordable quadruped for research and development.
- [Clearpath Robotics](https://clearpathrobotics.com/) - Mobile bases (Husky, Jackal, Ridgeback) for research.
- [TurtleBot](https://www.turtlebot.com/) - Low-cost mobile robot for ROS learning and research.

### Dexterous Hands

- [Shadow Hand](https://www.shadowrobot.com/) - 24-DoF anthropomorphic hand for research.
- [Allegro Hand](https://www.wonikrobotics.com/) - 16-DoF hand commonly used in manipulation research.
- [LEAP Hand](https://leap-hand.github.io/) - Low-cost, open-source dexterous hand design.

## Perception Systems

Sensing the world for intelligent action.

### Vision Models for Robotics

- [Segment Anything (SAM)](https://segment-anything.com/) - Foundation model for image segmentation, widely used for robot perception.
- [CLIP](https://openai.com/research/clip) - Contrastive vision-language model enabling open-vocabulary object recognition.
- [DINOv2](https://dinov2.metademolab.com/) - Self-supervised vision features useful for robot perception.
- [GroundingDINO](https://github.com/IDEA-Research/GroundingDINO) - Open-set object detection with language grounding.

### Depth and 3D Perception

- [DepthAnything](https://depth-anything.github.io/) - Monocular depth estimation with strong zero-shot performance.
- [Gaussian Splatting for Robotics](https://arxiv.org/abs/2403.14471) - Real-time 3D reconstruction for robot manipulation.
- [PointNet++](https://arxiv.org/abs/1706.02413) - Deep learning on point clouds for 3D understanding.

### Tactile Sensing

- [GelSight](https://www.gelsight.com/) - High-resolution tactile sensors for manipulation.
- [DIGIT](https://digit.ml/) - Compact tactile sensor from Meta AI for dexterous manipulation.
- [BioTac](https://www.syntouchinc.com/) - Biomimetic tactile sensor with multi-modal sensing.

## Navigation and SLAM

Moving through and mapping the world.

### Navigation Stacks

- [Nav2 (ROS 2 Navigation)](https://docs.nav2.org/) - Production-ready navigation framework for mobile robots in ROS 2.
- [move_base (ROS 1)](http://wiki.ros.org/move_base) - Classic navigation stack, still widely used.
- [Isaac ROS Navigation](https://github.com/NVIDIA-ISAAC-ROS/isaac_ros_navigation) - GPU-accelerated navigation from NVIDIA.

### SLAM Systems

- [ORB-SLAM3](https://github.com/UZ-SLAMLab/ORB_SLAM3) - Visual-inertial SLAM supporting monocular, stereo, and RGB-D.
- [RTAB-Map](http://introlab.github.io/rtabmap/) - RGB-D, stereo, and lidar SLAM with large-scale mapping.
- [LIO-SAM](https://github.com/TixiaoShan/LIO-SAM) - Tightly-coupled lidar inertial odometry via smoothing and mapping.
- [Cartographer](https://google-cartographer.readthedocs.io/) - Google's real-time SLAM supporting 2D and 3D.

### Path Planning

- [OMPL](https://ompl.kavrakilab.org/) - Open Motion Planning Library with sampling-based planners.
- [Nav2 Planners](https://docs.nav2.org/configuration/packages/configuring-navfn.html) - Smac Planner, NavFn, Theta* for ROS 2.
- [RRT*/PRM*](https://arxiv.org/abs/1105.1186) - Asymptotically optimal sampling-based planners.

## Manipulation and Grasping

Interacting with objects in the physical world.

### Grasp Planning

- [GraspNet](https://graspnet.net/) - Large-scale benchmark for general object grasping.
- [Contact-GraspNet](https://research.nvidia.com/publication/2021-03_contact-graspnet-efficient-6-dof-grasp-generation-cluttered-scenes) - 6-DoF grasp generation in cluttered scenes.
- [AnyGrasp](https://graspnet.net/anygrasp.html) - Robust grasp detection across diverse objects.

### Manipulation Frameworks

- [MoveIt 2](https://moveit.picknik.ai/) - Motion planning framework for manipulation in ROS 2.
- [CLIPort](https://cliport.github.io/) - Language-conditioned imitation learning for manipulation.
- [PerAct](https://peract.github.io/) - Perceiver-Actor for multi-task robotic manipulation.

### Teleoperation Systems

- [ALOHA Hardware](https://github.com/tonyzhaozh/aloha) - Open-source bimanual teleoperation setup.
- [Holo-Dex](https://arxiv.org/abs/2210.06463) - Teaching dexterity with immersive mixed reality.
- [DexCap](https://dex-cap.github.io/) - Scalable dexterous manipulation data capture system.

## Motion Planning and Control

From high-level plans to precise execution.

### Motion Planning Libraries

- [MoveIt 2](https://moveit.picknik.ai/) - Industry-standard motion planning for ROS 2 with OMPL, STOMP, Pilz backends.
- [Drake](https://drake.mit.edu/) - Model-based design and verification for robotics from MIT.
- [Pinocchio](https://stack-of-tasks.github.io/pinocchio/) - Fast rigid body dynamics library.
- [CuRobo](https://curobo.org/) - NVIDIA's CUDA-accelerated robot motion generation library.

### Control Frameworks

- [ros2_control](https://control.ros.org/) - Hardware-agnostic control framework for ROS 2.
- [Crocoddyl](https://github.com/loco-3d/crocoddyl) - Contact RObot COntrol by Differential DYnamic programming Library.
- [Ruckig](https://ruckig.com/) - Real-time motion generation with time-optimal trajectories.

### Locomotion

- [Legged Gym](https://leggedrobotics.github.io/legged_gym/) - Isaac Gym environments for legged robot learning.
- [K-Sim](https://github.com/kscalelabs/ksim) - RL training library for humanoid locomotion on MuJoCo and JAX.

## Software Frameworks

Building blocks for Physical AI systems.

### Robot Operating System (ROS)

- [ROS 2](https://docs.ros.org/en/rolling/) - Modern robotics middleware with real-time support and DDS communication.
- [ROS 2 Humble](https://docs.ros.org/en/humble/) - LTS distribution (support until 2027), recommended for production.
- [ROS 2 Jazzy](https://docs.ros.org/en/jazzy/) - Latest stable distribution.
- [Nav2](https://docs.nav2.org/) - Navigation framework for ROS 2.
- [MoveIt 2](https://moveit.picknik.ai/) - Motion planning for ROS 2.

### Learning Frameworks

- [Gymnasium](https://gymnasium.farama.org/) - Standard API for reinforcement learning environments (successor to OpenAI Gym).
- [Stable Baselines3](https://stable-baselines3.readthedocs.io/) - Reliable implementations of RL algorithms.
- [LeRobot](https://github.com/huggingface/lerobot) - Hugging Face's robotics framework for imitation and reinforcement learning.
- [robosuite](https://robosuite.ai/) - Modular simulation framework built on MuJoCo.

### Data Collection and Teleoperation

- [RoboTurk](https://roboturk.stanford.edu/) - Crowdsourced teleoperation platform for robot learning.
- [robomimic](https://robomimic.github.io/) - Framework for robot learning from demonstration.
- [D4RL](https://github.com/Farama-Foundation/D4RL) - Datasets for deep data-driven reinforcement learning.

## Safety, Evaluation, and Governance

Building trustworthy Physical AI systems.

### Safety Frameworks

- [SafeEmbodAI](https://arxiv.org/abs/2409.01630) - Safety framework for mobile robots with LLM integration.
- [Safe Control Gym](https://github.com/utiasDSL/safe-control-gym) - PyBullet environments for safe learning-based control.
- [ISO 13482](https://www.iso.org/standard/83498.html) - Safety requirements for personal care robots.
- [ISO 10218](https://www.iso.org/standard/51330.html) - Safety requirements for industrial robots.

### Safety Benchmarks

- [EARBench](https://arxiv.org/abs/2408.04449) - Evaluating physical risk awareness for embodied AI agents.
- [SafeAgentBench](https://arxiv.org/abs/2412.13178) - Benchmark for safe task planning of embodied LLM agents.
- [HomeSafeBench](https://arxiv.org/abs/2501.00000) - Home safety evaluation for VLM-powered robots.

### Evaluation Frameworks

- [BEHAVIOR-1K](https://behavior.stanford.edu/) - 1,000 household activities for benchmarking embodied AI.
- [Embodied AI Workshop Challenges](https://embodied-ai.org/) - Annual challenges at CVPR covering navigation, rearrangement, and manipulation.

### Ethics and Governance

- [Embodied AI Security and Governance](https://bulletinofcas.researchcommons.org/journal/vol40/iss3/4/) - Framework for EAI security from information, physical, and social perspectives.
- [Safety of Embodied Navigation Survey](https://www.ijcai.org/proceedings/2025/1189.pdf) - IJCAI 2025 survey on navigation safety.

## Research Groups and Labs

Leading institutions advancing Physical AI.

### Academic Labs

- [Stanford AI Lab (SAIL)](https://ai.stanford.edu/) - Broad AI research including robotics and embodied agents.
- [Berkeley AI Research (BAIR)](https://bair.berkeley.edu/) - Robot learning, manipulation, and navigation research.
- [MIT CSAIL](https://www.csail.mit.edu/) - Robotics, manipulation, and soft robotics research.
- [CMU Robotics Institute](https://www.ri.cmu.edu/) - Comprehensive robotics research and education.
- [ETH Zurich RSL](https://rsl.ethz.ch/) - Robotic Systems Lab specializing in legged robots.

### Industry Research

- [Google DeepMind Robotics](https://deepmind.google/research/publications/?category=Robotics) - RT-X, ALOHA, and foundation model research.
- [NVIDIA Robotics Research](https://www.nvidia.com/en-us/research/robotics/) - Isaac, GR00T, and simulation research.
- [Meta AI (FAIR)](https://ai.meta.com/research/) - Habitat, embodied AI, and tactile sensing.
- [Toyota Research Institute](https://www.tri.global/) - Robot learning, manipulation, and autonomous vehicles.

## Courses and Learning Resources

Structured paths for learning Physical AI.

### University Courses

- [MIT 6.4212: Robotic Manipulation](https://manipulation.mit.edu/) - Russ Tedrake's comprehensive manipulation course with Drake.
- [Stanford CS 326: Multi-Robot Learning](https://www.cs.stanford.edu/~cbfinn/teaching.html) - Multi-robot systems and learning.
- [Berkeley CS 287: Advanced Robotics](https://people.eecs.berkeley.edu/~pabbeel/cs287-fa19/) - Pieter Abbeel's robotics course.
- [CMU 16-831: Robot Learning](https://www.ri.cmu.edu/ri-courses/) - Learning-based approaches to robotics.

### Online Resources

- [Underactuated Robotics (MIT)](https://underactuated.mit.edu/) - Algorithms for walking, running, swimming, and manipulation.
- [ROS 2 Tutorials](https://docs.ros.org/en/humble/Tutorials.html) - Official ROS 2 learning path.
- [MoveIt 2 Tutorials](https://moveit.picknik.ai/main/doc/tutorials/tutorials.html) - Motion planning tutorials.
- [Nav2 Tutorials](https://docs.nav2.org/tutorials/index.html) - Navigation stack tutorials.
- [Isaac Sim Tutorials](https://docs.omniverse.nvidia.com/isaacsim/latest/tutorials/index.html) - NVIDIA simulation tutorials.

### Books

- [Springer Handbook of Robotics](https://link.springer.com/referencework/10.1007/978-3-319-32552-1) - Comprehensive robotics reference.
- [Probabilistic Robotics](http://www.probabilistic-robotics.org/) - Thrun, Burgard, Fox - Foundational probabilistic methods.
- [Modern Robotics](http://hades.mech.northwestern.edu/index.php/Modern_Robotics) - Lynch & Park - Mechanics, planning, and control.
- [Reinforcement Learning: An Introduction](http://incompleteideas.net/book/the-book-2nd.html) - Sutton & Barto - RL foundations.

## Communities and Conferences

Where the Physical AI community gathers.

### Conferences

- [CoRL (Conference on Robot Learning)](https://www.corl.org/) - Premier venue for robot learning research.
- [RSS (Robotics: Science and Systems)](https://roboticsconference.org/) - Top robotics research conference.
- [ICRA (IEEE International Conference on Robotics and Automation)](https://www.ieee-ras.org/conferences-workshops/fully-sponsored/icra) - Largest robotics conference.
- [IROS (IEEE/RSJ International Conference on Intelligent Robots and Systems)](https://www.iros.org/) - Major robotics and systems conference.
- [Embodied AI Workshop](https://embodied-ai.org/) - Annual CVPR workshop on embodied intelligence.

### Online Communities

- [ROS Discourse](https://discourse.ros.org/) - Official ROS community forum.
- [r/robotics](https://www.reddit.com/r/robotics/) - Robotics subreddit.
- [Robotics Stack Exchange](https://robotics.stackexchange.com/) - Q&A for robotics researchers and developers.
- [The Construct](https://www.theconstructsim.com/) - ROS learning platform and community.

### Newsletters and Blogs

- [The Robot Report](https://www.therobotreport.com/) - Robotics industry news and analysis.
- [IEEE Spectrum Robotics](https://spectrum.ieee.org/topic/robotics/) - Technology journalism on robotics.
- [DeepMind Blog - Robotics](https://deepmind.google/blog/?categories=Robotics) - Research updates from DeepMind.

## Open Problems

Fundamental challenges that would advance Physical AI if solved.

### Generalization and Transfer

- **Problem**: How can robots trained in simulation reliably transfer to diverse real-world environments?
- **Why it matters**: Sim-to-real gap remains a major bottleneck; robots often fail when encountering novel objects, lighting, or dynamics.
- **Starting points**: Domain randomization, system identification, foundation model priors.

### Long-Horizon Reasoning

- **Problem**: How can robots plan and execute tasks requiring hundreds of steps with uncertain outcomes?
- **Why it matters**: Real-world tasks like "prepare dinner" involve many sub-goals, error recovery, and adaptation.
- **Starting points**: Hierarchical planning, world models, language-guided planning.

### Sample Efficiency

- **Problem**: How can robots learn new skills from minutes of demonstration rather than thousands of examples?
- **Why it matters**: Data collection in the real world is expensive; humans learn manipulation from few examples.
- **Starting points**: Meta-learning, foundation model priors, active learning.

### Safe Exploration and Deployment

- **Problem**: How can robots safely explore and improve in unstructured environments alongside humans?
- **Why it matters**: Unsafe exploration can damage robots, environments, or injure humans.
- **Starting points**: Constrained RL, formal verification, human-in-the-loop oversight.

### Multi-Robot Coordination

- **Problem**: How can heterogeneous robot teams collaborate effectively on complex tasks?
- **Why it matters**: Real-world deployment often requires multiple robots with different capabilities.
- **Starting points**: Multi-agent RL, distributed planning, communication protocols.

### Robust Perception Under Adversarial Conditions

- **Problem**: How can robot perception remain reliable under sensor attacks, occlusion, and environmental perturbations?
- **Why it matters**: Physical AI systems are vulnerable to adversarial patches, sensor spoofing, and extreme conditions.
- **Starting points**: Adversarial training, multi-modal fusion, uncertainty quantification.

## Contributing

Contributions are welcome! Please read the contribution guidelines before submitting.

### How to Contribute

1. Fork this repository
2. Add your resource with a one-sentence description
3. Ensure links are working and resources are high-quality
4. Submit a pull request

### Quality Standards

- Resources should be actively maintained (updated within last 2 years for software)
- Academic papers should be peer-reviewed or from recognized venues (arXiv acceptable for recent work)
- Commercial products should have public documentation
- Avoid duplicates and low-quality tutorials


## License

[![CC0](https://licensebuttons.net/p/zero/1.0/88x31.png)](https://creativecommons.org/publicdomain/zero/1.0/)

---

*Last updated: January 2026*