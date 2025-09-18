import { MoonIcon, SunIcon, MonitorIcon } from "@phosphor-icons/react";
import { useTheme } from "./theme-provider";
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";

type ThemeType = "light" | "dark" | "system";

export function ThemeModeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <Tabs defaultValue={theme} onValueChange={(e) => setTheme(e as ThemeType)}>
      <TabsList>
        <TabsTrigger value="light">
          <SunIcon />
        </TabsTrigger>
        <TabsTrigger value="system">
          <MonitorIcon />
        </TabsTrigger>
        <TabsTrigger value="dark">
          <MoonIcon />
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
}
