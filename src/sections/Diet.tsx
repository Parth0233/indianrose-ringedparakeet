import { motion } from 'framer-motion';
import { Apple, Cherry, Nut, Flower2, Grape, Carrot, Wheat, Droplets, Utensils } from 'lucide-react';

const dietItems = [
  {
    icon: Apple,
    name: 'Fruits',
    examples: 'Mangoes, apples, guavas, papayas, figs',
    color: 'bg-red-50 text-red-600',
  },
  {
    icon: Cherry,
    name: 'Berries',
    examples: 'Mulberries, jamun, wild berries',
    color: 'bg-purple-50 text-purple-600',
  },
  {
    icon: Nut,
    name: 'Nuts',
    examples: 'Almonds, walnuts, cashews (in moderation)',
    color: 'bg-amber-50 text-amber-600',
  },
  {
    icon: Flower2,
    name: 'Flowers',
    examples: 'Neem flowers, gulmohar, nectar-rich blooms',
    color: 'bg-pink-50 text-pink-600',
  },
  {
    icon: Grape,
    name: 'Seeds',
    examples: 'Sunflower, millet, safflower, pumpkin seeds',
    color: 'bg-yellow-50 text-yellow-600',
  },
  {
    icon: Carrot,
    name: 'Vegetables',
    examples: 'Carrots, spinach, peas, sweet corn, peppers',
    color: 'bg-orange-50 text-orange-600',
  },
  {
    icon: Wheat,
    name: 'Grains',
    examples: 'Wheat, rice, barley, oats, corn',
    color: 'bg-stone-50 text-stone-600',
  },
  {
    icon: Droplets,
    name: 'Fresh Water',
    examples: 'Clean drinking water changed daily',
    color: 'bg-sky-50 text-sky-600',
  },
];

export default function Diet() {
  return (
    <section id="diet" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-4">Diet</h2>
          <div className="w-24 h-1 bg-emerald-500 mx-auto rounded-full mb-4" />
          <p className="text-stone-600 max-w-2xl mx-auto">
            The Indian Rose-ringed Parakeet is primarily herbivorous, with a diverse and nutritious
            diet that changes with seasons and availability.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {dietItems.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-stone-100 hover:shadow-lg transition-all duration-300"
            >
              <div className={`inline-flex p-3 rounded-xl ${item.color} mb-4`}>
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-stone-800 mb-1">{item.name}</h3>
              <p className="text-sm text-stone-500">{item.examples}</p>
            </motion.div>
          ))}
        </div>

        {/* Feeding Behaviour */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-2xl p-8 text-white"
        >
          <div className="flex items-center gap-3 mb-4">
            <Utensils className="w-6 h-6 text-emerald-200" />
            <h3 className="text-xl font-semibold">Feeding Behaviour</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-6 text-emerald-100">
            <p className="leading-relaxed">
              Rose-ringed Parakeets are primarily diurnal feeders, foraging actively during early
              morning and late afternoon. They use their strong, curved beaks to crack open hard
              seeds and nuts with remarkable precision. In the wild, they often feed in large,
              noisy flocks, which helps them stay alert to predators.
            </p>
            <p className="leading-relaxed">
              They are known to be opportunistic feeders, readily adapting to agricultural crops
              when natural food sources are scarce. This adaptability has allowed them to thrive
              in human-altered landscapes, though it sometimes brings them into conflict with
              farmers. A balanced captive diet should mimic this variety to ensure optimal health.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
