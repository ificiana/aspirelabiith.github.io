type Patent = {
  title: string;
  inventors: string;
  appNo: string;
  filedDate?: string;
  issueDate?: string;
};

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

export { patents };
