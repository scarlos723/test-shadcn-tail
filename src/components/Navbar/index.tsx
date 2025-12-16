import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ROUTES } from "@/routes/constants";
import { Menu, Package } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to={ROUTES.HOME} className="flex items-center space-x-2">
            <Package className="h-6 w-6 text-primary" />
            <span className="font-bold text-xl">DEOL InventoryPro</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <a
              href="#features"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Características
            </a>
            <Link
              to={ROUTES.DASHBOARD}
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Cómo Funciona
            </Link>
            <a
              href="#testimonials"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Testimonios
            </a>
            <a
              href="#contact"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Contacto
            </a>
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" asChild>
              <Link to={ROUTES.LOGIN}>Iniciar Sesión</Link>
            </Button>
            <Button asChild>
              <Link to={ROUTES.REGISTER}>Comenzar Gratis</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col space-y-6 mt-6">
                <Link
                  to={ROUTES.HOME}
                  className="flex items-center space-x-2"
                  onClick={() => setIsOpen(false)}
                >
                  <Package className="h-6 w-6 text-primary" />
                  <span className="font-bold text-xl">InventoryPro</span>
                </Link>

                <div className="flex flex-col space-y-4">
                  <a
                    href="#features"
                    className="text-base font-medium transition-colors hover:text-primary"
                    onClick={() => setIsOpen(false)}
                  >
                    Características
                  </a>
                  <a
                    href="#how-it-works"
                    className="text-base font-medium transition-colors hover:text-primary"
                    onClick={() => setIsOpen(false)}
                  >
                    Cómo Funciona
                  </a>
                  <a
                    href="#testimonials"
                    className="text-base font-medium transition-colors hover:text-primary"
                    onClick={() => setIsOpen(false)}
                  >
                    Testimonios
                  </a>
                  <a
                    href="#contact"
                    className="text-base font-medium transition-colors hover:text-primary"
                    onClick={() => setIsOpen(false)}
                  >
                    Contacto
                  </a>
                </div>

                <div className="flex flex-col space-y-3 pt-6 border-t">
                  <Button variant="outline" asChild className="w-full">
                    <Link to={ROUTES.LOGIN} onClick={() => setIsOpen(false)}>
                      Iniciar Sesión
                    </Link>
                  </Button>
                  <Button asChild className="w-full">
                    <Link to={ROUTES.REGISTER} onClick={() => setIsOpen(false)}>
                      Comenzar Gratis
                    </Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
