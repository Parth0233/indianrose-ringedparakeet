import { motion } from 'framer-motion';
import { Leaf, Heart, Mail, Phone, Globe, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-3 gap-12 mb-12"
        >
          {/* Wildlife Awareness Message */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Leaf className="w-6 h-6 text-emerald-400" />
              <h3 className="text-lg font-semibold">Wildlife Awareness</h3>
            </div>
            <p className="text-stone-400 text-sm leading-relaxed">
              This website is dedicated to raising awareness about the Indian Rose-ringed Parakeet
              and promoting conservation efforts. Knowledge is the first step toward protection.
              Together, we can ensure these magnificent birds continue to grace our skies for
              generations to come.
            </p>
          </div>

          {/* Bird Conservation Message */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Heart className="w-6 h-6 text-rose-400" />
              <h3 className="text-lg font-semibold">Bird Conservation</h3>
            </div>
            <p className="text-stone-400 text-sm leading-relaxed">
              Birds are indicators of environmental health. Protecting the Indian Rose-ringed
              Parakeet means protecting forests, ecosystems, and biodiversity. Support ethical
              practices, reject the illegal pet trade, and advocate for stronger wildlife protection
              laws in your community.
            </p>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="space-y-3 mb-6">
              <a href="mailto:info@wildlifeawareness.org" className="flex items-center gap-3 text-stone-400 hover:text-emerald-400 transition-colors text-sm">
                <Mail className="w-4 h-4" />
                info@wildlifeawareness.org
              </a>
              <a href="tel:+911234567890" className="flex items-center gap-3 text-stone-400 hover:text-emerald-400 transition-colors text-sm">
                <Phone className="w-4 h-4" />
                +91 12345 67890
              </a>
              <a href="#" className="flex items-center gap-3 text-stone-400 hover:text-emerald-400 transition-colors text-sm">
                <Globe className="w-4 h-4" />
                www.wildlifeawareness.org
              </a>
            </div>

            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-stone-800 hover:bg-emerald-600 flex items-center justify-center transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-stone-800 hover:bg-emerald-600 flex items-center justify-center transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-stone-800 hover:bg-emerald-600 flex items-center justify-center transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-stone-800 hover:bg-emerald-600 flex items-center justify-center transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-stone-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-stone-500 text-sm">
              &copy; {new Date().getFullYear()} Wildlife Awareness & Conservation. All rights reserved.
            </p>
            <p className="text-stone-500 text-sm text-center md:text-right">
              Educational Disclaimer: This website is created for educational and awareness purposes
              as part of an internship project. All information is sourced from reputable wildlife
              and conservation resources.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
