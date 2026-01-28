const stats = [
  { value: "10+", label: "Projects Delivered" },
  { value: "2+", label: "Years Building" },
  { value: "24/7", label: "Support" },
  { value: "92.5%", label: "Success Rate" },
];

const StatsSection = () => {
  return (
    <section className="py-20 border-y border-border/50" style={{ backgroundColor: 'rgba(11, 15, 20, 0.75)' }}>
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-semibold text-foreground mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
