import { Card } from "@/components/ui/card";
import { Server, Database, Cloud, Code, Shield, Zap } from "lucide-react";
import { useScrollAnimation, useStaggeredAnimation } from "@/hooks/useScrollAnimation";

const About = () => {
  const { elementRef: sectionRef, isVisible: sectionVisible } = useScrollAnimation();
  const { elementRef: textRef, isVisible: textVisible } = useScrollAnimation({ threshold: 0.3 });
  const { containerRef: cardContainerRef, visibleItems } = useStaggeredAnimation(6, 150);
  const { containerRef: skillContainerRef, visibleItems: visibleSkills } = useStaggeredAnimation(12, 80);

  const skills = [
    "Node.js", "Python", "Go", "PostgreSQL", "MongoDB", "Redis",
    "AWS", "Docker", "Kubernetes", "GraphQL", "REST APIs", "Microservices"
  ];

  const specialties = [
    {
      icon: Server,
      title: "System Architecture",
      description: "Designing scalable distributed systems that handle millions of requests"
    },
    {
      icon: Database,
      title: "Database Design",
      description: "Optimizing data models and queries for performance and reliability"
    },
    {
      icon: Cloud,
      title: "Cloud Infrastructure",
      description: "Building and managing cloud-native applications on AWS and GCP"
    },
    {
      icon: Code,
      title: "API Development",
      description: "Creating robust RESTful and GraphQL APIs with comprehensive documentation"
    },
    {
      icon: Shield,
      title: "Security & Auth",
      description: "Implementing secure authentication and authorization systems"
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimizing system performance and reducing response times"
    }
  ];

  return (
    <section id="about" className="py-20 px-6" ref={sectionRef}>
      <div className="container mx-auto">
        <div className={`text-center mb-16 transition-all duration-1000 ${sectionVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-gradient relative">
              About Me
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-primary-glow/20 blur-sm -z-10 animate-glow-pulse"></div>
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate backend developer with 5+ years of experience building 
            enterprise-grade systems that scale.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div ref={textRef} className={`space-y-6 transition-all duration-1000 ${textVisible ? 'animate-fade-in-left' : 'opacity-0 -translate-x-10'}`}>
            <h3 className="text-2xl font-semibold mb-6 relative">
              My Journey
              <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-primary to-primary-glow"></div>
            </h3>
            <p className="text-muted-foreground leading-relaxed relative">
              Started as a full-stack developer but found my passion in backend systems. 
              I love the challenge of building robust, efficient systems that can handle 
              complex business logic while maintaining high performance and reliability.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Currently working on microservices architecture and exploring serverless 
              technologies to build the next generation of scalable applications.
            </p>
            
            <div className="pt-6">
              <h4 className="text-lg font-semibold mb-4 text-primary">Tech Stack</h4>
              <div ref={skillContainerRef} className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span 
                    key={skill} 
                    className={`skill-tag transition-all duration-500 ${
                      visibleSkills.includes(index) 
                        ? 'animate-scale-in hover:scale-110 hover:rotate-3' 
                        : 'opacity-0 scale-75'
                    }`}
                    style={{ animationDelay: `${index * 80}ms` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div ref={cardContainerRef} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {specialties.map((specialty, index) => (
              <Card 
                key={specialty.title} 
                className={`card-gradient p-6 border-border hover:border-primary/50 transition-all duration-500 hover:glow-pulse group relative overflow-hidden ${
                  visibleItems.includes(index) 
                    ? 'animate-fade-in-up hover:scale-105' 
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary-glow/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <specialty.icon className="h-8 w-8 text-primary mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 relative z-10" />
                <h4 className="font-semibold mb-2 relative z-10 group-hover:text-primary transition-colors duration-300">{specialty.title}</h4>
                <p className="text-sm text-muted-foreground relative z-10">{specialty.description}</p>
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-primary-glow scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;