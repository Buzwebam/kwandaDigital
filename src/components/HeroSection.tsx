import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-hero text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Democratising{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  XR Training
                </span>{" "}
                for Africa
              </h1>
              <p className="text-xl text-primary-foreground/80 max-w-2xl">
                Building immersive Extended-Reality simulators and e-learning platforms 
                for TVET colleges across South Africa and the SADC region.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="text-lg">
                Explore Solutions
                <ArrowRight />
              </Button>
              <Button variant="outline" size="lg" className="text-lg border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
                <Play className="mr-2" />
                Watch Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">233%</div>
                <div className="text-sm text-primary-foreground/70">Higher Skills Acquisition</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">40%</div>
                <div className="text-sm text-primary-foreground/70">Lower Delivery Cost</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">250+</div>
                <div className="text-sm text-primary-foreground/70">Target TVET Campuses</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <Card className="overflow-hidden shadow-elegant">
              <img
                src={heroImage}
                alt="XR Training Technology"
                className="w-full h-auto object-cover"
              />
            </Card>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-primary rounded-full opacity-20 blur-xl"></div>
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-accent/20 rounded-full opacity-30 blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;