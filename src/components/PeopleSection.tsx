const people = [
  { name: "Archit", role: "Gen AI & Full Stack" },
  { name: "Paresh", role: "AI / ML & Backend" },
  { name: "Prem", role: "Full Stack" },
  { name: "Ashish", role: "Full Stack" },
  { name: "Jagannath", role: "Android" },
  { name: "Akhilesh", role: "IoT & Hardware" },
  { name: "Baibhav", role: "Management" },
  { name: "Pratik Sourav", role: "Project Management & Strategy" },
];

const PeopleSection = () => {
  return (
    <section id="people" className="py-24" style={{ backgroundColor: 'rgba(11, 15, 20, 0.75)' }}>
      <div className="container mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <p className="text-xs uppercase tracking-widest text-muted-foreground font-normal mb-4">Team</p>
          <h2 className="text-3xl md:text-4xl font-medium text-foreground mb-4">
            The People
          </h2>
          <p className="text-muted-foreground font-normal leading-relaxed">
            Canopux is built by a small, focused group of builders.
          </p>
        </div>

        {/* People Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {people.map((person, index) => (
            <div
              key={index}
              className="p-5 rounded-xl border border-border/50 card-blur text-center"
            >
              <h3 className="text-foreground font-medium mb-1">{person.name}</h3>
              <p className="text-sm text-muted-foreground">{person.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PeopleSection;
