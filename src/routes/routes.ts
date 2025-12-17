import { NotFound } from "@/components/NotFound";
import { Landing } from "@/layouts/Landing";
import { Home } from "@/pages/Home";
import { Login } from "@/pages/Login";
import { RecoveryPass } from "@/pages/RecoveryPass";
import { Register } from "@/pages/Register";
import { UiGuide } from "@/pages/UiGuide";
import { lazy } from "react";
import { createBrowserRouter } from "react-router";
import { ROUTES } from "./constants";

export { ROUTES };

// Lazy load Dashboard components to avoid circular dependency
const DashboardLayout = lazy(() =>
  import("@/layouts/DashboardLayout").then((m) => ({
    default: m.DashboardLayout,
  }))
);
const Resume = lazy(() =>
  import("@/pages/Dashboard/Resume").then((m) => ({ default: m.Resume }))
);
const Customers = lazy(() =>
  import("@/pages/Dashboard/Customers").then((m) => ({ default: m.Customers }))
);
const Orders = lazy(() =>
  import("@/pages/Dashboard/Orders").then((m) => ({ default: m.Orders }))
);
const Products = lazy(() =>
  import("@/pages/Dashboard/Products").then((m) => ({ default: m.Products }))
);
const AccountSettings = lazy(() =>
  import("@/pages/Dashboard/AccountSettings").then((m) => ({
    default: m.AccountSettings,
  }))
);
const OrderDeatails = lazy(() =>
  import("@/pages/Dashboard/Orders/OrderDetails").then((m) => ({
    default: m.OrderDeatails,
  }))
);

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Landing,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: ROUTES.LOGIN,
        Component: Login,
      },
      {
        path: ROUTES.REGISTER,
        Component: Register,
      },
      {
        path: ROUTES.RECOVERY,
        Component: RecoveryPass,
      },
      {
        path: ROUTES.UI_GUIDE,
        Component: UiGuide,
      },
      {
        path: "*",
        Component: NotFound,
      },
    ],
  },
  {
    path: ROUTES.DASHBOARD,
    Component: DashboardLayout,
    children: [
      {
        index: true,
        Component: Resume,
      },
      {
        path: ROUTES.CUSTOMERS,
        Component: Customers,
      },
      {
        path: ROUTES.ORDERS,
        children: [
          {
            index: true,
            Component: Orders,
          },
          {
            path: ":orderId",
            Component: OrderDeatails,
          },
        ],
      },
      {
        path: ROUTES.PRODUCTS,
        Component: Products,
      },
      {
        path: ROUTES.ACCOUNT_SETTINGS,
        Component: AccountSettings,
      },
      {
        path: "*",
        Component: NotFound,
      },
    ],
  },
]);
