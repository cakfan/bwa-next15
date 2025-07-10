"use client";

import SignOutButton from "@/app/(auth)/components/button-signout";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { UserType } from "@/db/schema";

const Account = ({ user }: { user: Partial<UserType> }) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Avatar>
          <AvatarImage
            src={user.image || "https://github.com/shadcn.png"}
            alt={user.name}
          />
          <AvatarFallback>{user.name?.[0]}</AvatarFallback>
        </Avatar>
      </PopoverTrigger>
      <PopoverContent align="end" className="flex w-80 flex-col gap-2.5">
        <h2 className="text-2xl font-bold">{user.name}</h2>
        <p className="text-lg">{user.email}</p>
        <SignOutButton />
      </PopoverContent>
    </Popover>
  );
};

export default Account;
