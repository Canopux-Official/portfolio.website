import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "The product works well, is easy to use, and the UI/UX feels smooth and well thought out.",
    name: "Abhikalp Srivastava",
    company: "NXP Semiconductors",
  },
  {
    quote: "Delivered a smooth product with NLP integration in a short time. The team was responsive to revisions.",
    name: "Aman Modi",
    company: "AI & Technology Trainee",
  },
  {
    quote: "High-quality delivery within deadlines, with clean tech integration.",
    name: "Kirti Padhi",
    company: "Ex Software Engineer Trainee, BigBinary",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24" style={{ backgroundColor: 'rgba(17, 21, 28, 0.78)' }}>
      <div className="container mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <p className="text-xs uppercase tracking-widest text-muted-foreground font-normal mb-4">Feedback</p>
          <h2 className="text-3xl md:text-4xl font-medium text-foreground">
            What they say
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-6 rounded-xl border border-border/50 card-blur"
            >
              <Quote className="w-8 h-8 text-primary/30 mb-4" />
              <blockquote className="text-foreground leading-relaxed mb-6">
                "{testimonial.quote}"
              </blockquote>
              <div>
                <p className="text-foreground font-medium">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
