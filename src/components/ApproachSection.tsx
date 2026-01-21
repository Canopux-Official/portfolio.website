import { Users, Hammer, Zap, Clock } from "lucide-react";

const principles = [
  {
    icon: Users,
    title: "Community-driven",
    description: "Built by builders, for builders.",
  },
  {
    icon: Hammer,
    title: "Builders, not middlemen",
    description: "We write the code ourselves.",
  },
  {
    icon: Zap,
    title: "Speed with quality",
    description: "Ship fast without cutting corners.",
  },
  {
    icon: Clock,
    title: "Long-term thinking",
    description: "Building for years, not weeks.",
  },
];

const ApproachSection = () => {
  return (
    <section id="approach" className="py-24 relative" style={{ backgroundColor: 'rgba(11, 15, 20, 0.75)' }}>
      {/* Saturn Background */}
      <div className="saturn-background">
        <div className="saturn-glow" />
        <div className="saturn-body" />
        <div className="saturn-ring" />
        <div className="saturn-ring-inner" />
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <p className="text-xs uppercase tracking-widest text-muted-foreground font-normal mb-4">Approach</p>
          <h2 className="text-3xl md:text-4xl font-medium text-foreground mb-6">
            How we work
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed font-normal">
            We build fundamentals, not trends. Every project is a partnership. 
            We're invested in outcomes, not just deliverables.
          </p>
        </div>

        {/* Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {principles.map((principle, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-6 rounded-xl border border-border/50 card-blur"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <principle.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="text-foreground font-medium mb-1">
                  {principle.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {principle.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;
