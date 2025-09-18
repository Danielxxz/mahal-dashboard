import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { UserCircleIcon, DotsThreeVerticalIcon } from "@phosphor-icons/react";

export default function SidebarUser() {
  return (
    <div className="w-full flex items-center justify-between">
      <div className="flex items-center gap-2">
        <UserCircleIcon weight="bold" />
        <span>Hamza El Marjani</span>
      </div>
      <UserOptions />
    </div>
  );
}

function UserOptions() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <DotsThreeVerticalIcon />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-56" align="start">
        <DropdownMenuItem variant="destructive">
          Log out
          <DropdownMenuShortcut className="text-destructive">
            ⇧⌘Q
          </DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
