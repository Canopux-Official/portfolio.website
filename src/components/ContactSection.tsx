import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Clock, Send } from "lucide-react";
import { useState } from "react";
const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };
  return <section id="contact" className="py-24" style={{
    backgroundColor: 'rgba(11, 15, 20, 0.75)'
  }}>
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column - Info */}
          <div>
            <p className="text-xs uppercase tracking-widest text-muted-foreground font-normal mb-4">Contact</p>
            <h2 className="text-3xl md:text-4xl font-medium text-foreground mb-6">
              Let's Build
            </h2>
            <p className="text-muted-foreground text-lg mb-10 max-w-md font-normal leading-relaxed">
              Got an idea? We're here to help you ship it.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Email</p>
                  <a className="text-foreground hover:text-primary transition-colors" href="mailto:connect.canopux@outlook.com">
                    ​connect.canopux@outlook.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Location</p>
                  <p className="text-foreground">Bhubaneswar, Odisha, India</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Response Time</p>
                  <p className="text-foreground">Within 3-4 hours</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm text-muted-foreground mb-2">
                  Name
                </label>
                <Input id="name" type="text" placeholder="Your name" value={formData.name} onChange={e => setFormData({
                ...formData,
                name: e.target.value
              })} className="bg-card border-border" required />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm text-muted-foreground mb-2">
                  Email
                </label>
                <Input id="email" type="email" placeholder="your@email.com" value={formData.email} onChange={e => setFormData({
                ...formData,
                email: e.target.value
              })} className="bg-card border-border" required />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm text-muted-foreground mb-2">
                  What are you building?
                </label>
                <Textarea id="message" placeholder="Tell us about your project..." value={formData.message} onChange={e => setFormData({
                ...formData,
                message: e.target.value
              })} className="bg-card border-border min-h-[140px] resize-none" required />
              </div>

              <Button type="submit" variant="hero" size="lg" className="w-full">
                Send Message
                <Send size={18} />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>;
};
export default ContactSection;