import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { GraduationCap, Briefcase, Compass, Code2 } from "lucide-react";

const highlights = [
  {
    icon: GraduationCap,
    label: "Computer Science Undergraduate",
    desc: "Building a strong foundation in software & systems",
  },
  {
    icon: Briefcase,
    label: "Project Management Focus",
    desc: "Interested in planning and leading successful projects",
  },
  {
    icon: Compass,
    label: "Good Interest in Business Analysis",
    desc: "Turning requirements into clear solutions",
  },
  {
    icon: Code2,
    label: "Software Developer",
    desc: "Designing, developing, and optimizing applications with clean and maintainable code",
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
                I am a Computer Science undergraduate with a strong interest in
                both Software Engineering and Project Management. I am
                passionate about designing and developing efficient, scalable,
                and user-focused software solutions while also understanding how
                projects are planned, managed, and delivered successfully.
              </p>

              <p className="text-muted-foreground text-lg leading-relaxed">
                I enjoy building applications using modern technologies and
                solving real-world problems through clean, maintainable code. At
                the same time, I am interested in how software projects are
                structured, how teams collaborate, and how technical work aligns
                with business goals.
              </p>

              <p className="text-muted-foreground text-lg leading-relaxed">
                Alongside my technical skills, I am continuously developing my
                abilities in communication, teamwork, problem-solving, and
                organization, which help me contribute effectively in both
                development and coordination roles.
              </p>

              <p className="text-muted-foreground text-lg leading-relaxed">
                My goal is to grow as a Software Engineer while also gaining
                experience in Project Management, enabling me to bridge the gap
                between technical implementation and project delivery to create
                impactful and well-executed solutions.
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
