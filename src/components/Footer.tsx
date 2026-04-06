import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-dark text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Image
              src="/logo.png"
              alt="OrthoLaon"
              width={160}
              height={53}
              className="h-10 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-gray-300 text-sm leading-relaxed">
              Sourires Confiants, Soins Experts
            </p>
            <div className="mt-6 space-y-2 text-sm text-gray-300">
              <p>35 bis rue du Colombier</p>
              <p>02 000 Laon</p>
              <a href="tel:0323233545" className="block hover:text-primary transition-colors">
                03 23 23 35 45
              </a>
            </div>
          </div>

          {/* Traitements */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">
              Traitements
            </h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link href="/orthodontie-adolescent/multi-attaches-metalliques" className="hover:text-primary transition-colors">
                  Multi-attaches métalliques
                </Link>
              </li>
              <li>
                <Link href="/orthodontie-adulte/multi-attaches-ceramiques" className="hover:text-primary transition-colors">
                  Multi-attaches céramiques
                </Link>
              </li>
              <li>
                <Link href="/orthodontie-adulte/gouttieres-invisibles" className="hover:text-primary transition-colors">
                  Gouttières invisibles
                </Link>
              </li>
              <li>
                <Link href="/orthodontie-adulte/contention" className="hover:text-primary transition-colors">
                  Contention
                </Link>
              </li>
            </ul>
          </div>

          {/* Cabinet */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">
              Cabinet
            </h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link href="/parcours-de-soin" className="hover:text-primary transition-colors">
                  Parcours de soin
                </Link>
              </li>
              <li>
                <Link href="/fiches-pratiques" className="hover:text-primary transition-colors">
                  Fiches pratiques
                </Link>
              </li>
              <li>
                <Link href="/nos-conseils" className="hover:text-primary transition-colors">
                  Nos conseils
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-primary transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Conseils */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">
              Conseils
            </h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link href="/dentapoche" className="hover:text-primary transition-colors">
                  Suivi à distance
                </Link>
              </li>
              <li>
                <Link href="/conseils/hygiene-alimentation" className="hover:text-primary transition-colors">
                  Hygiène avec un appareil
                </Link>
              </li>
              <li>
                <Link href="/conseils/multi-attaches-chirurgie" className="hover:text-primary transition-colors">
                  Traitement et chirurgie
                </Link>
              </li>
              <li>
                <Link href="/conseils/remboursement-orthodontie" className="hover:text-primary transition-colors">
                  Tarifs & remboursements
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-400">
          <p>SCM OrthoLaon &copy; {new Date().getFullYear()} / Tous droits réservés</p>
          <p>
            Conception et réalisation :{" "}
            <a href="https://mediweb.fr" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              Mediweb
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
