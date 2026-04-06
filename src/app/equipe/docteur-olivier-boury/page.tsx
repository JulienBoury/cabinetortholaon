import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Docteur Olivier Boury",
  description:
    "Dr Olivier Boury, orthodontiste à Laon. Chirurgien dentiste spécialiste qualifié en orthopédie dento-faciale, ancien assistant hospitalo-universitaire.",
};

const qualifications = [
  "Chirurgien dentiste spécialiste qualifié en orthopédie dento-faciale",
  "CECSMO Reims",
  "Ancien assistant hospitalo universitaire",
  "D.U. Fentes Labio-Palatines de Strasbourg",
];

const treatments = [
  { href: "/orthodontie-enfant", label: "Orthodontie enfant" },
  { href: "/orthodontie-adolescent", label: "Orthodontie adolescent" },
  { href: "/orthodontie-adulte", label: "Orthodontie adulte" },
];

export default function DocteurOlivierBouryPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Docteur Olivier Boury
          </h1>
          <p className="text-lg md:text-xl opacity-90">
            Orthodontiste &mdash; Cabinet Boury &amp; Associés, Laon
          </p>
        </div>
      </section>

      {/* Profil */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="shrink-0">
            <Image
              src="/photos/equipe/olivier-boury.jpg"
              alt="Docteur Olivier Boury"
              width={400}
              height={600}
              className="rounded-2xl object-cover"
              priority
            />
          </div>

          <div>
            <h2 className="text-3xl font-bold text-dark mb-6">
              Qualifications
            </h2>
            <ul className="space-y-4">
              {qualifications.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1.5 h-2.5 w-2.5 rounded-full bg-primary shrink-0" />
                  <span className="text-lg text-dark/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Traitements */}
      <section className="py-16 bg-light">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-dark mb-10">
            Nos traitements
          </h2>
          <div className="grid gap-6 sm:grid-cols-3 max-w-4xl mx-auto">
            {treatments.map((t) => (
              <Link
                key={t.href}
                href={t.href}
                className="rounded-2xl border border-primary/20 bg-white px-6 py-8 text-center shadow-sm hover:shadow-md transition-shadow"
              >
                <span className="text-lg font-semibold text-primary">
                  {t.label}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
