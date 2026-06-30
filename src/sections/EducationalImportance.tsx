import { motion } from 'framer-motion';
import { GraduationCap, Bird, TreePine, Heart, Globe } from 'lucide-react';

const topics = [
  {
    icon: GraduationCap,
    title: 'Importance for Students',
    description:
      'Studying the Indian Rose-ringed Parakeet offers students insights into avian biology, ecology, and conservation. It serves as an excellent model organism for understanding topics such as seed dispersal, social behaviour, vocal learning, and the impacts of habitat fragmentation.',
    color: 'bg-emerald-50 text-emerald-600',
  },
  {
    icon: Bird,
    title: 'Bird Conservation',
    description:
      'These parakeets highlight the importance of protecting native bird species. Their declining populations in some regions underscore the urgent need for habitat preservation, anti-poaching measures, and public awareness campaigns to safeguard India\'s avian heritage.',
    color: 'bg-amber-50 text-amber-600',
  },
  {
    icon: TreePine,
    title: 'Forest Biodiversity',
    description:
      'As key seed dispersers, parakeets contribute directly to forest regeneration and biodiversity. Their ecological role demonstrates the interconnectedness of species within an ecosystem and why losing even a single species can trigger cascading effects.',
    color: 'bg-sky-50 text-sky-600',
  },
  {
    icon: Heart,
    title: 'Responsible Pet Ownership',
    description:
      'Education about proper care, diet, and enrichment helps prevent neglect and abandonment. Understanding the 20–30 year commitment, the need for veterinary care, and the ethics of sourcing birds from breeders rather than the wild promotes responsible ownership.',
    color: 'bg-rose-50 text-rose-600',
  },
  {
    icon: Globe,
    title: 'Wildlife Awareness',
    description:
      'The charismatic nature of Rose-ringed Parakeets makes them ideal ambassadors for wildlife conservation. They draw public attention to broader environmental issues such as deforestation, climate change, and the illegal wildlife trade.',
    color: 'bg-purple-50 text-purple-600',
  },
];

export default function EducationalImportance() {
  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-4">
            Educational Importance
          </h2>
          <div className="w-24 h-1 bg-emerald-500 mx-auto rounded-full mb-4" />
          <p className="text-stone-600 max-w-2xl mx-auto">
            The Indian Rose-ringed Parakeet is a powerful educational tool for teaching ecology,
            conservation, and responsible stewardship of nature.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {topics.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
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
