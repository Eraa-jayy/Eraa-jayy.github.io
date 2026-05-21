import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.jpg";

const navLinks = [
  { label: "Home", id: "home" },
  { label: "Skills", id: "skills" },
  { label: "About me", id: "about" },
  { label: "Projects", id: "projects" },
  { label: "Contact me", id: "contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const total =
        document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress((window.scrollY / total) * 100);

      const ids = navLinks.map((l) => l.id);
      for (let i = ids.length - 1; i >= 0; i--) {
        const el = document.getElementById(ids[i]);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActive(ids[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <>
      {/* Scroll Progress Bar */}
      <div
        className="scroll-progress"
        style={{ width: `${scrollProgress}%` }}
      />

      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/95 backdrop-blur-md shadow-lg border-b border-border"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
          
          {/* Logo */}
          <a href="#home" className="flex items-center">
            <img src={logo} alt="EJ Logo" className="h-10 sm:h-12 w-auto" />
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  active === link.id
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Desktop Hire Button */}
          <a
            href="mailto:eraajayy25@gmail.com?subject=Hiring%20Inquiry"
            className="hidden md:inline-flex items-center gap-2 px-6 py-2 rounded-md bg-primary text-primary-foreground font-semibold text-sm hover:brightness-110 transition"
          >
            Hire Me
          </a>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden bg-card/95 backdrop-blur-md border-t border-border animate-in slide-in-from-top duration-200">
            <div className="container mx-auto px-6 py-4 flex flex-col gap-4">
              
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className={`text-left text-sm font-medium py-3 transition-colors ${
                    active === link.id
                      ? "text-primary"
                      : "text-muted-foreground"
                  }`}
                >
                  {link.label}
                </button>
              ))}

              <a
                href="mailto:eraajayy25@gmail.com?subject=Hiring%20Inquiry"
                className="mt-2 px-5 py-3 rounded-md bg-primary text-primary-foreground font-medium text-sm text-center w-full"
              >
                Hire Me
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;