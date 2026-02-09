const steps = [
  { number: "01", title: "Understand the problem", description: "We listen first. Every project starts with clarity on what matters." },
  { number: "02", title: "Design for clarity", description: "Simple, focused solutions that serve the user and the business." },
  { number: "03", title: "Build and iterate", description: "Ship early, refine often. Real feedback beats assumptions." },
  { number: "04", title: "Ship and support", description: "Delivery is not the finish line. We stay invested." },
];

const ProcessSection = () => {
  return (
    <section className="py-24" style={{ backgroundColor: 'rgba(17, 21, 28, 0.78)' }}>
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mb-16">
          <p className="text-xs uppercase tracking-widest text-muted-foreground font-normal mb-4">Process</p>
          <h2 className="text-3xl md:text-4xl font-medium text-foreground">
            How it happens
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex items-start gap-5 p-6 rounded-xl border border-border/50 card-blur"
            >
              <span className="text-2xl font-semibold text-primary/40 flex-shrink-0">
                {step.number}
              </span>
              <div>
                <h3 className="text-foreground font-medium mb-1">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
