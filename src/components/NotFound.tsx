import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const NotFound = () => {
  const handleGoHome = () => {
    window.location.href = "/";
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <Card className="w-full max-w-md">
        <CardContent className="pt-6 pb-6 text-center space-y-4">
          <div className="space-y-2">
            <h1 className="text-9xl font-bold text-primary">404</h1>
            <h2 className="text-2xl font-semibold text-gray-800">
              Page Not Found
            </h2>
            <p className="text-gray-600">
              Oops! The page you're looking for doesn't exist or has been moved.
            </p>
          </div>
          <div className="pt-4">
            <Button onClick={handleGoHome} className="w-full">
              Go Back Home
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
