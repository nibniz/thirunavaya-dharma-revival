import SectionWrapper from "./SectionWrapper";
import { motion } from "framer-motion";
import galleryRiver from "@/assets/gallery-river.jpg";

const riverAspects = [
  { title: "The Convergence", description: "All Indian Tirthas meet here" },
  { title: "Divine Vitality", description: "Flow of Devatachaitanyam" },
  { title: "Living Source", description: "Of Prana and spiritual energy" },
];

const BharathappuzhaSection = () => {
  return (
    <SectionWrapper id="bharathappuzha" className="bg-secondary">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-subtitle">Bharathappuzha</span>
          <h2 className="section-title">The River of India</h2>
          <div className="w-24 h-0.5 bg-primary mb-8" />
          <p className="body-text mb-8">
            Bharathappuzha originates from Trimurti Malai and flows through sacred lands 
            before reaching Thirunavaya and merging with the sea.
          </p>

          <div className="space-y-4 mb-8">
            {riverAspects.map((aspect, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center gap-4 bg-card p-4 border border-sacred-border rounded-lg"
              >
                <div className="w-1 h-12 bg-primary" />
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground">
                    {aspect.title}
                  </h3>
                  <p className="text-muted-foreground">{aspect.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <p className="body-text font-medium text-foreground">
            Bathing in its waters during Magha is considered one of the highest forms of spiritual purification.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <div className="relative rounded-xl overflow-hidden shadow-2xl">
            <img
              src={galleryRiver}
              alt="Aerial view of Bharathappuzha river flowing through Kerala"
              className="w-full h-80 lg:h-[450px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent" />
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default BharathappuzhaSection;
