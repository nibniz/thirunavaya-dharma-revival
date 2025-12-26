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

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-card/98 backdrop-blur-md shadow-lg border-b border-sacred-border"
            : "bg-transparent"
        }`}
      >
        <div className="section-container">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <a href="#" className="flex items-center gap-3">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-primary to-saffron-dark flex items-center justify-center text-primary-foreground font-display text-lg md:text-xl font-bold">
                ॐ
              </div>
              <div className="hidden sm:block">
                <span className="font-display text-lg md:text-xl font-bold text-foreground block leading-tight">
                  Thirunavaya
                </span>
                <span className="text-xs text-primary font-medium tracking-wide">
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
                    <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors">
                      {link.label}
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    <AnimatePresence>
                      {openDropdown === link.label && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute top-full left-0 mt-1 bg-card border border-sacred-border rounded-lg shadow-xl py-2 min-w-[200px]"
                        >
                          {link.children.map((child) => (
                            <a
                              key={child.href}
                              href={child.href}
                              className="block px-4 py-2 text-sm text-foreground hover:bg-secondary hover:text-primary transition-colors"
                            >
                              {child.label}
                            </a>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <a
                    key={link.href}
                    href={link.href}
                    className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                )
              ))}
              <button
                onClick={onRegisterClick}
                className="ml-4 px-6 py-2.5 bg-gradient-to-r from-primary to-saffron-dark text-primary-foreground font-semibold rounded-lg hover:shadow-lg transition-all duration-300 text-sm"
              >
                Register Now
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-16 z-40 bg-card border-b border-sacred-border shadow-xl lg:hidden overflow-hidden"
          >
            <div className="section-container py-6 space-y-2">
              {navLinks.map((link) => (
                link.children ? (
                  <div key={link.label} className="space-y-1">
                    <span className="block px-4 py-2 text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                      {link.label}
                    </span>
                    {link.children.map((child) => (
                      <a
                        key={child.href}
                        href={child.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block px-6 py-2 text-foreground hover:text-primary hover:bg-secondary transition-colors rounded-lg"
                      >
                        {child.label}
                      </a>
                    ))}
                  </div>
                ) : (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-4 py-3 text-lg font-medium text-foreground hover:text-primary hover:bg-secondary transition-colors rounded-lg"
                  >
                    {link.label}
                  </a>
                )
              ))}
              <div className="pt-4 border-t border-sacred-border">
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onRegisterClick();
                  }}
                  className="w-full py-4 bg-gradient-to-r from-primary to-saffron-dark text-primary-foreground font-semibold rounded-lg shadow-lg text-lg"
                >
                  Register Now
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
