import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { GraduationCap, Cpu, Terminal, Code2 } from "lucide-react";

const highlights = [
  {
  icon: GraduationCap,
  label: "Computer Science Undergraduate",
  desc: "Building a strong theoretical foundation in software systems and algorithms",
},
{
  icon: Code2,
  label: "Full-Stack Development",
  desc: "Architecting modern web applications with scalable frontend and backend tech",
},
{
  icon: Cpu,
  label: "Clean Code & Architecture",
  desc: "Designing modular, maintainable software systems using robust design patterns",
},
{
  icon: Terminal,
  label: "Software Engineer",
  desc: "Solving complex technical problems and building efficient, high-performance solutions",
},
];

const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-6">
        <div
          ref={ref}
          className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
        >
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-center mb-4">
            About <span className="text-primary">Me</span>
          </h2>

          <div className="w-20 h-1 bg-primary mx-auto mb-12 rounded-full" />

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Text Section */}
            <div className="space-y-6">
              <p className="text-muted-foreground text-lg leading-relaxed">
                I am a Computer Science undergraduate and Software Engineer
                focused on building scalable, efficient, and user-centered web
                applications. My passion lies in solving complex technical
                problems through clean architecture and modern development
                practices.
              </p>

              <p className="text-muted-foreground text-lg leading-relaxed">
                I specialize in full-stack development, turning requirements
                into clean, maintainable, and well-structured code. I enjoy
                working across both frontend and backend systems, ensuring high
                performance, security, and seamless user experiences.
              </p>

              <p className="text-muted-foreground text-lg leading-relaxed">
                With a strong foundation in software design patterns and
                algorithmic problem-solving, I continuously refine my coding
                standards to build robust systems designed for long-term
                maintainability and performance.
              </p>

              <p className="text-muted-foreground text-lg leading-relaxed">
                My goal is to grow as a high-impact Software Engineer,
                continually mastering modern technologies and contributing to
                the creation of powerful, reliable digital products.
              </p>
            </div>

            {/* Highlights Section */}
            <div className="grid md:grid-cols-2 gap-6">
              {highlights.map(({ icon: Icon, label, desc }) => (
                <div
                  key={label}
                  className="flex flex-col items-center gap-4 p-6 rounded-2xl bg-card border border-border card-hover text-center hover:border-primary/40"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shadow-md">
                    <Icon
                      size={26}
                      className="text-primary transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>

                  <div className="space-y-1">
                    <p className="text-sm font-semibold text-foreground">
                      {label}
                    </p>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {desc}
                    </p>
                  </div>
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
