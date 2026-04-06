import Link from "next/link";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 min-h-[80vh] text-white">
      <div className="text-center mb-16 relative z-10 mt-10">
        <h1 className="text-5xl md:text-7xl font-graffiti text-white mb-6">About Cloud954</h1>
        <div className="w-24 h-1 bg-white mx-auto rounded"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-32 relative z-10">
        <div>
          <div className="aspect-[4/3] bg-black/40 rounded-2xl relative overflow-hidden flex items-center justify-center border border-white/10 shadow-[0_0_40px_rgba(255,255,255,0.05)]">
            <Image 
              src="/images/storefront.jpg" 
              alt="Cloud954 Storefront Downtown Ft Lauderdale" 
              fill 
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-graffiti text-white">The Local Standard</h2>
          <p className="text-xl text-gray-300 leading-relaxed font-light">
            Established in Fort Lauderdale, Cloud 9five4 has been serving the South Florida community for years. 
            We pride ourselves on offering the highest quality products—from exclusive vapes and potent CBD products to authentic hand-blown glass and premium tobacco.
          </p>
          <p className="text-xl text-gray-300 leading-relaxed font-light">
            We are more than just a smoke shop; we are a hub for the community right in the downtown circuit. Whether you're looking to elevate your experience or find reliable wellness alternatives, our knowledgeable staff is here to guide you.
          </p>
        </div>
      </div>

      <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-10 md:p-16 mb-16 border border-white/10 text-center relative z-10 shadow-2xl">
        <h2 className="text-4xl md:text-5xl font-graffiti mb-12 text-white">How To Get Your Gear</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div className="bg-black/40 p-8 rounded-2xl border border-white/10 hover:bg-white/10 hover:-translate-y-2 transition-all duration-300">
            <h3 className="text-xl font-bold mb-4 uppercase tracking-widest text-white">In-Store</h3>
            <p className="text-gray-400 font-medium">Visit our Fort Lauderdale location. Come say hi and check out our full inventory in person.</p>
          </div>
          <div className="bg-black/40 p-8 rounded-2xl border border-white/10 hover:bg-white/10 hover:-translate-y-2 transition-all duration-300">
            <h3 className="text-xl font-bold mb-4 uppercase tracking-widest text-white">Local Delivery</h3>
            <p className="text-gray-400 font-medium">Can't make it? We offer fast local delivery within the Fort Lauderdale area via Sauce (Uber Eats).</p>
          </div>
          <div className="bg-black/40 p-8 rounded-2xl border border-white/10 hover:bg-white/10 hover:-translate-y-2 transition-all duration-300">
            <h3 className="text-xl font-bold mb-4 uppercase tracking-widest text-white">Nationwide</h3>
            <p className="text-gray-400 font-medium">We ship nationwide — online ordering and mailing capabilities coming very soon.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
