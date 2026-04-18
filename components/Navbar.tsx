import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-bold text-gray-900">
              Sley Agent
            </Link>
          </div>
          <div className="hidden md:flex space-x-8 items-center">
            <Link href="#agent" className="text-sm font-medium text-gray-600 hover:text-green-600 transition-colors">
              Expertise
            </Link>
            <Link href="#demo" className="text-sm font-medium text-gray-600 hover:text-green-600 transition-colors">
              Solutions
            </Link>
            <Link href="#cases" className="text-sm font-medium text-gray-600 hover:text-green-600 transition-colors">
              Études de cas
            </Link>
            <Link href="/offres" className="text-sm font-medium text-gray-600 hover:text-green-600 transition-colors">
              Nos offres
            </Link>
          </div>
          <div className="flex items-center">
            <Link href="#start" className="inline-flex items-center justify-center px-6 py-2.5 border border-transparent text-sm font-medium rounded-full text-white bg-green-600 hover:bg-green-700 shadow-sm hover:shadow transition-all">
              Démarrer
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
