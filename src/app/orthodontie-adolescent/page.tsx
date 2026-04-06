import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Orthodontie adolescent",
  description:
    "Orthodontie pour adolescents : multi-attaches métalliques, céramiques et contention. Le moment idéal pour aligner dents et sourire.",
};

const solutions = [
  "Multi-attaches métalliques : l'appareil fixe classique, fiable et très efficace",
  "Multi-attaches céramiques : des brackets discrets, de la couleur de la dent",
  "Gouttières transparentes (dans certains cas sélectionnés)",
  "Traitements combinés : chirurgie, extractions, minivis si nécessaire",
  "Contention en fin de traitement pour stabiliser les résultats",
];

const avantages = [
  "La croissance encore active facilite les déplacements dentaires",
  "Les dents définitives sont toutes présentes (ou presque)",
  "Le remodelage osseux est rapide, ce qui raccourcit la durée du traitement",
  "Prise en charge par la Sécurité sociale avant 16 ans",
  "De nombreuses options esthétiques pour un quotidien confortable",
  "Amélioration de l'estime de soi et de la confiance",
];

const deroulement = [
  "Consultation initiale : examen clinique, photos, scan numérique ou empreintes",
  "Bilan radiographique complet (panoramique, téléradiographie de profil)",
  "Présentation du plan de traitement à l'adolescent et ses parents",
  "Pose de l'appareillage et conseils d'hygiène",
  "Rendez-vous de suivi réguliers (toutes les 4 à 6 semaines)",
  "Dépose de l'appareil et mise en place de la contention",
];

const linkCards = [
  {
    title: "Multi-attaches métalliques",
    description:
      "Brackets en métal, solution éprouvée pour des résultats précis et rapides.",
    href: "/orthodontie-adolescent/multi-attaches-metalliques",
  },
  {
    title: "Multi-attaches céramiques",
    description:
      "Brackets en céramique transparente pour un traitement plus discret au quotidien.",
    href: "/orthodontie-adulte/multi-attaches-ceramiques",
  },
  {
    title: "Contention",
    description:
      "Fil collé ou gouttière de nuit pour maintenir l'alignement après le traitement.",
    href: "/orthodontie-adolescent/contention",
  },
];

export default function OrthodontieAdolescent() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary text-white py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            Le moment idéal pour aligner dents et sourire
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            À l&apos;adolescence, toutes les dents définitives sont présentes et
            la croissance facilite la correction.
          </p>
        </div>
      </section>

      {/* Solutions proposées */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-dark mb-8">
            Solutions proposées
          </h2>
          <ul className="space-y-3">
            {solutions.map((solution) => (
              <li key={solution} className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 rounded-full bg-primary shrink-0" />
                <span className="text-dark/80">{solution}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Avantages */}
      <section className="py-16 md:py-20 bg-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-dark mb-8">
            Avantages
          </h2>
          <ul className="space-y-3">
            {avantages.map((avantage) => (
              <li key={avantage} className="flex items-start gap-3">
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
                <span className="text-dark/80">{avantage}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Déroulement */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-dark mb-8">
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
      <section className="py-16 md:py-20 bg-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-dark mb-8">
            En savoir plus
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {linkCards.map((card) => (
              <Link
                key={card.href}
                href={card.href}
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-200 group border border-gray-100"
              >
                <h3 className="text-lg font-semibold text-dark group-hover:text-primary transition-colors">
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
