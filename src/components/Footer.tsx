import { Github, Linkedin, Instagram, Heart } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card/50 border-t border-border/50 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-4">Portfolio</h3>
            <p className="text-muted-foreground text-sm">
              Building innovative solutions with modern technologies.
              Let's create something amazing together.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["About", "Portfolio", "Experience", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              <a
                href="https://github.com/Asadhassan07"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-background rounded-lg hover:bg-primary/10 hover:text-primary transition-all"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/in/asad-hassan-592a39308"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-background rounded-lg hover:bg-primary/10 hover:text-primary transition-all"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              {/* <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-background rounded-lg hover:bg-primary/10 hover:text-primary transition-all"
              >
                <FaWhatsapp className="h-5 w-5" />
              </a> */}
              <a
                href="https://www.instagram.com/shedu_asad/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-background rounded-lg hover:bg-primary/10 hover:text-primary transition-all"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border/50 text-center">
          <p className="text-muted-foreground text-sm flex items-center justify-center gap-1">
            Made with <Heart className="h-4 w-4 text-red-500 fill-red-500" /> © {currentYear} All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
