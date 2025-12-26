import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube } from "lucide-react";

interface FooterSectionProps {
  onRegisterClick: () => void;
}

const FooterSection = ({ onRegisterClick }: FooterSectionProps) => {
  const quickLinks = [
    { label: "About Mahamagham", href: "#introduction" },
    { label: "Event Schedule", href: "#schedule" },
    { label: "Photo Gallery", href: "#gallery" },
    { label: "Trimurti Sangamam", href: "#trimurti" },
    { label: "The Revival", href: "#revival" },
  ];

  const importantLinks = [
    { label: "Bathing Dates", href: "#schedule" },
    { label: "How to Reach", href: "#contact" },
    { label: "Accommodation", href: "#contact" },
    { label: "FAQs", href: "#introduction" },
    { label: "Contact Us", href: "#contact" },
  ];

  return (
    <footer className="bg-deep-brown text-primary-foreground">
      {/* Main Footer */}
      <div className="section-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-gold flex items-center justify-center text-2xl font-display font-bold">
                ॐ
              </div>
              <div>
                <span className="font-display text-xl font-bold block">Thirunavaya</span>
                <span className="text-primary text-sm">Mahamagha Mahotsavam</span>
              </div>
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-6">
              A sacred revival of India's spiritual sovereignty on the banks of Bharathappuzha.
            </p>
            <button onClick={onRegisterClick} className="btn-primary w-full">
              Register Now
            </button>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-lg font-bold text-primary mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Important Links */}
          <div>
            <h3 className="font-display text-lg font-bold text-primary mb-6">Important Links</h3>
            <ul className="space-y-3">
              {importantLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-display text-lg font-bold text-primary mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <a href="tel:+919446518126" className="text-primary-foreground hover:text-primary transition-colors">
                    +91 9446518126
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <a href="mailto:kalikapeetham.official@gmail.com" className="text-primary-foreground/70 hover:text-primary transition-colors text-sm break-all">
                  kalikapeetham.official@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-primary-foreground/70 text-sm">
                  Thirunavaya, Malappuram District, Kerala, India
                </span>
              </li>
            </ul>

            {/* Social Links */}
            <div className="mt-6">
              <h4 className="text-sm font-semibold text-primary-foreground/70 mb-3">Follow Us</h4>
              <div className="flex gap-3">
                {[Facebook, Twitter, Instagram, Youtube].map((Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-primary flex items-center justify-center transition-all duration-300"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="section-container py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-primary-foreground/60">
          <p>© 2025 Thirunavaya Mahamagha Mahotsavam. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
