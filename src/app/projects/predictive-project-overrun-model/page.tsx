import { ProjectDetail } from "@/components/ProjectDetail";
import { projects } from "@/config/profile";
import { JsonLd, absoluteUrl, pageMetadata } from "@/lib/seo";

const project = projects[2];

export const metadata = pageMetadata({
  title: project.title,
  description:
    "Complete public case study predicting construction cost overruns and schedule delays from early project-controls and workflow indicators, with time-based validation, model governance, and human-reviewed decision support.",
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
          learningResourceType: "Case study",
        }}
      />
    </>
  );
}
