import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rendez-vous en ligne",
};

export default function RendezVousPage() {
  return (
    <>
      {/* ───────────── HERO ───────────── */}
      <section className="bg-primary text-white py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-3xl sm:text-5xl font-bold leading-tight">
            Rendez-vous en ligne
          </h1>
        </div>
      </section>

      {/* ───────────── CONTACT INFO ───────────── */}
      <section className="py-16 sm:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-dark mb-6">
            Prenez rendez-vous
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            Pour prendre rendez-vous, vous pouvez nous contacter par téléphone
            ou utiliser notre système de réservation en ligne.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            Notre équipe se tient à votre disposition pour vous accueillir dans
            les meilleures conditions.
          </p>

          <div className="bg-white rounded-xl shadow-md p-8 mb-8">
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-dark mb-2">
                Téléphone
              </h3>
              <a
                href="tel:0323233545"
                className="text-primary text-xl font-semibold hover:underline"
              >
                03 23 23 35 45
              </a>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-dark mb-2">Adresse</h3>
              <p className="text-gray-600">35 bis rue du Colombier</p>
              <p className="text-gray-600">02000 Laon</p>
            </div>
          </div>

          <a
            href="tel:0323233545"
            className="inline-block rounded-full bg-primary text-white font-semibold px-10 py-3 hover:bg-primary/90 transition"
          >
            Appeler le cabinet
          </a>
        </div>
      </section>

      {/* ───────────── MAP ───────────── */}
      <section className="pb-16 sm:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-dark text-center mb-8">
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
