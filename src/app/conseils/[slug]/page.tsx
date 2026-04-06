import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { conseils } from "@/data/conseils";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return conseils.map((conseil) => ({
    slug: conseil.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const conseil = conseils.find((c) => c.slug === slug);

  if (!conseil) {
    return { title: "Conseil introuvable" };
  }

  return {
    title: `${conseil.title} | Cabinet d'orthodontie`,
    description: conseil.content[0],
  };
}

export default async function ConseilPage({ params }: PageProps) {
  const { slug } = await params;
  const conseil = conseils.find((c) => c.slug === slug);

  if (!conseil) {
    notFound();
  }

  return (
    <>
      <section className="bg-gradient-to-br from-accent via-dark to-accent text-white py-20 sm:py-28">
        <div className="max-w-4xl mx-auto px-4">
          <div className="section-divider mb-6" />
          <h1 className="text-4xl md:text-6xl font-bold font-[family-name:var(--font-heading)]">{conseil.title}</h1>
        </div>
      </section>

      <section className="bg-warm py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-warm rounded-2xl p-8">
            <div className="space-y-6">
              {conseil.content.map((paragraph, index) => (
                <p key={index} className="text-gray-700 leading-relaxed text-lg border-l-4 border-primary/20 pl-6">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <div className="mt-12">
            <Link
              href="/fiches-pratiques"
              className="inline-flex items-center text-primary hover:underline font-medium shadow-md hover:shadow-lg bg-white rounded-lg px-4 py-2 transition-all"
            >
              &larr; Retour aux fiches pratiques
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
