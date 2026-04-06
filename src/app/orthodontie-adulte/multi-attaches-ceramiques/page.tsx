import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Multi-attaches céramiques",
  description:
    "Traitement orthodontique par multi-attaches céramiques pour adultes au cabinet d'orthodontie à Laon. Un appareil fixe discret et performant.",
};

export default function MultiAttachesCeramiquesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Multi-attaches céramiques
          </h1>
          <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
            La performance d&apos;un appareil fixe allié à la discrétion de
            brackets en céramique, de la couleur de vos dents.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="bg-white py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <Image
                src="/images/2026/01/multi-attaches-ceramiques-ortholaon.webp"
                alt="Appareil multi-attaches céramiques discret posé sur les dents"
                width={285}
                height={300}
                className="rounded-2xl shadow-lg w-full h-auto"
                priority
              />
            </div>
            <div className="md:w-1/2 space-y-4 text-dark leading-relaxed">
              <p>
                Les multi-attaches céramiques fonctionnent exactement sur le
                même principe que les brackets métalliques&nbsp;: chaque bracket
                est collé sur la face visible de la dent et relié aux autres par
                un arc qui guide les déplacements dentaires. La différence
                réside dans le matériau&nbsp;: la céramique, translucide ou de
                couleur similaire à l&apos;émail, rend l&apos;appareil beaucoup
                plus discret.
              </p>
              <p>
                Ce type de traitement est particulièrement apprécié des adultes
                et des adolescents qui souhaitent bénéficier de l&apos;efficacité
                d&apos;un appareil fixe tout en limitant son impact esthétique
                au quotidien.
              </p>
              <p>
                Les brackets céramiques actuels sont résistants et permettent de
                traiter la majorité des malocclusions, des cas simples aux cas
                complexes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Caractéristiques clés */}
      <section className="bg-light py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-dark mb-8 text-center">
            Caractéristiques clés
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              {
                label: "Visibilité",
                value: "Très discrètes",
                icon: "👁️",
              },
              {
                label: "Port",
                value: "Continu jour et nuit",
                icon: "🕐",
              },
              {
                label: "Âge",
                value: "Ados et adultes",
                icon: "👤",
              },
              {
                label: "Type",
                value: "Appareil fixe",
                icon: "🔧",
              },
              {
                label: "Indication",
                value: "Léger à complexe",
                icon: "✅",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-white rounded-xl p-5 text-center shadow-sm"
              >
                <div className="text-3xl mb-2">{item.icon}</div>
                <div className="text-sm font-semibold text-primary uppercase tracking-wide mb-1">
                  {item.label}
                </div>
                <div className="text-dark font-medium text-sm">
                  {item.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Déroulement du traitement */}
      <section className="bg-white py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-dark mb-8 text-center">
            Déroulement du traitement
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                step: 1,
                title: "Bilan initial",
                description:
                  "Un examen clinique approfondi est réalisé, accompagné de radiographies et d'empreintes numériques. Ce bilan permet d'établir un diagnostic précis et un plan de traitement personnalisé.",
              },
              {
                step: 2,
                title: "Pose de l'appareil",
                description:
                  "Les brackets en céramique sont collés individuellement sur chaque dent lors d'une séance d'environ 45 minutes à 1 heure. Un arc (métallique ou esthétique) est ensuite inséré pour initier les déplacements dentaires.",
              },
              {
                step: 3,
                title: "Suivi et ajustements",
                description:
                  "Des rendez-vous de contrôle sont programmés toutes les 4 à 8 semaines. L'arc est ajusté ou remplacé pour accompagner les mouvements dentaires selon le plan de traitement.",
              },
              {
                step: 4,
                title: "Fin de traitement et contention",
                description:
                  "Lorsque l'alignement est obtenu, les brackets sont déposés. Un dispositif de contention (fil collé et/ou gouttière) est mis en place pour maintenir les résultats à long terme.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="flex gap-4 bg-light rounded-xl p-6"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg">
                  {item.step}
                </div>
                <div>
                  <h3 className="font-semibold text-dark text-lg mb-2">
                    {item.title}
                  </h3>
                  <p className="text-dark/80 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hygiène et entretien */}
      <section className="bg-light py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-dark mb-6 text-center">
            Hygiène et entretien
          </h2>
          <div className="bg-white rounded-xl p-6 md:p-8 shadow-sm space-y-4 text-dark leading-relaxed">
            <p>
              Comme pour les brackets métalliques, une hygiène bucco-dentaire
              irréprochable est essentielle avec des multi-attaches céramiques.
              La céramique étant un matériau poreux, elle peut se colorer si
              l&apos;hygiène n&apos;est pas suffisante.
            </p>
            <ul className="list-disc list-inside space-y-2 text-dark/80">
              <li>
                Brossez-vous les dents après chaque repas pendant au moins 3
                minutes, en insistant autour des brackets.
              </li>
              <li>
                Utilisez une brosse orthodontique et des brossettes
                interdentaires pour nettoyer les zones difficiles d&apos;accès.
              </li>
              <li>
                Limitez la consommation de thé, café, vin rouge, curry et
                autres aliments colorants qui peuvent teinter les ligatures et
                les brackets céramiques.
              </li>
              <li>
                Évitez les aliments durs et collants qui risquent de fracturer
                ou de décoller les brackets.
              </li>
              <li>
                Un bain de bouche fluoré peut compléter le brossage, sur
                recommandation de votre orthodontiste.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Que faire en cas de gêne */}
      <section className="bg-white py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-dark mb-6 text-center">
            Que faire en cas de gêne&nbsp;?
          </h2>
          <div className="bg-light rounded-xl p-6 md:p-8 space-y-4 text-dark leading-relaxed">
            <p>
              Une légère sensibilité dentaire est normale pendant les 3 à 5
              jours suivant la pose et après chaque activation de
              l&apos;appareil. Elle traduit le début des mouvements dentaires.
            </p>
            <ul className="list-disc list-inside space-y-2 text-dark/80">
              <li>
                Un antalgique simple (paracétamol) peut être pris pour soulager
                l&apos;inconfort.
              </li>
              <li>
                Si un bracket céramique se décolle ou se fracture, conservez-le
                et contactez le cabinet pour un rendez-vous de recollement.
              </li>
              <li>
                En cas d&apos;irritation de la joue ou de la lèvre, appliquez
                de la cire orthodontique sur le bracket gênant.
              </li>
              <li>
                Privilégiez une alimentation molle les premiers jours après la
                pose ou une activation.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Résultats attendus */}
      <section className="bg-light py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-dark mb-6 text-center">
            Résultats attendus
          </h2>
          <div className="bg-white rounded-xl p-6 md:p-8 shadow-sm text-dark leading-relaxed space-y-4">
            <p>
              La durée moyenne d&apos;un traitement par multi-attaches
              céramiques est de <strong>18 à 30 mois</strong>, comparable à
              celle des brackets métalliques. Les résultats comprennent&nbsp;:
            </p>
            <ul className="list-disc list-inside space-y-2 text-dark/80">
              <li>
                Un alignement harmonieux des dents, obtenu de manière discrète.
              </li>
              <li>
                Une correction de l&apos;occlusion pour améliorer la fonction
                masticatoire.
              </li>
              <li>
                Une amélioration significative de l&apos;esthétique du sourire.
              </li>
              <li>
                Une meilleure santé gingivale et parodontale grâce à des dents
                bien alignées.
              </li>
            </ul>
            <p>
              Le respect de la phase de contention est indispensable pour
              maintenir les résultats dans le temps.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-dark mb-8 text-center">
            Questions fréquentes
          </h2>
          <div className="space-y-3">
            {[
              {
                question:
                  "Quelle est la différence entre les brackets céramiques et métalliques ?",
                answer:
                  "Le fonctionnement est identique. La différence est esthétique : les brackets céramiques sont translucides ou de la couleur de la dent, ce qui les rend beaucoup plus discrets. Ils sont légèrement plus fragiles que les brackets métalliques et nécessitent un peu plus de précautions avec les aliments durs.",
              },
              {
                question:
                  "Les brackets céramiques jaunissent-ils avec le temps ?",
                answer:
                  "Les brackets céramiques modernes résistent bien aux colorations. En revanche, les ligatures élastiques qui les entourent peuvent se colorer avec le thé, le café ou les épices. Elles sont remplacées à chaque rendez-vous de suivi, ce qui restaure l'aspect esthétique.",
              },
              {
                question:
                  "Le traitement est-il plus long avec des brackets céramiques ?",
                answer:
                  "Non, la durée du traitement est comparable à celle des brackets métalliques, soit 18 à 30 mois selon la complexité du cas. Les techniques et les arcs utilisés sont similaires.",
              },
              {
                question:
                  "Les brackets céramiques sont-ils plus chers ?",
                answer:
                  "Oui, le coût est généralement légèrement supérieur à celui des brackets métalliques en raison du matériau utilisé. Un devis détaillé vous sera remis lors de la consultation initiale pour vous permettre de comparer les options.",
              },
              {
                question:
                  "Peut-on combiner brackets céramiques et métalliques ?",
                answer:
                  "Oui, il est possible de poser des brackets céramiques sur les dents les plus visibles (arcades supérieures, dents antérieures) et des brackets métalliques sur les dents postérieures ou l'arcade inférieure, pour allier esthétique et robustesse.",
              },
              {
                question:
                  "Les brackets céramiques sont-ils adaptés aux adolescents ?",
                answer:
                  "Oui, les brackets céramiques peuvent être proposés aux adolescents, notamment ceux qui sont soucieux de leur apparence. Il faut cependant veiller à une bonne hygiène et éviter les aliments trop durs pour prévenir les fractures de brackets.",
              },
            ].map((item) => (
              <details
                key={item.question}
                className="group bg-light rounded-xl"
              >
                <summary className="cursor-pointer p-5 font-semibold text-dark flex items-center justify-between">
                  <span>{item.question}</span>
                  <span className="ml-4 text-primary transition-transform group-open:rotate-45 text-xl font-bold">
                    +
                  </span>
                </summary>
                <div className="px-5 pb-5 text-dark/80 leading-relaxed">
                  {item.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
