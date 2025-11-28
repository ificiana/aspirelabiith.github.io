export interface NewsItem {
  id: string;
  title: string;
  date: string;
  description: string;
  link?: string;
}

export const newsItems: NewsItem[] = [
  {
    id: "1",
    title: "Internship Opportunities Open",
    date: "2025-12-01",
    description:
      "We are now accepting applications for internship positions at ASPIRE Lab. Click the link to learn more and apply.",
    link: "/positions",
  },
  {
    id: "2",
    title: "Best Paper Award at ICRM 2025",
    date: "2025-11-21",
    description:
      "Congratulations to N Shyam Sridhar, Aashish Sahu, S Rami Reddy, and R Prasanth Kumar for receiving the Best Paper Award at IEEE International Conference on Robotics and Mechatronics 2025 for their work on collaborative payload transport using a four-quadcopter swarm.",
    link: "/publications#collaborative-payload-transport-2025",
  },
  {
    id: "3",
    title: "New Publication on Hybrid Biped RL",
    date: "2025-11-07",
    description:
      "Krishnendu Roy and R Prasanth Kumar published their research on prismatic-revolute hybrid biped robot walking in unstructured terrain using reinforcement learning at ICRM 2025.",
    link: "/publications#hybrid-biped-rl-2025",
  },
  {
    id: "4",
    title: "Dynamic Standing Stability Paper Published",
    date: "2025-11-07",
    description:
      "Krishnendu Roy and R Prasanth Kumar's paper on dynamic standing stability comparison of revolute-knee and prismatic-knee underactuated biped robots has been published in the International Journal of Dynamics and Control.",
    link: "/publications#dynamic-standing-stability-2025",
  },
  {
    id: "5",
    title: "Arm-Leg Hybrid Drone Research Published",
    date: "2024-12-10",
    description:
      "Aashish Sahu and R Prasanth Kumar's work on design and development of an arm-leg hybrid drone for enhanced aerial manipulation and mobility has been published at IEEE ROBIO 2024.",
    link: "/publications#arm-leg-hybrid-drone-2024",
  },
];
