import { Globe, Smartphone, Cloud, Wrench, Database } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Platforms",
    description: "Web platforms built for scale.",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description: "Mobile applications with real users in mind.",
  },
  {
    icon: Cloud,
    title: "Cloud Systems",
    description: "Cloud-backed systems and infrastructure.",
  },
  {
    icon: Wrench,
    title: "Maintenance",
    description: "Long-term maintenance and reliability.",
  },
  {
    icon: Database,
    title: "Databases",
    description: "Clean, well-structured databases.",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-24" style={{ backgroundColor: 'rgba(17, 21, 28, 0.78)' }}>
      <div className="container mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <p className="text-sm text-primary font-medium mb-3">Capabilities</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground">
            What we're building
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-6 rounded-xl border border-border/50 card-blur card-hover"
            >
              <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center mb-5 group-hover:bg-primary/10 transition-colors">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-medium text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
