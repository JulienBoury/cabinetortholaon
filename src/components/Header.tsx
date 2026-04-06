"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const fichesItems = [
  { label: "Aligneurs transparents", href: "/conseils/aligneurs-transparents" },
  { label: "Motion Carrière", href: "/conseils/motion-carriere-appareil" },
  { label: "TIM 2 et TIM 3", href: "/conseils/tim-2-tim-3-tractions-intermaxillaires" },
  { label: "Hyperpropulseur", href: "/conseils/hyperpropulseur" },
  { label: "Quad Helix", href: "/conseils/quad-helix" },
  { label: "Disjoncteur", href: "/conseils/disjoncteur" },
  { label: "PMRI", href: "/conseils/plan-morsure-retro-incisif" },
  { label: "Enveloppe linguale nocturne", href: "/conseils/enveloppe-linguale-nocturne" },
  { label: "Plaque d'expansion", href: "/conseils/plaque-expansion" },
  { label: "Arc de Nance", href: "/conseils/arc-de-nance" },
  { label: "Arc lingual", href: "/conseils/arc-lingual" },
  { label: "Minivis orthodontiques", href: "/conseils/minivis-orthodontiques" },
  { label: "Multi-bagues partielles", href: "/conseils/multi-bagues-partielles" },
  { label: "Stripping (IPR)", href: "/conseils/stripping-ipr" },
];

const conseilsItems = [
  { label: "Suivi à distance", href: "/dentapoche" },
  { label: "Hygiène & Alimentation", href: "/conseils/hygiene-alimentation" },
  { label: "Multi-attaches et Chirurgie", href: "/conseils/multi-attaches-chirurgie" },
  { label: "Tarifs & remboursements", href: "/conseils/remboursement-orthodontie" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="OrthoLaon - Cabinet d'Orthodontie à Laon"
              width={180}
              height={60}
              className="h-10 sm:h-12 w-auto"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {/* Traitements */}
            <div className="relative group">
              <button className="px-3 py-2 text-sm font-medium text-dark hover:text-primary transition-colors">
                Traitements
              </button>
              <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="bg-white rounded-lg shadow-lg border border-gray-100 py-2 w-56">
                  <Link href="/orthodontie-enfant" className="block px-4 py-2 text-sm text-dark hover:bg-light hover:text-primary">
                    Orthodontie enfant
                  </Link>
                  <Link href="/orthodontie-adolescent" className="block px-4 py-2 text-sm text-dark hover:bg-light hover:text-primary">
                    Orthodontie adolescent
                  </Link>
                  <Link href="/orthodontie-adulte" className="block px-4 py-2 text-sm text-dark hover:bg-light hover:text-primary">
                    Orthodontie adulte
                  </Link>
                </div>
              </div>
            </div>

            {/* Espace patient */}
            <div className="relative group">
              <button className="px-3 py-2 text-sm font-medium text-dark hover:text-primary transition-colors">
                Espace patient
              </button>
              <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="bg-white rounded-lg shadow-lg border border-gray-100 py-2 w-64">
                  <Link href="/cabinet" className="block px-4 py-2 text-sm text-dark hover:bg-light hover:text-primary">
                    Notre philosophie
                  </Link>
                  <div className="relative group/sub">
                    <button className="w-full text-left px-4 py-2 text-sm text-dark hover:bg-light hover:text-primary flex items-center justify-between">
                      Fiches pratiques
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                    </button>
                    <div className="absolute left-full top-0 pl-2 opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-200">
                      <div className="bg-white rounded-lg shadow-lg border border-gray-100 py-2 w-64 max-h-96 overflow-y-auto">
                        {fichesItems.map((item) => (
                          <Link key={item.href} href={item.href} className="block px-4 py-2 text-sm text-dark hover:bg-light hover:text-primary">
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="relative group/sub">
                    <button className="w-full text-left px-4 py-2 text-sm text-dark hover:bg-light hover:text-primary flex items-center justify-between">
                      Nos conseils
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                    </button>
                    <div className="absolute left-full top-0 pl-2 opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-200">
                      <div className="bg-white rounded-lg shadow-lg border border-gray-100 py-2 w-64">
                        {conseilsItems.map((item) => (
                          <Link key={item.href} href={item.href} className="block px-4 py-2 text-sm text-dark hover:bg-light hover:text-primary">
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                  <Link href="/faq" className="block px-4 py-2 text-sm text-dark hover:bg-light hover:text-primary">
                    FAQ
                  </Link>
                </div>
              </div>
            </div>

            <Link href="/parcours-de-soin" className="px-3 py-2 text-sm font-medium text-dark hover:text-primary transition-colors">
              Parcours de soin
            </Link>
            <Link href="/#acces" className="px-3 py-2 text-sm font-medium text-dark hover:text-primary transition-colors">
              Accès
            </Link>
          </nav>

          {/* CTA buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a href="tel:0323233545" className="text-sm font-medium text-dark hover:text-primary transition-colors">
              03 23 23 35 45
            </a>
            <Link
              href="/rendez-vous"
              className="bg-primary hover:bg-primary-dark text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-colors"
            >
              RDV en ligne
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-dark"
            aria-label="Menu"
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 max-h-[80vh] overflow-y-auto">
          <div className="px-4 py-4 space-y-1">
            {/* Traitements */}
            <button
              onClick={() => toggleDropdown("traitements")}
              className="w-full text-left px-3 py-2 text-sm font-medium text-dark"
            >
              Traitements
            </button>
            {openDropdown === "traitements" && (
              <div className="pl-6 space-y-1">
                <Link href="/orthodontie-enfant" onClick={() => setMobileOpen(false)} className="block px-3 py-2 text-sm text-dark hover:text-primary">Orthodontie enfant</Link>
                <Link href="/orthodontie-adolescent" onClick={() => setMobileOpen(false)} className="block px-3 py-2 text-sm text-dark hover:text-primary">Orthodontie adolescent</Link>
                <Link href="/orthodontie-adulte" onClick={() => setMobileOpen(false)} className="block px-3 py-2 text-sm text-dark hover:text-primary">Orthodontie adulte</Link>
              </div>
            )}

            {/* Espace patient */}
            <button
              onClick={() => toggleDropdown("patient")}
              className="w-full text-left px-3 py-2 text-sm font-medium text-dark"
            >
              Espace patient
            </button>
            {openDropdown === "patient" && (
              <div className="pl-6 space-y-1">
                <Link href="/cabinet" onClick={() => setMobileOpen(false)} className="block px-3 py-2 text-sm text-dark hover:text-primary">Notre philosophie</Link>
                <Link href="/fiches-pratiques" onClick={() => setMobileOpen(false)} className="block px-3 py-2 text-sm text-dark hover:text-primary">Fiches pratiques</Link>
                <Link href="/nos-conseils" onClick={() => setMobileOpen(false)} className="block px-3 py-2 text-sm text-dark hover:text-primary">Nos conseils</Link>
                <Link href="/faq" onClick={() => setMobileOpen(false)} className="block px-3 py-2 text-sm text-dark hover:text-primary">FAQ</Link>
              </div>
            )}

            <Link href="/parcours-de-soin" onClick={() => setMobileOpen(false)} className="block px-3 py-2 text-sm font-medium text-dark hover:text-primary">
              Parcours de soin
            </Link>
            <Link href="/#acces" onClick={() => setMobileOpen(false)} className="block px-3 py-2 text-sm font-medium text-dark hover:text-primary">
              Accès
            </Link>

            <div className="pt-4 space-y-3 border-t border-gray-100">
              <a href="tel:0323233545" className="block text-center text-sm font-medium text-dark">
                03 23 23 35 45
              </a>
              <Link
                href="/rendez-vous"
                onClick={() => setMobileOpen(false)}
                className="block text-center bg-primary text-white px-5 py-2.5 rounded-full text-sm font-semibold"
              >
                RDV en ligne
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
