import { AppSidebar } from "@/components/common/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <SidebarProvider>
      <div className="flex h-screen w-full overflow-hidden">
        <AppSidebar />

        {/* Main content */}
        <div className="flex flex-col flex-1">
          <header className="flex items-center justify-between border-b bg-background px-4 py-2">
            <SidebarTrigger />
          </header>

          <main className="flex-1 overflow-y-auto p-4 bg-muted/10">
            <Outlet />
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
