import { motion } from 'framer-motion';
import { Brain, Mic, Plane, Users, MessageCircle, Heart, Home, Sun } from 'lucide-react';

const behaviours = [
  {
    icon: Brain,
    title: 'Intelligence',
    description:
      'Among the most intelligent of all bird species, Rose-ringed Parakeets demonstrate remarkable problem-solving abilities. They can learn complex tasks, understand cause and effect, and even use tools in captivity. Their cognitive abilities rival those of crows and ravens.',
    color: 'bg-emerald-50 text-emerald-600',
  },
  {
    icon: Mic,
    title: 'Mimicking Human Speech',
    description:
      'Renowned worldwide for their exceptional talking ability. They can learn hundreds of words and phrases, often with surprising clarity. Individual birds develop unique vocabularies, and some have been documented speaking in contextually appropriate situations.',
    color: 'bg-amber-50 text-amber-600',
  },
  {
    icon: Plane,
    title: 'Flying Ability',
    description:
      'Agile and swift fliers, they can reach speeds of up to 40 km/h. Their long tail acts as a rudder, enabling tight maneuvers through dense forest canopy. They are capable of sustained flight over long distances when searching for food or water.',
    color: 'bg-sky-50 text-sky-600',
  },
  {
    icon: Users,
    title: 'Social Behaviour',
    description:
      'Highly social birds that form large communal roosts of hundreds of individuals. Outside breeding season, they forage, preen, and sleep together. These social bonds are crucial for their survival and mental well-being.',
    color: 'bg-rose-50 text-rose-600',
  },
  {
    icon: MessageCircle,
    title: 'Communication',
    description:
      'Possess a rich vocal repertoire including contact calls, alarm calls, courtship songs, and mimicry. Each flock develops regional dialects, and young birds learn calls from their parents and flock members.',
    color: 'bg-yellow-50 text-yellow-600',
  },
  {
    icon: Heart,
    title: 'Pair Bonding',
    description:
      'Form strong, often lifelong monogamous bonds. Pairs engage in mutual preening, synchronized feeding, and elaborate courtship displays. The male performs wing-flapping dances and feeds the female as part of bonding rituals.',
    color: 'bg-pink-50 text-pink-600',
  },
  {
    icon: Home,
    title: 'Nesting Behaviour',
    description:
      'Females lay 3–6 eggs per clutch in tree cavities. The female incubates the eggs for about 23 days while the male feeds her. Both parents participate in raising the chicks, which fledge after approximately 7 weeks.',
    color: 'bg-stone-50 text-stone-600',
  },
  {
    icon: Sun,
    title: 'Daily Activities',
    description:
      'Diurnal birds with a structured daily routine: early morning foraging, midday resting and preening, afternoon feeding, and evening return to communal roosts. They spend considerable time maintaining their plumage.',
    color: 'bg-orange-50 text-orange-600',
  },
];

export default function Behaviour() {
  return (
    <section id="behaviour" className="py-20 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-4">Behaviour</h2>
          <div className="w-24 h-1 bg-emerald-500 mx-auto rounded-full mb-4" />
          <p className="text-stone-600 max-w-2xl mx-auto">
            Understanding the complex behavioural patterns of the Indian Rose-ringed Parakeet
            reveals why it is one of the most fascinating bird species on Earth.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {behaviours.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -3 }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-stone-100 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className={`inline-flex p-3 rounded-xl ${item.color} shrink-0`}>
                  <item.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-stone-800 mb-2">{item.title}</h3>
                  <p className="text-sm text-stone-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
