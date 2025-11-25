import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const positions = [
  {
    title: "Internships",
    status: "open",
    description:
      "We are actively looking for interns who are enthusiastic and passionate about building things, very good at coding, CAD / Solid modeling, mechanical fabrication, electronics / embedded systems, computer or robot vision, and deep learning. If you are interested and have some of these skills, please write to us with your detailed CV.",
  },
  {
    title: "Project Assistant",
    status: "closed",
    description:
      "No positions are available immediately. We will post here soon.",
  },
  {
    title: "PhD/Research Scholar",
    status: "open",
    description:
      "Admitted formally through Mechanical and Aerospace Engineering (MAE) department notification at",
    link: "https://mae.iith.ac.in",
    linkText: "MAE website",
  },
];

export default function PositionsPage() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-2xl sm:text-3xl font-bold">Positions Available</h1>
        <p className="text-muted-foreground">
          Join our team and contribute to cutting-edge robotics research
        </p>
      </div>

      <div className="grid gap-4">
        {positions.map((position, idx) => (
          <Card key={idx}>
            <CardHeader>
              <div className="flex items-start justify-between gap-2">
                <CardTitle>{position.title}</CardTitle>
                <Badge
                  variant={position.status === "open" ? "default" : "secondary"}
                >
                  {position.status === "open" ? "Open" : "Closed"}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm">
                {position.description}
                {position.link && (
                  <>
                    {" "}
                    <a
                      href={position.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      {position.linkText}
                    </a>
                    .
                  </>
                )}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
