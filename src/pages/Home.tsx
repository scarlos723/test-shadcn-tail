import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ROUTES } from "@/routes/constants";
import {
  BarChart3,
  CheckCircle2,
  Clock,
  Mail,
  Package,
  TrendingUp,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";

export const Home = () => {
  const [email, setEmail] = useState("");

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    // Aquí puedes agregar la lógica para enviar el email
    setEmail("");
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative px-6 py-20 lg:py-32 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge variant="secondary" className="w-fit">
                Para Pequeños Emprendimientos
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
                Gestiona tu inventario de forma{" "}
                <span className="text-primary">simple y eficiente</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                La solución perfecta para emprendedores que buscan controlar su
                inventario, ventas y clientes desde un solo lugar. Sin
                complicaciones, sin costos ocultos.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" asChild>
                  <Link to={ROUTES.REGISTER}>Comienza Gratis</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to={ROUTES.LOGIN}>Iniciar Sesión</Link>
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">
                ✨ No se requiere tarjeta de crédito
              </p>
            </div>
            <div className="bg-muted rounded-lg aspect-video flex items-center justify-center p-8 border-2 border-dashed">
              <p className="text-center text-muted-foreground">
                [Imagen: Dashboard principal mostrando gráficos de inventario,
                ventas del mes y productos destacados con interfaz moderna y
                amigable]
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 py-20 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="secondary" className="mx-auto">
              Características
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold">
              Todo lo que necesitas para crecer
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Herramientas diseñadas específicamente para las necesidades de
              pequeños emprendimientos
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6 space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Package className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Control de Inventario</h3>
                <p className="text-muted-foreground">
                  Mantén un registro actualizado de todos tus productos, stock
                  disponible y alertas de bajo inventario.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6 space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Gestión de Ventas</h3>
                <p className="text-muted-foreground">
                  Registra y da seguimiento a todas tus ventas, identifica tus
                  productos más vendidos y aumenta tus ganancias.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6 space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <BarChart3 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">
                  Reportes en Tiempo Real
                </h3>
                <p className="text-muted-foreground">
                  Visualiza el desempeño de tu negocio con reportes y gráficos
                  fáciles de entender.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6 space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Ahorra Tiempo</h3>
                <p className="text-muted-foreground">
                  Automatiza tareas repetitivas y dedica más tiempo a hacer
                  crecer tu negocio.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6 space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <CheckCircle2 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Fácil de Usar</h3>
                <p className="text-muted-foreground">
                  Interfaz intuitiva que no requiere capacitación. Empieza a
                  usar el sistema en minutos.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6 space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Soporte Dedicado</h3>
                <p className="text-muted-foreground">
                  Nuestro equipo está siempre disponible para ayudarte a
                  resolver cualquier duda.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="px-6 py-20 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="secondary" className="mx-auto">
              Cómo Funciona
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold">
              Empieza en 3 simples pasos
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="bg-muted rounded-lg aspect-square flex items-center justify-center p-6 border-2 border-dashed">
                <p className="text-center text-muted-foreground text-sm">
                  [Imagen: Formulario de registro con campos simples y botón de
                  "Crear cuenta"]
                </p>
              </div>
              <div className="space-y-2">
                <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                  1
                </div>
                <h3 className="text-xl font-semibold">Crea tu Cuenta</h3>
                <p className="text-muted-foreground">
                  Regístrate gratis en menos de 1 minuto. Solo necesitas tu
                  email y una contraseña.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-muted rounded-lg aspect-square flex items-center justify-center p-6 border-2 border-dashed">
                <p className="text-center text-muted-foreground text-sm">
                  [Imagen: Pantalla de agregar productos con campos de nombre,
                  precio, cantidad en stock]
                </p>
              </div>
              <div className="space-y-2">
                <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                  2
                </div>
                <h3 className="text-xl font-semibold">Agrega tus Productos</h3>
                <p className="text-muted-foreground">
                  Carga tu inventario de forma rápida y sencilla. Incluye
                  precios, stock y fotos.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-muted rounded-lg aspect-square flex items-center justify-center p-6 border-2 border-dashed">
                <p className="text-center text-muted-foreground text-sm">
                  [Imagen: Dashboard con gráficos de ventas, productos populares
                  y alertas de inventario]
                </p>
              </div>
              <div className="space-y-2">
                <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                  3
                </div>
                <h3 className="text-xl font-semibold">Comienza a Vender</h3>
                <p className="text-muted-foreground">
                  Registra ventas, controla tu stock y observa cómo crece tu
                  negocio.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="px-6 py-20 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="secondary" className="mx-auto">
              Testimonios
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold">
              Lo que dicen nuestros clientes
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6 space-y-4">
                <div className="flex items-center gap-1 text-yellow-500">
                  {"★★★★★"}
                </div>
                <p className="text-muted-foreground italic">
                  "Antes llevaba todo en cuadernos y perdía mucho tiempo. Ahora
                  todo está organizado y puedo ver mis ventas en tiempo real."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center">
                    <span className="text-sm font-medium">MC</span>
                  </div>
                  <div>
                    <p className="font-medium">María Contreras</p>
                    <p className="text-sm text-muted-foreground">
                      Tienda de Ropa
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6 space-y-4">
                <div className="flex items-center gap-1 text-yellow-500">
                  {"★★★★★"}
                </div>
                <p className="text-muted-foreground italic">
                  "Perfecto para mi pequeño negocio. Es fácil de usar y me ayuda
                  a no quedarme sin stock de mis productos más vendidos."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center">
                    <span className="text-sm font-medium">JR</span>
                  </div>
                  <div>
                    <p className="font-medium">Juan Ramírez</p>
                    <p className="text-sm text-muted-foreground">
                      Ferretería Local
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6 space-y-4">
                <div className="flex items-center gap-1 text-yellow-500">
                  {"★★★★★"}
                </div>
                <p className="text-muted-foreground italic">
                  "Lo mejor es que puedo acceder desde mi teléfono. Actualizo el
                  inventario mientras atiendo a los clientes."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center">
                    <span className="text-sm font-medium">AS</span>
                  </div>
                  <div>
                    <p className="font-medium">Ana Silva</p>
                    <p className="text-sm text-muted-foreground">
                      Cafetería & Repostería
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-4xl text-center space-y-8">
          <h2 className="text-3xl lg:text-5xl font-bold">
            ¿Listo para hacer crecer tu negocio?
          </h2>
          <p className="text-lg opacity-90">
            Únete a cientos de emprendedores que ya están optimizando su gestión
            de inventario
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to={ROUTES.REGISTER}>Comenzar Ahora</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              asChild
            >
              <Link to={ROUTES.LOGIN}>Ya tengo cuenta</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="px-6 py-20 bg-background">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center space-y-4 mb-8">
            <Badge variant="secondary" className="mx-auto">
              Contáctanos
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold">
              ¿Necesitas más información?
            </h2>
            <p className="text-lg text-muted-foreground">
              Déjanos tu correo y te enviaremos toda la información que
              necesitas
            </p>
          </div>

          <Card>
            <CardContent className="pt-6">
              <form onSubmit={handleEmailSubmit} className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  <Input
                    type="email"
                    placeholder="tu@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="flex-1"
                  />
                  <Button type="submit" size="lg">
                    <Mail className="mr-2 h-4 w-4" />
                    Enviar
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground text-center">
                  Te responderemos en menos de 24 horas. Sin spam, lo
                  prometemos.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 bg-muted/30 border-t">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h3 className="font-bold text-lg">Deol Inventory Pro</h3>
              <p className="text-sm text-muted-foreground">
                La solución de gestión de inventario para pequeños
                emprendimientos.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold">Producto</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground">
                    Características
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground">
                    Precios
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground">
                    Testimonios
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold">Empresa</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground">
                    Sobre Nosotros
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground">
                    Contacto
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground">
                    Privacidad
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground">
                    Términos
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
            <p>&copy; 2025 InventoryPro. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};
