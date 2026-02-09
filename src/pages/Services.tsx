import PageWrapper from "@/components/PageWrapper";
import SEO from "@/components/SEO";
import { Globe, Smartphone, Cloud, Wrench, Database, PenTool } from "lucide-react";

const serviceDetails = [
  {
    icon: Globe,
    title: "Web Platforms",
    description: "Scalable, performance-first web systems.",
    details: "We build web platforms that handle real traffic, real users, and real complexity. From dashboards to marketplaces — performance and clarity come first.",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description: "User-focused mobile applications built for real-world usage.",
    details: "Native and cross-platform mobile applications designed around actual user behavior, not assumptions.",
  },
  {
    icon: Cloud,
    title: "Cloud Systems",
    description: "Reliable, scalable cloud-backed infrastructure.",
    details: "Cloud architecture that grows with you. We design systems that stay stable under pressure and scale when needed.",
  },
  {
    icon: Database,
    title: "Databases",
    description: "Clean, well-structured, performance-aware databases.",
    details: "Data modeling and database design that keeps things fast, consistent, and easy to work with as your product evolves.",
  },
  {
    icon: Wrench,
    title: "Maintenance",
    description: "Long-term support, stability, and reliability.",
    details: "We don't disappear after launch. Ongoing maintenance, monitoring, and improvements to keep things running smoothly.",
  },
  {
    icon: PenTool,
    title: "Graphic Design",
    description: "Logo design and essential visual identity work, built with clarity and restraint.",
    details: "Logos, brand marks, and visual systems that communicate clearly. No trends, no noise — just identity that lasts.",
  },
];

const Services = () => (
  <PageWrapper showSaturn>
    <SEO title="Services | Canopux" description="Web platforms, mobile apps, cloud systems, databases, and more — built for scale." />
    <div className="pt-24">
      {/* Header */}
      <section className="py-24" style={{ backgroundColor: 'rgba(11, 15, 20, 0.75)' }}>
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-widest text-muted-foreground font-normal mb-4">Capabilities</p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-6">
              What we build
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed font-normal">
              Focused services, no filler.
            </p>
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-24" style={{ backgroundColor: 'rgba(17, 21, 28, 0.78)' }}>
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {serviceDetails.map((service, index) => (
              <div
                key={index}
                className="p-6 rounded-xl border border-border/50 card-blur"
              >
                <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center mb-5">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-medium text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                  {service.description}
                </p>
                <p className="text-muted-foreground/70 text-sm leading-relaxed">
                  {service.details}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  </PageWrapper>
);

export default Services;
