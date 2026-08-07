"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Clipboard fallback for visitors with no default mail client configured.
 * This sits alongside the plain mailto link, it does not replace it.
 */
export function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => () => {
    if (timer.current) clearTimeout(timer.current);
  }, []);

  /** Selection-based copy: works in non-secure contexts and when the async
   *  clipboard rejects because the document is not focused. */
  function legacyCopy() {
    const field = document.createElement("textarea");
    field.value = email;
    field.setAttribute("readonly", "");
    field.style.position = "fixed";
    field.style.top = "0";
    field.style.opacity = "0";
    document.body.appendChild(field);
    field.select();
    field.setSelectionRange(0, email.length);
    let ok = false;
    try {
      ok = document.execCommand("copy");
    } finally {
      document.body.removeChild(field);
    }
    return ok;
  }

  async function copy() {
    let ok = false;
    // writeText can reject as well as be absent, so a failure must fall through
    // to the legacy path rather than being swallowed.
    if (navigator.clipboard?.writeText) {
      try {
        await navigator.clipboard.writeText(email);
        ok = true;
      } catch {
        ok = false;
      }
    }
    if (!ok) {
      try {
        ok = legacyCopy();
      } catch {
        ok = false;
      }
    }
    setCopied(ok);
    if (timer.current) clearTimeout(timer.current);
    if (ok) timer.current = setTimeout(() => setCopied(false), 2200);
  }

  return (
    <>
      <button type="button" className="btn btn-secondary" onClick={copy}>
        {copied ? "Email copied" : "Copy Email"}
      </button>
      <span aria-live="polite" className="sr-only">
        {copied ? `${email} copied to clipboard` : ""}
      </span>
    </>
  );
}
