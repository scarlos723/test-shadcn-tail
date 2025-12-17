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
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router";
import logo from "../assets/Logo.png";
export const RecoveryPass = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Password recovery attempt:", { email });
    // Aquí puedes agregar la lógica de recuperación de contraseña
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <img src={logo} alt="Logo" className="mx-auto" />
          <CardTitle className="text-2xl font-bold text-center">
            {t("auth.recovery.title")}
          </CardTitle>
          <CardDescription className="text-center">
            {t("auth.recovery.subtitle")}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">{t("auth.recovery.email")}</Label>
              <Input
                id="email"
                type="email"
                placeholder={t("auth.recovery.emailPlaceholder")}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <Button type="submit" className="w-full">
              {t("auth.recovery.submit")}
            </Button>
            <p className="text-center text-sm text-gray-600">
              {t("auth.recovery.remember")}{" "}
              <Link
                to="/login"
                className="text-primary hover:underline font-medium"
              >
                {t("auth.recovery.login")}
              </Link>
            </p>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};
