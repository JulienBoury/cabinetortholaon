import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Dentapoche - Suivi orthodontique à distance",
};

const useCases = [
  "Aligneurs",
  "Vérification de la position du port d'élastiques",
  "Surveillance de l'hygiène",
  "Vérification rapide",
];

const benefits = [
  "Plus de précision dans le suivi",
  "Moins de déplacements inutiles",
  "Un accompagnement continu entre les rendez-vous",
];

export default function DentapochePage() {
  return (
    <>
      {/* ───────────── HERO ───────────── */}
      <section className="bg-primary text-white py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-3xl sm:text-5xl font-bold leading-tight">
            Votre traitement, suivi depuis chez vous
          </h1>
        </div>
      </section>

      {/* ───────────── CONTENT ───────────── */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text content */}
            <div>
              <p className="text-gray-600 text-lg leading-relaxed mb-10">
                Dentapoche permet d&apos;envoyer des photos, surveiller la
                progression et ajuster les consignes entre vos rendez-vous au
                cabinet.
              </p>

              {/* Utile pour */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-dark mb-4">
                  Utile pour
                </h2>
                <ul className="space-y-3">
                  {useCases.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-1.5 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Ce que cela change */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-dark mb-4">
                  Ce que cela change
                </h2>
                <ul className="space-y-3">
                  {benefits.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-1.5 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* App buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://apps.apple.com/fr/app/dentapoche/id907691498"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block rounded-full bg-dark text-white font-semibold px-8 py-3 text-center hover:bg-dark/90 transition"
                >
                  App Store
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=fr.dentapoche"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block rounded-full bg-dark text-white font-semibold px-8 py-3 text-center hover:bg-dark/90 transition"
                >
                  Google Play
                </a>
              </div>
            </div>

            {/* Image */}
            <div className="flex justify-center">
              <Image
                src="/images/2025/11/dentapoche.webp"
                alt="Application Dentapoche - suivi orthodontique à distance"
                width={400}
                height={400}
                className="rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
