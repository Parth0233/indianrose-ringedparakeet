import { motion } from 'framer-motion';
import { Maximize2, Apple, Brain, Dumbbell, Sparkles, Stethoscope, ShieldCheck, HeartHandshake } from 'lucide-react';

const careItems = [
  {
    icon: Maximize2,
    title: 'Spacious Aviary Requirements',
    description:
      'A minimum cage size of 90 cm x 60 cm x 120 cm is recommended for a single bird. Better yet, provide a large aviary where they can fly freely. Horizontal space is more important than vertical space. Include multiple perches of varying thickness to exercise their feet.',
    color: 'bg-emerald-50 text-emerald-600',
  },
  {
    icon: Apple,
    title: 'Balanced Diet',
    description:
      'Offer a varied diet including high-quality parrot pellets, fresh fruits, vegetables, sprouted seeds, and occasional nuts. Avoid avocado, chocolate, caffeine, and salty foods. Fresh water should be available at all times. Rotate foods to prevent boredom and ensure nutritional completeness.',
    color: 'bg-amber-50 text-amber-600',
  },
  {
    icon: Brain,
    title: 'Mental Enrichment',
    description:
      'These highly intelligent birds require constant mental stimulation. Teach new words, tricks, and provide puzzle feeders. Rotate toys regularly to maintain interest. Without mental engagement, they can develop destructive behaviours like feather plucking and excessive screaming.',
    color: 'bg-sky-50 text-sky-600',
  },
  {
    icon: Dumbbell,
    title: 'Toys and Exercise',
    description:
      'Provide a variety of safe, destructible toys: wooden blocks, rope perches, foraging toys, and bells. Allow supervised out-of-cage time daily for flight and exploration. Exercise is crucial for maintaining healthy weight and muscle tone.',
    color: 'bg-rose-50 text-rose-600',
  },
  {
    icon: Sparkles,
    title: 'Hygiene',
    description:
      'Clean the cage daily, removing soiled bedding and uneaten food. Provide shallow water dishes for bathing, which most parakeets enjoy. Trim nails as needed and monitor beak health. Maintain good air quality and avoid drafts, smoke, and strong fumes.',
    color: 'bg-yellow-50 text-yellow-600',
  },
  {
    icon: Stethoscope,
    title: 'Veterinary Care',
    description:
      'Schedule annual check-ups with an avian veterinarian. Watch for signs of illness: fluffed feathers, discharge, changes in droppings, lethargy, or loss of appetite. Early detection of illness is critical, as birds often hide symptoms until conditions are advanced.',
    color: 'bg-purple-50 text-purple-600',
  },
  {
    icon: ShieldCheck,
    title: 'Responsible Ownership',
    description:
      'Owning a parakeet is a 20–30 year commitment. Ensure you can provide consistent care, attention, and financial resources. Research thoroughly before acquiring a bird. Consider adopting from rescue organizations rather than supporting the wild-caught pet trade.',
    color: 'bg-stone-50 text-stone-600',
  },
  {
    icon: HeartHandshake,
    title: 'Ethical Bird Keeping',
    description:
      'Never support the illegal wild-caught bird trade. Purchase only from reputable breeders who prioritize bird welfare. If you can no longer care for your bird, rehome responsibly through avian rescue networks. Ethical ownership protects wild populations.',
    color: 'bg-pink-50 text-pink-600',
  },
];

export default function CareGuide() {
  return (
    <section id="care" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-4">Care Guide</h2>
          <div className="w-24 h-1 bg-emerald-500 mx-auto rounded-full mb-4" />
          <p className="text-stone-600 max-w-2xl mx-auto">
            Proper care is essential for the health, happiness, and longevity of Indian Rose-ringed
            Parakeets in captivity. This guide covers all aspects of responsible ownership.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {careItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-stone-100 hover:shadow-lg transition-all duration-300"
            >
              <div className={`inline-flex p-3 rounded-xl ${item.color} mb-4`}>
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-stone-800 mb-2">{item.title}</h3>
              <p className="text-sm text-stone-600 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
