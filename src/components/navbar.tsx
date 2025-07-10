"use client";

import { Button } from "./ui/button";
import Link from "next/link";
import Account from "./account";
import { useSession } from "@/lib/auth-client";
import { Plus } from "lucide-react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const { data: session, isPending } = useSession();

  const pathname = usePathname();

  return (
    <header className="bg-background/60 sticky top-0 z-50 w-full border-b border-white/10 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="text-foreground text-xl font-semibold">Logo</div>

        {!isPending && session ? (
          <div className="flex gap-4">
            {pathname !== "/add-post" && (
              <Button variant="secondary" size="sm">
                <Plus className="h-6 w-6" />
                <Link href="/add-post">Add Post</Link>
              </Button>
            )}
            <Account user={session.user} />
          </div>
        ) : (
          <Button asChild>
            <Link href="/signin">Sign In</Link>
          </Button>
        )}
      </div>
    </header>
  );
};

export default Navbar;
