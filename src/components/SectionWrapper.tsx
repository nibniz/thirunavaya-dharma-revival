import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionWrapperProps {
  id?: string;
  children: ReactNode;
  className?: string;
  pattern?: boolean;
}

const SectionWrapper = ({ id, children, className = "", pattern = false }: SectionWrapperProps) => {
  return (
    <section
      id={id}
      className={`py-20 md:py-28 ${pattern ? "sacred-pattern" : ""} ${className}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="section-container"
      >
        {children}
      </motion.div>
    </section>
  );
};

export default SectionWrapper;
