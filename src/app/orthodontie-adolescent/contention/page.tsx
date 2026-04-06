import type { Metadata } from "next";
import Image from "next/image";
import { img } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Contention orthodontique",
  description:
    "La contention orthodontique : fil collé et gouttière de contention pour stabiliser les résultats après un traitement orthodontique chez l'adolescent. Cabinet d'orthodontie à Laon.",
};

export default function ContentionAdolescentPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-accent via-dark to-accent text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="section-divider mx-auto mb-6" />
          <h1 className="text-4xl md:text-6xl font-bold mb-4 font-[family-name:var(--font-heading)]">
            Contention orthodontique
          </h1>
          <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
            La phase essentielle qui suit votre traitement pour stabiliser
            durablement le résultat obtenu.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="bg-white py-12">
        <div className="max-w-4xl mx-auto px-4 space-y-4 text-dark leading-relaxed">
          <p className="text-lg">
            La contention est la phase qui suit immédiatement la fin du
            traitement orthodontique actif. Elle a pour objectif de maintenir
            les dents dans leur nouvelle position, le temps que l&apos;os et les
            tissus de soutien se stabilisent. Sans contention, les dents ont une
            tendance naturelle à revenir vers leur position d&apos;origine
            (récidive).
          </p>
          <p>
            Il existe deux grands types de contention, souvent associés pour une
            efficacité maximale&nbsp;: la contention fixe (fil collé) et la
            contention amovible (gouttière transparente). Votre orthodontiste
            choisira la solution la plus adaptée à votre situation.
          </p>
        </div>
      </section>

      {/* Contention fixe */}
      <section className="bg-warm py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="section-divider mx-auto mb-6" />
          <h2 className="text-2xl md:text-3xl font-bold text-dark mb-8 text-center font-[family-name:var(--font-heading)]">
            Contention fixe
          </h2>
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <Image
                src={img("/images/2026/01/fil-colle-contention-ortholaon.webp")}
                alt="Fil de contention collé sur la face interne des dents"
                width={285}
                height={300}
                className="rounded-2xl shadow-lg w-full h-auto"
              />
            </div>
            <div className="md:w-1/2 space-y-4 text-dark leading-relaxed">
              <p>
                La contention fixe consiste en un fin fil métallique collé sur
                la face interne (linguale) des dents antérieures, généralement
                de canine à canine. Ce fil est totalement invisible de
                l&apos;extérieur et ne gêne ni la parole ni l&apos;alimentation
                après une courte période d&apos;adaptation.
              </p>
              <ul className="space-y-3 text-dark/80">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <span>Invisible depuis l&apos;extérieur.</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <span>Agit 24 heures sur 24 sans intervention de votre part.</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <span>Généralement porté plusieurs années, voire à vie, selon les
                  recommandations de votre orthodontiste.</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <span>Nécessite un brossage minutieux autour du fil pour éviter
                  l&apos;accumulation de tartre.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contention amovible */}
      <section className="bg-white py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="section-divider mx-auto mb-6" />
          <h2 className="text-2xl md:text-3xl font-bold text-dark mb-8 text-center font-[family-name:var(--font-heading)]">
            Contention amovible
          </h2>
          <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
            <div className="md:w-1/2">
              <Image
                src={img("/images/2026/01/gouttiere-contention-ortholaon.webp")}
                alt="Gouttière de contention transparente"
                width={285}
                height={300}
                className="rounded-2xl shadow-lg w-full h-auto"
              />
            </div>
            <div className="md:w-1/2 space-y-4 text-dark leading-relaxed">
              <p>
                La contention amovible prend la forme d&apos;une gouttière
                transparente thermoformée, réalisée sur mesure à partir
                d&apos;une empreinte de vos dents en fin de traitement. Elle se
                porte généralement la nuit.
              </p>
              <ul className="space-y-3 text-dark/80">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <span>Transparente et discrète, à porter principalement pendant le
                  sommeil.</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <span>Maintient l&apos;ensemble de l&apos;arcade dentaire dans sa
                  position corrigée.</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <span>Facile à retirer pour l&apos;hygiène et les repas.</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <span>Durée de port recommandée&nbsp;: tous les soirs pendant au
                  moins 2 ans, puis de manière dégressive selon l&apos;avis de
                  votre orthodontiste.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Recommandations d'entretien */}
      <section className="bg-warm py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="section-divider mx-auto mb-6" />
          <h2 className="text-2xl md:text-3xl font-bold text-dark mb-6 text-center font-[family-name:var(--font-heading)]">
            Recommandations d&apos;entretien
          </h2>
          <div className="bg-white rounded-xl p-6 md:p-8 shadow-sm hover:shadow-lg transition-all duration-300 border-l-4 border-primary space-y-4 text-dark leading-relaxed">
            <h3 className="font-semibold text-lg text-dark font-[family-name:var(--font-heading)]">
              Pour le fil de contention collé
            </h3>
            <ul className="space-y-3 text-dark/80">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                <span>Brossez soigneusement la face interne des dents matin et soir,
                en passant la brosse le long du fil.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                <span>Utilisez du fil dentaire spécial (type Superfloss) ou un
                hydropulseur pour nettoyer sous le fil et entre les dents.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                <span>Faites réaliser un détartrage régulier chez votre
                chirurgien-dentiste, au moins une fois par an.</span>
              </li>
            </ul>

            <h3 className="font-semibold text-lg text-dark mt-6 font-[family-name:var(--font-heading)]">
              Pour la gouttière de contention
            </h3>
            <ul className="space-y-3 text-dark/80">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                <span>Rincez et brossez votre gouttière chaque matin avec une brosse
                souple et de l&apos;eau tiède (pas d&apos;eau chaude).</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                <span>Rangez-la toujours dans son boîtier lorsque vous ne la portez
                pas.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                <span>N&apos;utilisez pas de dentifrice pour la nettoyer&nbsp;: les
                micro-abrasifs pourraient la rayer et la rendre opaque.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                <span>Remplacez la gouttière si elle se fissure, se déforme ou ne
                s&apos;adapte plus correctement.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* En cas d'incident */}
      <section className="bg-white py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="section-divider mx-auto mb-6" />
          <h2 className="text-2xl md:text-3xl font-bold text-dark mb-6 text-center font-[family-name:var(--font-heading)]">
            En cas d&apos;incident
          </h2>
          <div className="bg-warm rounded-xl p-6 md:p-8 border-l-4 border-primary space-y-4 text-dark leading-relaxed">
            <ul className="space-y-3 text-dark/80">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                <span><strong>Le fil de contention se décolle partiellement&nbsp;:</strong>{" "}
                contactez le cabinet rapidement pour le recoller. En attendant,
                ne tirez pas sur le fil. Si une extrémité pique, appliquez de
                la cire orthodontique.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                <span><strong>Le fil se casse&nbsp;:</strong> prenez rendez-vous dès
                que possible. Portez votre gouttière de contention en attendant
                (si vous en avez une) pour éviter tout déplacement dentaire.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                <span><strong>La gouttière se fissure ou se casse&nbsp;:</strong>{" "}
                contactez le cabinet pour en faire fabriquer une nouvelle. Ne
                portez pas une gouttière endommagée qui pourrait blesser vos
                gencives.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                <span><strong>Vous constatez un léger mouvement dentaire&nbsp;:</strong>{" "}
                consultez rapidement. Plus un déplacement est pris en charge
                tôt, plus il est facile à corriger.</span>
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
              La contention n&apos;est pas un traitement actif&nbsp;: elle ne
              déplace pas les dents, mais elle empêche toute récidive. Son rôle
              est de pérenniser les résultats obtenus pendant la phase active du
              traitement.
            </p>
            <ul className="space-y-3 text-dark/80">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                <span>Stabilisation de l&apos;alignement dentaire dans la durée.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                <span>Préservation de l&apos;occlusion corrigée.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                <span>Maintien de l&apos;esthétique du sourire au fil des années.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                <span>Prévention de la récidive, phénomène naturel observé chez tous
                les patients.</span>
              </li>
            </ul>
            <p>
              La contention est une phase à long terme. Le fil collé peut être
              conservé plusieurs années, et le port de la gouttière nocturne est
              recommandé pendant au moins 2 ans, voire plus selon les cas.
              Votre orthodontiste vous accompagnera tout au long de cette
              période avec des contrôles réguliers.
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
                  "Combien de temps doit-on porter la contention ?",
                answer:
                  "Le fil collé est généralement conservé plusieurs années, parfois à vie. La gouttière de contention est portée chaque nuit pendant au moins 2 ans, puis de manière dégressive (quelques nuits par semaine). Votre orthodontiste adaptera la durée à votre situation.",
              },
              {
                question:
                  "Le fil de contention est-il visible ?",
                answer:
                  "Non, le fil est collé sur la face interne des dents (côté langue). Il est totalement invisible lorsque vous souriez ou parlez.",
              },
              {
                question:
                  "La gouttière de contention est-elle la même que les gouttières de traitement ?",
                answer:
                  "Non. La gouttière de contention est une gouttière de maintien, thermoformée sur la position finale de vos dents. Elle ne déplace pas les dents, elle les maintient en place. Elle est généralement plus fine et plus confortable que les gouttières de traitement actif.",
              },
              {
                question:
                  "Que se passe-t-il si j'arrête de porter ma contention ?",
                answer:
                  "Les dents ont une mémoire de leur position d'origine et une tendance naturelle à se déplacer avec le temps. Sans contention, un encombrement ou un décalage peut réapparaître progressivement, même plusieurs années après la fin du traitement. C'est pourquoi la contention est considérée comme indispensable.",
              },
              {
                question:
                  "Le fil de contention peut-il gêner le brossage ?",
                answer:
                  "Le fil nécessite un peu d'attention supplémentaire lors du brossage. Il faut bien nettoyer autour et en dessous du fil avec du fil dentaire spécial ou un hydropulseur. Avec l'habitude, cela devient un geste rapide et naturel.",
              },
              {
                question:
                  "Faut-il continuer à consulter pendant la phase de contention ?",
                answer:
                  "Oui, des rendez-vous de contrôle sont programmés régulièrement (tous les 6 mois à 1 an) pour vérifier le bon état du fil collé, l'adaptation de la gouttière et la stabilité de l'alignement. Ces visites sont essentielles pour détecter et corriger tout problème précocement.",
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
