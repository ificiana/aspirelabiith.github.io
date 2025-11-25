type Publication = {
  id: string;
  authors: string;
  title: string;
  venue: string;
  abstract: string;
  link: string;
  award?: string;
};

type Patent = {
  title: string;
  inventors: string;
  appNo: string;
  filedDate?: string;
  issueDate?: string;
};

const publications: Array<Publication> = [
  {
    id: "collaborative-payload-transport-2025",
    authors:
      "N Shyam Sridhar, Aashish Sahu, S Rami Reddy, and R Prasanth Kumar",
    title:
      "Collaborative Payload Transport using a Four-Quadcopter Swarm with RTK and MQTT-based Coordination",
    venue: "IEEE International Conference on Robotics and Mechatronics, 2025",
    award: "Best Paper Award",
    abstract: "",
    link: "#",
  },
  {
    id: "hybrid-biped-rl-2025",
    authors: "Krishnendu Roy and R Prasanth Kumar",
    title:
      "Prismatic-Revolute Hybrid Biped Robot Walking in Unstructured Terrain using Reinforcement Learning",
    venue: "IEEE International Conference on Robotics and Mechatronics, 2025",
    award: "",
    abstract: "",
    link: "#",
  },
  {
    id: "dynamic-standing-stability-2025",
    authors: "Krishnendu Roy and R Prasanth Kumar",
    title:
      "Dynamic standing stability comparison of revolute-knee and prismatic-knee underactuated biped robots",
    venue:
      "International Journal of Dynamics and Control, Vol. 13, art No. 415, 2025",
    award: "",
    abstract: "",
    link: "https://rdcu.be/eOR6x",
  },
  {
    id: "arm-leg-hybrid-drone-2024",
    authors: "Aashish Sahu and R Prasanth Kumar",
    title:
      "Design and Development of an Arm-Leg Hybrid Drone for Enhanced Aerial Manipulation and Mobility",
    venue:
      "2024 IEEE International Conference on Robotics and Biomimetics (ROBIO), 2024",
    award: "",
    abstract: "",
    link: "#",
  },
  {
    id: "hexacopter-suction-2024",
    authors: "Aashish Sahu and R Prasanth Kumar",
    title:
      "Design and Implementation of Hexacopter Drone with Integrated Suction and Lift Mechanism with Real-Time Depth Sensing for Precision Object Handling",
    venue:
      "2024 9th International Conference on Robotics and Automation Engineering (ICRAE), 2024",
    award: "",
    abstract: "",
    link: "#",
  },
  {
    id: "prismatic-knee-rl-2023",
    authors: "Krishnendu Roy, R Prasanth Kumar, and P Murali Krishna",
    title: "Walking of Prismatic Knee Biped Robot Using Reinforcement Learning",
    venue:
      "2023 IEEE 4th Annual Flagship India Council International Subsections Conference (INDISCON), 2023",
    award: "Best Paper Award",
    abstract: "",
    link: "#",
  },
  {
    id: "ga-trajectory-optimization-2023",
    authors: "Krishna Prakash Yadav and R Prasanth Kumar",
    title:
      "Genetic Algorithm-Based Trajectory Optimization for a Three-Link Biped Robot",
    venue:
      "2023 IEEE 4th Annual Flagship India Council International Subsections Conference (INDISCON), 2023",
    award: "",
    abstract: "",
    link: "#",
  },
  {
    id: "5r-quadruped-design-2022",
    authors: "Mangesh D. Ratolikar and R. Prasanth Kumar",
    title:
      "Optimized Design of 5R Planar Parallel Mechanism for the Gait-Cycle of Quadruped Robots",
    venue: "Journal of Vibroengineering, Vol. 24, No. 1, pp. 104-115, 2022",
    award: "",
    abstract: "",
    link: "#",
  },
  {
    id: "biped-underactuated-gait-2022",
    authors: "Krishna Prakash Yadav and R. Prasanth Kumar",
    title:
      "Biped dynamic walker modeling and control for underactuated gait cycle",
    venue:
      "International Journal of Dynamics and Control, Vol. 10, No. 4, pp. 1138-1147, 2022",
    award: "",
    abstract: "",
    link: "#",
  },
  {
    id: "discrete-feedback-control-2021",
    authors: "Krishna Prakash Yadav and R. Prasanth Kumar",
    title:
      "Discrete Feedback Control for Robust Walking of Biped Dynamic Walker",
    venue:
      "Proceedings of the 9th International Conference on Control, Mechatronics and Automation (ICCMA), 2021",
    award: "",
    abstract: "",
    link: "#",
  },
  {
    id: "pendulum-cart-rl-2021",
    authors: "A. P. Hima Vamsi, Mangesh D. Ratolikar, and R. Prasanth Kumar",
    title:
      "Swinging Up and Balancing a Pendulum on a Vertically Moving Cart Using Reinforcement Learning",
    venue:
      "IEEE International Conference on Robotics and Biomimetics (ROBIO), 2021",
    award: "",
    abstract: "",
    link: "#",
  },
  {
    id: "nn-inverted-pendulum-2021",
    authors: "Mangesh D. Ratolikar and R. Prasanth Kumar",
    title:
      "Neural network control of an inverted pendulum on a two DoF cart moving in the vertical plane",
    venue: "Proceedings of IEEE ICRAE, 2021",
    award: "",
    abstract: "",
    link: "#",
  },
  {
    id: "5r-parallel-leg-2020",
    authors: "Mangesh D. Ratolikar and R. Prasanth Kumar",
    title: "Optimal 5R parallel leg design for quadruped robot gait cycle",
    venue: "Vibroengineering PROCEDIA, Vol. 35, pp. 94-98, November 2020",
    award: "",
    abstract: "",
    link: "#",
  },
  {
    id: "biped-alternate-powered-2020",
    authors: "Krishna Prakash Yadav and R. Prasanth Kumar",
    title:
      "Biped dynamic walker with alternate unpowered and partially powered steps in a gait cycle",
    venue: "Vibroengineering PROCEDIA, Vol. 35, pp. 27-32, November 2020",
    award: "",
    abstract: "",
    link: "#",
  },
  {
    id: "realtime-trajectory-ditch-2019",
    authors: "V. Janardhan and R. Prasanth Kumar",
    title:
      "Generating real-time trajectories for a planar biped robot crossing a wide ditch with landing uncertainties",
    venue: "Robotica, Vol. 37, No. 1, pp. 109-140, January 2019",
    award: "",
    abstract: "",
    link: "https://doi.org/10.1017/S0263574718000887",
  },
  {
    id: "biped-vertical-jumping-2018",
    authors: "A. Sripada, V. Janardhan, and R. Prasanth Kumar",
    title: "Biped Robot Vertical Jumping with Control Constraints",
    venue:
      "IEEE International Conference on Robotics and Biomimetics, pp. 1683-1687, 2018",
    award: "",
    abstract: "",
    link: "#",
  },
  {
    id: "online-trajectory-ditch-2017",
    authors: "V. Janardhan and R. Prasanth Kumar",
    title:
      "Online trajectory generation for wide ditch crossing of biped robots using control constraints",
    venue: "Robotics and Autonomous Systems, Vol. 97, pp. 61-82, November 2017",
    award: "",
    abstract:
      "This work proposes a multibody dynamics approach to generate joint trajectories for a five degrees of freedom biped robot crossing a wide ditch...",
    link: "https://daneshyari.com/article/preview/4948683.pdf",
  },
  {
    id: "feasible-solutions-ditch-2017",
    authors: "V. Janardhan and R. Prasanth Kumar",
    title:
      "Generating Feasible Solutions for Dynamically Crossing a Wide Ditch by a Biped Robot",
    venue:
      "Journal of Intelligent and Robotic Systems, Vol. 88, No. 1, pp. 37-56, October 2017",
    award: "",
    abstract:
      "The aim of this research work is to generate feasible motion for a biped robot to dynamically cross a wide ditch...",
    link: "https://doi.org/10.1007/s10846-017-0550-5",
  },
];

const patents: Array<Patent> = [
  {
    title: "Leg Assembly of a Robot",
    inventors:
      "A. V. P. Krishna Kanth Prabhu, Abhishek S. Nalwarkar, P. Naveen Sagar, and R. Prasanth Kumar",
    appNo: "E-2/2087/2019/CHE",
    filedDate: "03/07/2019",
  },
  {
    title: "An Airborne Vacuum Cleaner",
    inventors: "R. Prasanth Kumar",
    appNo: "E-2/956/2019/CHE",
    filedDate: "26/03/2019",
  },
  {
    title: "A Stiffened Flexible Manipulator Arm",
    inventors: "R. Prasanth Kumar and Rahul Dixit",
    appNo: "974/DEL/2014",
    filedDate: "03/04/2014",
  },
  {
    title: "Walking Assistant Apparatus for High Walking Stability",
    inventors: "Jungwon Yoon and Prasanth Kumar",
    appNo: "10-2009-0053211",
    issueDate: "04/04/2011",
  },
];

export { publications, patents };
