import { motion } from 'framer-motion';
import { Leaf, ChevronDown } from 'lucide-react';

const images = [
  '/images/hero/Rose-ringed_parakeet_near_Chandigarh.jpg',
  '/images/hero/a2602e486e0f4e993fdc889c032a49a8.jpg',
  '/images/hero/Rose-ringed_parakeet_(Psittacula_krameri_borealis)_male_Jaipur_2.jpg',
  '/images/hero/images_(16).jpg',
  '/images/hero/900.jpg',
];

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Images Grid */}
      <div className="absolute inset-0 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {images.map((img, i) => (
          <div key={i} className="relative overflow-hidden">
            <img
              src={img}
              alt={`Indian Rose-ringed Parakeet ${i + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/70 via-emerald-800/60 to-emerald-900/80" />
          </div>
        ))}
      </div>

      {/* Floating decorative elements */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-20 left-10 text-emerald-300/30"
      >
        <Leaf size={48} />
      </motion.div>
      <motion.div
        animate={{ y: [0, -15, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute top-40 right-20 text-amber-300/30"
      >
        <Leaf size={36} />
      </motion.div>
      <motion.div
        animate={{ y: [0, -25, 0], rotate: [0, 8, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute bottom-40 left-20 text-sky-300/30"
      >
        <Leaf size={42} />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-2 rounded-full glass text-emerald-200 text-sm font-medium mb-6">
            Wildlife Awareness & Conservation
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-4 leading-tight"
        >
          Indian <span className="text-emerald-300">Rose-ringed</span> Parakeet
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-emerald-200 font-light italic mb-6"
        >
          <em>Psittacula krameri</em>
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-base md:text-lg text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          One of the most intelligent, colorful, and widely distributed parrots in the world.
          Famous for its vibrant green plumage and the distinctive rose-colored neck ring in males,
          this remarkable bird is a symbol of India's rich avian biodiversity.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <a
            href="#about"
            className="px-8 py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full font-semibold transition-all duration-300 shadow-lg shadow-emerald-600/30"
          >
            Explore More
          </a>
          <a
            href="#gallery"
            className="px-8 py-3 glass text-white hover:bg-white/15 rounded-full font-semibold transition-all duration-300"
          >
            View Gallery
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60"
      >
        <a href="#about" className="flex flex-col items-center gap-2">
          <span className="text-sm">Scroll Down</span>
          <ChevronDown size={20} />
        </a>
      </motion.div>
    </section>
  );
}
