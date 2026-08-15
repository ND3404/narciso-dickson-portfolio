import { CopyEmail } from "./CopyEmail";
import { profile } from "@/config/profile";

/**
 * Contact block shared by the home page and About, so the two cannot drift.
 * Channels are labelled rather than presented as a row of equal-weight buttons:
 * each row says what it is, where it goes, and what happens on click.
 */
export function ContactPanel({ heading }: { heading: string }) {
  return (
    <div className="contact-panel">
      <div className="contact-intro">
        <p className="eyebrow">
          <span className="eyebrow-rule" aria-hidden="true" />
          Contact
        </p>
        <h2>{heading}</h2>
        <p>
          Open to construction project and program management, project controls,
          construction analytics, and consulting work.
        </p>
        <ul className="contact-facts">
          <li>
            <span>Based in</span>
            {profile.location}
          </li>
          <li>
            <span>Open to</span>
            Utah-based and remote
          </li>
          <li>
            <span>Languages</span>
            {profile.languages.join(" and ")}
          </li>
        </ul>
      </div>

      <div className="contact-channels">
        <div className="contact-channel">
          <p className="contact-channel-label">Email</p>
          <a className="contact-channel-value" href={`mailto:${profile.publicEmail}`}>
            {profile.publicEmail}
          </a>
          <div className="action-row">
            <a className="btn btn-primary" href={`mailto:${profile.publicEmail}`}>
              Email Narciso
            </a>
            <CopyEmail email={profile.publicEmail} />
          </div>
        </div>

        <div className="contact-channel">
          <p className="contact-channel-label">Elsewhere</p>
          <a
            className="contact-link"
            href={profile.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn <small>in/narcisodickson</small>
            <span aria-hidden="true">↗</span>
          </a>
          <a
            className="contact-link"
            href={profile.githubProfileUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub <small>ND3404</small>
            <span aria-hidden="true">↗</span>
          </a>
          <a
            className="contact-link"
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Résumé <small>One page, {profile.resumeFormat}</small>
            <span aria-hidden="true">↓</span>
          </a>
        </div>
      </div>
    </div>
  );
}
