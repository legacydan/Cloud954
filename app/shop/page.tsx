"use client";

import { Search } from "lucide-react";
import { motion } from "framer-motion";

export default function ShopPage() {
  // Array of 12 placeholder items. Client to use headless CMS in phase 2.
  const placeholders = Array.from({ length: 12 }).map((_, i) => ({
    id: i,
    name: `Premium Product ${i + 1}`,
    category: ["vapes", "cbd", "accessories", "tobacco"][i % 4],
    price: (Math.random() * 50 + 10).toFixed(2),
  }));

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 min-h-screen text-white relative z-10">
      <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8 mt-10">
        <div>
          <h1 className="text-5xl md:text-7xl font-graffiti text-white mb-4">Shop Online</h1>
          <div className="w-16 h-1 bg-white rounded mb-6 drop-shadow-[0_0_10px_white]"></div>
          <p className="text-gray-300 font-light text-lg">Browse our curated collection of premium products.</p>
        </div>
        
        <div className="relative w-full md:w-auto text-white">
          <input 
            type="text" 
            placeholder="Search products..." 
            className="w-full md:w-80 pl-12 pr-6 py-4 bg-black/50 border border-white/10 rounded-full focus:outline-none focus:ring-2 focus:ring-white focus:bg-black/80 transition-all font-light placeholder-gray-500 shadow-[0_0_15px_rgba(255,255,255,0.02)]"
          />
          <Search className="absolute left-4 top-4 text-gray-400" size={20} />
        </div>
      </div>

      {/* Tabs */}
      <div className="flex overflow-x-auto pb-6 mb-12 gap-4 no-scrollbar">
        {['All', 'Vapes', 'CBD', 'Accessories', 'Tobacco'].map((tab, i) => (
          <button 
            key={i}
            className={`px-8 py-3 rounded-full whitespace-nowrap font-bold uppercase tracking-widest text-xs transition-all duration-300 shadow-lg ${
              i === 0 
                ? 'bg-white text-black drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]' 
                : 'bg-white/5 border border-white/10 text-gray-300 hover:bg-white/15 hover:shadow-[0_0_15px_rgba(255,255,255,0.05)]'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Grid */}
      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
      >
        {placeholders.map((p) => (
          <motion.div variants={item} key={p.id} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden group hover:border-white/30 hover:-translate-y-2 transition-all duration-500 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
            <div className="aspect-[4/3] bg-black/40 relative flex items-center justify-center p-8 border-b border-white/5">
              {/* Note: Placeholder image. Real images will replace this. */}
              <div className="relative z-10 w-24 h-24 bg-white/5 rounded-full flex items-center justify-center text-gray-500 font-graffiti shadow-inner border border-white/10 group-hover:scale-110 group-hover:text-white transition-all duration-500">
                Image
              </div>
              <div className="absolute top-4 left-4 px-3 py-1.5 bg-white text-black text-[10px] uppercase font-bold tracking-widest rounded-full shadow-[0_0_10px_rgba(255,255,255,0.2)]">
                {p.category}
              </div>
            </div>
            
            <div className="p-6">
              <h3 className="font-bold text-lg text-white mb-2 tracking-wide group-hover:text-gray-300 transition-colors">{p.name}</h3>
              <p className="text-xl font-light text-gray-400 mb-6">${p.price}</p>
              
              <button className="w-full py-3 bg-white/10 hover:bg-white text-white hover:text-black rounded-xl font-bold uppercase tracking-widest text-sm transition-all duration-300 shadow-md">
                Add to Cart
              </button>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
