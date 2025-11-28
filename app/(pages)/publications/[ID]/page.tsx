import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { publications } from "../../../../data/publications";

export async function generateStaticParams() {
  return publications.map((pub) => ({
    ID: pub.id,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ ID: string }>;
}): Promise<Metadata> {
  const { ID } = await params;
  const publication = publications.find((pub) => pub.id === ID);

  if (!publication) {
    return {
      title: "Publication Not Found - ASPIRE Lab",
    };
  }

  return {
    title: `${publication.title} - ASPIRE Lab IIT Hyderabad`,
    description:
      publication.abstract ||
      `Research publication by ${publication.authors} at ${publication.venue}`,
    keywords: [
      "robotics research",
      "research paper",
      "ASPIRE Lab",
      "IIT Hyderabad",
      publication.venue,
    ],
    openGraph: {
      title: publication.title,
      description: publication.abstract || `Research by ${publication.authors}`,
      type: "article",
    },
  };
}

export default async function PublicationDetailPage({
  params,
}: {
  params: Promise<{ ID: string }>;
}) {
  const { ID } = await params;
  const publication = publications.find((pub) => pub.id === ID);

  if (!publication) {
    notFound();
  }

  return (
    <div className="space-y-6">
      <Link href="/publications">
        <Button variant="ghost" className="gap-2">
          <ArrowLeft className="h-4 w-4" />
          Back to Publications
        </Button>
      </Link>

      <Card className="w-full text-center">
        <CardHeader>
          <div className="space-y-4">
            <CardTitle className="text-2xl sm:text-3xl leading-relaxed">
              {publication.title}
            </CardTitle>
            <CardDescription className="text-base">
              {publication.authors}
            </CardDescription>
            <div className="flex flex-wrap gap-2 items-center justify-center">
              <p className="text-sm text-muted-foreground">
                {publication.venue}
              </p>
              {publication.award && (
                <Badge variant="default">{publication.award}</Badge>
              )}
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-3">Abstract</h2>
            <p className="text-muted-foreground leading-relaxed">
              {publication.abstract || "Abstract not available."}
            </p>
          </div>

          {publication.link && publication.link !== "#" && (
            <div>
              <a
                href={publication.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="gap-2">
                  <ExternalLink className="h-4 w-4" />
                  View Full Article
                </Button>
              </a>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
