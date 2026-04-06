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
      <section className="bg-primary text-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold">{conseil.title}</h1>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-12">
        <div className="space-y-6">
          {conseil.content.map((paragraph, index) => (
            <p key={index} className="text-gray-700 leading-relaxed text-lg">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mt-12">
          <Link
            href="/conseils"
            className="inline-flex items-center text-primary hover:underline font-medium"
          >
            &larr; Retour aux fiches pratiques
          </Link>
        </div>
      </section>
    </>
  );
}
