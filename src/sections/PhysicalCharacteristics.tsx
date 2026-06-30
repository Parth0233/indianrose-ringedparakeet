import { motion } from 'framer-motion';
import { Ruler, Weight, Wind, Palette, CircleDot, Eye, Clock, Sparkles } from 'lucide-react';

const characteristics = [
  {
    icon: Ruler,
    label: 'Average Length',
    value: '40 – 42 cm',
    detail: 'Including the long, elegant tail feathers',
    color: 'bg-emerald-50 text-emerald-600',
  },
  {
    icon: Weight,
    label: 'Weight',
    value: '115 – 140 g',
    detail: 'Varies by age, sex, and diet',
    color: 'bg-amber-50 text-amber-600',
  },
  {
    icon: Wind,
    label: 'Wingspan',
    value: '42 – 48 cm',
    detail: 'Enables swift and agile flight',
    color: 'bg-sky-50 text-sky-600',
  },
  {
    icon: Palette,
    label: 'Feather Colour',
    value: 'Bright Green',
    detail: 'Vibrant lime to emerald green plumage',
    color: 'bg-emerald-50 text-emerald-700',
  },
  {
    icon: CircleDot,
    label: 'Beak Colour',
    value: 'Red / Coral',
    detail: 'Strong, curved, and highly capable',
    color: 'bg-rose-50 text-rose-600',
  },
  {
    icon: Eye,
    label: 'Eye Colour',
    value: 'Pale Yellow / White',
    detail: 'Surrounded by a thin dark eye-ring',
    color: 'bg-yellow-50 text-yellow-600',
  },
  {
    icon: Clock,
    label: 'Lifespan',
    value: '20 – 30+ Years',
    detail: 'Can exceed 30 years in captivity',
    color: 'bg-stone-50 text-stone-600',
  },
  {
    icon: Sparkles,
    label: 'Rose Ring',
    value: 'Male Only',
    detail: 'Distinctive rose-pink collar around neck',
    color: 'bg-pink-50 text-pink-600',
  },
];

export default function PhysicalCharacteristics() {
  return (
    <section id="physical" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-4">
            Physical Characteristics
          </h2>
          <div className="w-24 h-1 bg-emerald-500 mx-auto rounded-full mb-4" />
          <p className="text-stone-600 max-w-2xl mx-auto">
            Understanding the anatomy and physical traits of the Indian Rose-ringed Parakeet helps
            in identification, conservation, and responsible care.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {characteristics.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="group relative bg-white rounded-2xl p-6 border border-stone-100 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className={`inline-flex p-3 rounded-xl ${item.color} mb-4`}>
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="text-sm text-stone-400 uppercase tracking-wider mb-1">{item.label}</h3>
              <p className="text-2xl font-bold text-stone-800 mb-2">{item.value}</p>
              <p className="text-sm text-stone-500">{item.detail}</p>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* Visual comparison */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 grid md:grid-cols-2 gap-8"
        >
          <div className="bg-emerald-50 rounded-2xl p-8">
            <h3 className="text-lg font-semibold text-emerald-800 mb-4">Male</h3>
            <ul className="space-y-3 text-emerald-700">
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 mt-2 shrink-0" />
                Distinctive rose-pink neck ring
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 mt-2 shrink-0" />
                Black stripe from lower beak to collar
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 mt-2 shrink-0" />
                Slightly larger and more robust build
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 mt-2 shrink-0" />
                Brighter, more vivid plumage
              </li>
            </ul>
          </div>
          <div className="bg-amber-50 rounded-2xl p-8">
            <h3 className="text-lg font-semibold text-amber-800 mb-4">Female</h3>
            <ul className="space-y-3 text-amber-700">
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-500 mt-2 shrink-0" />
                No rose-colored neck ring
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-500 mt-2 shrink-0" />
                Paler green plumage overall
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-500 mt-2 shrink-0" />
                Slightly smaller body size
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-500 mt-2 shrink-0" />
                Less prominent facial markings
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
