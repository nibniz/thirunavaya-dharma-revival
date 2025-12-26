import SectionWrapper from "./SectionWrapper";
import { motion } from "framer-motion";
import galleryGopuram from "@/assets/gallery-gopuram.jpg";

interface ContactSectionProps {
  onRegisterClick: () => void;
}

const ContactSection = ({ onRegisterClick }: ContactSectionProps) => {
  return (
    <section id="contact" className="relative">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={galleryGopuram}
          alt="Temple gopuram at sunset"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/85" />
      </div>

      <div className="relative z-10 py-20 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="section-container text-center"
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-primary-foreground mb-4">
            Thirunavaya Mahamagha Mahotsavam
          </h2>
          <p className="text-primary text-lg md:text-xl font-medium tracking-wide mb-8">
            Re-establishing Dharma | Reviving Heritage | Unifying India
          </p>

          <div className="w-24 h-0.5 bg-primary mx-auto mb-12" />

          {/* CTA */}
          <div className="mb-12">
            <p className="text-primary-foreground/80 mb-4">Join us in this sacred revival</p>
            <button
              onClick={onRegisterClick}
              className="px-10 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-saffron-light transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-lg"
            >
              Register Now
            </button>
          </div>

          <div className="space-y-4">
            <p className="text-lg text-primary-foreground/80">Contact</p>
            <div className="space-y-2">
              <a
                href="tel:+919446518126"
                className="block text-xl md:text-2xl font-medium text-primary-foreground hover:text-primary transition-colors"
              >
                +91 9446518126
              </a>
              <a
                href="mailto:kalikapeetham.official@gmail.com"
                className="block text-lg md:text-xl text-primary-foreground hover:text-primary transition-colors"
              >
                kalikapeetham.official@gmail.com
              </a>
            </div>
          </div>

          {/* Social proof / footer text */}
          <div className="mt-16 pt-8 border-t border-primary-foreground/20">
            <p className="text-primary-foreground/60 text-sm">
              © 2025 Thirunavaya Mahamagha Mahotsavam. All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
