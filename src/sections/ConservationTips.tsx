import { motion } from 'framer-motion';
import { TreePine, Ban, Sprout, EyeOff, HeartHandshake, Megaphone } from 'lucide-react';

const tips = [
  {
    icon: TreePine,
    title: 'Protect Forests and Green Spaces',
    description:
      'Support local and national efforts to preserve forests, parks, and urban green areas. Advocate for tree protection laws and participate in community tree-planting initiatives. Every green space saved is a habitat preserved.',
    color: 'bg-emerald-50 text-emerald-600',
  },
  {
    icon: Ban,
    title: 'Avoid Illegal Bird Trade',
    description:
      'Never purchase wild-caught birds. Support ethical breeders or adopt from rescue organizations. Report illegal bird trade to wildlife authorities. Your choices as a consumer directly impact wild populations.',
    color: 'bg-red-50 text-red-600',
  },
  {
    icon: Sprout,
    title: 'Plant Native Trees',
    description:
      'Native fruit and shade trees provide food and nesting sites for parakeets and countless other species. Plant neem, mango, banyan, peepal, and fig trees in your community. Create green corridors that connect fragmented habitats.',
    color: 'bg-green-50 text-green-600',
  },
  {
    icon: EyeOff,
    title: 'Never Disturb Nests',
    description:
      'If you discover a parakeet nest, observe from a distance. Disturbing nests can cause parents to abandon eggs or chicks. Keep pets away from nesting areas and educate children about respecting wildlife.',
    color: 'bg-amber-50 text-amber-600',
  },
  {
    icon: HeartHandshake,
    title: 'Support Wildlife Conservation Organizations',
    description:
      'Donate to or volunteer with organizations working to protect birds and their habitats. Groups like the Bombay Natural History Society (BNHS), WWF-India, and local wildlife trusts make a real difference.',
    color: 'bg-rose-50 text-rose-600',
  },
  {
    icon: Megaphone,
    title: 'Spread Awareness About Bird Conservation',
    description:
      'Use social media, community events, and educational programs to raise awareness. Share facts about the ecological importance of parakeets. The more people understand, the more voices there are for protection.',
    color: 'bg-sky-50 text-sky-600',
  },
];

export default function ConservationTips() {
  return (
    <section id="conservation-tips" className="py-20 bg-emerald-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Conservation Tips</h2>
          <div className="w-24 h-1 bg-emerald-400 mx-auto rounded-full mb-4" />
          <p className="text-emerald-200 max-w-2xl mx-auto">
            Every individual can make a difference. Here are practical ways you can help protect
            the Indian Rose-ringed Parakeet and its habitat.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tips.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -5 }}
              className="glass rounded-2xl p-6 text-white hover:bg-white/10 transition-all duration-300"
            >
              <div className={`inline-flex p-3 rounded-xl ${item.color} mb-4`}>
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-white/80 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
