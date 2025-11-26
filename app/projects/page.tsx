import { createMetadata } from "@/lib/metadata";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { currentProjects, completedProjects } from "./data";

export const metadata = createMetadata({
  title: "Research Projects - ASPIRE Lab IIT Hyderabad",
  description:
    "Explore current and completed research projects at ASPIRE Lab, IIT Hyderabad. Our projects span autonomous robotics, drone systems, deep learning, computer vision, and intelligent control systems funded by leading agencies.",
  keywords: [
    "robotics projects",
    "autonomous systems research",
    "drone research",
    "AI projects",
    "funded research projects",
    "DST projects",
    "research grants",
  ],
});

export default function ProjectsPage() {
  return (
    <div className="space-y-6 sm:space-y-8">
      <div className="space-y-4 sm:space-y-6">
        <div className="space-y-1 sm:space-y-2">
          <h1 className="text-2xl sm:text-3xl font-bold">Current Projects</h1>
          <p className="text-sm sm:text-base text-muted-foreground">
            Ongoing research and development initiatives
          </p>
        </div>

        <div className="grid gap-3 sm:gap-4">
          {currentProjects.map((project, idx) => (
            <Card key={idx}>
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                  <CardTitle className="text-base sm:text-lg leading-snug">
                    {project.title}
                  </CardTitle>
                  <Badge variant="default" className="w-fit text-xs">
                    Active
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-1.5 sm:space-y-2">
                <div className="text-xs sm:text-sm space-y-1">
                  <p className="wrap-break-word">
                    <span className="font-medium">Principal Investigator:</span>{" "}
                    {project.pi}
                  </p>
                  <p>
                    <span className="font-medium">Duration:</span>{" "}
                    {project.duration}
                  </p>
                  <p className="wrap-break-word">
                    <span className="font-medium">Agency:</span>{" "}
                    {project.agency}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Separator className="my-6 sm:my-8" />

      <div className="space-y-4 sm:space-y-6">
        <div className="space-y-1 sm:space-y-2">
          <h1 className="text-2xl sm:text-3xl font-bold">
            Recently Completed Projects
          </h1>
          <p className="text-sm sm:text-base text-muted-foreground">
            Successfully delivered research projects
          </p>
        </div>

        <div className="grid gap-3 sm:gap-4">
          {completedProjects.map((project, idx) => (
            <Card key={idx}>
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                  <CardTitle className="text-base sm:text-lg leading-snug">
                    {project.title}
                  </CardTitle>
                  <Badge variant="secondary" className="w-fit text-xs">
                    Completed
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-1.5 sm:space-y-2">
                <div className="text-xs sm:text-sm space-y-1">
                  <p className="wrap-break-word">
                    <span className="font-medium">Principal Investigator:</span>{" "}
                    {project.pi}
                  </p>
                  {project.coPi && (
                    <p className="wrap-break-word">
                      <span className="font-medium">Co-PI:</span> {project.coPi}
                    </p>
                  )}
                  {project.investigator && (
                    <p className="wrap-break-word">
                      <span className="font-medium">Investigator:</span>{" "}
                      {project.investigator}
                    </p>
                  )}
                  <p>
                    <span className="font-medium">Duration:</span>{" "}
                    {project.duration}
                  </p>
                  <p className="wrap-break-word">
                    <span className="font-medium">Agency:</span>{" "}
                    {project.agency}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
