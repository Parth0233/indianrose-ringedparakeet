import { motion } from 'framer-motion';
import { BookOpen, MapPin, Ruler, Heart, TreePine, Users } from 'lucide-react';

const sections = [
  {
    icon: BookOpen,
    title: 'Introduction',
    content:
      'The Indian Rose-ringed Parakeet (Psittacula krameri) is a medium-sized parrot belonging to the family Psittaculidae. It is one of the most recognizable and widespread parrot species in India and across many parts of Asia and Africa. Known for its intelligence, vibrant plumage, and remarkable ability to mimic human speech, this bird has captured the fascination of humans for centuries.',
    color: 'text-emerald-500',
    bg: 'bg-emerald-50',
  },
  {
    icon: MapPin,
    title: 'Origin and Distribution',
    content:
      'Native to the Indian subcontinent, the Rose-ringed Parakeet ranges across India, Pakistan, Bangladesh, Nepal, and Sri Lanka. It has also been introduced to many other countries worldwide, including the United Kingdom, Japan, and parts of the Middle East, where feral populations have successfully established themselves in urban environments.',
    color: 'text-amber-500',
    bg: 'bg-amber-50',
  },
  {
    icon: Ruler,
    title: 'Physical Appearance',
    content:
      'Adults typically measure 40–42 cm in length, including the tail. They display bright green plumage with a red, strongly curved beak. Adult males feature a distinctive rose-pink collar around the neck, while females and juveniles lack this ring. The tail is long and tapered, giving the bird an elegant silhouette in flight.',
    color: 'text-sky-500',
    bg: 'bg-sky-50',
  },
  {
    icon: Heart,
    title: 'Lifespan',
    content:
      'In the wild, Indian Rose-ringed Parakeets typically live for 20–30 years. With proper care in captivity, including a balanced diet, mental stimulation, and veterinary attention, they can live beyond 30 years, making them one of the longest-lived small parrot species.',
    color: 'text-rose-500',
    bg: 'bg-rose-50',
  },
  {
    icon: TreePine,
    title: 'Natural Behaviour',
    content:
      'These parakeets are highly social and intelligent birds. They form large flocks, especially outside the breeding season, and communicate through a wide variety of calls. They are excellent climbers, using their beak and zygodactyl feet to navigate tree branches with remarkable agility.',
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
  },
  {
    icon: Users,
    title: 'Relationship with Humans',
    content:
      'The Indian Rose-ringed Parakeet has a long history of association with humans. It is one of the most popular pet parrots globally due to its talking ability and charming personality. However, the illegal pet trade poses a serious threat to wild populations, highlighting the need for responsible ownership and conservation awareness.',
    color: 'text-amber-600',
    bg: 'bg-amber-50',
  },
];

const classification = [
  { label: 'Kingdom', value: 'Animalia' },
  { label: 'Phylum', value: 'Chordata' },
  { label: 'Class', value: 'Aves' },
  { label: 'Order', value: 'Psittaciformes' },
  { label: 'Family', value: 'Psittaculidae' },
  { label: 'Genus', value: 'Psittacula' },
  { label: 'Species', value: 'P. krameri' },
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-4">
            About the Indian Rose-ringed Parakeet
          </h2>
          <div className="w-24 h-1 bg-emerald-500 mx-auto rounded-full" />
        </motion.div>

        {/* Scientific Classification */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-xl font-semibold text-stone-700 mb-6 text-center">
            Scientific Classification
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {classification.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="bg-white rounded-xl p-4 shadow-sm border border-stone-100 text-center"
              >
                <p className="text-xs text-stone-400 uppercase tracking-wider mb-1">{item.label}</p>
                <p className="text-sm font-semibold text-stone-800">{item.value}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Info Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sections.map((section, i) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-stone-100 hover:shadow-md transition-shadow duration-300"
            >
              <div className={`inline-flex p-3 rounded-xl ${section.bg} mb-4`}>
                <section.icon className={`w-6 h-6 ${section.color}`} />
              </div>
              <h3 className="text-lg font-semibold text-stone-800 mb-3">{section.title}</h3>
              <p className="text-stone-600 text-sm leading-relaxed">{section.content}</p>
            </motion.div>
          ))}
        </div>

        {/* Importance in Biodiversity */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-2xl p-8 text-white"
        >
          <h3 className="text-xl font-semibold mb-4">Importance in Biodiversity</h3>
          <p className="text-emerald-100 leading-relaxed">
            The Indian Rose-ringed Parakeet plays a vital role in maintaining forest ecosystems.
            As primary seed dispersers, they help regenerate forests by spreading seeds across vast
            areas. Their foraging habits also contribute to controlling insect populations and
            pollinating flowers. The presence of healthy parakeet populations is often an indicator
            of a thriving, balanced ecosystem. Protecting these birds means protecting the intricate
            web of life that depends on India's forests and woodlands.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
