import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Multi-attaches métalliques",
  description:
    "Traitement orthodontique par multi-attaches métalliques (bagues) pour adolescents au cabinet d'orthodontie à Laon. Correction efficace des malpositions dentaires.",
};

export default function MultiAttachesMetalliquesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Multi-attaches métalliques
          </h1>
          <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
            Un appareil fixe éprouvé pour corriger efficacement les malpositions
            dentaires chez l&apos;adolescent.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="bg-white py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <Image
                src="/images/2026/01/multi-attaches-metalliques-ortholaon.webp"
                alt="Appareil multi-attaches métalliques posé sur les dents"
                width={768}
                height={477}
                className="rounded-2xl shadow-lg w-full h-auto"
                priority
              />
            </div>
            <div className="md:w-1/2 space-y-4 text-dark leading-relaxed">
              <p>
                Les multi-attaches métalliques, communément appelées
                &laquo;&nbsp;bagues&nbsp;&raquo;, constituent le traitement
                orthodontique le plus répandu et le plus ancien. Chaque bracket
                est collé sur la face visible de la dent et relié aux autres par
                un arc métallique qui exerce des forces contrôlées pour déplacer
                progressivement les dents.
              </p>
              <p>
                Grâce aux progrès techniques, les brackets actuels sont plus
                petits, plus confortables et plus performants qu&apos;autrefois.
                Ils permettent de traiter l&apos;ensemble des malocclusions,
                des cas simples aux plus complexes.
              </p>
              <p>
                Ce type d&apos;appareil est particulièrement adapté aux
                adolescents car il ne nécessite aucune coopération particulière
                en dehors d&apos;une bonne hygiène bucco-dentaire.
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
                value: "Apparentes",
                icon: "👁️",
              },
              {
                label: "Port",
                value: "Continu jour et nuit",
                icon: "🕐",
              },
              {
                label: "Âge",
                value: "Enfants, ados, adultes",
                icon: "👤",
              },
              {
                label: "Type",
                value: "Appareil fixe",
                icon: "🔧",
              },
              {
                label: "Indication",
                value: "Correction des malpositions",
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
                  "Un examen clinique complet est réalisé, accompagné de radiographies et de moulages numériques. Ce bilan permet d'établir un diagnostic précis et de définir le plan de traitement adapté à votre situation.",
              },
              {
                step: 2,
                title: "Pose de l'appareil",
                description:
                  "Les brackets sont collés un à un sur chaque dent lors d'une séance dédiée d'environ 45 minutes à 1 heure. Un arc métallique est ensuite inséré pour commencer à guider les déplacements dentaires.",
              },
              {
                step: 3,
                title: "Suivi et ajustements",
                description:
                  "Des rendez-vous de contrôle sont programmés toutes les 4 à 8 semaines. Lors de chaque visite, l'arc est ajusté ou remplacé afin de poursuivre les mouvements dentaires selon le plan établi.",
              },
              {
                step: 4,
                title: "Fin de traitement et contention",
                description:
                  "Une fois l'alignement obtenu, l'appareil est déposé. Un dispositif de contention (fil collé et/ou gouttière) est mis en place pour stabiliser les résultats dans le temps.",
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
              Le port de multi-attaches métalliques nécessite une hygiène
              bucco-dentaire rigoureuse. Les brackets et les arcs retiennent
              davantage la plaque dentaire, ce qui augmente le risque de caries
              et d&apos;inflammation gingivale si le brossage est insuffisant.
            </p>
            <ul className="list-disc list-inside space-y-2 text-dark/80">
              <li>
                Brossez-vous les dents après chaque repas pendant au moins 3
                minutes, en insistant autour des brackets (dessus, dessous et
                sur les côtés).
              </li>
              <li>
                Utilisez une brosse orthodontique à poils en V ou une brosse
                électrique, complétée par des brossettes interdentaires.
              </li>
              <li>
                Un fil dentaire spécial orthodontie ou un hydropulseur peut
                aider à nettoyer les espaces difficiles d&apos;accès.
              </li>
              <li>
                Évitez les aliments très durs (pommes entières, carottes crues
                non coupées, nougat) et les aliments collants (caramels,
                chewing-gums) qui peuvent endommager l&apos;appareil.
              </li>
              <li>
                Un bain de bouche fluoré peut être utilisé en complément, sur
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
              Il est normal de ressentir une légère sensibilité dentaire pendant
              les 3 à 5 jours suivant la pose de l&apos;appareil ou après
              chaque activation. Cette gêne est le signe que les dents
              commencent à se déplacer.
            </p>
            <ul className="list-disc list-inside space-y-2 text-dark/80">
              <li>
                En cas de douleur, un antalgique simple (paracétamol) peut être
                pris selon la posologie habituelle.
              </li>
              <li>
                Si un bracket se décolle, conservez-le et prenez rendez-vous
                rapidement pour le recoller. Ce n&apos;est pas une urgence mais
                cela doit être corrigé pour ne pas retarder le traitement.
              </li>
              <li>
                Si un arc pique ou irrite la joue, appliquez une boulette de
                cire orthodontique sur l&apos;élément gênant et contactez le
                cabinet.
              </li>
              <li>
                Privilégiez une alimentation molle les premiers jours
                (compotes, soupes, pâtes) le temps de vous habituer.
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
              métalliques est de <strong>18 à 30 mois</strong>, selon la
              complexité du cas. Les résultats comprennent&nbsp;:
            </p>
            <ul className="list-disc list-inside space-y-2 text-dark/80">
              <li>Un alignement harmonieux des dents.</li>
              <li>
                Une correction de l&apos;articulé dentaire (occlusion)
                permettant une meilleure fonction masticatoire.
              </li>
              <li>
                Une amélioration de l&apos;esthétique du sourire et du profil.
              </li>
              <li>
                Une meilleure santé parodontale grâce à des dents plus faciles
                à nettoyer.
              </li>
            </ul>
            <p>
              La stabilité des résultats dépend du bon suivi de la phase de
              contention qui suit le traitement actif.
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
                  "Les multi-attaches métalliques sont-elles douloureuses ?",
                answer:
                  "La pose en elle-même est indolore. Une sensibilité dentaire peut être ressentie pendant 3 à 5 jours après la pose et après chaque activation. Cette gêne est tout à fait normale et s'atténue progressivement. Un antalgique simple suffit généralement à soulager l'inconfort.",
              },
              {
                question: "Puis-je faire du sport avec mon appareil ?",
                answer:
                  "Oui, la pratique sportive reste possible. Pour les sports de contact (rugby, boxe, arts martiaux), le port d'un protège-dents adapté est vivement recommandé. N'hésitez pas à en parler lors de votre consultation afin que nous vous conseillions sur le modèle le plus approprié.",
              },
              {
                question:
                  "À quelle fréquence dois-je venir en consultation ?",
                answer:
                  "Les rendez-vous de suivi sont généralement programmés toutes les 4 à 8 semaines. Leur fréquence peut varier en fonction de l'étape du traitement et des ajustements nécessaires.",
              },
              {
                question:
                  "Peut-on choisir la couleur des élastiques (ligatures) ?",
                answer:
                  "Oui, les ligatures qui maintiennent l'arc sur les brackets sont disponibles dans une large gamme de couleurs. Vous pouvez les personnaliser à chaque rendez-vous selon vos envies. Des ligatures transparentes ou de couleur métal sont également proposées pour un rendu plus discret.",
              },
              {
                question:
                  "Y a-t-il des aliments à éviter absolument ?",
                answer:
                  "Il est recommandé d'éviter les aliments très durs (noix entières, glaçons, croûtons) et les aliments collants (caramels, bonbons mous, chewing-gums) qui peuvent décoller un bracket ou déformer l'arc. Les fruits et légumes crus doivent être coupés en petits morceaux avant d'être consommés.",
              },
              {
                question:
                  "Que se passe-t-il si un bracket se décolle ?",
                answer:
                  "Un bracket décollé n'est pas une urgence, mais il doit être recollé dans un délai raisonnable pour ne pas retarder le traitement. Conservez le bracket si possible et contactez le cabinet pour prendre rendez-vous. En attendant, si l'arc vous gêne, appliquez de la cire orthodontique.",
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
