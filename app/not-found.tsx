import Link from "next/link";
import "./globals.css";

const bootScript = `(function(){var d=document.documentElement;d.classList.remove('no-js');try{var t=localStorage.getItem('theme');if(!t){t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';}d.setAttribute('data-theme',t);}catch(e){}})();`;

export default function NotFound() {
  return (
    <html lang="en" className="no-js">
      <body className="flex min-h-screen items-center justify-center bg-[var(--background)] p-6 text-[var(--foreground)] antialiased">
        <script dangerouslySetInnerHTML={{ __html: bootScript }} />
        <div className="text-center">
          <p className="font-mono text-sm font-medium tracking-widest text-[var(--accent)]">
            404
          </p>
          <h1 className="mt-3 font-display text-3xl font-semibold">Page not found</h1>
          <p className="mt-3 text-sm text-[var(--muted)]">
            That page does not exist. Let&apos;s get you back on track.
          </p>
          <Link
            href="/en"
            className="mt-7 inline-flex h-11 items-center rounded-xl bg-[var(--primary)] px-5 text-sm font-medium text-[var(--primary-foreground)]"
          >
            Back to home
          </Link>
        </div>
      </body>
    </html>
  );
}
