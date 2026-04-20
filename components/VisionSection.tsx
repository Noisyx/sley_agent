export default function VisionSection() {
  return (
    <section className="py-32 bg-gray-50 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-500 italic mb-8">
          Imaginez...
        </h2>
        <p className="text-2xl md:text-4xl font-medium text-gray-900 leading-snug">
          Vous recevez des messages toute la journée. Et chacun reçoit une réponse immédiate. Vos clients pensent que vous êtes ultra professionnel. <span className="text-green-600 font-bold">Pendant que tout est automatisé.</span>
        </p>
      </div>
      
      {/* Abstract blurred blobs for background */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-64 h-64 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-64 h-64 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '2s' }}></div>
    </section>
  );
}
