import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Orthodontie adulte",
  description:
    "Orthodontie adulte : gouttières invisibles, multi-attaches céramiques et solutions discrètes. Il n'y a pas d'âge pour réaligner son sourire.",
};

const solutionsDiscretes = [
  "Gouttières transparentes (aligneurs) : quasi invisibles, amovibles, confortables",
  "Multi-attaches céramiques : brackets discrets, de la couleur de la dent",
  "Multi-attaches métalliques : pour les cas complexes nécessitant un contrôle maximal",
  "Orthodontie linguale : brackets collés côté langue, totalement invisible",
  "Traitements combinés chirurgie-orthodontie pour les décalages squelettiques",
  "Minivis d'ancrage pour des mouvements dentaires ciblés",
];

const raisonsCorrection = [
  "Retrouver un sourire harmonieux et gagner en confiance",
  "Améliorer la mastication et réduire les tensions articulaires (ATM)",
  "Réduire l'usure prématurée des dents mal positionnées",
  "Faciliter l'hygiène bucco-dentaire et prévenir les caries",
  "Préparer un terrain favorable pour des prothèses ou implants",
  "Corriger des traitements anciens dont les résultats n'ont pas tenu",
  "Soulager des douleurs cervicales ou des maux de tête liés à l'occlusion",
];

const deroulement = [
  "Consultation initiale : écoute de vos attentes, examen clinique complet",
  "Bilan radiographique et scan numérique 3D",
  "Présentation du plan de traitement personnalisé et des options possibles",
  "Choix de l'appareil en concertation avec le praticien",
  "Pose de l'appareillage ou remise des premières gouttières",
  "Suivi régulier (toutes les 4 à 8 semaines selon le dispositif)",
  "Fin de traitement et mise en place de la contention",
];

const linkCards = [
  {
    title: "Multi-attaches céramiques",
    description:
      "Brackets en céramique transparente pour un traitement efficace et discret.",
    href: "/orthodontie-adulte/multi-attaches-ceramiques",
  },
  {
    title: "Gouttières invisibles",
    description:
      "Aligneurs transparents amovibles, conçus sur mesure pour un confort optimal.",
    href: "/orthodontie-adulte/gouttieres-invisibles",
  },
  {
    title: "Contention",
    description:
      "Fil collé ou gouttière de nuit pour maintenir durablement les résultats.",
    href: "/orthodontie-adulte/contention",
  },
];

export default function OrthodontieAdulte() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-accent via-dark to-accent text-white py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight font-[family-name:var(--font-heading)]">
            Il n&apos;y a pas d&apos;âge pour réaligner son sourire
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            De plus en plus d&apos;adultes consultent : esthétique, confort,
            fonction, douleurs articulaires, usures dentaires...
          </p>
        </div>
      </section>

      {/* Solutions discrètes et modernes */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="section-divider mb-6" />
          <h2 className="text-2xl md:text-3xl font-bold text-dark mb-8 font-[family-name:var(--font-heading)]">
            Solutions discrètes et modernes
          </h2>
          <ul className="space-y-3">
            {solutionsDiscretes.map((solution) => (
              <li key={solution} className="flex items-start gap-3">
                <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                <span className="text-dark/80">{solution}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Pourquoi corriger à l'âge adulte ? */}
      <section className="py-16 md:py-20 bg-warm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="section-divider mb-6" />
          <h2 className="text-2xl md:text-3xl font-bold text-dark mb-8 font-[family-name:var(--font-heading)]">
            Pourquoi corriger à l&apos;âge adulte ?
          </h2>
          <ul className="space-y-3">
            {raisonsCorrection.map((raison) => (
              <li key={raison} className="flex items-start gap-3">
                <svg
                  className="mt-1 h-5 w-5 text-primary shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-dark/80">{raison}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Déroulement */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="section-divider mb-6" />
          <h2 className="text-2xl md:text-3xl font-bold text-dark mb-8 font-[family-name:var(--font-heading)]">
            Déroulement
          </h2>
          <ol className="space-y-4">
            {deroulement.map((etape, index) => (
              <li key={index} className="flex items-start gap-4">
                <span className="flex items-center justify-center h-8 w-8 rounded-full bg-primary text-white text-sm font-bold shrink-0">
                  {index + 1}
                </span>
                <span className="text-dark/80 pt-1">{etape}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Link cards */}
      <section className="py-16 md:py-20 bg-warm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="section-divider mb-6" />
          <h2 className="text-2xl md:text-3xl font-bold text-dark mb-8 font-[family-name:var(--font-heading)]">
            En savoir plus
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {linkCards.map((card) => (
              <Link
                key={card.href}
                href={card.href}
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group border border-gray-100 border-b-4 border-transparent hover:border-primary"
              >
                <h3 className="text-lg font-semibold text-dark group-hover:text-primary transition-colors font-[family-name:var(--font-heading)]">
                  {card.title}
                </h3>
                <p className="mt-2 text-sm text-dark/70 leading-relaxed">
                  {card.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">
                  Découvrir
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
