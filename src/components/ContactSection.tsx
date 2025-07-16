import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Get Started with Kwanda Digital
          </h2>
          <p className="text-lg text-muted-foreground">
            Ready to transform your TVET institution? Contact us to learn how our 
            XR training solutions can revolutionize your educational programs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-card shadow-soft">
            <CardHeader>
              <CardTitle className="text-xl text-foreground">Send us a Message</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    First Name
                  </label>
                  <Input placeholder="John" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Last Name
                  </label>
                  <Input placeholder="Doe" />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Email
                </label>
                <Input type="email" placeholder="john.doe@institution.edu" />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Institution/Organization
                </label>
                <Input placeholder="Your TVET College" />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Message
                </label>
                <Textarea 
                  placeholder="Tell us about your training needs and how we can help..."
                  rows={4}
                />
              </div>
              <Button variant="hero" size="lg" className="w-full">
                Send Message
              </Button>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="bg-gradient-primary text-primary-foreground shadow-elegant">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-6">Get in Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-primary-foreground/80" />
                    <span>Johannesburg, South Africa</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-primary-foreground/80" />
                    <span>info@kwandadigital.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-primary-foreground/80" />
                    <span>+27 (0) 11 XXX XXXX</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-primary-foreground/80" />
                    <span>Mon - Fri: 8:00 AM - 5:00 PM SAST</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card shadow-soft">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Why Choose Kwanda Digital?
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <span className="text-muted-foreground">African-focused solutions tailored for local needs</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                    <span className="text-muted-foreground">Comprehensive support and training programs</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <span className="text-muted-foreground">Proven track record of improving outcomes</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                    <span className="text-muted-foreground">Cutting-edge XR technology and platforms</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-2 gap-4">
              <Button variant="outline" size="lg" className="h-auto py-4">
                <div className="text-center">
                  <div className="font-semibold">Download</div>
                  <div className="text-sm">Company Brochure</div>
                </div>
              </Button>
              <Button variant="gradient" size="lg" className="h-auto py-4">
                <div className="text-center">
                  <div className="font-semibold">Schedule</div>
                  <div className="text-sm">Live Demo</div>
                </div>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;