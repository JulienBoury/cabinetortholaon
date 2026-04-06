import type { Metadata } from "next";
import Image from "next/image";
import { img } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Gouttières invisibles",
  description:
    "Traitement orthodontique par gouttières invisibles (aligneurs transparents) pour adultes au cabinet d'orthodontie à Laon. Discrétion et confort au quotidien.",
};

export default function GouttieresInvisiblesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-accent via-dark to-accent text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 font-[family-name:var(--font-heading)]">
            Gouttières invisibles
          </h1>
          <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
            Une solution orthodontique discrète et amovible pour aligner vos
            dents en toute sérénité.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="bg-white py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <Image
                src={img("/images/2026/01/aligneurs-transparents-ortholaon.webp")}
                alt="Gouttières invisibles (aligneurs transparents) pour traitement orthodontique"
                width={768}
                height={477}
                className="rounded-2xl shadow-lg w-full h-auto"
                priority
              />
            </div>
            <div className="md:w-1/2 space-y-4 text-dark leading-relaxed">
              <p className="text-lg">
                Les gouttières invisibles, aussi appelées aligneurs
                transparents, sont une alternative esthétique aux appareils
                orthodontiques traditionnels. Fabriquées sur mesure à partir
                d&apos;une empreinte numérique 3D de vos dents, elles exercent
                des pressions douces et progressives pour déplacer les dents
                vers leur position idéale.
              </p>
              <p>
                Chaque série de gouttières est portée pendant environ deux
                semaines avant d&apos;être remplacée par la suivante.
                L&apos;ensemble du traitement est planifié numériquement, ce qui
                permet de visualiser le résultat attendu avant même de
                commencer.
              </p>
              <p>
                Ce traitement convient particulièrement aux adultes et aux
                adolescents soucieux de discrétion, pour des cas de
                malocclusion légère à modérée.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Caractéristiques clés */}
      <section className="bg-warm py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="section-divider mx-auto mb-6" />
          <h2 className="text-2xl md:text-3xl font-bold text-dark mb-8 text-center font-[family-name:var(--font-heading)]">
            Caractéristiques clés
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              {
                label: "Visibilité",
                value: "Invisibles",
                icon: "👁️",
              },
              {
                label: "Port",
                value: "22h / jour",
                icon: "🕐",
              },
              {
                label: "Âge",
                value: "Ados et adultes",
                icon: "👤",
              },
              {
                label: "Type",
                value: "Amovible transparent",
                icon: "🔧",
              },
              {
                label: "Indication",
                value: "Léger à modéré",
                icon: "✅",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-white rounded-xl p-5 text-center shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
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
          <div className="section-divider mx-auto mb-6" />
          <h2 className="text-2xl md:text-3xl font-bold text-dark mb-8 text-center font-[family-name:var(--font-heading)]">
            Déroulement du traitement
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                step: 1,
                title: "Bilan et empreinte numérique",
                description:
                  "Un examen clinique complet est réalisé, accompagné d'une empreinte numérique 3D (scanner intra-oral). Ces données servent à élaborer un plan de traitement personnalisé et à simuler le résultat final sur écran.",
              },
              {
                step: 2,
                title: "Fabrication des gouttières",
                description:
                  "L'ensemble des gouttières est fabriqué sur mesure en laboratoire. Chaque gouttière correspond à une étape de déplacement dentaire, planifiée avec une grande précision.",
              },
              {
                step: 3,
                title: "Port et suivi régulier",
                description:
                  "Vous portez chaque paire de gouttières pendant environ 2 semaines, au minimum 22 heures par jour. Des rendez-vous de contrôle sont programmés toutes les 6 à 8 semaines pour vérifier l'avancement du traitement.",
              },
              {
                step: 4,
                title: "Fin de traitement et contention",
                description:
                  "Une fois toutes les gouttières portées et le résultat obtenu, un dispositif de contention est mis en place pour stabiliser la position des dents dans la durée.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="flex gap-4 bg-warm rounded-xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg">
                  {item.step}
                </div>
                <div>
                  <h3 className="font-semibold text-dark text-lg mb-2 font-[family-name:var(--font-heading)]">
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
      <section className="bg-warm py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="section-divider mx-auto mb-6" />
          <h2 className="text-2xl md:text-3xl font-bold text-dark mb-6 text-center font-[family-name:var(--font-heading)]">
            Hygiène et entretien
          </h2>
          <div className="bg-white rounded-xl p-6 md:p-8 shadow-sm hover:shadow-lg transition-all duration-300 border-l-4 border-primary space-y-4 text-dark leading-relaxed">
            <p>
              L&apos;un des grands avantages des gouttières invisibles est
              qu&apos;elles se retirent pour manger et pour se brosser les
              dents. L&apos;hygiène dentaire est donc simplifiée par rapport à
              un appareil fixe, mais certaines précautions restent
              indispensables.
            </p>
            <ul className="space-y-3 text-dark/80">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                <span>Retirez toujours vos gouttières avant de manger ou de boire
                (sauf eau plate).</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                <span>Brossez-vous les dents après chaque repas avant de remettre vos
                gouttières en bouche.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                <span>Nettoyez vos gouttières quotidiennement avec une brosse souple
                et de l&apos;eau tiède. Évitez l&apos;eau chaude qui pourrait
                les déformer.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                <span>Rangez toujours vos gouttières dans leur boîtier lorsque vous
                ne les portez pas pour éviter de les perdre ou de les
                endommager.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                <span>Évitez de fumer avec les gouttières en bouche, car le tabac les
                jaunit et les opacifie.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Gêne ou incident */}
      <section className="bg-white py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="section-divider mx-auto mb-6" />
          <h2 className="text-2xl md:text-3xl font-bold text-dark mb-6 text-center font-[family-name:var(--font-heading)]">
            Gêne ou incident
          </h2>
          <div className="bg-warm rounded-xl p-6 md:p-8 border-l-4 border-primary space-y-4 text-dark leading-relaxed">
            <p>
              Les gouttières invisibles sont généralement très bien tolérées.
              Une légère sensation de pression est normale lors du changement de
              gouttière, signe que les dents commencent à se déplacer.
            </p>
            <ul className="space-y-3 text-dark/80">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                <span>En cas de légère gêne, un antalgique simple (paracétamol) peut
                être pris selon la posologie habituelle.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                <span>Si le bord d&apos;une gouttière irrite la gencive ou la joue,
                vous pouvez le lisser délicatement avec une lime à ongles fine
                et contacter le cabinet.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                <span>Si vous perdez ou cassez une gouttière, contactez le cabinet
                rapidement. En attendant, portez la gouttière précédente pour
                éviter que les dents ne bougent.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                <span>Un léger zézaiement peut survenir les premiers jours de port.
                Il disparaît naturellement en quelques jours.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Résultats attendus */}
      <section className="bg-warm py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="section-divider mx-auto mb-6" />
          <h2 className="text-2xl md:text-3xl font-bold text-dark mb-6 text-center font-[family-name:var(--font-heading)]">
            Résultats attendus
          </h2>
          <div className="bg-white rounded-xl p-6 md:p-8 shadow-sm hover:shadow-lg transition-all duration-300 border-l-4 border-primary text-dark leading-relaxed space-y-4">
            <p>
              La durée moyenne d&apos;un traitement par gouttières invisibles
              est de <strong>6 à 18 mois</strong>, selon la complexité du cas.
              Les résultats comprennent&nbsp;:
            </p>
            <ul className="space-y-3 text-dark/80">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                <span>Un alignement esthétique et harmonieux des dents.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                <span>Une amélioration de l&apos;occlusion (engrènement entre les
                dents du haut et du bas).</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                <span>Un sourire plus éclatant, avec un traitement quasiment
                invisible au quotidien.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                <span>Un confort de traitement supérieur grâce à l&apos;absence de
                brackets et de fils métalliques.</span>
              </li>
            </ul>
            <p>
              Le respect du temps de port quotidien (22 heures minimum) est
              essentiel pour garantir l&apos;efficacité et la durée prévue du
              traitement.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="section-divider mx-auto mb-6" />
          <h2 className="text-2xl md:text-3xl font-bold text-dark mb-8 text-center font-[family-name:var(--font-heading)]">
            Questions fréquentes
          </h2>
          <div className="space-y-3">
            {[
              {
                question:
                  "Les gouttières invisibles sont-elles vraiment invisibles ?",
                answer:
                  "Les gouttières sont fabriquées en plastique transparent médical très fin. Elles sont quasiment imperceptibles au quotidien. Seul un observateur très attentif à courte distance pourrait les remarquer.",
              },
              {
                question:
                  "Puis-je manger normalement avec les gouttières ?",
                answer:
                  "Vous devez retirer vos gouttières pour manger et boire (sauf eau plate). C'est l'un des avantages de ce système : aucune restriction alimentaire pendant les repas. Il suffit de se brosser les dents avant de les remettre.",
              },
              {
                question:
                  "Combien de temps dure le traitement par gouttières ?",
                answer:
                  "La durée varie en fonction de la complexité du cas. Pour les cas légers, le traitement peut durer 6 mois. Pour les cas modérés, comptez 12 à 18 mois. Votre orthodontiste vous donnera une estimation précise lors du bilan initial.",
              },
              {
                question:
                  "Les gouttières conviennent-elles à tous les cas ?",
                answer:
                  "Les gouttières invisibles sont indiquées pour les cas de malocclusion légère à modérée : encombrement léger, espaces entre les dents, petits décalages. Pour les cas complexes (décalage squelettique important, extractions nécessaires), un appareil fixe peut être plus adapté.",
              },
              {
                question:
                  "Que se passe-t-il si je ne porte pas mes gouttières 22 heures par jour ?",
                answer:
                  "Un temps de port insuffisant ralentit le traitement et peut compromettre les résultats. Les dents ne se déplacent efficacement que lorsque les gouttières sont en bouche. Si vous avez des difficultés à respecter le temps de port, parlez-en avec votre orthodontiste.",
              },
              {
                question:
                  "Les gouttières sont-elles remboursées par la Sécurité sociale ?",
                answer:
                  "La prise en charge par la Sécurité sociale concerne les traitements orthodontiques débutés avant 16 ans, quel que soit le type d'appareil. Pour les adultes, le traitement n'est pas pris en charge par la Sécurité sociale mais peut être partiellement remboursé par votre mutuelle. Un devis détaillé vous sera remis avant le début du traitement.",
              },
            ].map((item) => (
              <details
                key={item.question}
                className="group bg-warm rounded-xl"
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
