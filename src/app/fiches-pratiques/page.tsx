import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Fiches pratiques",
};

const fiches = [
  { title: "Aligneurs transparents", slug: "aligneurs-transparents" },
  { title: "Motion Carrière", slug: "motion-carriere-appareil" },
  { title: "TIM 2 et TIM 3 (Tractions Intermaxillaires)", slug: "tim-2-tim-3-tractions-intermaxillaires" },
  { title: "Hyperpropulseur orthodontique", slug: "hyperpropulseur" },
  { title: "Quad Helix", slug: "quad-helix" },
  { title: "Disjoncteur palatin", slug: "disjoncteur" },
  { title: "PMRI (Plan de Morsure Rétro-Incisif)", slug: "plan-morsure-retro-incisif" },
  { title: "Enveloppe linguale nocturne", slug: "enveloppe-linguale-nocturne" },
  { title: "Plaque d'expansion", slug: "plaque-expansion" },
  { title: "Arc de Nance", slug: "arc-de-nance" },
  { title: "Arc lingual", slug: "arc-lingual" },
  { title: "Minivis orthodontiques", slug: "minivis-orthodontiques" },
  { title: "Multi-bagues partielles enfant", slug: "multi-bagues-partielles" },
  { title: "Stripping (IPR)", slug: "stripping-ipr" },
];

export default function FichesPratiquesPage() {
  return (
    <>
      {/* ───────────── HERO ───────────── */}
      <section className="bg-gradient-to-br from-accent via-dark to-accent text-white py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <div className="section-divider mx-auto mb-6" />
          <h1 className="text-4xl md:text-6xl font-bold leading-tight font-[family-name:var(--font-heading)]">
            Fiches pratiques
          </h1>
        </div>
      </section>

      {/* ───────────── CARDS GRID ───────────── */}
      <section className="bg-warm py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {fiches.map((fiche) => (
              <Link
                key={fiche.slug}
                href={`/conseils/${fiche.slug}`}
                className="group bg-white rounded-2xl shadow-md p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex items-center justify-between border-b-4 border-transparent hover:border-primary"
              >
                <h2 className="text-lg font-semibold text-dark group-hover:text-primary transition-colors font-[family-name:var(--font-heading)]">
                  {fiche.title}
                </h2>
                <svg
                  className="w-5 h-5 text-primary flex-shrink-0 ml-4 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
