import { useState, useEffect, useRef, useLayoutEffect } from "react";
import { Menu, X } from "lucide-react";

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
  const [indicator, setIndicator] = useState({ left: 0, width: 0, ready: false });
  const [btnTransform, setBtnTransform] = useState("translate(0px, 0px)");

  const linkRefs = useRef({});
  const btnRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const total = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(total > 0 ? (window.scrollY / total) * 100 : 0);

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
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  // Slide the little indicator pill under whichever link is active
  useLayoutEffect(() => {
    const el = linkRefs.current[active];
    if (el) {
      setIndicator({
        left: el.offsetLeft,
        width: el.offsetWidth,
        ready: true,
      });
    }
  }, [active, mobileOpen]);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  // Subtle magnetic pull on the Hire Me button
  const handleBtnMouseMove = (e) => {
    const el = btnRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setBtnTransform(`translate(${x * 0.25}px, ${y * 0.4}px)`);
  };
  const resetBtn = () => setBtnTransform("translate(0px, 0px)");

  return (
    <>
      <style>{`
        @keyframes navFadeSlide {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes mobileItemIn {
          from { opacity: 0; transform: translateX(-16px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes shimmer {
          0% { transform: translateX(-150%) skewX(-20deg); }
          100% { transform: translateX(250%) skewX(-20deg); }
        }
        @keyframes logoGlow {
          0%, 100% { filter: drop-shadow(0 0 4px hsl(var(--primary) / 0.35)); }
          50% { filter: drop-shadow(0 0 12px hsl(var(--primary) / 0.7)); }
        }
        .nav-shine::after {
          content: "";
          position: absolute;
          top: 0; left: 0;
          width: 40%; height: 100%;
          background: linear-gradient(120deg, transparent, rgba(255,255,255,0.35), transparent);
          transform: translateX(-150%) skewX(-20deg);
          pointer-events: none;
        }
        .nav-shine:hover::after {
          animation: shimmer 0.9s ease forwards;
        }
        .nav-underline {
          transition: left 0.35s cubic-bezier(0.65, 0, 0.35, 1), width 0.35s cubic-bezier(0.65, 0, 0.35, 1), opacity 0.2s ease;
        }
        .hamburger-line {
          transition: transform 0.35s cubic-bezier(0.65, 0, 0.35, 1), opacity 0.2s ease;
        }
        .mobile-item {
          animation: mobileItemIn 0.35s cubic-bezier(0.25, 0.8, 0.25, 1) both;
        }
        .logo-mark {
          animation: logoGlow 3.5s ease-in-out infinite;
          transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .logo-mark:hover {
          transform: rotate(-6deg) scale(1.08);
        }
      `}</style>

      {/* Scroll Progress Bar */}
      <div
        className="fixed top-0 left-0 h-[3px] z-[60] bg-primary shadow-[0_0_10px_hsl(var(--primary)/0.7)] transition-[width] duration-150 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />

      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
          scrolled
            ? "bg-background/95 backdrop-blur-md shadow-lg border-b border-border py-2 sm:py-3"
            : "bg-transparent py-4 sm:py-6"
        }`}
        style={{ animation: "navFadeSlide 0.5s ease-out" }}
      >
        <div className="container mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            className="logo-mark flex items-center gap-2 text-xl font-bold tracking-tight text-primary select-none"
          >
            EJ
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1 relative">
            {navLinks.map((link) => (
              <button
                key={link.id}
                ref={(el) => (linkRefs.current[link.id] = el)}
                onClick={() => scrollTo(link.id)}
                className={`relative px-4 py-2 text-sm font-medium rounded-md transition-colors duration-300 hover:text-primary ${
                  active === link.id ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {link.label}
              </button>
            ))}
            {/* Sliding active-link indicator, same blue as everything else */}
            <span
              className="nav-underline absolute bottom-0 h-[2px] rounded-full bg-primary"
              style={{
                left: indicator.left,
                width: indicator.width,
                opacity: indicator.ready ? 1 : 0,
              }}
            />
          </div>

          {/* Desktop Hire Button */}
          <a
            ref={btnRef}
            href="mailto:eraajayy25@gmail.com?subject=Hiring%20Inquiry"
            onMouseMove={handleBtnMouseMove}
            onMouseLeave={resetBtn}
            className="nav-shine hidden md:inline-flex items-center gap-2 px-6 py-2 rounded-md bg-primary text-primary-foreground font-semibold text-sm overflow-hidden relative transition-transform duration-300 ease-out hover:brightness-110 hover:shadow-lg hover:shadow-primary/30"
            style={{ transform: btnTransform }}
          >
            Hire Me
          </a>

          {/* Mobile Menu Button (animated hamburger -> X) */}
          <button
            className="md:hidden relative w-7 h-7 text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span
              className="hamburger-line absolute left-0 top-[8px] w-7 h-[2px] bg-foreground rounded-full"
              style={{
                transform: mobileOpen ? "translateY(6px) rotate(45deg)" : "translateY(0) rotate(0)",
              }}
            />
            <span
              className="hamburger-line absolute left-0 top-[14px] w-7 h-[2px] bg-foreground rounded-full"
              style={{ opacity: mobileOpen ? 0 : 1 }}
            />
            <span
              className="hamburger-line absolute left-0 top-[20px] w-7 h-[2px] bg-foreground rounded-full"
              style={{
                transform: mobileOpen ? "translateY(-6px) rotate(-45deg)" : "translateY(0) rotate(0)",
              }}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden bg-card/95 backdrop-blur-md border-t border-border">
            <div className="container mx-auto px-6 py-4 flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <button
                  key={link.id}
                  className={`mobile-item text-left text-sm font-medium py-3 transition-colors ${
                    active === link.id ? "text-primary" : "text-muted-foreground"
                  }`}
                  style={{ animationDelay: `${i * 60}ms` }}
                  onClick={() => scrollTo(link.id)}
                >
                  {link.label}
                </button>
              ))}

              <a
                href="mailto:eraajayy25@gmail.com?subject=Hiring%20Inquiry"
                className="mobile-item mt-2 px-5 py-3 rounded-md bg-primary text-primary-foreground font-medium text-sm text-center w-full"
                style={{ animationDelay: `${navLinks.length * 60}ms` }}
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