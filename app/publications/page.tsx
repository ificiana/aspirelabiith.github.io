import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

import { publications, patents } from "./data";

export default function PublicationsPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <div className="space-y-2">
          <h1 className="text-2xl sm:text-3xl font-bold">
            Recent Publications
          </h1>
          <p className="text-muted-foreground">
            Latest research papers and conference proceedings
          </p>
        </div>
        <div className="space-y-3">
          {publications.map((pub, idx) => (
            <Card key={idx}>
              <CardContent className="pt-6">
                <p className="text-sm text-muted-foreground mb-2">
                  {pub.authors}
                </p>
                <p className="font-medium mb-2">
                  &ldquo;<em>{pub.title}</em>&rdquo;
                </p>
                <p className="text-sm text-muted-foreground">{pub.venue}</p>
                <div className="mt-2 flex gap-2 items-center">
                  {pub.award && <Badge variant="default">{pub.award}</Badge>}
                  {pub.link && (
                    <a
                      href={pub.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary text-sm hover:underline"
                    >
                      [Link]
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Separator className="my-8" />

      <div className="space-y-4">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">Patents</h1>
          <p className="text-muted-foreground">Filed and granted patents</p>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {patents.map((patent, idx) => (
            <Card key={idx}>
              <CardHeader>
                <CardTitle className="text-lg">{patent.title}</CardTitle>
                <CardDescription>{patent.inventors}</CardDescription>
              </CardHeader>
              <CardContent className="text-sm space-y-1">
                <p>App No: {patent.appNo}</p>
                <p>
                  {patent.filedDate
                    ? `Filed Date: ${patent.filedDate}`
                    : `Issue Date: ${patent.issueDate}`}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
