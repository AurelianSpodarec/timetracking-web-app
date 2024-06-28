import React from "react";
import Image from "next/image";

import {
  DropdownMenuDefault,
  DropdownMenuDefaultContent,
  DropdownMenuDefaultItem,
  DropdownMenuDefaultLabel,
  DropdownMenuDefaultSeparator,
  DropdownMenuDefaultTrigger,
} from "@/components/molecules/dropdown-menu"

function UserAvatar({ menu, email, avatar }) {
  return (
    <div>
      <DropdownMenuDefault>
        <DropdownMenuDefaultTrigger>
          <div className="flex items-center space-x-2">
            <span className="text-white">{email}</span>
            <Image src={avatar} alt={email} width={30} height={30} className="rounded" />
          </div>
        </DropdownMenuDefaultTrigger>

        <DropdownMenuDefaultContent>
          {menu.map((menuItem, index) => (
            <React.Fragment key={index}>
              {menuItem.group ? (
                <>
                  <DropdownMenuDefaultLabel>{menuItem.name}</DropdownMenuDefaultLabel>
                  <DropdownMenuDefaultSeparator />
                  {menuItem.group.map((groupItem, idx) => (
                    <DropdownMenuDefaultItem key={idx} onClick={groupItem.onAction}>
                      {groupItem.name}
                    </DropdownMenuDefaultItem>
                  ))}
                  <DropdownMenuDefaultSeparator />
                </>
              ) : (
                <DropdownMenuDefaultItem onClick={menuItem.onAction}>
                  {menuItem.name}
                </DropdownMenuDefaultItem>
              )}
            </React.Fragment>
          ))}
        </DropdownMenuDefaultContent>
      </DropdownMenuDefault>
    </div>
  );
}

export default UserAvatar;