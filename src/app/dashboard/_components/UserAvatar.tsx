
import {
  DropdownMenuDefault,
  DropdownMenuDefaultContent,
  DropdownMenuDefaultItem,
  DropdownMenuDefaultLabel,
  DropdownMenuDefaultSeparator,
  DropdownMenuDefaultTrigger,
} from "@/components/molecules/dropdown-menu"
import Image from "next/image";

const userMenu = [
  {
    name: "Links",
    displayUI: false,
    group: [
      {
        name: "Profile",
        slug: "/profile"
      },
      {
        name: "Profile",
        slug: "/profile"
      },
      {
        name: "Profile",
        slug: "/profile"
      }
    ]
  },
  {
    name: "Logout",
    onAction: "() => logout()"
  }
]

function UserAvatar({ email, avatar }) {
  return (
    <div>
      <DropdownMenuDefault>
        <DropdownMenuDefaultTrigger>
          <div className="flex items-center align-center space-x-2">
            <span className="text-white no-">{email}</span>
            <Image src={avatar} alt={email} width={30} height={30} className="rounded" />
          </div>
        </DropdownMenuDefaultTrigger>
        <DropdownMenuDefaultContent>
          <DropdownMenuDefaultLabel>My Account</DropdownMenuDefaultLabel>
          <DropdownMenuDefaultSeparator />
          <DropdownMenuDefaultItem>Profile</DropdownMenuDefaultItem>
          <DropdownMenuDefaultItem>Billing</DropdownMenuDefaultItem>
          <DropdownMenuDefaultItem>Team</DropdownMenuDefaultItem>
          <DropdownMenuDefaultItem>Subscription</DropdownMenuDefaultItem>
          <DropdownMenuDefaultSeparator />
          <DropdownMenuDefaultItem>Logout</DropdownMenuDefaultItem>
        </DropdownMenuDefaultContent>
      </DropdownMenuDefault>
    </div>
  );
}

export default UserAvatar;