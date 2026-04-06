import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { img } from "@/lib/utils";

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
      <section className="bg-gradient-to-br from-accent via-dark to-accent text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="section-divider mx-auto mb-6" />
          <h1 className="text-4xl md:text-6xl font-bold mb-4 font-[family-name:var(--font-heading)]">
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
              src={img("/photos/equipe/olivier-boury.jpg")}
              alt="Docteur Olivier Boury"
              width={400}
              height={600}
              className="rounded-2xl object-cover shadow-xl ring-4 ring-primary/20"
              priority
            />
          </div>

          <div className="bg-warm rounded-2xl p-8">
            <div className="section-divider mb-6" />
            <h2 className="text-3xl font-bold text-dark mb-6 font-[family-name:var(--font-heading)]">
              Qualifications
            </h2>
            <ul className="space-y-4">
              {qualifications.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <span className="text-lg text-dark/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Traitements */}
      <section className="py-16 bg-warm">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="section-divider mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-dark mb-10 font-[family-name:var(--font-heading)]">
            Nos traitements
          </h2>
          <div className="grid gap-6 sm:grid-cols-3 max-w-4xl mx-auto">
            {treatments.map((t) => (
              <Link
                key={t.href}
                href={t.href}
                className="rounded-2xl border border-primary/20 border-b-4 border-b-transparent hover:border-b-primary bg-white px-6 py-8 text-center shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-primary font-[family-name:var(--font-heading)]">
                  {t.label}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
