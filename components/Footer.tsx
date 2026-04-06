import Link from "next/link";
import { MapPin, Phone, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black/80 backdrop-blur-xl text-white py-16 border-t border-white/10 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center md:text-left text-sm md:text-base">
          <div className="col-span-1 lg:col-span-1 flex flex-col items-center md:items-start">
            <h3 className="font-graffiti text-4xl mb-6 tracking-wider text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">Cloud954</h3>
            <p className="text-gray-400 text-sm mb-8 max-w-xs font-light leading-relaxed">
              Fort Lauderdale's premier smoke shop. Highest quality vapes, CBD, glass, and accessories.
            </p>
            <div className="flex space-x-5">
              <a href="#" className="w-10 h-10 rounded-full border border-gray-500 text-gray-300 hover:text-black hover:bg-white hover:border-white transition-all duration-300 flex items-center justify-center font-bold text-xs uppercase shadow-lg">
                IG
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-gray-500 text-gray-300 hover:text-black hover:bg-white hover:border-white transition-all duration-300 flex items-center justify-center font-bold text-xs uppercase shadow-lg">
                FB
              </a>
            </div>
          </div>
          
          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-bold text-lg mb-6 tracking-widest uppercase text-white">Quick Links</h4>
            <ul className="space-y-4 text-gray-400 text-sm font-medium">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/shop" className="hover:text-white transition-colors">Shop Online</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li>
                <a href="https://sauce.link/placeholder" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors underline underline-offset-4">
                  Local Delivery (Sauce)
                </a>
              </li>
            </ul>
          </div>
          
          <div className="col-span-1 lg:col-span-2 flex flex-col items-center md:items-start">
            <h4 className="font-bold text-lg mb-6 tracking-widest uppercase text-white">Visit Us</h4>
            <div className="space-y-5 text-gray-400 text-sm font-medium w-full max-w-xs mx-auto md:mx-0">
              <div className="flex items-start justify-center md:justify-start gap-4">
                <MapPin size={22} className="shrink-0 mt-0.5 text-white" />
                <p className="text-left font-light leading-relaxed">Placeholder Address<br />Fort Lauderdale, FL 33311</p>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-4">
                <Phone size={22} className="shrink-0 text-white" />
                <p className="font-light">(954) 816-4669</p>
              </div>
              <div className="flex items-start justify-center md:justify-start gap-4">
                <Clock size={22} className="shrink-0 mt-0.5 text-white" />
                <p className="text-left font-light leading-relaxed">Mon-Sat: 10AM - 10PM<br />Sun: 11AM - 8PM</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-white/10 text-center text-sm text-gray-500 flex flex-col sm:flex-row justify-between items-center gap-6">
          <p className="font-light tracking-wide">&copy; {new Date().getFullYear()} Cloud954. All rights reserved.</p>
          <p className="text-xs font-bold tracking-widest uppercase text-gray-400 border border-white/10 px-4 py-2 rounded-lg bg-white/5">WARNING: This product contains nicotine. Nicotine is an addictive chemical.</p>
        </div>
      </div>
    </footer>
  );
}
