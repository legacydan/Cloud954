export default function MerchPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 min-h-[80vh] text-white flex flex-col items-center justify-center">
      <div className="text-center mb-16 relative z-10 mt-10">
        <h1 className="text-5xl md:text-7xl font-graffiti text-white mb-6">Cloud954 Merch</h1>
        <p className="text-xl text-gray-300 font-light max-w-2xl mx-auto mb-8">
          Premium apparel and accessories representing the locals.
        </p>
        <div className="w-24 h-1 bg-white mx-auto rounded mb-12"></div>
      </div>

      <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-10 md:p-16 border border-white/10 text-center relative z-10 shadow-2xl max-w-3xl w-full">
        <div className="mb-8">
          <span className="inline-block p-4 bg-white/10 rounded-full border border-white/20 shadow-[0_0_20px_rgba(255,255,255,0.1)]">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-white">
              <path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z"/>
            </svg>
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl font-graffiti mb-6 text-white">Full Collection Coming Soon</h2>
        <p className="text-lg text-gray-400 font-light mb-10 leading-relaxed">
          We are currently building our custom merchandise infrastructure to provide you with the best experience. Soon you will be able to order official Cloud954 gear directly.
        </p>
        
        <a 
          href="#"
          className="inline-block bg-white text-black px-8 py-4 rounded-full font-bold text-sm transition-all uppercase tracking-widest shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:scale-105 pointer-events-none opacity-50"
        >
          Check Back Soon
        </a>
      </div>
    </div>
  );
}
