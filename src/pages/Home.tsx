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
import { useTranslation } from "react-i18next";
import { Link } from "react-router";

export const Home = () => {
  const { t } = useTranslation();
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
                {t("home.hero.badge")}
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
                {t("home.hero.title")}{" "}
                <span className="text-primary">
                  {t("home.hero.titleHighlight")}
                </span>
              </h1>
              <p className="text-lg text-muted-foreground">
                {t("home.hero.description")}
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" asChild>
                  <Link to={ROUTES.REGISTER}>{t("home.hero.startFree")}</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to={ROUTES.LOGIN}>{t("home.hero.login")}</Link>
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">
                {t("home.hero.noCard")}
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
              {t("home.features.badge")}
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold">
              {t("home.features.title")}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("home.features.description")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6 space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Package className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">
                  {t("home.features.inventoryControl.title")}
                </h3>
                <p className="text-muted-foreground">
                  {t("home.features.inventoryControl.description")}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6 space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">
                  {t("home.features.salesManagement.title")}
                </h3>
                <p className="text-muted-foreground">
                  {t("home.features.salesManagement.description")}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6 space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <BarChart3 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">
                  {t("home.features.realTimeReports.title")}
                </h3>
                <p className="text-muted-foreground">
                  {t("home.features.realTimeReports.description")}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6 space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">
                  {t("home.features.saveTime.title")}
                </h3>
                <p className="text-muted-foreground">
                  {t("home.features.saveTime.description")}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6 space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <CheckCircle2 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">
                  {t("home.features.easyToUse.title")}
                </h3>
                <p className="text-muted-foreground">
                  {t("home.features.easyToUse.description")}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6 space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">
                  {t("home.features.support.title")}
                </h3>
                <p className="text-muted-foreground">
                  {t("home.features.support.description")}
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
              {t("home.howItWorks.badge")}
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold">
              {t("home.howItWorks.title")}
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
                <h3 className="text-xl font-semibold">
                  {t("home.howItWorks.step1.title")}
                </h3>
                <p className="text-muted-foreground">
                  {t("home.howItWorks.step1.description")}
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
                <h3 className="text-xl font-semibold">
                  {t("home.howItWorks.step2.title")}
                </h3>
                <p className="text-muted-foreground">
                  {t("home.howItWorks.step2.description")}
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
                <h3 className="text-xl font-semibold">
                  {t("home.howItWorks.step3.title")}
                </h3>
                <p className="text-muted-foreground">
                  {t("home.howItWorks.step3.description")}
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
              {t("home.testimonials.badge")}
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold">
              {t("home.testimonials.title")}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6 space-y-4">
                <div className="flex items-center gap-1 text-yellow-500">
                  {"★★★★★"}
                </div>
                <p className="text-muted-foreground italic">
                  "{t("home.testimonials.testimonial1.text")}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center">
                    <span className="text-sm font-medium">MC</span>
                  </div>
                  <div>
                    <p className="font-medium">
                      {t("home.testimonials.testimonial1.name")}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {t("home.testimonials.testimonial1.business")}
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
                  "{t("home.testimonials.testimonial2.text")}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center">
                    <span className="text-sm font-medium">JR</span>
                  </div>
                  <div>
                    <p className="font-medium">
                      {t("home.testimonials.testimonial2.name")}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {t("home.testimonials.testimonial2.business")}
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
                  "{t("home.testimonials.testimonial3.text")}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center">
                    <span className="text-sm font-medium">AS</span>
                  </div>
                  <div>
                    <p className="font-medium">
                      {t("home.testimonials.testimonial3.name")}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {t("home.testimonials.testimonial3.business")}
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
            {t("home.cta.title")}
          </h2>
          <p className="text-lg opacity-90">{t("home.cta.description")}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to={ROUTES.REGISTER}>{t("home.cta.startNow")}</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              asChild
            >
              <Link to={ROUTES.LOGIN}>{t("home.cta.haveAccount")}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="px-6 py-20 bg-background">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center space-y-4 mb-8">
            <Badge variant="secondary" className="mx-auto">
              {t("home.contact.badge")}
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold">
              {t("home.contact.title")}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t("home.contact.description")}
            </p>
          </div>

          <Card>
            <CardContent className="pt-6">
              <form onSubmit={handleEmailSubmit} className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  <Input
                    type="email"
                    placeholder={t("home.contact.placeholder")}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="flex-1"
                  />
                  <Button type="submit" size="lg">
                    <Mail className="mr-2 h-4 w-4" />
                    {t("home.contact.send")}
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground text-center">
                  {t("home.contact.promise")}
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
                {t("home.footer.description")}
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold">{t("home.footer.product")}</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground">
                    {t("home.footer.features")}
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground">
                    {t("home.footer.pricing")}
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground">
                    {t("home.footer.testimonials")}
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold">{t("home.footer.company")}</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground">
                    {t("home.footer.about")}
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground">
                    {t("home.footer.blog")}
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground">
                    {t("home.footer.contact")}
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold">{t("home.footer.legal")}</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground">
                    {t("home.footer.privacy")}
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground">
                    {t("home.footer.terms")}
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
            <p>&copy; 2025 InventoryPro. {t("home.footer.rights")}</p>
          </div>
        </div>
      </footer>
    </div>
  );
};
