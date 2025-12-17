import {
  Handbag,
  LayoutGrid,
  LogOut,
  PackageSearch,
  Settings,
  UsersIcon,
} from "lucide-react";
import * as React from "react";
import { useTranslation } from "react-i18next";

import logo from "@/assets/Logo.png";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import { ROUTES } from "@/routes/routes";
import { Link, useLocation, useNavigate } from "react-router";
import { toast } from "sonner";
// This is sample data.
// const data = {
//   user: {
//     name: "shadcn",
//     email: "m@example.com",
//     avatar: "/avatars/shadcn.jpg",
//   },
//   teams: [
//     {
//       name: "Acme Inc",
//       logo: GalleryVerticalEnd,
//       plan: "Enterprise",
//     },
//     {
//       name: "Acme Corp.",
//       logo: AudioWaveform,
//       plan: "Startup",
//     },
//     {
//       name: "Evil Corp.",
//       logo: Command,
//       plan: "Free",
//     },
//   ],
//   navMain: [
//     {
//       title: "Playground",
//       url: "#",
//       icon: SquareTerminal,
//       isActive: true,
//       items: [
//         {
//           title: "History",
//           url: "#",
//         },
//         {
//           title: "Starred",
//           url: "#",
//         },
//         {
//           title: "Settings",
//           url: "#",
//         },
//       ],
//     },
//     {
//       title: "Models",
//       url: "#",
//       icon: Bot,
//       items: [
//         {
//           title: "Genesis",
//           url: "#",
//         },
//         {
//           title: "Explorer",
//           url: "#",
//         },
//         {
//           title: "Quantum",
//           url: "#",
//         },
//       ],
//     },
//     {
//       title: "Documentation",
//       url: "#",
//       icon: BookOpen,
//       items: [
//         {
//           title: "Introduction",
//           url: "#",
//         },
//         {
//           title: "Get Started",
//           url: "#",
//         },
//         {
//           title: "Tutorials",
//           url: "#",
//         },
//         {
//           title: "Changelog",
//           url: "#",
//         },
//       ],
//     },
//     {
//       title: "Settings",
//       url: "#",
//       icon: Settings2,
//       items: [
//         {
//           title: "General",
//           url: "#",
//         },
//         {
//           title: "Team",
//           url: "#",
//         },
//         {
//           title: "Billing",
//           url: "#",
//         },
//         {
//           title: "Limits",
//           url: "#",
//         },
//       ],
//     },
//   ],
//   projects: [
//     {
//       name: "Design Engineering",
//       url: "#",
//       icon: Frame,
//     },
//     {
//       name: "Sales & Marketing",
//       url: "#",
//       icon: PieChart,
//     },
//     {
//       name: "Travel",
//       url: "#",
//       icon: Map,
//     },
//   ],
// };

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const itemsDash = [
    {
      title: t("sidebar.home"),
      url: `/${ROUTES.DASHBOARD}/`,
      icon: LayoutGrid,
    },
    {
      title: t("sidebar.orders"),
      url: `/${ROUTES.DASHBOARD}/${ROUTES.ORDERS}`,
      icon: Handbag,
    },
    {
      title: t("sidebar.customers"),
      url: `/${ROUTES.DASHBOARD}/${ROUTES.CUSTOMERS}`,
      icon: UsersIcon,
    },
    // {
    //   title: "Users",
    //   url: `/${ROUTES.DASHBOARD}/${ROUTES.USERS}`,
    //   icon: UsersIcon,
    // },
    {
      title: t("sidebar.products"),
      url: `/${ROUTES.DASHBOARD}/${ROUTES.PRODUCTS}`,
      icon: PackageSearch,
    },
    {
      title: t("sidebar.accountSettings"),
      url: `/${ROUTES.DASHBOARD}/${ROUTES.ACCOUNT_SETTINGS}`,
      icon: Settings,
    },
  ];

  const handleLogout = () => {
    toast.success(t("sidebar.logoutSuccess"), {
      description: t("sidebar.logoutSuccessDesc"),
    });
    setTimeout(() => {
      navigate("/");
    }, 500);
  };
  const location = useLocation();

  const isActive = (url: string) => {
    if (url === "/dashboard/") {
      return (
        location.pathname === "/dashboard" ||
        location.pathname === "/dashboard/"
      );
    }
    return location.pathname.startsWith(url);
  };

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarHeader>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton size="lg" asChild>
                <a href="#">
                  <div className="text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                    <img src={logo} alt="size-8 object-cover" />
                  </div>
                  <div className="flex flex-col gap-0.5 leading-none">
                    <span className="font-medium">Deol</span>
                    <span className="">v1.0.0</span>
                  </div>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>

        {/* <TeamSwitcher teams={data.teams} /> */}
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          {/* <SidebarGroupLabel>Dashboard</SidebarGroupLabel> */}
          <SidebarGroupContent>
            <SidebarMenu>
              {itemsDash.map((item) => {
                const active = isActive(item.url);
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild isActive={active}>
                      <Link to={item.url}>
                        <div
                          className={`flex items-center justify-center rounded-md p-1 transition-colors ${
                            active ? "bg-primary text-primary-foreground" : ""
                          }`}
                        >
                          <item.icon className="size-6" />
                        </div>
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        {/* <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} /> */}
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton onClick={handleLogout}>
              <div className="flex items-center justify-center rounded-md p-1 transition-colors hover:bg-destructive hover:text-destructive-foreground">
                <LogOut className="h-4 w-4" />
              </div>
              <span>{t("sidebar.logout")}</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
        {/* <NavUser user={data.user} /> */}
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
