import ModeToggle from "@/components/ModeToggle"
import UserAvatar from "../UserAvatar"
import { auth } from "@/auth"
import { serverLogout } from "@/actions/loginServerAction"

const userMenu = [
  {
    name: "My Account",
    displayUI: false,
    group: [
      {
        name: "Profile",
        slug: "/profile"
      },
      {
        name: "Billing",
        slug: "/billing"
      },
      {
        name: "Subscription",
        slug: "/subscription"
      }
    ]
  },
  {
    name: "Logout",
    onAction: async () => await serverLogout()
  }
]

async function SidebarHeader() {
  const session = await auth()
  console.log(session.user)

  return (
    <header className="bg-dashboard-header-background border-b border-b-header-border-bottom">
      <div className="flex h-14 items-center px-6">
        
        <ModeToggle />
        <div className="ml-auto">
          <UserAvatar menu={userMenu} email={session?.user?.email} avatar={session?.user?.avatar} />
        </div>
      </div>
    </header>
  )
}

export default SidebarHeader
