import {
  HouseIcon,
  ToteIcon,
  GearSixIcon,
  ShoppingBagOpenIcon,
} from "@phosphor-icons/react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { ThemeModeToggle } from "../theme/theme-mode-toggle";
import SidebarUser from "./user";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { cn } from "@/lib/utils";
import { sidebar__setIndex } from "@/redux/slices/ui";

const items = [
  {
    title: "Home",
    icon: HouseIcon,
  },
  {
    title: "Products",
    icon: ToteIcon,
  },
  {
    title: "Settings",
    icon: GearSixIcon,
  },
];

export function AppSidebar() {
  const uiSlice = useAppSelector((s) => s.uiSlice);
  const dispatch = useAppDispatch();

  return (
    <Sidebar>
      <SidebarContent className="h-full flex flex-col gap-2 justify-between mb-2">
        <SidebarGroup>
          <SidebarGroupLabel className="mb-4">
            <div className="flex items-center gap-2">
              <ShoppingBagOpenIcon
                weight="duotone"
                className="text-primary"
                size={24}
              />
              <span className="font-semibold">Mahal Dashboard</span>
            </div>
          </SidebarGroupLabel>

          <SidebarGroupContent>
            <SidebarMenu className="gap-2">
              {items.map((item, index) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    variant={
                      uiSlice.sidebar.active == index ? "default" : "default"
                    }
                    className={cn({
                      "text-primary border-primary bg-primary/5":
                        uiSlice.sidebar.active == index,
                    })}
                    onClick={() => dispatch(sidebar__setIndex(index))}
                  >
                    <item.icon weight="duotone" />
                    <span className="font-semibold">{item.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="gap-2">
              <ThemeModeToggle />
              <SidebarMenuButton>
                <SidebarUser />
              </SidebarMenuButton>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
