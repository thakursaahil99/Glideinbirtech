import Link from "next/link";
import "./globals.css";

const bootScript = `(function(){var d=document.documentElement;d.classList.remove('no-js');try{var t=localStorage.getItem('theme');if(!t){t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';}d.setAttribute('data-theme',t);}catch(e){}})();`;

export default function NotFound() {
  return (
    <html lang="en" className="no-js">
      <body className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[var(--background)] p-6 text-[var(--foreground)] antialiased">
        <script dangerouslySetInnerHTML={{ __html: bootScript }} />
        <div className="hero-glow pointer-events-none absolute inset-0" />
        <div className="relative text-center">
          <p className="gradient-text text-[9rem] font-bold leading-none tracking-[-0.06em] sm:text-[13rem]">
            404
          </p>
          <h1 className="mt-2 text-3xl font-semibold">Lost in the thermals</h1>
          <p className="mt-3 text-[var(--muted)]">
            That page does not exist. Let&apos;s get you back on the ground.
          </p>
          <Link
            href="/en"
            className="mt-8 inline-flex h-12 items-center rounded-full bg-[var(--foreground)] px-7 text-sm font-medium text-[var(--background)] transition-transform hover:scale-105"
          >
            Back to home
          </Link>
        </div>
      </body>
    </html>
  );
}
