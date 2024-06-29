'use client'

import Link from "next/link"
import { IDashboardSidebarSettings } from "@/config/dashboard"
import { usePathname, useRouter } from "next/navigation"

export interface INavigationItem {
  id: string
  name: string
  slug?: string
  icon?: JSX.Element
  new?: boolean
  onAction?: () => void,
  children?: INavigationItem[]
  data?: object | string | [] | number
}

function SidebarNavigationItem({ prefix, item, isActive }: { item: INavigationItem, isActive?: boolean }) {
  const hasChildren = item.children
  const hasPrefix = prefix

  const itemSlug = `${hasPrefix}${item.slug}`

  const Comp = hasChildren ? 'div' : Link;
  const linkProps = !hasChildren && item.slug && { href: itemSlug };

  return (
    <Comp
      {...(linkProps as any)}
      className={`flex py-3 px-4 my-2 rounded-dashboard-sidebar-link-border-radius
      ${isActive ?
          "text-dashboard-sidebar-link-foreground-active bg-dashboard-sidebar-link-background-active hover:text-dashboard-sidebar-link-foreground-active-hover hover:bg-dashboard-sidebar-link-background-active-hover" :
          "text-dashboard-sidebar-link-foreground hover:text-dashboard-sidebar-link-foreground-hover bg-dashboard-sidebar-link-background hover:bg-dashboard-sidebar-link-background-hover"
        }
    `}>
      <div className="flex items-center align-center">
        {item.icon &&
          <div className="h-5 w-5">{item.icon}</div>
        }
        <span className="text-sm text- ml-3 flex-1 whitespace-nowrap">{item.name}</span>
      </div>

      {item.new &&
        <span className="text-xs ml-auto">NEW!</span>
      }

      {item?.children && <SidebarNavigationItemChildren children={item.children} />}
    </Comp>
  )
}

function SidebarNavigationItemChildren({ children }: { children: INavigationItem[] }) {
  return (
    <div className="ml-4">
      {children.map((child) => {
        return <SidebarNavigationItem key={child.id} item={child} />
      })}
    </div>
  )
}

function SidebarNavigation({ settings }: { settings: IDashboardSidebarSettings }) {
  const pathname = usePathname()
  return (
    <nav className="flex-1 overflow-auto px-3">
      {settings.menu.map((item: any) => {
        const itemSlug = settings.prefix + item.slug
        const isActive = pathname === itemSlug || pathname.startsWith(`${itemSlug}/`)
        return <SidebarNavigationItem key={item.id} item={item} isActive={isActive} prefix={settings.prefix} />
      })}
    </nav>
  )
}

export default SidebarNavigation
