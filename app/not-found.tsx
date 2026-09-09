import Link from "next/link";
import "./globals.css";

export default function NotFound() {
  return (
    <html lang="en">
      <body className="flex min-h-screen items-center justify-center bg-[var(--background)] p-6 text-[var(--foreground)] antialiased">
        <div className="text-center">
          <p className="font-mono text-sm text-[var(--accent)]">404</p>
          <h1 className="mt-2 text-2xl font-bold">Page not found</h1>
          <p className="mt-3 text-sm text-[var(--muted)]">
            That page does not exist. Let&apos;s get you back on track.
          </p>
          <Link
            href="/en"
            className="mt-6 inline-flex h-11 items-center rounded-xl bg-[var(--primary)] px-5 text-sm font-medium text-[var(--primary-foreground)]"
          >
            Back to home
          </Link>
        </div>
      </body>
    </html>
  );
}
