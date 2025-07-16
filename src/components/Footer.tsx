import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Mail, Phone, MapPin, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Solutions", href: "#solutions" },
    { name: "Impact", href: "#impact" },
    { name: "Contact", href: "#contact" },
  ];

  const solutions = [
    { name: "XR Simulators", href: "#" },
    { name: "3D Visualization", href: "#" },
    { name: "E-Learning Platform", href: "#" },
    { name: "Support Services", href: "#" },
  ];

  return (
    <footer className="bg-gradient-hero text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Kwanda Digital</h3>
            <p className="text-primary-foreground/80 mb-6 max-w-md">
              Transforming technical education across Africa through immersive XR technology 
              and comprehensive e-learning solutions for TVET institutions.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-primary-foreground/60" />
                <span className="text-sm">Johannesburg, South Africa</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-primary-foreground/60" />
                <span className="text-sm">info@kwandadigital.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-primary-foreground/60" />
                <span className="text-sm">+27 (0) 11 XXX XXXX</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-smooth"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Solutions</h4>
            <ul className="space-y-3">
              {solutions.map((solution) => (
                <li key={solution.name}>
                  <a
                    href={solution.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-smooth"
                  >
                    {solution.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-primary-foreground/20" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-primary-foreground/60 mb-4 md:mb-0">
            © 2024 Kwanda Digital. All rights reserved.
          </div>
          
          <div className="flex items-center space-x-4">
            <span className="text-sm text-primary-foreground/60">Follow us:</span>
            <div className="flex space-x-2">
              <Button variant="ghost" size="icon" className="text-primary-foreground/70 hover:text-primary-foreground">
                <Linkedin className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" className="text-primary-foreground/70 hover:text-primary-foreground">
                <Twitter className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Vision Statement */}
        <div className="mt-8 pt-8 border-t border-primary-foreground/20 text-center">
          <p className="text-primary-foreground/80 text-sm max-w-2xl mx-auto">
            <strong>Our Vision:</strong> By 2030, be Africa's default XR training backbone 
            for 250+ TVET campuses across the SADC region.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;