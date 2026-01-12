import RPKumarImage from "@/public/people/Prasanth_Kumar_R.png";
import AshishSahuImage from "@/public/people/Aashish.jpeg";
import ArkaImage from "@/public/people/Arka.jpeg";
import SaurabhImage from "@/public/people/Saurabh_Shukla.jpeg";
import ViswaKiranImage from "@/public/people/Viswa_Kiran.jpeg";
import RamiReddyImage from "@/public/people/Rami_Reddy.jpeg";
import ChinniImage from "@/public/people/Chinnikrishna.jpeg";
import SathwikImage from "@/public/people/Sathwik.jpeg";

import { Faculty, Student } from "../lib/types";

const faculty: Faculty[] = [
  {
    name: "R Prasanth Kumar",
    role: "Head of the Lab",
    positions: [
      "Professor, Department of Mechaincal & Aerospace Engineering",
      "Affiliate Professor, Department of Artificial Intelligence",
    ],
    email: "ni.ca.htii.eam [ta] ramukpr",
    web: "https://www.iith.ac.in/~rpkumar",
    image: RPKumarImage,
  },
];

const phdStudents: Student[] = [
  { name: "Krishnendu Roy", image: undefined },
  { name: "Aashish Sahu", image: AshishSahuImage },
  { name: "B V Shiva Reddy", image: undefined },
];

const mastersStudents: Student[] = [
  {
    name: "S Rami Reddy",
    program: "Mechanics and Design",
    image: RamiReddyImage,
  },
  {
    name: "B Vijaya Sathwik",
    program: "Mechanics and Design",
    image: SathwikImage,
  },
  {
    name: "Saurabh Shukla",
    program: "Mechanics and Design",
    image: SaurabhImage,
  },
  {
    name: "VVS Viswa Kiran",
    program: "Artificial Intelligence",
    image: ViswaKiranImage,
  },
  {
    name: "Arkaprabha Sinha Roy",
    program: "Artificial Intelligence",
    image: ArkaImage,
  },
  {
    name: "S Chinnikrishna Yadav",
    program: "Robotics and Intelligent Systems",
    image: ChinniImage,
  },
  {
    name: "Nikhil Banoth",
    program: "Artificial Intelligence",
    image: undefined,
  }
];

const undergradStudents: Student[] = [
  { name: "Shriram Hari", program: "Mechanical Engineering", image: undefined },
];

export { faculty, phdStudents, mastersStudents, undergradStudents };
