import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Headphones, Monitor, BookOpen, Users } from "lucide-react";

const SolutionsSection = () => {
  const solutions = [
    {
      icon: Headphones,
      title: "XR Simulators",
      description: "Immersive Extended-Reality training environments for hands-on learning without real-world risks.",
      features: ["VR/AR Training", "Risk-Free Practice", "Industry Scenarios", "Real-time Feedback"],
      color: "bg-primary/10 text-primary"
    },
    {
      icon: Monitor,
      title: "3D Visualization Tools",
      description: "Advanced 3D modeling and visualization platforms for complex technical concepts.",
      features: ["Interactive Models", "Technical Diagrams", "Process Simulation", "Visual Learning"],
      color: "bg-accent/10 text-accent"
    },
    {
      icon: BookOpen,
      title: "Moodle E-Learning Platform",
      description: "Comprehensive learning management system tailored for TVET education needs.",
      features: ["Course Management", "Progress Tracking", "Assessment Tools", "Content Library"],
      color: "bg-primary/10 text-primary"
    },
    {
      icon: Users,
      title: "Integrated Support",
      description: "Complete ecosystem with training, maintenance, and ongoing educational support.",
      features: ["Staff Training", "Technical Support", "Content Updates", "Performance Analytics"],
      color: "bg-accent/10 text-accent"
    }
  ];

  return (
    <section id="solutions" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Comprehensive XR Training Solutions
          </h2>
          <p className="text-lg text-muted-foreground">
            Our integrated ecosystem delivers superior learning outcomes through 
            cutting-edge technology and comprehensive support systems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {solutions.map((solution, index) => {
            const IconComponent = solution.icon;
            return (
              <Card key={index} className="bg-card shadow-soft hover:shadow-elegant transition-smooth">
                <CardHeader>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${solution.color}`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-foreground">{solution.title}</CardTitle>
                    </div>
                  </div>
                  <CardDescription className="text-muted-foreground">
                    {solution.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {solution.features.map((feature, featureIndex) => (
                        <Badge key={featureIndex} variant="secondary" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                    <Button variant="outline" className="w-full">
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center bg-gradient-primary rounded-2xl p-8 text-primary-foreground">
          <h3 className="text-2xl font-semibold mb-4">
            Ready to Transform Your TVET Program?
          </h3>
          <p className="text-primary-foreground/80 mb-6 max-w-2xl mx-auto">
            Join the growing network of TVET institutions revolutionizing 
            technical education with our XR training solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg">
              Schedule Demo
            </Button>
            <Button variant="outline" size="lg" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
              Download Brochure
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;