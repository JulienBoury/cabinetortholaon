import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Orthodontie enfant",
  description:
    "Orthodontie interceptive pour enfants de 6 à 10 ans. Guider la croissance, corriger les fonctions et préparer un terrain favorable pour les dents définitives.",
};

const signesConsultation = [
  "Respiration buccale",
  "Ronflements",
  "Dents qui se chevauchent",
  "Mâchoire étroite",
  "Succion du pouce",
  "Difficulté à mastiquer",
  "Asymétrie du visage",
];

const traitementsInterceptifs = [
  "Disjoncteur",
  "Quad Helix",
  "Plaque d'expansion",
  "Multi-bagues partielles",
  "Activateurs",
  "Masque de Delaire",
  "Extractions sélectives si nécessaire",
];

const etapesPriseEnCharge = [
  "Premier rendez-vous : examen clinique, photos, empreintes ou scan numérique",
  "Bilan complet : radiographies (panoramique, téléradiographie), analyse céphalométrique",
  "Présentation du plan de traitement aux parents et à l'enfant",
  "Pose de l'appareil et explications d'entretien",
  "Rendez-vous de contrôle réguliers (toutes les 4 à 8 semaines)",
  "Phase de surveillance jusqu'à l'adolescence",
];

const resultatsAttendus = [
  "Correction des décalages de mâchoires",
  "Élargissement du palais pour laisser la place aux dents définitives",
  "Arrêt des habitudes nocives (succion, respiration buccale)",
  "Amélioration de la mastication et de la respiration",
  "Réduction du risque de traitement long à l'adolescence",
  "Meilleure harmonie du visage en croissance",
];

const linkCards = [
  {
    title: "Multi-attaches métalliques",
    description:
      "Appareil fixe classique, efficace pour les corrections importantes chez l'enfant et l'adolescent.",
    href: "/orthodontie-adolescent/multi-attaches-metalliques",
  },
  {
    title: "Contention",
    description:
      "Maintenir les résultats obtenus grâce à un dispositif de contention adapté.",
    href: "/orthodontie-enfant/contention",
  },
];

export default function OrthodontieEnfant() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary text-white py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            Intercepter tôt pour éviter des traitements lourds plus tard
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Entre 6 et 10 ans, l&apos;orthodontie vise surtout à guider la
            croissance, corriger les fonctions, créer un terrain favorable pour
            les dents définitives.
          </p>
        </div>
      </section>

      {/* À quel âge consulter ? */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-dark mb-8">
            À quel âge consulter ?
          </h2>
          <p className="text-dark/80 mb-6 leading-relaxed">
            Un premier bilan orthodontique est recommandé dès 6-7 ans. Certains
            signes doivent vous alerter :
          </p>
          <ul className="space-y-3">
            {signesConsultation.map((signe) => (
              <li key={signe} className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 rounded-full bg-primary shrink-0" />
                <span className="text-dark/80">{signe}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Nos traitements interceptifs */}
      <section className="py-16 md:py-20 bg-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-dark mb-8">
            Nos traitements interceptifs
          </h2>
          <ul className="space-y-3 mb-8">
            {traitementsInterceptifs.map((traitement) => (
              <li key={traitement} className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 rounded-full bg-primary shrink-0" />
                <span className="text-dark/80">{traitement}</span>
              </li>
            ))}
          </ul>
          <p className="text-primary font-semibold text-lg italic">
            Toujours avec une intention : simplifier l&apos;avenir orthodontique
            de l&apos;enfant.
          </p>
        </div>
      </section>

      {/* Comment se déroule la prise en charge ? */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-dark mb-8">
            Comment se déroule la prise en charge ?
          </h2>
          <ol className="space-y-4">
            {etapesPriseEnCharge.map((etape, index) => (
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

      {/* Résultats attendus */}
      <section className="py-16 md:py-20 bg-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-dark mb-8">
            Résultats attendus
          </h2>
          <ul className="space-y-3">
            {resultatsAttendus.map((resultat) => (
              <li key={resultat} className="flex items-start gap-3">
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
                <span className="text-dark/80">{resultat}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Link cards */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-dark mb-8">
            En savoir plus
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
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
