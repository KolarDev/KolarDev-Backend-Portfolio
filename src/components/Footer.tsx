import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border py-12 px-6">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="font-mono text-xl font-bold text-primary">
              &lt;KolarDev /&gt;
            </div>
            <p className="text-muted-foreground text-sm">
              Backend Developer passionate about building scalable systems 
              that make a difference.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Quick Links</h4>
            <div className="space-y-2">
              <a href="#about" className="block text-muted-foreground hover:text-primary transition-colors duration-300 text-sm">
                About
              </a>
              <a href="#projects" className="block text-muted-foreground hover:text-primary transition-colors duration-300 text-sm">
                Projects
              </a>
              <a href="#contact" className="block text-muted-foreground hover:text-primary transition-colors duration-300 text-sm">
                Contact
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold">Get In Touch</h4>
            <div className="space-y-2">
              <a 
                href="mailto:alex.chen@example.com" 
                className="block text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
              >
                kolardev118@gmail.com
              </a>
              <div className="text-muted-foreground text-sm">
                Ibadan, Nigeria
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          {/* <div className="flex items-center gap-2 text-sm text-muted-foreground">
            Built with <Heart className="h-4 w-4 text-red-500" fill="currentColor" /> using React & TypeScript
          </div> */}

          <div className="flex items-center gap-6">
            <a 
              href="https://github.com" 
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a 
              href="https://linkedin.com" 
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
              href="kolardev118@gmail.com" 
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>

          <div className="text-sm text-muted-foreground">
            © {currentYear} KolarDev. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;