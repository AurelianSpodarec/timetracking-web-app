import ModeToggle from "@/components/ModeToggle"
import UserAvatar from "../UserAvatar"

function SidebarHeader() {
  return (
    <header className="bg-dashboard-header-background border-b border-b-header-border-bottom">
      <div className="flex h-14 items-center">
        
        <ModeToggle />
        <div className="ml-auto">
          <UserAvatar />
        </div>
      </div>
    </header>
  )
}

export default SidebarHeader
