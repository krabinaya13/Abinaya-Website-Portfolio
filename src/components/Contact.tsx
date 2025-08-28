import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Linkedin, Github, ExternalLink } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "krabinaya13@gmail.com",
      href: "mailto:krabinaya13@gmail.com",
      color: "text-accent"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 97917-23045",
      href: "tel:+919791723045",
      color: "text-success"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "India",
      href: "#",
      color: "text-warning"
    }
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/abinaya-k-r-a852641b2/",
      color: "hover:text-blue-600"
    },
    {
      name: "GitHub", 
      icon: Github,
      url: "https://github.com/krabinaya13",
      color: "hover:text-gray-800"
    },
    {
      name: "Kaggle",
      icon: ExternalLink,
      url: "https://www.kaggle.com/krabinaya",
      color: "hover:text-cyan-500"
    },
    {
      name: "Medium",
      icon: ExternalLink,
      url: "https://medium.com/@krabinaya13",
      color: "hover:text-green-600"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-accent font-medium tracking-wider uppercase mb-4">Get In Touch</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Let's <span className="text-accent">Work Together</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to transform your data into actionable insights? Let's discuss how I can help 
            drive your business forward with data-driven solutions.
          </p>
          <div className="w-24 h-1 gradient-accent mx-auto rounded-full mt-6"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Form */}
          <Card className="card-professional p-8">
            <h3 className="text-2xl font-bold mb-6">Send me a message</h3>
            <form className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input 
                  id="name" 
                  placeholder="Enter your full name" 
                  className="transition-smooth focus:glow-effect"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="Enter your email address" 
                  className="transition-smooth focus:glow-effect"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input 
                  id="subject" 
                  placeholder="What's this about?" 
                  className="transition-smooth focus:glow-effect"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea 
                  id="message" 
                  rows={6}
                  placeholder="Tell me about your project or how I can help..."
                  className="transition-smooth focus:glow-effect"
                />
              </div>
              
              <Button 
                type="submit" 
                size="lg" 
                className="w-full bg-accent hover:bg-accent/90 transition-bounce hover:scale-105"
              >
                <Mail className="mr-2 h-5 w-5" />
                Send Message
              </Button>
            </form>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            
            {/* Contact Details */}
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <Card key={index} className="card-professional p-4 group">
                      <a 
                        href={info.href}
                        className="flex items-center space-x-4 transition-smooth"
                      >
                        <div className={`p-3 rounded-lg bg-muted group-hover:scale-110 transition-smooth ${info.color}`}>
                          <IconComponent className="h-5 w-5" />
                        </div>
                        <div>
                          <div className="font-medium text-sm text-muted-foreground">
                            {info.label}
                          </div>
                          <div className="text-lg font-semibold group-hover:text-accent transition-smooth">
                            {info.value}
                          </div>
                        </div>
                      </a>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-xl font-bold mb-4">Connect With Me</h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <Card key={index} className="card-professional p-4 group">
                      <a 
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-3 transition-smooth"
                      >
                        <IconComponent className={`h-5 w-5 transition-smooth ${social.color}`} />
                        <span className="font-medium group-hover:text-accent transition-smooth">
                          {social.name}
                        </span>
                      </a>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* CTA Section */}
            <Card className="card-professional p-6 gradient-accent text-center">
              <h4 className="text-xl font-bold text-white mb-2">
                Ready to Start a Project?
              </h4>
              <p className="text-blue-100 mb-4 text-sm">
                I'm always excited to work on new data challenges and help businesses 
                unlock the power of their data.
              </p>
              <Button 
                size="lg"
                className="bg-white text-primary hover:bg-white/90 transition-bounce hover:scale-105"
                asChild
              >
                <a href="mailto:krabinaya13@gmail.com">
                  <Mail className="mr-2 h-4 w-4" />
                  Start Conversation
                </a>
              </Button>
            </Card>

          </div>

        </div>

        {/* Bottom Section */}
        <div className="text-center mt-16 pt-8 border-t border-border">
          <p className="text-muted-foreground">
            © 2024 Abinaya K R. Crafted with passion for data and design.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Contact;