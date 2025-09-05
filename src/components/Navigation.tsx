import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/layanan", label: "Layanan" },
    { href: "/sparepart", label: "Sparepart" },
    { href: "/testimoni", label: "Testimoni" },
    { href: "/tentang", label: "Tentang Kami" },
    { href: "/kontak", label: "Kontak" },
  ];

  const handleWhatsApp = () => {
    window.open("https://wa.me/6285156023406", "_blank");
  };

  return (
    <nav className="bg-gradient-hero shadow-medium sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-success-green rounded-lg flex items-center justify-center">
              <span className="text-success-foreground font-bold text-sm">R</span>
            </div>
            <span className="font-bold text-lg text-primary-foreground">
              Risalamoon Notebook
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`text-sm font-medium transition-colors hover:text-success-green ${
                  location.pathname === item.href
                    ? "text-success-green"
                    : "text-primary-foreground/80"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Button
              variant="whatsapp"
              size="sm"
              onClick={handleWhatsApp}
              className="ml-4"
            >
              <Phone className="w-4 h-4 mr-2" />
              WhatsApp
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-primary-foreground p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-tech-blue-light">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`text-sm font-medium px-2 py-1 rounded transition-colors ${
                    location.pathname === item.href
                      ? "text-success-green bg-tech-blue-light"
                      : "text-primary-foreground/80 hover:text-success-green"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Button
                variant="whatsapp"
                size="sm"
                onClick={handleWhatsApp}
                className="mt-4 w-fit"
              >
                <Phone className="w-4 h-4 mr-2" />
                WhatsApp
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;