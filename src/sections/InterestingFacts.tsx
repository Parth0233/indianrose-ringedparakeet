import { motion } from 'framer-motion';
import { Volume2, Palette, CircleDot, Wrench, Users, Clock, Mountain, Brain, MapPin, TreePine } from 'lucide-react';

const facts = [
  {
    icon: Volume2,
    title: 'Excellent Mimicking Ability',
    fact: 'Rose-ringed Parakeets can learn over 250 words and phrases. Some individuals have been recorded speaking in complete sentences with contextual understanding, making them one of the best talking parrot species.',
    color: 'bg-emerald-50 text-emerald-600',
  },
  {
    icon: Palette,
    title: 'Bright Green Plumage',
    fact: 'Their vibrant lime to emerald green feathers provide excellent camouflage in leafy canopies. The coloration comes from structural pigments and diet-derived carotenoids, making nutrition crucial for maintaining their brilliant appearance.',
    color: 'bg-green-50 text-green-600',
  },
  {
    icon: CircleDot,
    title: 'Males Have a Rose-Colored Neck Ring',
    fact: 'The distinctive rose-pink collar appears only in adult males after 18 months of age. The ring is actually a thin band of colored feathers that becomes more vivid during breeding season as a display feature.',
    color: 'bg-rose-50 text-rose-600',
  },
  {
    icon: Wrench,
    title: 'Strong Curved Beak',
    fact: 'Their beak can exert pressure of over 150 psi — strong enough to crack hard walnut shells. The upper mandible is hinged, allowing precise manipulation of objects, and they use their beak as a "third hand" for climbing.',
    color: 'bg-amber-50 text-amber-600',
  },
  {
    icon: Users,
    title: 'Highly Social Bird',
    fact: 'Flocks can number in the thousands at communal roosts. These social gatherings serve multiple purposes: predator detection, information sharing about food sources, and social bonding through mutual preening.',
    color: 'bg-sky-50 text-sky-600',
  },
  {
    icon: Clock,
    title: 'Can Live Over 25 Years',
    fact: 'With excellent care, captive Rose-ringed Parakeets have been documented living beyond 35 years. Their longevity makes them one of the longest-lived small parrots, requiring a lifetime commitment from owners.',
    color: 'bg-yellow-50 text-yellow-600',
  },
  {
    icon: Mountain,
    title: 'Excellent Climbers',
    fact: 'Using their zygodactyl feet (two toes forward, two back) and strong beak, they can climb vertical tree trunks with ease. This climbing ability allows them to access food and nesting sites unavailable to many other birds.',
    color: 'bg-stone-50 text-stone-600',
  },
  {
    icon: Brain,
    title: 'Intelligent Problem Solvers',
    fact: 'In intelligence tests, they demonstrate cognitive abilities comparable to a 3–5 year old human child. They can solve multi-step puzzles, understand object permanence, and even learn through observation without direct training.',
    color: 'bg-purple-50 text-purple-600',
  },
  {
    icon: MapPin,
    title: 'Native to India and Parts of Asia & Africa',
    fact: 'Four subspecies are recognized across their range. The Indian subspecies (P. k. borealis) is the most widespread and the one most commonly kept as pets. They have also established feral populations on every continent except Antarctica.',
    color: 'bg-orange-50 text-orange-600',
  },
  {
    icon: TreePine,
    title: 'Plays an Important Role in Forest Ecosystems',
    fact: 'By dispersing seeds of figs, mangoes, and other fruit trees, they act as "farmers of the forest." Studies show that areas with healthy parakeet populations have 20–30% higher tree regeneration rates.',
    color: 'bg-teal-50 text-teal-600',
  },
];

export default function InterestingFacts() {
  return (
    <section id="facts" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-4">Interesting Facts</h2>
          <div className="w-24 h-1 bg-emerald-500 mx-auto rounded-full mb-4" />
          <p className="text-stone-600 max-w-2xl mx-auto">
            Discover fascinating facts about the Indian Rose-ringed Parakeet that make it one of
            the most remarkable birds in the world.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {facts.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              whileHover={{ y: -3, scale: 1.01 }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-stone-100 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className={`inline-flex p-3 rounded-xl ${item.color} shrink-0`}>
                  <item.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-stone-800 mb-2">{item.title}</h3>
                  <p className="text-sm text-stone-600 leading-relaxed">{item.fact}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
