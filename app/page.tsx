"use client";

import Link from "next/link";
import Image from "next/image";
import EmailCapture from "@/components/EmailCapture";
import { ArrowRight, ShoppingBag, Wind, Sparkles, Cigarette } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  const categories = [
    { name: "Premium Vapes", icon: <Wind size={32} />, href: "/shop?category=vapes", desc: "Top brands & flavors" },
    { name: "CBD & Wellness", icon: <Sparkles size={32} />, href: "/shop?category=cbd", desc: "Tinctures, gummies & more" },
    { name: "Glass & Accessories", icon: <ShoppingBag size={32} />, href: "/shop?category=accessories", desc: "Hand-blown pieces" },
    { name: "Tobacco & Wraps", icon: <Cigarette size={32} />, href: "/shop?category=tobacco", desc: "Premium selections" },
  ];

  const fadeInOffset = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white">
      
      {/* Background Graphic Layers */}
      <div className="fixed inset-0 pointer-events-none z-0">
         <Image 
            src="/images/image1.png"
            alt="Smoke Sketch 1"
            fill
            className="object-cover opacity-10 mix-blend-screen"
            style={{ maskImage: "radial-gradient(ellipse at center, black 20%, transparent 60%)", WebkitMaskImage: "radial-gradient(ellipse at center, black 20%, transparent 60%)" }}
         />
      </div>

      {/* Hero Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInOffset}
        className="w-full relative flex flex-col items-center justify-center min-h-[90vh] px-4 text-center mt-[-80px] pt-20"
      >
        <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center mt-12 sm:mt-0">
          <div className="inline-block mb-6 px-4 py-1.5 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-medium text-xs uppercase tracking-widest rounded-full shadow-[0_0_15px_rgba(255,255,255,0.1)]">
            Fort Lauderdale's Premier Hub
          </div>
          <h1 className="text-6xl md:text-8xl lg:text-[140px] font-graffiti text-white mb-6 drop-shadow-[0_0_30px_rgba(255,255,255,0.3)] leading-[0.9]">
            Elevate Your <br /> Experience
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mb-12 font-medium">
            In-store shopping, fast local delivery, and convenient online ordering. Cloud954 — quality you can trust, right in your neighborhood.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto">
            <Link 
              href="/shop" 
              className="bg-white text-black hover:bg-gray-200 px-8 py-5 rounded-full font-bold transition-all flex items-center justify-center tracking-widest uppercase shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:scale-105"
            >
              Shop Online
            </Link>
            <a 
              href="https://sauce.link/placeholder" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-black/50 backdrop-blur-md border border-gray-500 text-white hover:bg-gray-800 px-8 py-5 rounded-full font-bold transition-all flex items-center justify-center tracking-widest uppercase hover:scale-105"
            >
              Order Local Delivery <ArrowRight size={18} className="ml-2" />
            </a>
          </div>
        </div>
      </motion.section>

      {/* Featured Categories */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInOffset}
        className="w-full py-20 relative z-10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-graffiti text-white mb-4">Shop By Category</h2>
            <div className="w-24 h-1 bg-white mx-auto rounded"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat, i) => (
              <motion.div whileHover={{ y: -10 }} key={i}>
                <Link href={cat.href} className="group relative block h-64 overflow-hidden rounded-2xl bg-gradient-to-b from-white/10 to-white/5 border border-white/10 shadow-lg backdrop-blur-sm transition-all hover:border-white/30">
                  <div className="absolute inset-0 flex flex-col items-center justify-center z-20 p-6 text-center">
                    <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center text-white mb-4 border border-white/20 shadow-[0_0_15px_rgba(255,255,255,0.1)] group-hover:scale-110 group-hover:bg-white group-hover:text-black transition-all duration-300">
                      {cat.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 tracking-wide uppercase">{cat.name}</h3>
                    <p className="text-sm text-gray-400 font-medium">{cat.desc}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Image Embed + About Strip */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInOffset}
        className="w-full py-24 relative z-10 flex flex-col items-center bg-black/40 border-y border-white/5"
      >
        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-4">
          <div className="relative h-[500px] w-full">
            <Image 
              src="/images/image2.png"
              alt="Art integration"
              fill
              className="object-contain"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-5xl md:text-7xl font-graffiti text-white">More Than <br/> Just a Shop</h2>
            <p className="text-xl text-gray-300 leading-relaxed font-light">
              Established in Fort Lauderdale, Cloud954 has been serving the South Florida community for over 5 years. 
              We carry the most sought-after premium brands, offer rapid local delivery, and ship nationwide to our extended family.
            </p>
            <Link 
              href="/about" 
              className="inline-flex py-3 text-white border-b border-white hover:text-gray-300 hover:border-gray-400 transition-colors font-bold tracking-widest uppercase text-sm"
            >
              Read Our Full Story
            </Link>
          </div>
        </div>
      </motion.section>

      {/* Another bold visual strip */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInOffset}
        className="w-full py-24 relative z-10 flex"
      >
        <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 px-4">
          <div className="w-full md:w-1/2 space-y-6 order-2 md:order-1">
             <h2 className="text-5xl md:text-7xl font-graffiti text-white">The Cleanest <br/> Rotation</h2>
             <p className="text-xl text-gray-300 leading-relaxed font-light">
               We source exclusive products seamlessly to keep you a step ahead of the curve. Expect nothing but curated quality and authentic vibes.
             </p>
          </div>
          <div className="relative h-[400px] w-full md:w-1/2 order-1 md:order-2 mix-blend-screen opacity-80">
            <Image 
              src="/images/image3.png"
              alt="Feature layout"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </motion.section>

      {/* Email Capture Section */}
      <section className="w-full py-20 relative z-10">
        <div className="max-w-4xl mx-auto px-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl">
          <EmailCapture isBanner={true} />
          
          {/* Subtle logo integration in corner */}
          <div className="absolute top-4 right-6 opacity-20 w-32 h-32 pointer-events-none">
             <Image src="/images/image1.png" alt="Overlay" fill className="object-contain" />
          </div>
        </div>
      </section>

      {/* Bottom Store Info Strip */}
      <section className="w-full bg-black/80 backdrop-blur-lg py-8 border-t border-white/10 relative z-20">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-around items-center text-gray-300 text-sm font-medium gap-4 tracking-widest uppercase">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_#22c55e]"></span>
            Open today until 10:00 PM
          </div>
          <div className="hidden md:block w-px h-4 bg-gray-600"></div>
          <div>Placeholder Address, Fort Lauderdale, FL</div>
          <div className="hidden md:block w-px h-4 bg-gray-600"></div>
          <div>Call us: (954) 816-4669</div>
        </div>
      </section>
    </div>
  );
}
