import { motion } from 'framer-motion';
import { TreePine, Mountain, Wheat, Trees, Building2, Sun, Home, Globe } from 'lucide-react';

const habitats = [
  {
    icon: TreePine,
    title: 'Tropical Forests',
    description:
      'Dense tropical and subtropical forests provide the ideal natural habitat. The canopy offers shelter, nesting sites, and abundant food sources in the form of fruits, seeds, and flowers.',
    color: 'bg-emerald-50 text-emerald-600',
  },
  {
    icon: Mountain,
    title: 'Woodlands',
    description:
      'Open woodlands and forest edges are frequently visited. These transitional zones between dense forests and open plains offer a mix of tree cover and open space for foraging.',
    color: 'bg-amber-50 text-amber-600',
  },
  {
    icon: Wheat,
    title: 'Agricultural Fields',
    description:
      'Farmlands growing grains, fruits, and vegetables attract large flocks. While this can lead to crop damage, it also reflects the bird\'s adaptability to human-modified landscapes.',
    color: 'bg-yellow-50 text-yellow-600',
  },
  {
    icon: Trees,
    title: 'Parks and Gardens',
    description:
      'Urban parks and large gardens with mature trees serve as important refuges in cities. These green spaces allow parakeets to thrive even in heavily urbanized areas.',
    color: 'bg-sky-50 text-sky-600',
  },
  {
    icon: Building2,
    title: 'Urban Areas',
    description:
      'Remarkably adaptable, these parakeets have successfully colonized cities across the world. They nest in building crevices, visit bird feeders, and roost in urban tree lines.',
    color: 'bg-stone-50 text-stone-600',
  },
  {
    icon: Sun,
    title: 'Climate Preferences',
    description:
      'They prefer warm, tropical to subtropical climates with moderate rainfall. They are tolerant of seasonal variations but avoid extremely cold or arid regions.',
    color: 'bg-orange-50 text-orange-600',
  },
  {
    icon: Home,
    title: 'Nesting Sites',
    description:
      'Natural tree cavities, abandoned woodpecker holes, and building crevices are used for nesting. They prefer holes 3–12 meters above ground with a single entrance.',
    color: 'bg-rose-50 text-rose-600',
  },
  {
    icon: Globe,
    title: 'Geographic Distribution',
    description:
      'Native to India, Pakistan, Bangladesh, Nepal, and Sri Lanka. Introduced populations thrive in the UK, UAE, Japan, USA, and many other countries.',
    color: 'bg-indigo-50 text-indigo-600',
  },
];

export default function Habitat() {
  return (
    <section id="habitat" className="py-20 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-4">Habitat</h2>
          <div className="w-24 h-1 bg-emerald-500 mx-auto rounded-full mb-4" />
          <p className="text-stone-600 max-w-2xl mx-auto">
            The Indian Rose-ringed Parakeet is remarkably adaptable, thriving in diverse environments
            from dense forests to bustling cities.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {habitats.map((item, i) => (
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
