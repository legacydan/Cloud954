"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function EmailCapture({ isBanner = false }: { isBanner?: boolean }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setStatus("loading");
    // Placeholder for Mailchimp Integration API request
    setTimeout(() => {
      // Simulate success
      setStatus("success");
      setEmail("");
    }, 1200);
  };

  if (status === "success") {
    return (
      <div className={`flex flex-col items-center justify-center p-8 bg-graffiti-900 border border-graffiti-800 text-white rounded-lg ${isBanner ? 'w-full' : 'max-w-xl mx-auto'}`}>
        <CheckCircle2 size={48} className="text-green-400 mb-4" />
        <h3 className="font-graffiti text-2xl mb-2">You're in the clouds!</h3>
        <p className="text-gray-300 text-center">Thanks for subscribing. Check your email for your 10% off code.</p>
      </div>
    );
  }

  return (
    <div className={`p-8 sm:p-12 relative overflow-hidden bg-white border-2 border-graffiti-900 shadow-[8px_8px_0px_0px_rgba(17,17,17,1)] ${isBanner ? 'w-full my-12' : 'max-w-2xl mx-auto'}`}>
      {/* Decorative graffiti elements */}
      <div className="absolute top-[-20px] right-[-20px] opacity-10 pointer-events-none select-none">
        <span className="font-graffiti text-9xl">#</span>
      </div>
      
      <div className="relative z-10 text-center">
        <h2 className="font-graffiti text-3xl sm:text-4xl text-graffiti-900 mb-4">
          Join the Cloud954 List
        </h2>
        <p className="text-graffiti-700 mb-8 max-w-md mx-auto">
          Be first to know about new products, drops, and exclusive deals. Subscribe and get 10% off your first online order.
        </p>
        
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input 
            type="email" 
            placeholder="Enter your email address"
            className="flex-1 px-4 py-3 bg-graffiti-50 border border-graffiti-300 focus:outline-none focus:ring-2 focus:ring-graffiti-900 text-graffiti-900 rounded-none placeholder:text-gray-400"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={status === "loading"}
            required
          />
          <button 
            type="submit"
            disabled={status === "loading"}
            className="bg-graffiti-900 text-white hover:bg-graffiti-800 px-6 py-3 transition-colors flex items-center justify-center uppercase tracking-wider font-semibold text-sm disabled:opacity-70 group"
          >
            {status === "loading" ? "..." : (
              <>
                Subscribe 
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
