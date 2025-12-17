import { PackageSearch, ShoppingBag, TrendingUp, Users } from "lucide-react";

export const DashboardLoader = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-background">
      <div className="flex flex-col items-center gap-8">
        {/* Animated Icons Grid */}
        <div className="relative h-32 w-32">
          <div className="absolute top-0 left-0 animate-bounce-slow">
            <div className="rounded-lg bg-blue-100 p-3 shadow-lg">
              <ShoppingBag className="h-8 w-8 text-blue-600" />
            </div>
          </div>
          <div className="absolute top-0 right-0 animate-bounce-delay-1">
            <div className="rounded-lg bg-green-100 p-3 shadow-lg">
              <Users className="h-8 w-8 text-green-600" />
            </div>
          </div>
          <div className="absolute bottom-0 left-0 animate-bounce-delay-2">
            <div className="rounded-lg bg-purple-100 p-3 shadow-lg">
              <PackageSearch className="h-8 w-8 text-purple-600" />
            </div>
          </div>
          <div className="absolute bottom-0 right-0 animate-bounce-delay-3">
            <div className="rounded-lg bg-amber-100 p-3 shadow-lg">
              <TrendingUp className="h-8 w-8 text-amber-600" />
            </div>
          </div>
        </div>

        {/* Loading Text */}
        <div className="flex flex-col items-center gap-2">
          <h2 className="text-2xl font-bold text-foreground">
            Loading Dashboard
          </h2>
          <div className="flex gap-1">
            <span className="h-2 w-2 animate-pulse rounded-full bg-blue-600" />
            <span className="h-2 w-2 animate-pulse rounded-full bg-blue-600 animation-delay-200" />
            <span className="h-2 w-2 animate-pulse rounded-full bg-blue-600 animation-delay-400" />
          </div>
        </div>
      </div>
    </div>
  );
};
