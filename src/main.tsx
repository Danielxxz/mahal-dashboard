import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ThemeProvider } from "./components/theme/theme-provider.tsx";
import { SidebarProvider, SidebarTrigger } from "./components/ui/sidebar.tsx";
import { AppSidebar } from "./components/sidebar/app-sidebar.tsx";
import { Provider as ReduxProvider } from "react-redux";
import { store as ReduxStore } from "./redux/store.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ReduxProvider store={ReduxStore}>
      <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
        <SidebarProvider>
          <AppSidebar />
          <main className="w-full h-screen flex flex-col">
            <div className="w-full flex justify-between items-center p-2">
              <SidebarTrigger />
            </div>
            <App />
          </main>
        </SidebarProvider>
      </ThemeProvider>
    </ReduxProvider>
  </StrictMode>
);
