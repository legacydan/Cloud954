export default function COAPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 min-h-[80vh] text-white">
      <div className="text-center mb-16 relative z-10 mt-10">
        <h1 className="text-5xl md:text-7xl font-graffiti text-white mb-6">Certificates of Analysis</h1>
        <p className="text-xl text-gray-300 font-light max-w-2xl mx-auto mb-8">
          Quality You Can Trust. Transparency You Deserve.
        </p>
        <div className="w-24 h-1 bg-white mx-auto rounded"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center max-w-4xl mx-auto relative z-10">
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-graffiti text-white">Lab Tested Excellence</h2>
          <p className="text-lg text-gray-300 leading-relaxed font-light">
            At Cloud954, we prioritize your wellness and guarantee that every product on our shelves meets the highest standards. We strictly stock products that feature a rigorous Certificate of Analysis (COA).
          </p>
          <p className="text-lg text-gray-300 leading-relaxed font-light">
            A COA ensures that our inventory is thoroughly tested by third-party laboratories for purity, potency, and safety—giving you complete confidence and peace of mind with every purchase.
          </p>
          
          <div className="pt-4">
            <a 
              href="http://qrco.de/bdBhjK"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-white text-black px-8 py-4 rounded-full font-bold text-sm transition-all uppercase tracking-widest shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:scale-105"
            >
              <span>View Core Reports</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                <polyline points="15 3 21 3 21 9"/>
                <line x1="10" y1="14" x2="21" y2="3"/>
              </svg>
            </a>
          </div>
        </div>

        <div className="bg-black/40 border border-white/10 p-8 rounded-3xl shadow-[0_0_30px_rgba(255,255,255,0.05)] relative overflow-hidden group flex flex-col items-center text-center justify-center min-h-[350px]">
          <div className="absolute inset-0 opacity-10 bg-[url('/assets/cloud954-logo.png')] bg-center bg-no-repeat bg-contain blur-sm"></div>
          <div className="relative z-10">
            <div className="p-4 bg-white/10 rounded-full border border-white/20 inline-block mb-6 shadow-[0_0_30px_rgba(255,255,255,0.1)]">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <path d="M9 15L11 17L15 13"></path>
              </svg>
            </div>
            <h3 className="text-2xl font-bold uppercase tracking-widest text-white mb-2">Inventory Data</h3>
            <p className="text-gray-400">Authentic lab results verifying purity and compliance.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
