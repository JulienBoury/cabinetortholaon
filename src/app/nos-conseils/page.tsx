import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Nos conseils",
};

const cards = [
  {
    href: "/dentapoche",
    title: "Suivi à distance",
    description:
      "Suivez votre traitement orthodontique depuis chez vous grâce à l'application Dentapoche.",
  },
  {
    href: "/conseils/hygiene-alimentation",
    title: "Hygiène & Alimentation",
    description:
      "Conseils pratiques pour maintenir une bonne hygiène bucco-dentaire et adapter votre alimentation pendant le traitement.",
  },
  {
    href: "/conseils/multi-attaches-chirurgie",
    title: "Multi-attaches et Chirurgie maxillo-faciale",
    description:
      "Informations sur les appareils multi-attaches et la chirurgie orthognathique associée.",
  },
  {
    href: "/conseils/remboursement-orthodontie",
    title: "Tarifs & remboursements",
    description:
      "Tout savoir sur les tarifs, la prise en charge et les remboursements des traitements orthodontiques.",
  },
];

export default function NosConseilsPage() {
  return (
    <>
      {/* ───────────── HERO ───────────── */}
      <section className="bg-primary text-white py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-3xl sm:text-5xl font-bold leading-tight mb-6">
            Nos conseils
          </h1>
          <p className="text-lg sm:text-xl max-w-3xl mx-auto text-white/90 leading-relaxed">
            Des guides pratiques pour prendre soin de votre sourire au
            quotidien. Découvrez des conseils simples et efficaces pour
            optimiser votre traitement orthodontique et maintenir les résultats
            entre vos rendez-vous.
          </p>
        </div>
      </section>

      {/* ───────────── CARDS GRID ───────────── */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {cards.map((card) => (
              <Link
                key={card.href}
                href={card.href}
                className="group bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition"
              >
                <h2 className="text-xl font-bold text-dark mb-3 group-hover:text-primary transition-colors">
                  {card.title}
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {card.description}
                </p>
                <span className="text-primary font-semibold inline-flex items-center gap-2">
                  En savoir plus
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
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
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
