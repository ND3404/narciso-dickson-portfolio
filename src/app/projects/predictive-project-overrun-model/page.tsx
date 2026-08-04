import { ProjectDetail } from "@/components/ProjectDetail";
import { projects } from "@/config/profile";
import { JsonLd, absoluteUrl, pageMetadata } from "@/lib/seo";

const project = projects[2];

export const metadata = pageMetadata({
  title: project.title,
  description:
    "Planned project page for predictive construction project overrun modeling, governance controls, and human-reviewed decision support.",
  path: project.detailHref,
});

export default function PredictiveProjectOverrunModelPage() {
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
          learningResourceType: "Planned case study",
        }}
      />
    </>
  );
}
