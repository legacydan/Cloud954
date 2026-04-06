"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { MapPin, Phone, Clock, Mail, Send } from "lucide-react";
import { motion } from "framer-motion";

type Inputs = {
  name: string;
  email: string;
  message: string;
};

export default function ContactPage() {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting, isSubmitSuccessful } } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    // Simulate API form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    reset();
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 min-h-screen text-white relative z-10">
      <div className="text-center mb-16 shrink-0 mt-10">
        <h1 className="text-5xl md:text-7xl font-graffiti text-white mb-6">Get In Touch</h1>
        <div className="w-24 h-1 bg-white mx-auto rounded drop-shadow-[0_0_10px_white]"></div>
        <p className="text-xl text-gray-300 mt-6 max-w-2xl mx-auto font-light">Have a question or looking for a specific product? We're here.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Contact Info & Map */}
        <div className="space-y-12">
          <div className="space-y-8 bg-black/40 p-8 md:p-12 border border-white/10 rounded-3xl backdrop-blur-md shadow-[0_0_30px_rgba(255,255,255,0.02)]">
            <h2 className="text-2xl font-bold text-white uppercase tracking-widest border-b border-white/20 inline-block pb-4 mb-2">Location & Hours</h2>
            
            <div className="flex items-start gap-5">
              <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center shrink-0 border border-white/20 shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                <MapPin className="text-white" size={24} />
              </div>
              <div className="mt-1">
                <h3 className="font-bold text-lg mb-1 tracking-wide">Address</h3>
                <p className="text-gray-300 font-light leading-relaxed">Placeholder Address<br />Fort Lauderdale, FL 33311</p>
                <p className="text-xs text-red-400 mt-2 font-medium tracking-wide">*** Client to provide new physical address ***</p>
              </div>
            </div>

            <div className="flex items-start gap-5">
              <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center shrink-0 border border-white/20 shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                <Clock className="text-white" size={24} />
              </div>
              <div className="mt-1">
                <h3 className="font-bold text-lg mb-1 tracking-wide">Store Hours</h3>
                <p className="text-gray-300 font-light leading-relaxed">Monday - Saturday: 10:00 AM - 10:00 PM<br />Sunday: 11:00 AM - 8:00 PM</p>
              </div>
            </div>

            <div className="flex items-start gap-5">
              <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center shrink-0 border border-white/20 shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                <Phone className="text-white" size={24} />
              </div>
              <div className="mt-1">
                <h3 className="font-bold text-lg mb-1 tracking-wide">Phone</h3>
                <p className="text-gray-300 font-light leading-relaxed">(954) 816-4669</p>
              </div>
            </div>

            <div className="flex items-start gap-5">
              <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center shrink-0 border border-white/20 shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                <Mail className="text-white" size={24} />
              </div>
              <div className="mt-1">
                <h3 className="font-bold text-lg mb-1 tracking-wide">Email</h3>
                <p className="text-gray-300 font-light leading-relaxed">contact@cloud954.com</p>
              </div>
            </div>
          </div>

          <div className="w-full h-80 bg-black/60 rounded-3xl overflow-hidden border border-white/10 relative shadow-[0_0_30px_rgba(255,255,255,0.05)]">
            {/* Google Maps placeholder iframe. Wait for client to provide correct address before locking query. */}
            <iframe 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              loading="lazy" 
              allowFullScreen 
              src={`https://www.google.com/maps/embed/v1/place?q=Fort+Lauderdale,+FL&key=PLACEHOLDER_API_KEY`}>
            </iframe>
            {/* The visual above fails without real key, so we use a visual cover */}
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm flex flex-col items-center justify-center z-10 pointer-events-none p-6 text-center border-t border-white/10">
              <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mb-4 shadow-[0_0_20px_rgba(255,255,255,0.05)] border border-white/10">
                <MapPin className="text-gray-400" size={32} />
              </div>
              <span className="text-white font-medium tracking-widest uppercase">Map Embed</span>
              <span className="text-sm text-gray-400 mt-2 font-light">Awaiting Exact Address Confirmation from Client</span>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white/5 backdrop-blur-xl p-8 md:p-12 border border-white/10 rounded-3xl shadow-2xl h-fit sticky top-28">
          <h2 className="text-3xl font-graffiti text-white mb-8">Send a Message</h2>
          
          {isSubmitSuccessful && (
            <motion.div 
              initial={{ opacity: 0, y: -10 }} 
              animate={{ opacity: 1, y: 0 }} 
              className="mb-8 p-4 bg-green-500/20 border border-green-500/50 text-green-200 rounded-xl flex items-center gap-3 backdrop-blur-md shadow-[0_0_15px_rgba(34,197,94,0.2)]"
            >
              <div className="w-6 h-6 bg-green-500 rounded-full flex flex-shrink-0 items-center justify-center text-black font-bold text-xs">✓</div> 
              <p className="font-light text-sm">Your message has been sent successfully. We'll be in touch soon!</p>
            </motion.div>
          )}
          
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label className="block text-xs font-bold text-gray-300 mb-2 uppercase tracking-widest">Name</label>
              <input 
                {...register("name", { required: true })}
                className="w-full px-5 py-4 bg-black/50 border border-white/10 focus:outline-none focus:ring-2 focus:ring-white focus:bg-black/80 transition-all rounded-xl text-white placeholder-gray-600 font-light"
                placeholder="John Doe"
              />
              {errors.name && <span className="text-red-400 text-xs mt-2 font-medium tracking-wide">This field is required</span>}
            </div>
            
            <div>
              <label className="block text-xs font-bold text-gray-300 mb-2 uppercase tracking-widest">Email</label>
              <input 
                type="email"
                {...register("email", { required: true })}
                className="w-full px-5 py-4 bg-black/50 border border-white/10 focus:outline-none focus:ring-2 focus:ring-white focus:bg-black/80 transition-all rounded-xl text-white placeholder-gray-600 font-light"
                placeholder="john@example.com"
              />
              {errors.email && <span className="text-red-400 text-xs mt-2 font-medium tracking-wide">This field is required</span>}
            </div>
            
            <div>
              <label className="block text-xs font-bold text-gray-300 mb-2 uppercase tracking-widest">Message</label>
              <textarea 
                {...register("message", { required: true })}
                rows={5}
                className="w-full px-5 py-4 bg-black/50 border border-white/10 focus:outline-none focus:ring-2 focus:ring-white focus:bg-black/80 transition-all rounded-xl text-white placeholder-gray-600 font-light resize-none"
                placeholder="How can we help you?"
              />
              {errors.message && <span className="text-red-400 text-xs mt-2 font-medium tracking-wide">This field is required</span>}
            </div>
            
            <button 
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-white text-black flex items-center justify-center py-4 rounded-xl uppercase font-bold tracking-widest hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(255,255,255,0.4)] transition-all duration-300 group disabled:opacity-50 disabled:hover:scale-100 disabled:hover:shadow-none"
            >
              {isSubmitting ? "Sending..." : (
                <>
                  Send Message <Send size={18} className="ml-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </>
              )}
            </button>
          </form>
        </div>
        
      </div>
    </div>
  );
}
