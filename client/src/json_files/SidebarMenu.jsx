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
    title: "Products",
    icon: <Icon.Package size={20} weight="duotone" />,
    link: "products",
  },
  {
    id: 3,
    title: "Orders",
    icon: <Icon.Receipt size={20} weight="duotone" />,
    link: "orders",
  },
  {
    id: 4,
    title: "Customers",
    icon: <Icon.Users size={20} weight="duotone" />,
    link: "customers",
  },
  {
    id: 5,
    title: "Categories",
    icon: <Icon.FolderOpen size={20} weight="duotone" />,
    link: "categories",
  },
  {
    id: 6,
    title: "Coupons",
    icon: <Icon.Ticket size={20} weight="duotone" />,
    link: "coupons",
  },
  {
    id: 7,
    title: "Settings",
    icon: <Icon.Gear size={20} weight="duotone" />,
    link: "settings",
  },
];

export default SidebarMenu;