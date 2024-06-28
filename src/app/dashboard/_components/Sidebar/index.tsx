import { IDashboardSidebarSettings } from "@/config/dashboard"

import SidebarNavigation from "./SidebarNavigation"
import SidebarLogo from "./SidebarLogo"

function Sidebar({ settings }: { settings: IDashboardSidebarSettings }) {
  return (
    <aside className="bg-dashboard-sidebar-background text-dashboard-sidebar-foreground border-r w-[270px] h-screen">
      <div className="flex h-full flex-col flex-auto overflow-hidden">
        <SidebarLogo />
        <SidebarNavigation settings={settings} />
      </div>
    </aside>
  )
}

export default Sidebar
