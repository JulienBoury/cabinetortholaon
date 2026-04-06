import type { Metadata } from "next";
import Image from "next/image";
import { img } from "@/lib/utils";

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
      <section className="bg-gradient-to-br from-accent via-dark to-accent text-white py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <div className="section-divider mx-auto mb-6" />
          <h1 className="text-4xl md:text-6xl font-bold leading-tight font-[family-name:var(--font-heading)]">
            Votre traitement, suivi depuis chez vous
          </h1>
        </div>
      </section>

      {/* ───────────── CONTENT ───────────── */}
      <section className="py-16 sm:py-24 bg-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text content */}
            <div>
              <p className="text-muted text-lg leading-relaxed mb-10">
                Dentapoche permet d&apos;envoyer des photos, surveiller la
                progression et ajuster les consignes entre vos rendez-vous au
                cabinet.
              </p>

              {/* Utile pour */}
              <div className="mb-10">
                <div className="section-divider mb-6" />
                <h2 className="text-2xl font-bold text-dark mb-4 font-[family-name:var(--font-heading)]">
                  Utile pour
                </h2>
                <ul className="space-y-3">
                  {useCases.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      <span className="text-muted">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Ce que cela change */}
              <div className="mb-10">
                <div className="section-divider mb-6" />
                <h2 className="text-2xl font-bold text-dark mb-4 font-[family-name:var(--font-heading)]">
                  Ce que cela change
                </h2>
                <ul className="space-y-3">
                  {benefits.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      <span className="text-muted">{item}</span>
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
                  className="inline-block rounded-full bg-dark text-white font-semibold px-8 py-3 text-center hover:bg-dark/90 transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-1"
                >
                  App Store &rarr;
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=fr.dentapoche"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block rounded-full bg-dark text-white font-semibold px-8 py-3 text-center hover:bg-dark/90 transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-1"
                >
                  Google Play &rarr;
                </a>
              </div>
            </div>

            {/* Image */}
            <div className="flex justify-center">
              <Image
                src={img("/images/2025/11/dentapoche.webp")}
                alt="Application Dentapoche - suivi orthodontique à distance"
                width={400}
                height={400}
                className="shadow-xl rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
