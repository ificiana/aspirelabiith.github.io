import { createMetadata } from "@/lib/metadata";
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
import Image from "next/image";

import {
  faculty,
  phdStudents,
  mastersStudents,
  undergradStudents,
} from "../../../data/people";

export const metadata = createMetadata({
  title: "Research Team - ASPIRE Lab IIT Hyderabad",
  description:
    "Meet the ASPIRE Lab research team at IIT Hyderabad. Our team includes faculty members, PhD students, Masters students, and undergraduate researchers working on autonomous robotics, AI, and machine learning.",
  keywords: [
    "robotics research team",
    "IIT Hyderabad faculty",
    "robotics PhD students",
    "autonomous systems researchers",
    "robotics laboratory",
  ],
});

function getInitials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

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
            <Card key={person.name} className="overflow-hidden">
              <div className="flex flex-col sm:flex-row">
                <div className="w-full sm:w-48 md:w-56 lg:w-64 h-48 sm:h-auto shrink-0 mx-auto sm:mx-8">
                  {person.image ? (
                    <Image
                      src={person.image}
                      alt={person.name}
                      width={200}
                      height={200}
                      className="w-full h-full object-contain rounded-md"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-linear-to-br from-primary-100 to-primary-200 dark:from-primary-900 dark:to-primary-800">
                      <div className="text-6xl sm:text-7xl md:text-8xl font-bold text-primary-600 dark:text-primary-300">
                        {getInitials(person.name)}
                      </div>
                    </div>
                  )}
                </div>
                <div className="flex-1 text-center sm:text-left">
                  <CardHeader>
                    <CardTitle className="text-lg sm:text-xl">
                      {person.name}
                    </CardTitle>
                    <CardDescription className="text-sm text-muted-foreground mb-2">
                      {person.role}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3 sm:space-y-4">
                    <div>
                      {person.positions.map((position, idx) => (
                        <p
                          key={idx}
                          className="text-xs sm:text-sm text-muted-foreground"
                        >
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
                          style={{
                            unicodeBidi: "bidi-override",
                            direction: "rtl",
                          }}
                        >
                          {person.email}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full sm:w-auto text-xs sm:text-sm"
                          asChild
                        >
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
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <Separator className="my-8" />

      <div className="space-y-4 sm:space-y-6">
        <h2 className="text-xl sm:text-2xl font-semibold">PhD Students</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {phdStudents.map((student) => (
            <Card key={student.name} className="overflow-hidden">
              <div className="aspect-square w-full bg-linear-to-br from-primary-100 to-primary-200 dark:from-primary-900 dark:to-primary-800">
                {student.image ? (
                  <Image
                    src={student.image}
                    alt={student.name}
                    width={200}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-6xl sm:text-7xl font-bold text-primary-600 dark:text-primary-300">
                      {getInitials(student.name)}
                    </div>
                  </div>
                )}
              </div>
              <CardHeader className="space-y-2 text-center">
                <CardTitle className="text-base sm:text-lg">
                  {student.name}
                </CardTitle>
                <Badge variant="secondary" className="mx-auto text-xs">
                  PhD Student
                </Badge>
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
            <Card key={student.name} className="overflow-hidden">
              <div className="aspect-square w-full bg-linear-to-br from-primary-100 to-primary-200 dark:from-primary-900 dark:to-primary-800">
                {student.image ? (
                  <Image
                    src={student.image}
                    alt={student.name}
                    width={200}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-6xl sm:text-7xl font-bold text-primary-600 dark:text-primary-300">
                      {getInitials(student.name)}
                    </div>
                  </div>
                )}
              </div>
              <CardHeader className="space-y-2 text-center">
                <CardTitle className="text-base sm:text-lg">
                  {student.name}
                </CardTitle>
                <CardDescription className="text-xs sm:text-sm">
                  MTech ({student.program})
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
            <Card key={student.name} className="overflow-hidden">
              <div className="aspect-square w-full bg-linear-to-br from-primary-100 to-primary-200 dark:from-primary-900 dark:to-primary-800">
                {student.image ? (
                  <Image
                    src={student.image}
                    alt={student.name}
                    width={200}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-6xl sm:text-7xl font-bold text-primary-600 dark:text-primary-300">
                      {getInitials(student.name)}
                    </div>
                  </div>
                )}
              </div>
              <CardHeader className="space-y-2 text-center">
                <CardTitle className="text-base sm:text-lg">
                  {student.name}
                </CardTitle>
                <CardDescription className="text-xs sm:text-sm">
                  BTech ({student.program})
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
