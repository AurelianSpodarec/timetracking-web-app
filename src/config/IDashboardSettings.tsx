import { INavigationItem } from "@/app/dashboard/_components/Sidebar/SidebarNavigation"

export interface IDashboardSettingsSidebar {
  variation?: 1 | 2
  menu: INavigationItem[]
}

export interface IDashboardSettings {
  sidebar: IDashboardSettingsSidebar
}
