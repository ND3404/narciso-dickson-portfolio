import Image from "next/image";
import { ActionLink } from "./Actions";
import type { projects } from "@/config/profile";

type Project = (typeof projects)[number];

export function StatusBadge({ status }: { status: Project["status"] }) {
  return <span className={`status status-${status.toLowerCase().replaceAll(" ", "-")}`}>{status}</span>;
}

export function ProjectCard({ project }: { project: Project; featured?: boolean }) {
  return (
    <article className="project-card">
      {project.thumb && (
        <a className="card-thumb" href={project.detailHref} aria-label={`${project.title} case study`}>
          <Image src={project.thumb} alt={project.thumbAlt} width={2400} height={1425} />
        </a>
      )}
      <div className="card-topline">
        <StatusBadge status={project.status} />
        <span className="mini-label">Synthetic data</span>
      </div>
      <h3>{project.title}</h3>
      <p className="subtitle">{project.subtitle}</p>
      <p>{project.problem}</p>
      <div className="fact-list">
        {project.facts.map((fact) => (
          <span key={fact}>{fact}</span>
        ))}
      </div>
      <p className="disclosure">{project.disclosure}</p>
      <div className="action-row">
        <ActionLink href={project.detailHref} variant="dark">
          Details
        </ActionLink>
        <ActionLink href={project.repoUrl} variant="ghost" external>
          GitHub
        </ActionLink>
      </div>
    </article>
  );
}
