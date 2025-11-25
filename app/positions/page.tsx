import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { positions } from "./data";

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
