import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ",
};

const faqItems = [
  {
    question: "À quel âge peut-on débuter un traitement orthodontique ?",
    answer:
      "Un traitement orthodontique peut être envisagé à différents âges. Chez l'enfant, un premier bilan est généralement recommandé autour de 7 ans afin de dépister d'éventuels déséquilibres de croissance. Chez l'adolescent, le traitement débute souvent lorsque la dentition définitive est en place. Chez l'adulte, l'orthodontie permet de corriger des malpositions persistantes ou apparues avec le temps, sans limite d'âge, sous réserve d'une bonne santé bucco-dentaire.",
  },
  {
    question:
      "Quelle est la différence entre un appareil métallique et un appareil céramique ?",
    answer:
      "Les appareils métalliques utilisent des attaches en acier reconnues pour leur efficacité et leur précision. Les appareils céramiques reposent sur le même principe, avec des brackets de couleur claire, plus discrets. Les résultats obtenus sont comparables, le choix relevant principalement de critères esthétiques.",
  },
  {
    question:
      "Les gouttières invisibles sont-elles aussi efficaces que les appareils fixes ?",
    answer:
      "Les gouttières invisibles permettent de corriger de nombreux défauts d'alignement, notamment les encombrements dentaires légers à modérés ou les espacements. Certaines situations plus complexes nécessitent toutefois un appareil fixe. Le praticien détermine l'indication la plus adaptée après analyse du dossier orthodontique.",
  },
  {
    question: "Combien de temps dure un traitement orthodontique ?",
    answer:
      "La durée varie selon la complexité du cas, le type d'appareil utilisé et la régularité du suivi. En moyenne, un traitement orthodontique s'étend sur 12 à 24 mois. Une estimation personnalisée est toujours donnée lors du bilan initial.",
  },
  {
    question: "Des rendez-vous de suivi sont-ils nécessaires ?",
    answer:
      "Des rendez-vous réguliers sont indispensables pour ajuster l'appareil, contrôler les déplacements dentaires et assurer la progression du traitement. Leur fréquence dépend du dispositif utilisé, généralement toutes les 4 à 8 semaines.",
  },
  {
    question:
      "Une phase de contention est-elle obligatoire après le traitement ?",
    answer:
      "La contention est une étape essentielle pour stabiliser les résultats obtenus. Elle évite les déplacements secondaires des dents et peut prendre la forme d'un fil collé ou d'une gouttière de maintien, selon les indications du praticien.",
  },
  {
    question:
      "Le traitement orthodontique est-il pris en charge par l'Assurance Maladie ?",
    answer:
      "Chez les patients de moins de 16 ans, une prise en charge partielle est possible sous certaines conditions. Chez l'adulte, les traitements orthodontiques ne sont généralement pas remboursés, mais certaines complémentaires santé proposent un forfait spécifique.",
  },
];

export default function FaqPage() {
  return (
    <>
      {/* ───────────── HERO ───────────── */}
      <section className="bg-gradient-to-br from-accent via-dark to-accent text-white py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <div className="section-divider mx-auto mb-6" />
          <h1 className="text-4xl md:text-6xl font-bold leading-tight font-[family-name:var(--font-heading)]">
            Orthodontie : questions fréquentes
          </h1>
        </div>
      </section>

      {/* ───────────── INTRO ───────────── */}
      <section className="bg-warm py-16 sm:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <p className="text-muted text-lg leading-relaxed mb-12">
            Cette foire aux questions a pour objectif de répondre aux
            interrogations les plus courantes des patients concernant les
            traitements orthodontiques. Si vous ne trouvez pas la réponse à
            votre question, n&apos;hésitez pas à nous contacter directement.
          </p>

          {/* ───────────── ACCORDION ───────────── */}
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <details
                key={index}
                className="group bg-white rounded-2xl shadow-sm mb-4 overflow-hidden border-l-4 border-primary"
              >
                <summary className="flex items-center justify-between cursor-pointer px-6 py-5 text-dark font-semibold text-lg hover:bg-warm transition list-none">
                  <span className="pr-4">{item.question}</span>
                  <span className="flex-shrink-0 text-primary transition-transform group-open:rotate-45 text-2xl leading-none">
                    +
                  </span>
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-muted leading-relaxed">{item.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
