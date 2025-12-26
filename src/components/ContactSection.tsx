import SectionWrapper from "./SectionWrapper";
import { motion } from "framer-motion";

const ContactSection = () => {
  return (
    <SectionWrapper id="contact" className="bg-foreground text-primary-foreground">
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold mb-4">
            Thirunavaya Mahamagha Mahotsavam
          </h2>
          <p className="text-primary text-lg md:text-xl font-medium tracking-wide mb-12">
            Re-establishing Dharma | Reviving Heritage | Unifying India
          </p>

          <div className="w-24 h-0.5 bg-primary mx-auto mb-12" />

          <div className="space-y-4">
            <p className="text-lg text-primary-foreground/80">Contact</p>
            <div className="space-y-2">
              <a
                href="tel:+919446518126"
                className="block text-xl md:text-2xl font-medium hover:text-primary transition-colors"
              >
                +91 9446518126
              </a>
              <a
                href="mailto:kalikapeetham.official@gmail.com"
                className="block text-lg md:text-xl hover:text-primary transition-colors"
              >
                kalikapeetham.official@gmail.com
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default ContactSection;
