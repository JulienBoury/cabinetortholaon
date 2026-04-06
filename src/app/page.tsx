import Image from "next/image";
import Link from "next/link";

const doctors = [
  {
    name: "Dr Olivier Boury",
    image: "/photos/equipe/olivier-boury.jpg",
    slug: "/equipe/docteur-olivier-boury",
    qualifications: [
      "Chirurgien dentiste spécialiste qualifié en orthopédie dento-faciale",
      "CECSMO Reims",
      "Ancien assistant hospitalo universitaire",
      "D.U. Fentes Labio-Palatines de Strasbourg",
    ],
  },
  {
    name: "Dr Julien Boury",
    image: "/photos/equipe/julien-boury.jpg",
    slug: "/equipe/docteur-julien-boury",
    qualifications: [
      "Chirurgien dentiste",
      "D.F.C.D. de Reims",
      "D.U. Fentes Labio-Palatines de Strasbourg",
    ],
  },
  {
    name: "Dr Louise Lamarche",
    image: "/photos/equipe/louise-lamarche.jpg",
    slug: "/equipe/docteur-louise-lamarche",
    qualifications: [
      "Chirurgien dentiste",
      "D.F.C.D. de Reims",
      "Master de Formation Approfondie en Sciences Odontologiques",
      "D.U. Fentes Labio-Palatines de Strasbourg",
    ],
  },
];

const technologies = [
  "Scanner 3D sans empreinte pâteuse",
  "Empreintes numériques",
  "Aligneurs transparents pour une discrétion maximale",
  "Bagues autoligaturantes : confort et efficacité",
  "Planification numérique",
  "Suivi à distance via Dentapoche",
];

const values = [
  "l'écoute",
  "la pédagogie",
  "la douceur des soins",
  "la transparence dans les choix thérapeutiques",
  "l'accompagnement à chaque étape",
];

const treatments = [
  {
    number: "01",
    title: "Orthodontie enfant",
    description:
      "Interception, expansion, guidage de croissance, prévention des malpositions.",
    link: "/orthodontie-enfant",
  },
  {
    number: "02",
    title: "Orthodontie adolescent",
    description:
      "Alignement complet, corrections d'occlusion, esthétique, confort.",
    link: "/orthodontie-adolescent",
  },
  {
    number: "03",
    title: "Orthodontie adulte",
    description:
      "Solutions discrètes, aligneurs, multi-attaches céramiques, traitements combinés chirurgie + orthodontie.",
    link: "/orthodontie-adulte",
  },
];

const techCards = [
  {
    number: "01",
    title: "Radio panoramique 3D",
    description:
      "Imagerie tridimensionnelle pour un diagnostic précis et complet de votre dentition et de vos structures osseuses.",
    image: "/images/2025/08/radiopanoramiqe-3d.webp",
  },
  {
    number: "02",
    title: "3Shape",
    description:
      "Scanner intra-oral de dernière génération pour des empreintes numériques rapides, précises et confortables.",
    image: "/images/2025/08/camera-3d-shape.webp",
  },
  {
    number: "03",
    title: "Photo",
    description:
      "Studio photo intégré pour un suivi visuel rigoureux de l'évolution de votre traitement.",
    image: "/images/2025/08/studio-photo.webp",
  },
  {
    number: "04",
    title: "Imprimante 3D",
    description:
      "Fabrication sur place de modèles et d'appareils orthodontiques pour une prise en charge rapide et personnalisée.",
    image: "/images/2025/08/imprimante-3d.webp",
  },
  {
    number: "05",
    title: "Bloc de stérilisation",
    description:
      "Protocole de stérilisation rigoureux garantissant une hygiène irréprochable et la sécurité de chaque patient.",
    image: "/images/2025/08/sterilisation.webp",
  },
];

const patientCards = [
  { title: "Fiches pratiques", link: "/fiches-pratiques" },
  { title: "Nos conseils", link: "/nos-conseils" },
  { title: "FAQ", link: "/faq" },
];

export default function HomePage() {
  return (
    <main>
      {/* ───────────── 1. HERO SECTION ───────────── */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        {/* Background image */}
        <Image
          src="/photos/cabinet/exterieur-cab.jpg"
          alt="Cabinet d'orthodontie Boury & Associés"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-dark/80 via-dark/60 to-dark/30" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-24 sm:py-32 w-full">
          <div className="max-w-2xl">
            <p className="text-primary font-semibold text-sm sm:text-base uppercase tracking-widest mb-4">
              Cabinet Boury &amp; Associés
            </p>
            <h1 className="text-4xl sm:text-6xl font-bold leading-tight text-white mb-6">
              Orthodontie moderne à Laon
            </h1>
            <p className="text-lg sm:text-xl text-white/80 mb-3">
              35 bis rue du Colombier, 02 000 Laon
            </p>
            <p className="text-lg sm:text-xl text-white/80 mb-10">
              <a href="tel:0323233545" className="hover:text-white transition-colors">
                03 23 23 35 45
              </a>
            </p>
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <Link
                href="/rendez-vous"
                className="inline-block rounded-full bg-primary hover:bg-primary-dark text-white font-semibold px-8 py-3.5 transition-colors shadow-lg"
              >
                RDV en ligne
              </Link>
              <a
                href="https://www.google.com/maps/place/35+bis+Rue+du+Colombier,+02000+Laon"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-full border-2 border-white/40 text-white font-semibold px-8 py-3.5 hover:bg-white/10 backdrop-blur-sm transition"
              >
                Nous trouver
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────── 2. ABOUT / PRESENTATION ───────────── */}
      <section id="presentation" className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-dark mb-6">
                Bienvenue au Cabinet Boury &amp; Associés
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                Un espace dédié exclusivement à l&apos;orthodontie pour enfants,
                adolescents et adultes, où la technologie rencontre une approche
                humaine et bienveillante.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Notre mission : corriger, harmoniser et préserver votre sourire,
                permet souvent acquérir confiance en soi et rend la personne plus
                chaleureuse.
              </p>
            </div>
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="/photos/cabinet/photo-accueil.jpg"
                alt="Cabinet d'orthodontie Boury et Associés à Laon"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ───────────── 3. TEAM SECTION ───────────── */}
      <section className="bg-light py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-dark text-center mb-12">
            Une équipe dédiée à votre confort
          </h2>

          {/* Technologies & Values columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            {/* Technologies */}
            <div>
              <h3 className="text-xl font-semibold text-dark mb-4">
                Nos technologies
              </h3>
              <ul className="space-y-3">
                {technologies.map((tech) => (
                  <li key={tech} className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                    <span className="text-gray-600">{tech}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Values */}
            <div>
              <h3 className="text-xl font-semibold text-dark mb-4">
                Nos valeurs
              </h3>
              <ul className="space-y-3">
                {values.map((value) => (
                  <li key={value} className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                    <span className="text-gray-600">{value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Doctor cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {doctors.map((doctor) => (
              <Link
                key={doctor.slug}
                href={doctor.slug}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition"
              >
                <div className="relative w-full aspect-[3/4]">
                  <Image
                    src={doctor.image}
                    alt={doctor.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-dark mb-3">
                    {doctor.name}
                  </h3>
                  <ul className="space-y-1">
                    {doctor.qualifications.map((q) => (
                      <li key={q} className="text-sm text-gray-500">
                        {q}
                      </li>
                    ))}
                  </ul>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────── 4. TREATMENTS ───────────── */}
      <section id="traitements" className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-dark text-center mb-12">
            Nos expertises
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {treatments.map((t) => (
              <Link
                key={t.number}
                href={t.link}
                className="group block bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition"
              >
                <span className="text-4xl font-bold text-primary/30 block mb-4">
                  {t.number}
                </span>
                <h3 className="text-xl font-bold text-dark mb-3 group-hover:text-primary transition-colors">
                  {t.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {t.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────── GALERIE ───────────── */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-dark text-center mb-4">
            Galerie
          </h2>
          <p className="text-gray-600 text-center text-lg mb-12">
            Nous vous invitons à découvrir notre cabinet en quelques photos.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "/photos/cabinet/MXL01066-HDR.jpg",
              "/photos/cabinet/MXL00951-HDR.jpg",
              "/photos/cabinet/MXL01048-HDR.jpg",
              "/photos/cabinet/MXL01033-HDR.jpg",
              "/photos/cabinet/MXL01075-HDR.jpg",
              "/photos/cabinet/MXL01053-HDR.jpg",
              "/photos/cabinet/MXL01090-HDR.jpg",
              "/photos/cabinet/MXL01078-HDR.jpg",
              "/photos/cabinet/MXL01446.jpg",
              "/photos/cabinet/MXL01451.jpg",
              "/photos/cabinet/MXL01425.jpg",
              "/photos/cabinet/MXL01424.jpg",
            ].map((src, i) => (
              <div
                key={i}
                className="relative aspect-[4/3] rounded-xl overflow-hidden"
              >
                <Image
                  src={src}
                  alt={`Cabinet d'orthodontie Laon - photo ${i + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────── 5. PATIENT SPACE ───────────── */}
      <section className="bg-light py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-dark text-center mb-12">
            Espace patient
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {patientCards.map((card) => (
              <Link
                key={card.link}
                href={card.link}
                className="group flex items-center justify-center bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition"
              >
                <h3 className="text-xl font-semibold text-dark group-hover:text-primary transition-colors">
                  {card.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────── 6. TECHNOLOGIES ───────────── */}
      <section id="technologies" className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-dark text-center mb-12">
            Technologies
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {techCards.map((card) => (
              <div
                key={card.number}
                className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition"
              >
                <div className="relative w-full aspect-[16/10]">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <span className="text-3xl font-bold text-primary/30 block mb-2">
                    {card.number}
                  </span>
                  <h3 className="text-lg font-bold text-dark mb-2">
                    {card.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────── 7. DENTAPOCHE ───────────── */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-dark mb-4">
            Dentapoche
          </h2>
          <h3 className="text-xl text-primary font-semibold mb-4">
            Suivez vos rendez-vous
          </h3>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            Retrouvez le suivi de votre prise en charge au sein de notre cabinet
            sur l&apos;application mobile Dentapoche !
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://apps.apple.com/fr/app/dentapoche/id907691498"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full bg-dark text-white font-semibold px-8 py-3 hover:bg-dark/90 transition"
            >
              App Store
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=fr.dentapoche"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full bg-dark text-white font-semibold px-8 py-3 hover:bg-dark/90 transition"
            >
              Google Play
            </a>
          </div>
        </div>
      </section>

      {/* ───────────── 8. ODF SECTION ───────────── */}
      <section className="bg-primary text-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8">
            L&apos;art et la science du sourire
          </h2>
          <div className="max-w-3xl mx-auto space-y-6 text-lg leading-relaxed text-white/90">
            <p>
              L&apos;orthopédie dento-faciale (ODF) est la spécialité dentaire
              consacrée au diagnostic, à la prévention et au traitement des
              anomalies de position des dents et des mâchoires. Elle vise à
              rétablir un alignement harmonieux de la dentition, une occlusion
              fonctionnelle et un équilibre esthétique du visage.
            </p>
            <p>
              Au-delà de l&apos;aspect esthétique, l&apos;orthodontie améliore la
              mastication, la phonation et la respiration, tout en prévenant
              l&apos;usure prématurée des dents et les troubles de
              l&apos;articulation temporo-mandibulaire. C&apos;est une discipline
              à la croisée de l&apos;art et de la science, au service de votre
              santé et de votre sourire.
            </p>
          </div>
        </div>
      </section>

      {/* ───────────── 9. ACCESS ───────────── */}
      <section id="acces" className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-dark text-center mb-12">
            Accès
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold text-dark mb-4">Adresse</h3>
              <p className="text-gray-600 text-lg mb-2">
                35 bis rue du Colombier
              </p>
              <p className="text-gray-600 text-lg mb-6">02 000 Laon</p>
              <h3 className="text-xl font-semibold text-dark mb-4">
                Téléphone
              </h3>
              <p className="text-gray-600 text-lg">
                <a href="tel:0323233545" className="text-primary hover:underline">
                  03 23 23 35 45
                </a>
              </p>
            </div>
            <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2574.0!2d3.6244!3d49.5633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e82b4c0b0b0b0b%3A0x0!2s35+bis+Rue+du+Colombier%2C+02000+Laon!5e0!3m2!1sfr!2sfr!4v1700000000000!5m2!1sfr!2sfr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Cabinet Boury et Associés - Google Maps"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ───────────── 10. CONTACT FORM ───────────── */}
      <section id="contact" className="bg-light py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-dark text-center mb-4">
              Formulaire de contact
            </h2>
            <p className="text-gray-600 text-center text-lg mb-10 leading-relaxed">
              Contactez-nous via ce formulaire et notre équipe vous recontactera
              dans les plus brefs délais.
            </p>
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="nom"
                  className="block text-sm font-medium text-dark mb-2"
                >
                  Nom
                </label>
                <input
                  type="text"
                  id="nom"
                  name="nom"
                  required
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 text-dark placeholder-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
                  placeholder="Votre nom"
                />
              </div>
              <div>
                <label
                  htmlFor="telephone"
                  className="block text-sm font-medium text-dark mb-2"
                >
                  Téléphone
                </label>
                <input
                  type="tel"
                  id="telephone"
                  name="telephone"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 text-dark placeholder-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
                  placeholder="Votre numéro de téléphone"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-dark mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 text-dark placeholder-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
                  placeholder="Votre adresse email"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-dark mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 text-dark placeholder-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition resize-y"
                  placeholder="Votre message"
                />
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="inline-block rounded-full bg-primary text-white font-semibold px-10 py-3 hover:bg-primary/90 transition"
                >
                  Envoyer
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
