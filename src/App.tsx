import type { FC, JSX } from "react";
import { useAppSelector } from "./redux/hooks";
import ProductsScreen from "./screens/products/screen";
import HomeScreen from "./screens/home/screen";
import SettingsScreen from "./screens/settings/screen";
import { Toaster } from "sonner";
import { useTheme } from "./components/theme/theme-provider";

function App() {
  const activeIndex = useAppSelector((s) => s.uiSlice).sidebar.active;
  const theme = useTheme();

  const ActiveScreen: FC = (): JSX.Element => {
    switch (activeIndex) {
      case 1:
        return <ProductsScreen />;
      case 2:
        return <SettingsScreen />;
      default:
        return <HomeScreen />;
    }
  };

  return (
    <div className="w-full h-full overflow-y-auto overflow-x-hidden">
      <ActiveScreen />
      <Toaster theme={theme.theme} />
    </div>
  );
}

export default App;
