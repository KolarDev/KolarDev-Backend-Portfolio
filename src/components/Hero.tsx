import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";
import { useEffect, useState } from "react";

const Hero = () => {
  const [mounted, setMounted] = useState(false);
  const [currentText, setCurrentText] = useState("");
  const fullText = "Muhyideen Abdulbasit";

  useEffect(() => {
    setMounted(true);
    
    // Typewriter effect
    let i = 0;
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setCurrentText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 150);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Hero background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 hero-gradient opacity-80" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className={`transition-all duration-1000 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
          <div className="mb-6 animate-fade-in-up" style={{ animationDelay: '0.2s', opacity: 0 }}>
            <span className="text-primary font-mono text-lg relative">
              Hello, I'm
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-primary rounded-full animate-bounce-gentle"></div>
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up" style={{ animationDelay: '0.4s', opacity: 0 }}>
            <span className="text-gradient relative">
              {currentText}
              <span className="animate-blink">|</span>
            </span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-light mb-8 text-muted-foreground animate-fade-in-up" style={{ animationDelay: '0.6s', opacity: 0 }}>
            <span className="relative overflow-hidden inline-block">
              <span className="animate-text-reveal">Backend Developer & System Architect</span>
            </span>
          </h2>
          
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed text-muted-foreground animate-fade-in-up" style={{ animationDelay: '0.8s', opacity: 0 }}>
            Building robust, scalable systems that power modern applications. 
            Specialized in distributed architectures, API design, and cloud infrastructure.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-scale-in" style={{ animationDelay: '1s', opacity: 0 }}>
            <Button size="lg" className="bg-primary hover:bg-primary-hover glow-pulse group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary-glow opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              <Mail className="mr-2 h-5 w-5 group-hover:animate-bounce-gentle" />
              Get In Touch
            </Button>
            <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground group relative overflow-hidden">
              <div className="absolute inset-0 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              <Download className="mr-2 h-5 w-5 relative z-10 group-hover:animate-bounce-gentle" />
              <span className="relative z-10">Download CV</span>
            </Button>
          </div>
          
          <div className="flex gap-6 justify-center animate-fade-in-up" style={{ animationDelay: '1.2s', opacity: 0 }}>
            <a 
              href="https://github.com/KolarDev" 
              className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-125 hover:rotate-12 group"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6 group-hover:animate-bounce-gentle" />
            </a>
            <a 
              href="https://www.linkedin.com/in/abdulbasit-muhyideen-8138a22a1/" 
              className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-125 hover:rotate-12 group"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6 group-hover:animate-bounce-gentle" />
            </a>
            <a 
              href="kolardev118@gmail.com" 
              className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-125 hover:rotate-12 group"
              aria-label="Email"
            >
              <Mail className="h-6 w-6 group-hover:animate-bounce-gentle" />
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;