import Image from "next/image";

export default function MediaPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 min-h-[80vh] text-white">
      <div className="text-center mb-16 relative z-10 mt-10">
        <h1 className="text-5xl md:text-7xl font-graffiti text-white mb-6">Culture & Media</h1>
        <p className="text-xl text-gray-300 font-light max-w-2xl mx-auto mb-8">
          What we've been doing at the Cloud. A look into our community, events, and the lifestyle.
        </p>
        <div className="w-24 h-1 bg-white mx-auto rounded"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
        {/* Placeholder Video/Photo 1 */}
        <div className="bg-black/40 border border-white/10 rounded-2xl overflow-hidden group shadow-[0_0_20px_rgba(255,255,255,0.05)] cursor-pointer">
          <div className="aspect-[4/5] relative bg-white/5 flex items-center justify-center">
            <span className="text-gray-500 font-bold uppercase tracking-widest text-sm">Media Loading...</span>
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
          </div>
        </div>

        {/* Placeholder Video/Photo 2 */}
        <div className="bg-black/40 border border-white/10 rounded-2xl overflow-hidden group shadow-[0_0_20px_rgba(255,255,255,0.05)] cursor-pointer">
          <div className="aspect-[4/5] relative bg-white/5 flex items-center justify-center">
            <span className="text-gray-500 font-bold uppercase tracking-widest text-sm">Media Loading...</span>
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
          </div>
        </div>

        {/* Placeholder Video/Photo 3 */}
        <div className="bg-black/40 border border-white/10 rounded-2xl overflow-hidden group shadow-[0_0_20px_rgba(255,255,255,0.05)] cursor-pointer">
          <div className="aspect-[4/5] relative bg-white/5 flex items-center justify-center">
            <span className="text-gray-500 font-bold uppercase tracking-widest text-sm">Media Loading...</span>
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
          </div>
        </div>

        {/* Placeholder Video/Photo 4 */}
        <div className="bg-black/40 border border-white/10 rounded-2xl overflow-hidden group shadow-[0_0_20px_rgba(255,255,255,0.05)] cursor-pointer">
          <div className="aspect-[4/5] relative bg-white/5 flex items-center justify-center">
            <span className="text-gray-500 font-bold uppercase tracking-widest text-sm">Media Loading...</span>
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
          </div>
        </div>

        {/* Placeholder Video/Photo 5 */}
        <div className="bg-black/40 border border-white/10 rounded-2xl overflow-hidden group shadow-[0_0_20px_rgba(255,255,255,0.05)] cursor-pointer">
          <div className="aspect-[4/5] relative bg-white/5 flex items-center justify-center">
            <span className="text-gray-500 font-bold uppercase tracking-widest text-sm">Media Loading...</span>
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
          </div>
        </div>

        {/* Placeholder Video/Photo 6 */}
        <div className="bg-black/40 border border-white/10 rounded-2xl overflow-hidden group shadow-[0_0_20px_rgba(255,255,255,0.05)] cursor-pointer">
          <div className="aspect-[4/5] relative bg-white/5 flex items-center justify-center">
            <span className="text-gray-500 font-bold uppercase tracking-widest text-sm">Media Loading...</span>
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
