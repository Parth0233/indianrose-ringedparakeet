import { motion } from 'framer-motion';
import { Fish, TreePine, Clock, Wind, ShieldCheck } from 'lucide-react';

const facts = [
  { label: 'Scientific Name', value: 'Psittacula krameri', icon: ShieldCheck },
  { label: 'Common Name', value: 'Indian Rose-ringed Parakeet', icon: ShieldCheck },
  { label: 'Kingdom', value: 'Animalia', icon: ShieldCheck },
  { label: 'Phylum', value: 'Chordata', icon: ShieldCheck },
  { label: 'Class', value: 'Aves', icon: ShieldCheck },
  { label: 'Order', value: 'Psittaciformes', icon: ShieldCheck },
  { label: 'Family', value: 'Psittaculidae', icon: ShieldCheck },
  { label: 'Diet', value: 'Herbivore (Fruits, Seeds, Nuts)', icon: Fish },
  { label: 'Habitat', value: 'Tropical Forests, Urban Areas', icon: TreePine },
  { label: 'Lifespan', value: '20 – 30+ Years', icon: Clock },
  { label: 'Wingspan', value: '42 – 48 cm', icon: Wind },
  { label: 'Conservation Status', value: 'Least Concern (IUCN)', icon: ShieldCheck },
];

export default function QuickFacts() {
  return (
    <section id="quick-facts" className="py-20 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-4">Quick Facts</h2>
          <div className="w-24 h-1 bg-emerald-500 mx-auto rounded-full mb-4" />
          <p className="text-stone-600 max-w-2xl mx-auto">
            A quick reference guide to essential facts about the Indian Rose-ringed Parakeet.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {facts.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              whileHover={{ y: -3 }}
              className="bg-white rounded-xl p-5 shadow-sm border border-stone-100 hover:shadow-md transition-all duration-300"
            >
              <p className="text-xs text-stone-400 uppercase tracking-wider mb-1">{item.label}</p>
              <p className="text-base font-semibold text-stone-800">{item.value}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
