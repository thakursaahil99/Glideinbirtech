import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Portfolio } from "@/components/sections/Portfolio";
import { FinalCta } from "@/components/sections/FinalCta";
import { PageHero } from "@/components/sections/PageHero";
import { projects } from "@/content/projects";
import { getDictionary, isLocale, t, type Locale } from "@/lib/i18n";
import { buildMetadata } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const typed = (isLocale(locale) ? locale : "en") as Locale;
  const dict = getDictionary(typed);
  return buildMetadata({
    locale: typed,
    path: "/work",
    title: dict.work.pageTitle,
    description: dict.work.pageSubheading,
  });
}

export default async function WorkPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const typed = locale as Locale;
  const dict = getDictionary(typed);
  const categories = Array.from(new Set(projects.map((p) => t(p.category, typed).split(" · ")[0])));

  return (
    <>
      <PageHero
        image="/about/glide-blue.jpg"
        eyebrow={<p className="eyebrow">{dict.work.eyebrow} · {projects.length}</p>}
        title={dict.work.pageHeading}
        lede={dict.work.pageSubheading}
      >
        <div className="mt-10 flex flex-wrap gap-2">
          {categories.map((c) => (
            <span
              key={c}
              className="rounded-full border border-[var(--border)] bg-[var(--surface)]/70 px-3.5 py-1.5 text-sm text-muted backdrop-blur"
            >
              {c}
            </span>
          ))}
        </div>
      </PageHero>
      <Portfolio locale={typed} dict={dict} variant="page" />
      <FinalCta locale={typed} dict={dict} />
    </>
  );
}
