import { ArrowDown, Download } from "lucide-react";
import { useTypingAnimation } from "@/hooks/useTypingAnimation";
import profileImg from "@/assets/profile.jpg";

const HeroSection = () => {
  const typedText = useTypingAnimation(
    ["Business Analyst", "Project Manager", "Software Developer"],
    80,
    2000
  );

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/30" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-accent/5 blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-muted-foreground text-lg">Hi, I am</p>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-foreground">Your Name</span>
            </h1>
            <div className="font-heading text-2xl sm:text-3xl lg:text-4xl font-semibold">
              <span className="text-gradient">{typedText}</span>
              <span className="typing-cursor" />
            </div>
            <p className="text-muted-foreground text-lg max-w-lg leading-relaxed">
              Computer Science undergraduate passionate about building impactful software, 
              driving business insights, and managing projects from concept to delivery.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium transition-all hover:brightness-110 glow-primary"
              >
                View Projects
                <ArrowDown size={18} />
              </a>
              <a
                href="/cv.pdf"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-foreground font-medium transition-all hover:bg-secondary hover:border-primary/50"
              >
                Download CV
                <Download size={18} />
              </a>
            </div>

            {/* Stats */}
            <div className="flex gap-8 pt-6 border-t border-border/50 mt-8">
              {[
                { num: "5+", label: "Projects" },
                { num: "3+", label: "Skills Areas" },
                { num: "2+", label: "Years Learning" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl font-heading font-bold text-primary">{stat.num}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden lg:flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 absolute -inset-4 blur-2xl" />
              <div className="relative w-72 h-72 rounded-full overflow-hidden border-2 border-primary/30 glow-primary">
                <img src={profileImg} alt="Profile" className="w-full h-full object-cover" width={512} height={640} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
