import { ActionLink } from "@/components/Actions";
import { PageHero } from "@/components/PageHero";
import { profile } from "@/config/profile";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Contact",
  description:
    "Contact Narciso M. Dickson through email, GitHub, LinkedIn, In Project, or In Project AI.",
  path: "/contact",
});

const links = [
  ["Email", `mailto:${profile.publicEmail}`, "Professional email contact for the first public version."],
  ["LinkedIn", profile.linkedinUrl, "TODO placeholder until the approved LinkedIn URL is supplied."],
  ["GitHub", profile.githubProfileUrl, "Public GitHub profile."],
  ["In Project", profile.inProjectUrl, "Official In Project website."],
  ["In Project AI", profile.inProjectAiUrl, "Official In Project AI website."],
  ["Resume", profile.resumeFile, "Download pending approved public resume file."],
];

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Contact" title="Connect for project leadership, analytics, and AI-enabled controls work.">
        <p>
          Use the channels below for professional contact. This first version uses
          mailto links only and does not create an unconfigured form, database,
          email API, or webhook.
        </p>
      </PageHero>
      <section className="section">
        <div className="container contact-grid">
          <div className="content-stack">
            <h2>Professional channels</h2>
            <p>
              Narciso&apos;s portfolio is intended for LinkedIn, GitHub, resume, email
              signature, job applications, consulting proposals, and professional
              platform links.
            </p>
          </div>
          <div className="content-stack">
            {links.map(([label, href, body]) => (
              <article className="contact-card" key={label}>
                <h3>{label}</h3>
                <p>{body}</p>
                <ActionLink href={href} variant="dark" external>
                  Open {label}
                </ActionLink>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
