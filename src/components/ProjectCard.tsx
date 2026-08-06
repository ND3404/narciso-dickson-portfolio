import Image from "next/image";
import { ActionLink } from "./Actions";
import type { Project, ProjectStatus } from "@/config/profile";

export function StatusBadge({ status }: { status: ProjectStatus }) {
  return (
    <span className={`status status-${status.toLowerCase().replaceAll(" ", "-")}`}>
      {status}
    </span>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card">
      <a
        className="card-thumb"
        href={project.detailHref}
        aria-label={`${project.title} case study`}
      >
        <Image
          src={project.thumb}
          alt={project.thumbAlt}
          width={2400}
          height={1425}
          sizes="(max-width: 900px) 100vw, 420px"
        />
      </a>
      <div className="card-topline">
        <StatusBadge status={project.status} />
        <span className="mini-label">Synthetic data</span>
      </div>
      <h3>{project.title}</h3>
      <p className="subtitle">{project.subtitle}</p>
      <p className="mini-label mini-label-plain">{project.stage}</p>
      <p>{project.problem}</p>
      <p className="scale-note">{project.scale}</p>
      <div className="fact-list">
        {project.facts.map((fact) => (
          <span key={fact}>{fact}</span>
        ))}
      </div>
      <p className="disclosure">{project.disclosure}</p>
      <div className="action-row">
        <ActionLink href={project.detailHref} variant="dark">
          Case Study
        </ActionLink>
        <ActionLink href={project.reportUrl} variant="secondary" external>
          Report
        </ActionLink>
        <ActionLink href={project.repoUrl} variant="ghost" external>
          GitHub
        </ActionLink>
      </div>
    </article>
  );
}
