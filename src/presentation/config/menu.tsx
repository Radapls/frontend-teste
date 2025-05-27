import { HomeIcon } from "@components/icons/home";
import { SidebarResource } from "../components/core/sidebar/types";
import { BuildingIcon } from "@components/icons/building";


export const MENU_RESOURCES_CONFIGS: SidebarResource[] = [
  {
    id: "home",
    title: "Início",
    item: <HomeIcon customSize="2.3rem" />,
    path: "/",
  },
  {
    id: "central",
    title: "Centrais",
    item: <BuildingIcon customSize="2.3rem" />,
    path: "/centrals",
  }
];
