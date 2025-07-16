import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Zap } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Transforming Technical Education in Africa
          </h2>
          <p className="text-lg text-muted-foreground">
            Kwanda Digital is a Johannesburg-based Ed-Tech company revolutionizing 
            vocational training through cutting-edge XR technology and comprehensive 
            learning ecosystems.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Mission */}
          <Card className="bg-gradient-card shadow-soft hover:shadow-elegant transition-smooth">
            <CardContent className="p-8 text-center">
              <div className="mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Target className="w-8 h-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground">
                Democratise high-quality, risk-free, industry-aligned practical 
                training for every TVET learner across Africa.
              </p>
            </CardContent>
          </Card>

          {/* Vision */}
          <Card className="bg-gradient-card shadow-soft hover:shadow-elegant transition-smooth">
            <CardContent className="p-8 text-center">
              <div className="mb-6">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                  <Eye className="w-8 h-8 text-accent" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground">
                By 2030, be Africa's default XR training backbone for 250+ TVET 
                campuses across the SADC region.
              </p>
            </CardContent>
          </Card>

          {/* Core Offering */}
          <Card className="bg-gradient-card shadow-soft hover:shadow-elegant transition-smooth">
            <CardContent className="p-8 text-center">
              <div className="mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Zap className="w-8 h-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Core Offering</h3>
              <p className="text-muted-foreground">
                An integrated ecosystem combining hardware, software, content, 
                and support for superior learning outcomes.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Company Highlights */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-semibold text-foreground mb-8">
            Leading Innovation in African Ed-Tech
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">2027</div>
              <div className="text-sm text-muted-foreground">SADC Expansion</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">XR</div>
              <div className="text-sm text-muted-foreground">Technology Focus</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">TVET</div>
              <div className="text-sm text-muted-foreground">Specialized Training</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">JHB</div>
              <div className="text-sm text-muted-foreground">Based in Johannesburg</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;