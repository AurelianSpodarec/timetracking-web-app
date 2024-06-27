import { dashboardSettings } from "@/config/settings";

import Sidebar from "./_components/Sidebar";
import SidebarHeader from "./_components/Header";
import SidebarMain from "./_components/Main";

async function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex w-full h-full">
      <Sidebar settings={dashboardSettings.sidebar} />
      <div className="w-full">
        <SidebarHeader />
        <SidebarMain>
          {children}
        </SidebarMain>
      </div>
    </div>
  );
}

export default DashboardLayout
