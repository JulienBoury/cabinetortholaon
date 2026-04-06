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
      <section className="bg-gradient-to-br from-accent via-dark to-accent text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 font-[family-name:var(--font-heading)]">
            Notre philosophie : précision, douceur, modernité
          </h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed opacity-90">
            Nous croyons qu&apos;un traitement orthodontique doit être moins
            vécu comme une contrainte que comme un parcours clair, maîtrisé,
            rassurant et motivant.
          </p>
        </div>
      </section>

      {/* Une approche humaine */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="section-divider mb-6" />
          <h2 className="text-3xl font-bold text-dark mb-6 font-[family-name:var(--font-heading)]">
            Une approche humaine
          </h2>
          <p className="text-xl text-dark/80 leading-relaxed max-w-4xl border-l-4 border-primary pl-6">
            Chaque sourire est unique. Chaque patient a son rythme, ses
            questions, ses objectifs. Nous consacrons du temps à expliquer,
            rassurer, adapter — pour que vous compreniez votre traitement et que
            vous le viviez sereinement.
          </p>
        </div>
      </section>

      {/* Une expertise spécialisée */}
      <section className="py-16 bg-warm border-t border-primary/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="section-divider mb-6" />
          <h2 className="text-3xl font-bold text-dark mb-8 font-[family-name:var(--font-heading)]">
            Une expertise spécialisée
          </h2>
          <ul className="grid gap-4 sm:grid-cols-2 max-w-4xl">
            {expertises.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                <span className="text-lg text-dark/80">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Technologies actuelles */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="section-divider mb-6" />
          <h2 className="text-3xl font-bold text-dark mb-8 font-[family-name:var(--font-heading)]">
            Technologies actuelles
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl">
            {technologies.map((tech) => (
              <div
                key={tech}
                className="flex items-center gap-3 rounded-xl border border-primary/20 bg-primary/5 px-5 py-4 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
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
      <section className="py-16 bg-warm border-t border-primary/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="section-divider mb-6" />
          <h2 className="text-3xl font-bold text-dark mb-6 font-[family-name:var(--font-heading)]">
            Une équipe engagée
          </h2>
          <p className="text-xl text-dark/80 leading-relaxed max-w-4xl border-l-4 border-primary pl-6">
            Orthodontistes, assistantes spécialisées, coordinatrices… Un vrai
            travail d&apos;équipe autour d&apos;un même objectif : votre confort
            et votre satisfaction.
          </p>
        </div>
      </section>
    </>
  );
}
