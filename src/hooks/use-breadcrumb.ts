import { customerList } from "@/pages/Dashboard/Customers/data";
import { data as ordersData } from "@/pages/Dashboard/Orders/data";
import { productsData } from "@/pages/Dashboard/Products/data";
import { useTranslation } from "react-i18next";
import { useLocation, useParams } from "react-router";

export interface BreadcrumbItem {
  label: string;
  href?: string;
  isCurrentPage?: boolean;
}

export const useBreadcrumb = (): BreadcrumbItem[] => {
  const location = useLocation();
  const params = useParams();
  const { t } = useTranslation();

  // Split pathname and filter empty strings
  const pathSegments = location.pathname.split("/").filter(Boolean);

  // If we're at dashboard root, return just Dashboard
  if (pathSegments.length === 1 && pathSegments[0] === "dashboard") {
    return [
      {
        label: t("breadcrumb.dashboard"),
        href: "/dashboard",
        isCurrentPage: true,
      },
    ];
  }

  const breadcrumbs: BreadcrumbItem[] = [
    { label: t("breadcrumb.dashboard"), href: "/dashboard" },
  ];

  // Map route segments to translation keys
  const routeNames: Record<string, string> = {
    customers: "customers",
    orders: "orders",
    products: "products",
    account: "account",
    dashboard: "dashboard",
  };

  // Build breadcrumb trail
  let currentPath = "";

  for (let i = 0; i < pathSegments.length; i++) {
    const segment = pathSegments[i];
    const isLast = i === pathSegments.length - 1;

    // Skip 'dashboard' as it's already added
    if (segment === "dashboard") {
      currentPath += `/${segment}`;
      continue;
    }

    currentPath += `/${segment}`;

    // Check if it's a dynamic route parameter
    if (params.customerId && segment === params.customerId) {
      // Find customer name
      const customer = customerList.find((c) => c.id === params.customerId);
      breadcrumbs.push({
        label: customer?.customerName || params.customerId,
        href: isLast ? undefined : currentPath,
        isCurrentPage: isLast,
      });
    } else if (params.orderId && segment === params.orderId) {
      // Find order
      const order = ordersData.find((o) => o.id === params.orderId);
      breadcrumbs.push({
        label: order ? `Orden ${order.id}` : params.orderId,
        href: isLast ? undefined : currentPath,
        isCurrentPage: isLast,
      });
    } else if (params.productId && segment === params.productId) {
      // Find product name
      const product = productsData.find((p) => p.id === params.productId);
      breadcrumbs.push({
        label: product?.productName || params.productId,
        href: isLast ? undefined : currentPath,
        isCurrentPage: isLast,
      });
    } else {
      // Regular route segment
      const translationKey = routeNames[segment];
      const label = translationKey
        ? t(`breadcrumb.${translationKey}`)
        : segment;
      breadcrumbs.push({
        label,
        href: isLast ? undefined : currentPath,
        isCurrentPage: isLast,
      });
    }
  }

  return breadcrumbs;
};
