"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-zinc-900">
              <img src="/logo.jpeg" alt="SLEY AI Logo" className="w-10 h-10 object-contain" />
              SLEY AI
            </Link>
          </div>
          <div className="hidden md:flex space-x-8 items-center">
            <Link
              href="/#solution"
              className="text-sm font-medium text-gray-600 hover:text-green-600 transition-colors"
            >
              Produit
            </Link>
            <Link
              href="/#demos"
              className="text-sm font-medium text-gray-600 hover:text-green-600 transition-colors"
            >
              Démos
            </Link>
            <Link
              href="/#pricing"
              className="text-sm font-medium text-gray-600 hover:text-green-600 transition-colors"
            >
              Tarifs
            </Link>
            <Link
              href="/#faq"
              className="text-sm font-medium text-gray-600 hover:text-green-600 transition-colors"
            >
              FAQ
            </Link>
          </div>
          <div className="flex items-center">
            <Link
              href="/#start"
              className="hidden md:inline-flex items-center justify-center px-6 py-2.5 border border-transparent text-sm font-medium rounded-full text-white bg-[#128C7E] hover:bg-[#075E54] shadow-sm hover:shadow transition-all"
            >
              Démarrer
            </Link>

            <button
              type="button"
              className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-full border border-gray-200 bg-white/70 hover:bg-white transition-colors text-gray-700"
              aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col gap-2 rounded-2xl border border-gray-100 bg-white/90 backdrop-blur-md p-3 shadow-sm">
              <Link
                href="/#solution"
                onClick={() => setOpen(false)}
                className="px-3 py-3 rounded-xl text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                Produit
              </Link>
              <Link
                href="/#demos"
                onClick={() => setOpen(false)}
                className="px-3 py-3 rounded-xl text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                Démos
              </Link>
              <Link
                href="/#pricing"
                onClick={() => setOpen(false)}
                className="px-3 py-3 rounded-xl text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                Tarifs
              </Link>
              <Link
                href="/#faq"
                onClick={() => setOpen(false)}
                className="px-3 py-3 rounded-xl text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                FAQ
              </Link>
              <Link
                href="/offres"
                onClick={() => setOpen(false)}
                className="px-3 py-3 rounded-xl text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                Offres
              </Link>
              <Link
                href="/#start"
                onClick={() => setOpen(false)}
                className="mt-1 inline-flex items-center justify-center px-4 py-3 rounded-xl text-sm font-semibold text-white bg-[#128C7E] hover:bg-[#075E54]"
              >
                Démarrer
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
