import SectionWrapper from "./SectionWrapper";
import { motion } from "framer-motion";
import galleryTempleInterior from "@/assets/gallery-temple-interior.jpg";

const trimurtiData = [
  {
    deity: "Lord Vishnu",
    title: "Thirunavaya Navamukundan",
    description: "Resides on one bank of the river",
    icon: "🕉️",
  },
  {
    deity: "Lord Brahma & Lord Shiva",
    title: "Sacred Temples",
    description: "Stand on the opposite bank",
    icon: "🔱",
  },
  {
    deity: "Rajarajeshwari",
    title: "The Universal Mother",
    description: "Revered at the midpoint of the river",
    icon: "✨",
  },
];

interface TrimurtiSectionProps {
  onRegisterClick: () => void;
}

const TrimurtiSection = ({ onRegisterClick }: TrimurtiSectionProps) => {
  return (
    <SectionWrapper id="trimurti" className="bg-secondary">
      <div className="text-center mb-16">
        <span className="section-subtitle">Trimurti Sangamam</span>
        <h2 className="section-title">A Rare Mokshasthali</h2>
        <div className="sacred-divider" />
        <p className="body-text max-w-3xl mx-auto">
          Thirunavaya is one of the rare Divyadesams in India where the Trimurtis—Brahma, 
          Vishnu, and Shiva—are consecrated in a unique triangular configuration around the river.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-xl overflow-hidden shadow-2xl order-2 lg:order-1"
        >
          <img
            src={galleryTempleInterior}
            alt="Temple interior with devotees in prayer"
            className="w-full h-80 lg:h-[400px] object-cover"
          />
        </motion.div>

        <div className="order-1 lg:order-2">
          <div className="space-y-6">
            {trimurtiData.map((item, index) => (
              <motion.div
                key={item.deity}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start gap-4 bg-card p-6 border border-sacred-border rounded-lg"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 text-2xl">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-foreground">
                    {item.deity}
                  </h3>
                  <p className="text-primary font-medium">{item.title}</p>
                  <p className="text-muted-foreground text-sm mt-1">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-card p-8 border border-sacred-border rounded-lg text-center max-w-3xl mx-auto"
      >
        <p className="body-text mb-6">
          This sacred geometry establishes Thirunavaya as a <strong className="text-primary">Trimurti Sangama</strong> and 
          a <strong className="text-primary">Mokshasthali</strong>, comparable to Gaya. From time immemorial, 
          devotees have performed Pithru Karma (ancestral rites) here, seeking liberation and spiritual fulfillment.
        </p>
        <button
          onClick={onRegisterClick}
          className="px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-saffron-dark transition-all duration-300"
        >
          Join the Sacred Gathering
        </button>
      </motion.div>
    </SectionWrapper>
  );
};

export default TrimurtiSection;
