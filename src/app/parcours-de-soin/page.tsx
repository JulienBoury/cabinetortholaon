import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Parcours de soin",
  description:
    "Découvrez les étapes de votre parcours de soin orthodontique au cabinet Boury & Associés à Laon, du premier rendez-vous au suivi de traitement.",
};

const steps = [
  {
    number: 1,
    title: "1er RDV",
    description:
      "Lors du premier rendez-vous, le patient rencontre l'orthodontiste pour une évaluation initiale de ses besoins dentaires et une discussion sur les options de traitement.",
  },
  {
    number: 2,
    title: "Radio",
    description:
      "Une radiographie dentaire est réalisée pour analyser précisément la structure des dents et des mâchoires, permettant un diagnostic approfondi.",
  },
  {
    number: 3,
    title: "Empreinte",
    description:
      "Des empreintes dentaires sont prises pour créer des modèles précis des dents du patient, essentiels pour planifier le traitement orthodontique.",
  },
  {
    number: 4,
    title: "Consultation",
    description:
      "Au cours de la consultation, l'orthodontiste examine les résultats des examens et discute avec le patient des objectifs et des étapes du traitement.",
  },
  {
    number: 5,
    title: "Plan de traitement",
    description:
      "Un plan de traitement personnalisé est élaboré, détaillant les étapes, la durée et les appareils orthodontiques nécessaires pour corriger l'alignement dentaire.",
  },
  {
    number: 6,
    title: "Demande Sécurité sociale",
    description:
      "Une demande de prise en charge est soumise à la Sécurité sociale pour obtenir un remboursement partiel ou total des frais liés au traitement orthodontique.",
  },
];

export default function ParcoursPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="bg-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">Parcours de soin</h1>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative max-w-3xl mx-auto">
            {/* Vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-primary/20 md:left-1/2 md:-translate-x-px" />

            {steps.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={step.number}
                  className="relative mb-12 last:mb-0 pl-16 md:pl-0"
                >
                  {/* Circle - mobile */}
                  <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white text-lg font-bold shadow-lg md:hidden">
                    {step.number}
                  </div>

                  {/* Desktop layout */}
                  <div className="hidden md:grid md:grid-cols-[1fr_auto_1fr] md:items-start md:gap-8">
                    {/* Left content */}
                    <div
                      className={
                        isEven ? "text-right" : "order-3 text-left"
                      }
                    >
                      <div
                        className={`rounded-xl border border-primary/15 bg-light p-6 shadow-sm ${
                          isEven ? "ml-auto" : "mr-auto"
                        }`}
                      >
                        <h3 className="text-xl font-bold text-primary mb-2">
                          {step.title}
                        </h3>
                        <p className="text-dark/80 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>

                    {/* Circle - desktop */}
                    <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white text-lg font-bold shadow-lg order-2">
                      {step.number}
                    </div>

                    {/* Empty space on the other side */}
                    <div className={isEven ? "order-3" : ""} />
                  </div>

                  {/* Mobile content */}
                  <div className="md:hidden rounded-xl border border-primary/15 bg-light p-6 shadow-sm">
                    <h3 className="text-xl font-bold text-primary mb-2">
                      {step.title}
                    </h3>
                    <p className="text-dark/80 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}

            {/* Final note */}
            <div className="relative pl-16 md:pl-0">
              {/* Circle - mobile */}
              <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-full bg-primary-dark text-white md:hidden">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>

              {/* Desktop layout */}
              <div className="hidden md:flex md:flex-col md:items-center">
                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-primary-dark text-white shadow-lg mb-8">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div className="rounded-xl border-2 border-primary/25 bg-primary/5 p-8 text-center max-w-xl">
                  <h3 className="text-xl font-bold text-primary mb-3">
                    Par la suite
                  </h3>
                  <p className="text-dark/80 leading-relaxed">
                    Les patients seront vus par les 3 praticiens qui se
                    concertent régulièrement sur la bonne avancée du traitement
                    de votre enfant. Des photos seront régulièrement prises pour
                    le suivi du traitement.
                  </p>
                </div>
              </div>

              {/* Mobile content */}
              <div className="md:hidden rounded-xl border-2 border-primary/25 bg-primary/5 p-6">
                <h3 className="text-xl font-bold text-primary mb-2">
                  Par la suite
                </h3>
                <p className="text-dark/80 leading-relaxed">
                  Les patients seront vus par les 3 praticiens qui se concertent
                  régulièrement sur la bonne avancée du traitement de votre
                  enfant. Des photos seront régulièrement prises pour le suivi
                  du traitement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
