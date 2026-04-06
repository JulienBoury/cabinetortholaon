import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rendez-vous en ligne",
};

export default function RendezVousPage() {
  return (
    <>
      {/* ───────────── HERO ───────────── */}
      <section className="bg-gradient-to-br from-accent via-dark to-accent text-white py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <div className="section-divider mx-auto mb-6" />
          <h1 className="text-4xl md:text-6xl font-bold leading-tight font-[family-name:var(--font-heading)]">
            Rendez-vous en ligne
          </h1>
        </div>
      </section>

      {/* ───────────── CONTACT INFO ───────────── */}
      <section className="py-16 sm:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <div className="section-divider mx-auto mb-6" />
          <h2 className="text-2xl sm:text-3xl font-bold text-dark mb-6 font-[family-name:var(--font-heading)]">
            Prenez rendez-vous
          </h2>
          <p className="text-muted text-lg leading-relaxed mb-4">
            Pour prendre rendez-vous, vous pouvez nous contacter par téléphone
            ou utiliser notre système de réservation en ligne.
          </p>
          <p className="text-muted text-lg leading-relaxed mb-8">
            Notre équipe se tient à votre disposition pour vous accueillir dans
            les meilleures conditions.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            <div className="bg-warm rounded-2xl p-8 shadow-sm">
              <div className="flex items-center justify-center gap-3 mb-2">
                <svg className="w-5 h-5 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <h3 className="text-lg font-semibold text-dark font-[family-name:var(--font-heading)]">
                  Téléphone
                </h3>
              </div>
              <a
                href="tel:0323233545"
                className="text-primary text-xl font-semibold hover:underline"
              >
                03 23 23 35 45
              </a>
            </div>
            <div className="bg-warm rounded-2xl p-8 shadow-sm">
              <div className="flex items-center justify-center gap-3 mb-2">
                <svg className="w-5 h-5 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <h3 className="text-lg font-semibold text-dark font-[family-name:var(--font-heading)]">
                  Adresse
                </h3>
              </div>
              <p className="text-muted">35 bis rue du Colombier</p>
              <p className="text-muted">02000 Laon</p>
            </div>
          </div>

          <a
            href="tel:0323233545"
            className="inline-block rounded-full bg-primary text-white font-semibold px-10 py-3 hover:bg-primary/90 transition shadow-md hover:shadow-lg"
          >
            Appeler le cabinet &rarr;
          </a>
        </div>
      </section>

      {/* ───────────── MAP ───────────── */}
      <section className="pb-16 sm:pb-24 bg-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-16 sm:pt-24">
          <div className="section-divider mx-auto mb-6" />
          <h2 className="text-2xl sm:text-3xl font-bold text-dark text-center mb-8 font-[family-name:var(--font-heading)]">
            Nous trouver
          </h2>
          <div className="w-full aspect-[16/9] rounded-2xl overflow-hidden shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2574.0!2d3.6244!3d49.5633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e82b4c0b0b0b0b%3A0x0!2s35+bis+Rue+du+Colombier%2C+02000+Laon!5e0!3m2!1sfr!2sfr!4v1700000000000!5m2!1sfr!2sfr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Cabinet Boury et Associés - 35 bis rue du Colombier, 02000 Laon"
            />
          </div>
        </div>
      </section>
    </>
  );
}
