import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Notre philosophie",
  description:
    "Découvrez la philosophie du cabinet d'orthodontie Boury & Associés à Laon : précision, douceur et modernité au service de votre sourire.",
};

export default function CabinetPage() {
  const expertises = [
    "La préparation aux chirurgies orthognathiques",
    "L'orthodontie de l'enfant",
    "L'orthodontie de l'adolescent",
    "L'orthodontie adulte",
    "La planification numérique",
    "Les corrections complexes",
  ];

  const technologies = [
    "Empreinte numérique 3D",
    "Radiologie numérique",
    "Logiciels de simulation",
    "Planification digitale",
    "Gouttières transparentes",
  ];

  return (
    <>
      {/* Hero Banner */}
      <section className="bg-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Notre philosophie : précision, douceur, modernité
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed opacity-90">
            Nous croyons qu&apos;un traitement orthodontique doit être moins
            vécu comme une contrainte que comme un parcours clair, maîtrisé,
            rassurant et motivant.
          </p>
        </div>
      </section>

      {/* Une approche humaine */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-dark mb-6">
            Une approche humaine
          </h2>
          <p className="text-lg text-dark/80 leading-relaxed max-w-4xl">
            Chaque sourire est unique. Chaque patient a son rythme, ses
            questions, ses objectifs. Nous consacrons du temps à expliquer,
            rassurer, adapter — pour que vous compreniez votre traitement et que
            vous le viviez sereinement.
          </p>
        </div>
      </section>

      {/* Une expertise spécialisée */}
      <section className="py-16 bg-light">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-dark mb-8">
            Une expertise spécialisée
          </h2>
          <ul className="grid gap-4 sm:grid-cols-2 max-w-4xl">
            {expertises.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1.5 h-2.5 w-2.5 rounded-full bg-primary shrink-0" />
                <span className="text-lg text-dark/80">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Technologies actuelles */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-dark mb-8">
            Technologies actuelles
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl">
            {technologies.map((tech) => (
              <div
                key={tech}
                className="flex items-center gap-3 rounded-xl border border-primary/20 bg-primary/5 px-5 py-4"
              >
                <svg
                  className="h-5 w-5 text-primary shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-dark font-medium">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Une équipe engagée */}
      <section className="py-16 bg-light">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-dark mb-6">
            Une équipe engagée
          </h2>
          <p className="text-lg text-dark/80 leading-relaxed max-w-4xl">
            Orthodontistes, assistantes spécialisées, coordinatrices… Un vrai
            travail d&apos;équipe autour d&apos;un même objectif : votre confort
            et votre satisfaction.
          </p>
        </div>
      </section>
    </>
  );
}
