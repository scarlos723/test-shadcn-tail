import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ROUTES } from "@/routes/constants";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router";
import { toast } from "sonner";
import logo from "../assets/Logo.png";

export const Register = () => {
  const { t } = useTranslation();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error(t("auth.register.passwordMismatch"), {
        description: t("auth.register.passwordMismatchDesc"),
      });
      return;
    }

    // Simulación de registro exitoso
    toast.success(t("auth.register.success"), {
      description: t("auth.register.welcomeMessage", { name: fullName }),
    });

    // Navegar al dashboard después de un breve delay
    setTimeout(() => {
      navigate(`/${ROUTES.DASHBOARD}`);
    }, 500);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <img src={logo} alt="Logo" className="mx-auto" />
          <CardTitle className="text-2xl font-bold text-center">
            {t("auth.register.title")}
          </CardTitle>
          <CardDescription className="text-center">
            {t("auth.register.subtitle")}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="fullName">{t("auth.register.fullName")}</Label>
              <Input
                id="fullName"
                type="text"
                placeholder={t("auth.register.fullNamePlaceholder")}
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">{t("auth.register.email")}</Label>
              <Input
                id="email"
                type="email"
                placeholder={t("auth.register.emailPlaceholder")}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">{t("auth.register.password")}</Label>
              <Input
                id="password"
                type="password"
                placeholder={t("auth.register.passwordPlaceholder")}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirmPassword">
                {t("auth.register.confirmPassword")}
              </Label>
              <Input
                id="confirmPassword"
                type="password"
                placeholder={t("auth.register.passwordPlaceholder")}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
            <Button type="submit" className="w-full">
              {t("auth.register.submit")}
            </Button>
            <p className="text-center text-sm text-gray-600">
              {t("auth.register.haveAccount")}{" "}
              <Link
                to="/login"
                className="text-primary hover:underline font-medium"
              >
                {t("auth.register.login")}
              </Link>
            </p>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};
