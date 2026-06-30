import { motion } from 'framer-motion';
import { TreePine, Leaf, Globe, AlertTriangle, Ban, Home, Heart } from 'lucide-react';

const topics = [
  {
    icon: TreePine,
    title: 'Role in Seed Dispersal',
    description:
      'Rose-ringed Parakeets are vital seed dispersers in Indian forests. By consuming fruits and excreting seeds far from parent trees, they help regenerate forests and maintain genetic diversity. A single flock can disperse thousands of seeds in a single foraging session.',
    color: 'bg-emerald-50 text-emerald-600',
  },
  {
    icon: Leaf,
    title: 'Importance in Forest Ecosystems',
    description:
      'As frugivores, they influence plant community composition by preferentially dispersing seeds of certain tree species. Their foraging also creates opportunities for other species. The health of parakeet populations directly reflects forest ecosystem health.',
    color: 'bg-green-50 text-green-600',
  },
  {
    icon: Globe,
    title: 'Biodiversity Conservation',
    description:
      'Protecting parakeet habitats conserves countless other species that share their ecosystem. Their presence indicates a functioning food web. Conservation efforts targeting these birds benefit the entire biological community of India\'s woodlands.',
    color: 'bg-sky-50 text-sky-600',
  },
  {
    icon: AlertTriangle,
    title: 'Threats',
    description:
      'Major threats include habitat destruction, deforestation, agricultural expansion, pesticide use, and climate change. In some regions, persecution as crop pests leads to poisoning and shooting, further endangering wild populations.',
    color: 'bg-red-50 text-red-600',
  },
  {
    icon: Ban,
    title: 'Illegal Pet Trade',
    description:
      'The illegal capture and trade of wild parakeets remains a significant problem. Thousands of birds are poached annually, often dying during capture or transport. Despite legal protection in India under the Wildlife Protection Act, enforcement remains challenging.',
    color: 'bg-amber-50 text-amber-600',
  },
  {
    icon: Home,
    title: 'Habitat Loss',
    description:
      'Rapid urbanization and deforestation have reduced nesting sites and foraging areas. Old-growth trees with cavities are especially vulnerable. Without mature trees, parakeets cannot find suitable nesting hollows, leading to population declines.',
    color: 'bg-stone-50 text-stone-600',
  },
  {
    icon: Heart,
    title: 'Conservation Awareness',
    description:
      'Education and community engagement are key to conservation success. Citizen science programs, school education, and wildlife tourism can generate support for protection. Every individual can contribute by spreading awareness and supporting conservation organizations.',
    color: 'bg-rose-50 text-rose-600',
  },
];

export default function Conservation() {
  return (
    <section id="conservation" className="py-20 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-4">
            Conservation & Ecological Importance
          </h2>
          <div className="w-24 h-1 bg-emerald-500 mx-auto rounded-full mb-4" />
          <p className="text-stone-600 max-w-2xl mx-auto">
            The Indian Rose-ringed Parakeet is more than a beautiful bird — it is a keystone species
            whose survival is intertwined with the health of India's forests.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {topics.map((item, i) => (
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
