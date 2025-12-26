import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";

const navLinks = [
  { href: "#introduction", label: "About" },
  { href: "#schedule", label: "Schedule" },
  { href: "#gallery", label: "Gallery" },
  { 
    label: "Significance",
    children: [
      { href: "#divine-roots", label: "Divine Origins" },
      { href: "#trimurti", label: "Trimurti Sangamam" },
      { href: "#mahamagham", label: "Spiritual Governance" },
    ]
  },
  { href: "#revival", label: "Revival" },
  { href: "#contact", label: "Contact" },
];

interface NavigationProps {
  onRegisterClick: () => void;
}

const Navigation = ({ onRegisterClick }: NavigationProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-10 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-card/98 backdrop-blur-md shadow-lg border-b border-sacred-border"
            : "bg-transparent"
        }`}
      >
        <div className="section-container">
          <div className="flex items-center justify-between h-14 md:h-16 lg:h-20">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2 md:gap-3">
              <motion.div 
                className="w-9 h-9 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-full bg-gradient-to-br from-primary to-saffron-dark flex items-center justify-center text-primary-foreground font-display text-base md:text-lg lg:text-xl font-bold shadow-lg"
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                ॐ
              </motion.div>
              <div className="hidden sm:block">
                <span className="font-display text-base md:text-lg lg:text-xl font-bold text-foreground block leading-tight">
                  Thirunavaya
                </span>
                <span className="text-[10px] md:text-xs text-primary font-medium tracking-wide">
                  Mahamagha Mahotsavam
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                link.children ? (
                  <div
                    key={link.label}
                    className="relative"
                    onMouseEnter={() => setOpenDropdown(link.label)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <button className="flex items-center gap-1 px-3 lg:px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors">
                      {link.label}
                      <motion.div
                        animate={{ rotate: openDropdown === link.label ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronDown className="w-4 h-4" />
                      </motion.div>
                    </button>
                    <AnimatePresence>
                      {openDropdown === link.label && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-1 bg-card border border-sacred-border rounded-lg shadow-xl py-2 min-w-[200px]"
                        >
                          {link.children.map((child) => (
                            <motion.a
                              key={child.href}
                              href={child.href}
                              whileHover={{ x: 5 }}
                              className="block px-4 py-2 text-sm text-foreground hover:bg-secondary hover:text-primary transition-colors"
                            >
                              {child.label}
                            </motion.a>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    whileHover={{ scale: 1.05 }}
                    className="px-3 lg:px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </motion.a>
                )
              ))}
              <motion.button
                onClick={onRegisterClick}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="ml-4 px-4 lg:px-6 py-2 lg:py-2.5 bg-gradient-to-r from-primary to-saffron-dark text-primary-foreground font-semibold rounded-lg hover:shadow-lg transition-all duration-300 text-sm"
              >
                Register Now
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
              aria-label="Toggle menu"
              whileTap={{ scale: 0.9 }}
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                  >
                    <X className="w-6 h-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                  >
                    <Menu className="w-6 h-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-foreground/20 backdrop-blur-sm z-40 lg:hidden"
              style={{ top: "calc(2.5rem + 3.5rem)" }}
            />
            
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-x-0 top-[calc(2.5rem+3.5rem)] md:top-[calc(2.5rem+4rem)] z-50 bg-card border-b border-sacred-border shadow-xl lg:hidden overflow-hidden"
            >
              <div className="section-container py-4 md:py-6 space-y-2 max-h-[60vh] overflow-y-auto">
                {navLinks.map((link, index) => (
                  link.children ? (
                    <motion.div 
                      key={link.label} 
                      className="space-y-1"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <span className="block px-4 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                        {link.label}
                      </span>
                      {link.children.map((child) => (
                        <a
                          key={child.href}
                          href={child.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="block px-6 py-2 text-sm text-foreground hover:text-primary hover:bg-secondary transition-colors rounded-lg"
                        >
                          {child.label}
                        </a>
                      ))}
                    </motion.div>
                  ) : (
                    <motion.a
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="block px-4 py-3 text-base font-medium text-foreground hover:text-primary hover:bg-secondary transition-colors rounded-lg"
                    >
                      {link.label}
                    </motion.a>
                  )
                ))}
                <motion.div 
                  className="pt-4 border-t border-sacred-border"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <button
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      onRegisterClick();
                    }}
                    className="w-full py-3 md:py-4 bg-gradient-to-r from-primary to-saffron-dark text-primary-foreground font-semibold rounded-lg shadow-lg text-base md:text-lg"
                  >
                    Register Now
                  </button>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
