import { Card } from "@/components/ui/card";
import { Server, Database, Cloud, Code, Shield, Zap } from "lucide-react";

const About = () => {
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
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-gradient">About Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate backend developer with 5+ years of experience building 
            enterprise-grade systems that scale.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-6">My Journey</h3>
            <p className="text-muted-foreground leading-relaxed">
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
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span key={skill} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {specialties.map((specialty, index) => (
              <Card 
                key={specialty.title} 
                className="card-gradient p-6 border-border hover:border-primary/50 transition-all duration-300 hover:glow-effect group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <specialty.icon className="h-8 w-8 text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h4 className="font-semibold mb-2">{specialty.title}</h4>
                <p className="text-sm text-muted-foreground">{specialty.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;