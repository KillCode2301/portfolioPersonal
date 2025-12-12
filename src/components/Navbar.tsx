import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useIsMobile } from "@/hooks/use-mobile";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const isMobile = useIsMobile();
  const location = useLocation();

  const navItems = [
    { label: "About", href: "/#about", isHash: true },
    { label: "Projects", href: "/#projects", isHash: true },
    { label: "Experience", href: "/#experience", isHash: true },
    { label: "Connect", href: "/#connect", isHash: true },
    { label: "Timer", href: "/timer", isHash: false },
  ];

  const handleNavClick = (href: string, isHash: boolean) => {
    if (isMobile) {
      setOpen(false);
    }
    if (isHash && location.pathname !== "/") {
      // If we're not on the home page, navigate to home first
      window.location.href = href;
    }
  };

  const NavLinks = ({ mobile = false }: { mobile?: boolean }) => (
    <div className={`flex ${mobile ? "flex-col gap-4" : "gap-6"} text-sm text-muted-foreground`}>
      {navItems.map((item) => {
        if (item.isHash) {
          return (
            <a
              key={item.label}
              href={item.href}
              onClick={() => handleNavClick(item.href, item.isHash)}
              className="hover:text-foreground transition-colors"
            >
              {item.label}
            </a>
          );
        }
        return (
          <Link
            key={item.label}
            to={item.href}
            onClick={() => handleNavClick(item.href, item.isHash)}
            className="hover:text-foreground transition-colors"
          >
            {item.label}
          </Link>
        );
      })}
    </div>
  );

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="max-w-3xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link
          to="/"
          className="text-sm font-medium tracking-wide hover:text-foreground transition-colors"
        >
          Portfolio
        </Link>

        {/* Desktop Navigation */}
        {!isMobile && <NavLinks />}

        {/* Mobile Navigation */}
        {isMobile && (
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button
                className="flex flex-col gap-1.5 w-6 h-6 justify-center items-center focus:outline-none"
                aria-label="Toggle menu"
              >
                <span
                  className={`block h-[1px] w-5 bg-foreground transition-all duration-300 ${
                    open ? "rotate-45 translate-y-2" : ""
                  }`}
                />
                <span
                  className={`block h-[1px] w-5 bg-foreground transition-all duration-300 ${
                    open ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`block h-[1px] w-5 bg-foreground transition-all duration-300 ${
                    open ? "-rotate-45 -translate-y-2" : ""
                  }`}
                />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] bg-background border-border">
              <div className="flex flex-col gap-8 mt-8">
                <NavLinks mobile />
              </div>
            </SheetContent>
          </Sheet>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

