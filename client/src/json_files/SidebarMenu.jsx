import * as Icon from "@phosphor-icons/react";

const SidebarMenu = [
  {
    id: 1,
    title: "Dashboard",
    icon: <Icon.House size={20} weight="duotone" />,
    link: "dashboard",
  },
  {
    id: 2,
    title: "Orders",
    icon: <Icon.Receipt size={20} weight="duotone" />,
    link: "orders",
  },
  {
    id: 3,
    title: "Products",
    icon: <Icon.Package size={20} weight="duotone" />,
    link: "products",
  },
  {
    id: 4,
    title: "Categories",
    icon: <Icon.FolderOpen size={20} weight="duotone" />,
    link: "categories",
  },
  {
    id: 5,
    title: "Customers",
    icon: <Icon.Users size={20} weight="duotone" />,
    link: "customers",
  },
  {
    id: 6,
    title: "Coupons",
    icon: <Icon.Ticket size={20} weight="duotone" />,
    link: "coupons",
  },
  {
    id: 7,
    title: "Pages",
    icon: <Icon.Book size={20} weight="duotone" />,
    link: "pages",
  },
  {
    id: 8,
    title: "Discounts",
    icon: <Icon.Tag size={20} weight="duotone" />,
    link: "discounts",
  },
  {
    id: 9,
    title: "Reports",
    icon: <Icon.ChartPieSlice size={20} weight="duotone" />,
    link: "reports",
  },
  {
    id: 10,
    title: "Settings",
    icon: <Icon.Gear size={20} weight="duotone" />,
    link: "settings",
  },
];

export default SidebarMenu;