"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { profile, siteNav } from "@/config/profile";
import { ActionLink } from "./Actions";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <div className="container header-inner">
        <Link className="wordmark" href="/" onClick={() => setOpen(false)}>
          <span>{profile.fullName}</span>
          <small>{profile.shortDescriptor}</small>
        </Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {siteNav.map((item) => (
            <Link
              key={item.href}
              className={pathname === item.href ? "active" : ""}
              href={item.href}
            >
              {item.label}
            </Link>
          ))}
          <a href={profile.inProjectUrl} target="_blank" rel="noopener noreferrer">
            In Project
          </a>
        </nav>
        <div className="header-actions">
          <ActionLink href="/projects" variant="primary">
            View Projects
          </ActionLink>
          <button
            className="menu-button"
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
      <nav className={`mobile-nav ${open ? "open" : ""}`} aria-label="Mobile navigation">
        {siteNav.map((item) => (
          <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
            {item.label}
          </Link>
        ))}
        <a href={profile.inProjectUrl} target="_blank" rel="noopener noreferrer">
          In Project
        </a>
        <a href={profile.inProjectAiUrl} target="_blank" rel="noopener noreferrer">
          In Project AI
        </a>
      </nav>
    </header>
  );
}
