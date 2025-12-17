import { NotFound } from "@/components/NotFound";
import { Landing } from "@/layouts/Landing";
import { Home } from "@/pages/Home";
import { Login } from "@/pages/Login";
import { RecoveryPass } from "@/pages/RecoveryPass";
import { Register } from "@/pages/Register";
import { UiGuide } from "@/pages/UiGuide";
import { createBrowserRouter } from "react-router";
import { ROUTES } from "./constants";
import {
  AccountSettings,
  CustomerDetails,
  Customers,
  DashboardLayout,
  OrderDeatails,
  Orders,
  ProductDetail,
  Products,
  Resume,
} from "./LazyComponents";

export { ROUTES };

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
        children: [
          {
            index: true,
            Component: Customers,
          },
          {
            path: ":customerId",
            Component: CustomerDetails,
          },
        ],
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
        children: [
          {
            index: true,
            Component: Products,
          },
          {
            path: ":productId",
            Component: ProductDetail,
          },
        ],
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
