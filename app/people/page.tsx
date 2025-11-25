import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Mail, Globe } from "lucide-react";

const faculty = [
  {
    name: "R Prasanth Kumar",
    role: "Head of the Lab",
    positions: [
      "Professor, Department of Mechaincal & Aerospace Engineering",
      "Affiliate Professor, Department of Artificial Intelligence",
    ],
    email: "ni.ca.htii.eam [ta] ramukpr",
    web: "https://www.iith.ac.in/~rpkumar",
  },
];

const phdStudents = [
  { name: "Krishnendu Roy" },
  { name: "Aashish Sahu" },
  { name: "B V Shiva Reddy" },
];

const mastersStudents = [
  { name: "S Rami Reddy", program: "Mechanics and Design" },
  { name: "Chinni Krishna Yadav", program: "Robotics and Intelligent Systems" },
  { name: "Arkaprabha Sinha Roy", program: "Artificial Intelligence" },
  { name: "B Vijaya Sathwik", program: "Mechanics and Design" },
  { name: "Saurabh Shukla", program: "Mechanics and Design" },
  { name: "VVS Viswa Kiran", program: "Artifical Intelligence" },
];

const undergradStudents = [
  { name: "Shriram Hari", program: "Mechanical Engineering" },
];

export default function PeoplePage() {
  return (
    <div className="space-y-6 sm:space-y-8">
      <div className="space-y-1 sm:space-y-2">
        <h1 className="text-2xl sm:text-3xl font-bold">Group Members</h1>
        <p className="text-sm sm:text-base text-muted-foreground">
          Meet our research team at ASPIRE Lab
        </p>
      </div>

      <div className="space-y-4 sm:space-y-6">
        <h2 className="text-xl sm:text-2xl font-semibold">Faculty</h2>
        <div className="grid gap-3 sm:gap-4">
          {faculty.map((person) => (
            <Card key={person.name}>
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl">{person.name}</CardTitle>
                <CardDescription className="text-sm">{person.role}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3 sm:space-y-4">
                <div className="space-y-1.5 sm:space-y-2">
                  {person.positions.map((position, idx) => (
                    <p key={idx} className="text-xs sm:text-sm text-muted-foreground">
                      {position}
                    </p>
                  ))}
                </div>
                <Separator />
                <div className="flex flex-col gap-2 sm:gap-3">
                  <div className="flex items-start sm:items-center gap-2 text-xs sm:text-sm flex-wrap">
                    <Mail className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-muted-foreground shrink-0 mt-0.5 sm:mt-0" />
                    <span className="text-muted-foreground">Email:</span>
                    <span
                      className="font-mono text-[10px] sm:text-xs break-all"
                      style={{ unicodeBidi: "bidi-override", direction: "rtl" }}
                    >
                      {person.email}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm" className="w-full sm:w-auto text-xs sm:text-sm" asChild>
                      <a
                        href={person.web}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Globe className="h-3.5 w-3.5 sm:h-4 sm:w-4 mr-1.5 sm:mr-2" />
                        Visit Website
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Separator className="my-8" />

      <div className="space-y-4 sm:space-y-6">
        <h2 className="text-xl sm:text-2xl font-semibold">PhD Students</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {phdStudents.map((student) => (
            <Card key={student.name}>
              <CardHeader className="space-y-2">
                <CardTitle className="text-base sm:text-lg">{student.name}</CardTitle>
                <Badge variant="secondary" className="w-fit text-xs">PhD Student</Badge>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>

      <Separator className="my-6 sm:my-8" />

      <div className="space-y-4 sm:space-y-6">
        <h2 className="text-xl sm:text-2xl font-semibold">Masters Students</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {mastersStudents.map((student) => (
            <Card key={student.name}>
              <CardHeader className="space-y-1.5 sm:space-y-2">
                <CardTitle className="text-base sm:text-lg">{student.name}</CardTitle>
                <CardDescription className="text-xs sm:text-sm">
                  MTech Student ({student.program})
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>

      <Separator className="my-6 sm:my-8" />

      <div className="space-y-4 sm:space-y-6">
        <h2 className="text-xl sm:text-2xl font-semibold">
          Undergraduate Research Students
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {undergradStudents.map((student) => (
            <Card key={student.name}>
              <CardHeader className="space-y-1.5 sm:space-y-2">
                <CardTitle className="text-base sm:text-lg">{student.name}</CardTitle>
                <CardDescription className="text-xs sm:text-sm">
                  BTech Student ({student.program})
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
