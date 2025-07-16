import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, DollarSign, Users, Award } from "lucide-react";

const ImpactSection = () => {
  const impactMetrics = [
    {
      icon: TrendingUp,
      value: "233%",
      label: "Higher Skill Acquisition",
      description: "Students using our XR platforms demonstrate significantly improved learning outcomes",
      color: "text-primary"
    },
    {
      icon: DollarSign,
      value: "40%",
      label: "Lower Delivery Cost",
      description: "Reduced operational expenses compared to traditional laboratory setups",
      color: "text-accent"
    },
    {
      icon: Users,
      value: "250+",
      label: "Target TVET Campuses",
      description: "Projected reach across South Africa and SADC region by 2030",
      color: "text-primary"
    },
    {
      icon: Award,
      value: "100%",
      label: "Industry Alignment",
      description: "Training programs designed to meet current industry standards and requirements",
      color: "text-accent"
    }
  ];

  return (
    <section id="impact" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Measurable Impact on Education
          </h2>
          <p className="text-lg text-muted-foreground">
            Our XR training solutions deliver quantifiable improvements in learning 
            outcomes while reducing costs for educational institutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {impactMetrics.map((metric, index) => {
            const IconComponent = metric.icon;
            return (
              <Card key={index} className="bg-gradient-card shadow-soft hover:shadow-elegant transition-smooth text-center">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className={`w-8 h-8 ${metric.color}`} />
                    </div>
                    <div className={`text-4xl font-bold ${metric.color} mb-2`}>
                      {metric.value}
                    </div>
                    <div className="text-lg font-semibold text-foreground mb-3">
                      {metric.label}
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {metric.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Case Study Preview */}
        <div className="mt-20">
          <div className="bg-muted/50 rounded-2xl p-8 md:p-12">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  Real Results from Real Institutions
                </h3>
                <p className="text-muted-foreground mb-6">
                  TVET colleges using our XR training solutions report significant 
                  improvements in student engagement, skill retention, and job placement rates.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-foreground">Increased student engagement by 85%</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-foreground">Improved skill retention rates by 60%</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-foreground">Enhanced job placement success by 45%</span>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-background rounded-lg p-6 text-center">
                  <div className="text-2xl font-bold text-primary mb-1">85%</div>
                  <div className="text-sm text-muted-foreground">Student Engagement</div>
                </div>
                <div className="bg-background rounded-lg p-6 text-center">
                  <div className="text-2xl font-bold text-accent mb-1">60%</div>
                  <div className="text-sm text-muted-foreground">Skill Retention</div>
                </div>
                <div className="bg-background rounded-lg p-6 text-center">
                  <div className="text-2xl font-bold text-primary mb-1">45%</div>
                  <div className="text-sm text-muted-foreground">Job Placement</div>
                </div>
                <div className="bg-background rounded-lg p-6 text-center">
                  <div className="text-2xl font-bold text-accent mb-1">95%</div>
                  <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;