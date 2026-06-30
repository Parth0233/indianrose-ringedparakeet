import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: 'Where does the Indian Rose-ringed Parakeet live?',
    answer:
      'The Indian Rose-ringed Parakeet is native to the Indian subcontinent, including India, Pakistan, Bangladesh, Nepal, and Sri Lanka. They inhabit tropical forests, woodlands, agricultural fields, parks, gardens, and urban areas. Remarkably adaptable, they have also established feral populations in the UK, Japan, UAE, and other countries.',
  },
  {
    question: 'What do Indian Rose-ringed Parakeets eat?',
    answer:
      'Their diet consists mainly of fruits, seeds, nuts, berries, flowers, vegetables, and grains. In the wild, they feed on mangoes, figs, guavas, wild berries, and various seeds. In captivity, they should receive a balanced diet of pellets, fresh fruits, vegetables, and occasional nuts.',
  },
  {
    question: 'How long do Indian Rose-ringed Parakeets live?',
    answer:
      'In the wild, they typically live 20–30 years. With proper care in captivity—including a balanced diet, mental stimulation, regular veterinary check-ups, and a spacious environment—they can live beyond 30 years, sometimes reaching 35 years or more.',
  },
  {
    question: 'Can Indian Rose-ringed Parakeets talk?',
    answer:
      'Yes, they are among the best talking parrots in the world. They can learn hundreds of words and phrases, often with surprising clarity. Individual birds develop unique vocabularies, and some have been documented speaking in contextually appropriate situations, making them highly sought-after as pets.',
  },
  {
    question: 'How do Indian Rose-ringed Parakeets breed?',
    answer:
      'They form monogamous pairs and breed during the spring and early summer. The female lays 3–6 eggs in a tree cavity or nest box. She incubates the eggs for about 23 days while the male feeds her. Both parents raise the chicks, which fledge after approximately 7 weeks and become independent a few weeks later.',
  },
  {
    question: 'Are Indian Rose-ringed Parakeets social birds?',
    answer:
      'Extremely social. They form large flocks outside the breeding season, sometimes numbering in the hundreds. These flocks forage, preen, roost, and communicate together. Their social bonds are crucial for mental well-being, and isolated birds can develop behavioural problems like feather plucking.',
  },
  {
    question: 'What conservation challenges do they face?',
    answer:
      'Major threats include habitat loss from deforestation and urbanization, illegal pet trade, pesticide exposure, and persecution as agricultural pests. Despite being listed as Least Concern by IUCN, local populations are declining in some areas due to these pressures.',
  },
  {
    question: 'What does proper pet care involve?',
    answer:
      'Proper care requires a spacious cage or aviary, a varied diet of pellets, fruits, and vegetables, daily mental stimulation and social interaction, regular out-of-cage exercise, toys for enrichment, clean living conditions, and annual veterinary check-ups with an avian specialist.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-4">
            Frequently Asked Questions
          </h2>
          <div className="w-24 h-1 bg-emerald-500 mx-auto rounded-full mb-4" />
          <p className="text-stone-600 max-w-2xl mx-auto">
            Find answers to common questions about the Indian Rose-ringed Parakeet.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="bg-stone-50 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-stone-100 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <HelpCircle className="w-5 h-5 text-emerald-500 shrink-0" />
                  <span className="font-medium text-stone-800">{faq.question}</span>
                </div>
                <motion.div
                  animate={{ rotate: openIndex === i ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown className="w-5 h-5 text-stone-400" />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-5 pt-0 text-stone-600 leading-relaxed pl-13">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
