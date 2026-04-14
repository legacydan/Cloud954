import Image from "next/image";

export default function COAPage() {
  const coaImages = [
    "43875618_1.png", "43875619_1.png", "43875620_1.png", "43875621_1.png",
    "43875622_1.png", "43875623_1.png", "43875624_1.png", "43875625_1.png",
    "43875626_1.png", "43875627_1.png", "43875628_1.png", "48390888_1.jpg",
    "48390889_1.jpg", "48390890_1.jpg", "48390891_1.jpg", "48390892_1.jpg",
    "48390893_1.jpg", "48390894_1.jpg", "48390895_1.jpg", "48390896_1.jpg",
    "51283229_1.jpg", "51283230_1.jpg", "51283231_1.jpg", "51283232_1.jpg",
    "51283233_1.jpg", "51283234_1.jpg", "54968129_1.jpeg", "54968130_1.jpeg"
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 min-h-[80vh] text-white">
      <div className="text-center mb-16 relative z-10 mt-10">
        <h1 className="text-5xl md:text-7xl font-graffiti text-white mb-6">Certificates of Analysis</h1>
        <p className="text-xl text-gray-300 font-light max-w-2xl mx-auto mb-8">
          Authentic lab results verifying product purity, potency, and safety. Quality you can trust.
        </p>
        <div className="w-24 h-1 bg-white mx-auto rounded"></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 relative z-10">
        {coaImages.map((img, idx) => (
          <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden group shadow-[0_0_20px_rgba(255,255,255,0.05)] cursor-pointer">
            <div className="aspect-[3/4] relative bg-black/40 flex items-center justify-center p-4">
              {/* Using object-contain so the text doesn't get clipped. */}
              <Image 
                src={`/images/coa/${img}`} 
                alt={`Certificate of Analysis Report ${idx + 1}`} 
                fill 
                className="object-contain p-2 hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
