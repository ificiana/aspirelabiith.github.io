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
import Link from "next/link";

import { publications } from "../../../data/publications";
import { patents } from "@/data/patents";

export const metadata = createMetadata({
  title: "Publications & Patents - ASPIRE Lab IIT Hyderabad",
  description:
    "Browse research publications, conference papers, and patents from ASPIRE Lab at IIT Hyderabad. Our work covers robotics, autonomous systems, deep learning, computer vision, and control systems published in top-tier conferences and journals.",
  keywords: [
    "robotics publications",
    "research papers",
    "robotics patents",
    "autonomous systems papers",
    "conference papers",
    "IEEE papers",
    "robotics research",
  ],
});

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
            <Link key={idx} href={`/publications/${pub.id}`}>
              <Card className="cursor-pointer hover:shadow-lg transition-shadow mb-2">
                <CardContent className="pt-6">
                  <div>
                    {pub.award && (
                      <Badge
                        variant="default"
                        className="my-2 flex gap-2 items-center"
                      >
                        {pub.award}
                      </Badge>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">
                    {pub.authors}
                  </p>
                  <p className="font-medium mb-2">
                    &ldquo;<em>{pub.title}</em>&rdquo;
                  </p>
                  <p className="text-sm text-muted-foreground">{pub.venue}</p>
                </CardContent>
              </Card>
            </Link>
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
