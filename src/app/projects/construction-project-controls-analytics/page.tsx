import { ProjectDetail } from "@/components/ProjectDetail";
import { projects } from "@/config/profile";
import { JsonLd, pageMetadata, absoluteUrl } from "@/lib/seo";

const project = projects[0];

export const metadata = pageMetadata({
  title: project.title,
  description:
    "Complete public case study for early-warning cost and schedule performance analysis across 75 synthetic construction projects.",
  path: project.detailHref,
});

export default function ConstructionProjectControlsAnalyticsPage() {
  return (
    <>
      <ProjectDetail slug={project.slug} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CreativeWork",
          name: project.title,
          headline: project.subtitle,
          url: absoluteUrl(project.detailHref),
          about: ["project controls analytics", "construction data analytics", "Earned Value Management"],
          isBasedOn: project.repoUrl,
          learningResourceType: "Case study",
        }}
      />
    </>
  );
}
