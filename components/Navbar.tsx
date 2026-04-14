"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ShoppingCart } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/shop" },
    { name: "Merch", href: "/merch" },
    { name: "Media", href: "/media" },
    { name: "COA", href: "/coa" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/80 backdrop-blur-md border-b border-white/10 py-3 shadow-lg" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.4)]">
                <span className="text-black font-graffiti text-sm">C954</span>
              </div>
              <span className="font-graffiti text-2xl tracking-wider text-white drop-shadow-md">Cloud954</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-bold text-gray-300 hover:text-white transition-colors tracking-widest uppercase"
              >
                {link.name}
              </Link>
            ))}
            
            <Link href="/shop" className="text-white hover:text-gray-300 relative group transition-colors">
              <ShoppingCart size={20} />
              <span className="absolute -top-2 -right-2 bg-white text-black text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">0</span>
            </Link>
            
            <a
              href="https://sauce.link/placeholder"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black px-6 py-2.5 rounded-full hover:bg-gray-200 font-bold text-xs transition-all uppercase tracking-widest shadow-[0_0_15px_rgba(255,255,255,0.2)] hover:scale-105"
            >
              Order Delivery
            </a>
          </div>

          <div className="md:hidden flex items-center gap-5">
            <Link href="/cart" className="text-white relative">
              <ShoppingCart size={24} />
              <span className="absolute -top-2 -right-2 bg-white text-black text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">0</span>
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white hover:text-gray-300 transition-colors p-1"
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="md:hidden absolute top-[100%] left-0 w-full bg-black/95 backdrop-blur-3xl border-b border-white/10 shadow-2xl overflow-hidden"
          >
            <div className="px-6 pt-8 pb-32 space-y-2 flex flex-col h-full overflow-y-auto">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-5 text-2xl font-graffiti text-white border-b border-white/10 hover:bg-white/5 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <div className="mt-12 flex flex-col items-center justify-center gap-6">
                <a
                  href="https://sauce.link/placeholder"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center bg-white text-black px-6 py-4 rounded-full font-bold text-sm transition-all uppercase tracking-widest hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.2)]"
                >
                  Order Delivery Now
                </a>
                <p className="text-gray-500 font-light text-sm">(954) 816-4669</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
