"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { Search } from "lucide-react";
import { motion } from "framer-motion";
import { categories, products, type Product } from "./products";

export default function ShopPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [query, setQuery] = useState<string>("");

  const visibleProducts = useMemo(() => {
    const q = query.trim().toLowerCase();
    return products.filter((p) => {
      const matchesCat = activeCategory === "all" || p.category === activeCategory;
      if (!matchesCat) return false;
      if (!q) return true;
      return (
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q)
      );
    });
  }, [activeCategory, query]);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } }
  };

  const formatPrice = (n: number) =>
    n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  const priceLabel = (p: Product) => {
    if (p.priceMin === p.priceMax) return `$${formatPrice(p.priceMin)}`;
    return `$${formatPrice(p.priceMin)} – $${formatPrice(p.priceMax)}`;
  };

  const activeCategoryName =
    categories.find((c) => c.slug === activeCategory)?.name ?? "All";

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
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search products..."
            className="w-full md:w-80 pl-12 pr-6 py-4 bg-black/50 border border-white/10 rounded-full focus:outline-none focus:ring-2 focus:ring-white focus:bg-black/80 transition-all font-light placeholder-gray-500 shadow-[0_0_15px_rgba(255,255,255,0.02)]"
          />
          <Search className="absolute left-4 top-4 text-gray-400" size={20} />
        </div>
      </div>

      {/* Tabs */}
      <div className="flex overflow-x-auto pb-6 mb-12 gap-4 no-scrollbar">
        {categories.map((tab) => {
          const isActive = tab.slug === activeCategory;
          return (
            <button
              key={tab.slug}
              onClick={() => setActiveCategory(tab.slug)}
              className={`px-8 py-3 rounded-full whitespace-nowrap font-bold uppercase tracking-widest text-xs transition-all duration-300 shadow-lg ${
                isActive
                  ? 'bg-white text-black drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]'
                  : 'bg-white/5 border border-white/10 text-gray-300 hover:bg-white/15 hover:shadow-[0_0_15px_rgba(255,255,255,0.05)]'
              }`}
            >
              {tab.name}
            </button>
          );
        })}
      </div>

      {/* Grid */}
      {visibleProducts.length === 0 ? (
        <div className="text-center py-24 text-gray-400 font-light">
          No products match your search.
        </div>
      ) : (
        <motion.div
          key={`${activeCategory}-${query}`}
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          {visibleProducts.map((p) => {
            const categoryLabel =
              categories.find((c) => c.slug === p.category)?.name ?? p.category;
            return (
              <motion.div variants={item} key={p.id} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden group hover:border-white/30 hover:-translate-y-2 transition-all duration-500 shadow-[0_0_30px_rgba(0,0,0,0.5)] flex flex-col">
                <div className="aspect-[4/3] bg-black/40 relative overflow-hidden border-b border-white/5">
                  {p.imageUrl ? (
                    <Image
                      src={p.imageUrl}
                      alt={p.name}
                      fill
                      sizes="(min-width: 1280px) 20vw, (min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                      className="object-contain p-6 group-hover:scale-105 transition-transform duration-500"
                      unoptimized
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-24 h-24 bg-white/5 rounded-full flex items-center justify-center text-gray-500 font-graffiti shadow-inner border border-white/10 group-hover:scale-110 group-hover:text-white transition-all duration-500">
                        C954
                      </div>
                    </div>
                  )}
                  <div className="absolute top-4 left-4 px-3 py-1.5 bg-white text-black text-[10px] uppercase font-bold tracking-widest rounded-full shadow-[0_0_10px_rgba(255,255,255,0.2)] max-w-[70%] truncate">
                    {categoryLabel}
                  </div>
                  {!p.inStock && (
                    <div className="absolute top-4 right-4 px-3 py-1.5 bg-black/80 border border-white/20 text-white text-[10px] uppercase font-bold tracking-widest rounded-full">
                      Sold Out
                    </div>
                  )}
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-bold text-lg text-white mb-2 tracking-wide group-hover:text-gray-300 transition-colors line-clamp-2">
                    {p.name}
                  </h3>
                  {p.description && (
                    <p className="text-sm text-gray-500 font-light mb-4 line-clamp-2">
                      {p.description}
                    </p>
                  )}
                  <p className="text-xl font-light text-gray-400 mb-6 mt-auto">
                    {priceLabel(p)}
                  </p>

                  <button
                    disabled={!p.inStock}
                    className="w-full py-3 bg-white/10 hover:bg-white text-white hover:text-black rounded-xl font-bold uppercase tracking-widest text-sm transition-all duration-300 shadow-md disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-white/10 disabled:hover:text-white"
                  >
                    {p.inStock ? "Add to Cart" : "Unavailable"}
                  </button>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      )}

      {/* Result count */}
      <div className="mt-12 text-center text-gray-500 text-xs uppercase tracking-widest font-light">
        Showing {visibleProducts.length} {activeCategoryName} product{visibleProducts.length === 1 ? "" : "s"}
      </div>
    </div>
  );
}
