import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Database, Server, Cloud } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Microservices Platform",
      description: "Built a scalable microservices architecture handling 1M+ transactions daily. Implemented event-driven architecture with CQRS pattern.",
      tech: ["Node.js", "PostgreSQL", "Redis", "Docker", "AWS"],
      features: ["99.9% uptime", "Sub-100ms response time", "Auto-scaling"],
      icon: Server,
      github: "https://github.com",
      demo: "https://demo.com"
    },
    {
      title: "Real-time Analytics API",
      description: "High-performance analytics API processing 10TB+ of data daily. Built with stream processing and real-time aggregations.",
      tech: ["Python", "Apache Kafka", "ClickHouse", "Kubernetes"],
      features: ["Real-time processing", "99.95% accuracy", "Sub-second queries"],
      icon: Database,
      github: "https://github.com",
      demo: "https://demo.com"
    },
    {
      title: "Serverless Data Pipeline",
      description: "Cloud-native data processing pipeline with automatic scaling and cost optimization. Reduced infrastructure costs by 60%.",
      tech: ["AWS Lambda", "DynamoDB", "API Gateway", "CloudFormation"],
      features: ["Cost optimized", "Auto-scaling", "Fault tolerant"],
      icon: Cloud,
      github: "https://github.com",
      demo: "https://demo.com"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-muted/20">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-gradient">Featured Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of backend systems and infrastructure projects I've architected and built.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className="card-gradient border-border hover:border-primary/50 transition-all duration-300 hover:glow-effect group overflow-hidden"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <project.icon className="h-8 w-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                  <div className="flex gap-2">
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                      <Github className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="space-y-4">
                  <div className="flex flex-wrap gap-1">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="space-y-1">
                    {project.features.map((feature) => (
                      <div key={feature} className="flex items-center text-xs text-muted-foreground">
                        <div className="w-1 h-1 bg-primary rounded-full mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            <Github className="mr-2 h-5 w-5" />
            View More on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;