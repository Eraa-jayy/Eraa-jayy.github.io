import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { GraduationCap, Briefcase, Brain, Code } from "lucide-react";

const highlights = [
  { icon: GraduationCap, label: "CS Undergraduate" },
  { icon: Briefcase, label: "PM & BA Interest" },
  { icon: Brain, label: "AI Enthusiast" },
  { icon: Code, label: "Full-Stack Dev" },
];

const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-6">
        <div ref={ref} className={`fade-in-section ${isVisible ? "is-visible" : ""}`}>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-center mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-12 rounded-full" />

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <p className="text-muted-foreground text-lg leading-relaxed">
                I'm a Computer Science undergraduate with a strong passion for technology and business. 
                My academic journey has given me a solid foundation in software development, data analysis, 
                and project management methodologies.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                I'm actively seeking opportunities in Project Management, Business Analysis, and 
                Software Development where I can leverage my technical skills and analytical mindset 
                to drive meaningful impact.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Beyond coding, I'm fascinated by how technology can solve real-world problems. 
                I enjoy learning about AI, agile methodologies, and system design.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {highlights.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex flex-col items-center gap-3 p-6 rounded-xl bg-card border border-border card-hover text-center"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon size={24} className="text-primary" />
                  </div>
                  <p className="text-sm font-medium text-foreground">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
