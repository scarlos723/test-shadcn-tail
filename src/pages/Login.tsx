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

export const Login = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Simulación de login exitoso
    toast.success(t("auth.login.success"), {
      description: t("auth.login.welcomeBack", { email }),
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
            {t("auth.login.title")}
          </CardTitle>
          <CardDescription className="text-center">
            {t("auth.login.subtitle")}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">{t("auth.login.email")}</Label>
              <Input
                id="email"
                type="email"
                placeholder={t("auth.login.emailPlaceholder")}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">{t("auth.login.password")}</Label>
              <Input
                id="password"
                type="password"
                placeholder={t("auth.login.passwordPlaceholder")}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="flex justify-end">
              <Link
                to="/recovery"
                className="text-sm text-primary hover:underline"
              >
                {t("auth.login.recover")}
              </Link>
            </div>
            <Button type="submit" className="w-full">
              {t("auth.login.submit")}
            </Button>
            <p className="text-center text-sm text-gray-600">
              {t("auth.login.noAccount")}{" "}
              <Link
                to="/register"
                className="text-primary hover:underline font-medium"
              >
                {t("auth.login.signUp")}
              </Link>
            </p>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};
