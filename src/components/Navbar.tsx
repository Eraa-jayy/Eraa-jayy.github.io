import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = ["Home", "About", "Skills", "Projects", "Experience", "Contact"];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState("Home");
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const total = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress((window.scrollY / total) * 100);

      const sections = navLinks.map((l) => l.toLowerCase());
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 100) {
          setActive(navLinks[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <>
      <div className="scroll-progress" style={{ width: `${scrollProgress}%` }} />
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-background/95 backdrop-blur-md shadow-lg border-b border-border" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#home" className="font-heading text-2xl font-bold text-gradient">
            Portfolio
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link}
                onClick={() => scrollTo(link)}
                className={`text-sm font-medium transition-colors duration-200 hover:text-primary ${
                  active === link ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {link}
              </button>
            ))}
          </div>

          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); scrollTo("contact"); }}
            className="hidden md:inline-flex items-center px-5 py-2 rounded-lg bg-primary text-primary-foreground font-medium text-sm transition-all hover:brightness-110 glow-primary"
          >
            Hire Me
          </a>

          <button className="md:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileOpen && (
          <div className="md:hidden bg-card/95 backdrop-blur-md border-t border-border">
            <div className="container mx-auto px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link}
                  onClick={() => scrollTo(link)}
                  className={`text-left text-sm font-medium py-2 transition-colors ${
                    active === link ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  {link}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
