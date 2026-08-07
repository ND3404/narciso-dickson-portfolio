import Link from "next/link";
import { profile, siteNav } from "@/config/profile";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <strong className="footer-brand">{profile.fullName}</strong>
          <p>
            Personal portfolio for construction project leadership, project controls
            analytics, business intelligence, and responsible AI-assisted decision support.
          </p>
          <p className="ai-note">
            This personal site is distinct from the official In Project company and In
            Project AI product websites. AI outputs require qualified professional review.
          </p>
        </div>
        <div>
          <h2>Portfolio</h2>
          <ul>
            {siteNav.slice(1).map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2>Ecosystem</h2>
          <ul>
            <li>
              <a href={profile.inProjectUrl} target="_blank" rel="noopener noreferrer">
                In Project
              </a>
            </li>
            <li>
              <a href={profile.inProjectAiUrl} target="_blank" rel="noopener noreferrer">
                In Project AI
              </a>
            </li>
            <li>
              <a href={profile.githubProfileUrl} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </li>
            <li>
              <a href={profile.linkedinUrl} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2>Contact</h2>
          <ul>
            <li>
              <a href={`mailto:${profile.publicEmail}`}>{profile.publicEmail}</a>
            </li>
            <li>
              <a href={profile.resumeUrl} target="_blank" rel="noopener noreferrer">
                Download résumé ({profile.resumeFormat})
              </a>
            </li>
            <li>{profile.location}</li>
          </ul>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>Copyright 2026 Narciso M. Dickson. All rights reserved.</span>
        <span>All case-study data is synthetic.</span>
      </div>
    </footer>
  );
}
