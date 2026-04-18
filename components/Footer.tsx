import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex justify-center md:justify-start mb-6 md:mb-0">
            <span className="text-2xl font-bold text-gray-900">Sley Agent</span>
          </div>
          <div className="flex justify-center space-x-6 md:order-2">
            <Link href="#" className="text-gray-400 hover:text-green-600 transition-colors">
              Mentions légales
            </Link>
            <Link href="#" className="text-gray-400 hover:text-green-600 transition-colors">
              Politique de confidentialité
            </Link>
            <Link href="#" className="text-gray-400 hover:text-green-600 transition-colors">
              Contact
            </Link>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400 flex items-center">
            L'intelligence au service du flux.
          </p>
          <p className="text-base text-gray-400">
            &copy; {new Date().getFullYear()} Sley Consulting. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
