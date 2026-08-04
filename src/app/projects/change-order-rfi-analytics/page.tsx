import { ProjectDetail } from "@/components/ProjectDetail";
import { projects } from "@/config/profile";
import { JsonLd, absoluteUrl, pageMetadata } from "@/lib/seo";

const project = projects[1];

export const metadata = pageMetadata({
  title: project.title,
  description:
    "In-development case-study page for construction change-order and RFI analytics, with current phase status verified from local project files.",
  path: project.detailHref,
});

export default function ChangeOrderRfiAnalyticsPage() {
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
          learningResourceType: "In-development case study",
        }}
      />
    </>
  );
}
