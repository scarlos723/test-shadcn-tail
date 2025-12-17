import { lazy } from "react";
// Lazy load Dashboard components to avoid circular dependency
export const DashboardLayout = lazy(() =>
  import("@/layouts/DashboardLayout").then((m) => ({
    default: m.DashboardLayout,
  }))
);
export const Resume = lazy(() =>
  import("@/pages/Dashboard/Resume").then((m) => ({ default: m.Resume }))
);
export const Customers = lazy(() =>
  import("@/pages/Dashboard/Customers").then((m) => ({ default: m.Customers }))
);
export const Orders = lazy(() =>
  import("@/pages/Dashboard/Orders").then((m) => ({ default: m.Orders }))
);
export const Products = lazy(() =>
  import("@/pages/Dashboard/Products").then((m) => ({ default: m.Products }))
);
export const AccountSettings = lazy(() =>
  import("@/pages/Dashboard/AccountSettings").then((m) => ({
    default: m.AccountSettings,
  }))
);
export const OrderDeatails = lazy(() =>
  import("@/pages/Dashboard/Orders/OrderDetails").then((m) => ({
    default: m.OrderDeatails,
  }))
);

export const CustomerDetails = lazy(() =>
  import("@/pages/Dashboard/Customers/CustomerDetails").then((m) => ({
    default: m.CustomerDetails,
  }))
);

export const ProductDetail = lazy(() =>
  import("@/pages/Dashboard/Products/ProductDetails").then((m) => ({
    default: m.ProductDetail,
  }))
);
