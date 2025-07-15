"use client";

import { Button } from "./ui/button";
import Link from "next/link";
import Account from "./account";
import { useSession } from "@/lib/auth-client";
import { Plus } from "lucide-react";
import { usePathname } from "next/navigation";
import SearchInput from "./search-input";

const Navbar = () => {
  const { data: session, isPending } = useSession();

  const pathname = usePathname();

  return (
    <header className="bg-background/60 sticky top-0 z-50 w-full border-b border-white/10 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Left: Logo */}
        <div className="text-foreground text-xl font-semibold">Logo</div>

        {/* Middle: SearchInput */}
        <div className="flex flex-1 justify-center px-4">
          <SearchInput />
        </div>

        {/* Right: Account / Add Post */}
        {!isPending && session ? (
          <div className="flex items-center gap-4">
            {pathname !== "/add-post" && (
              <Button asChild variant="secondary" size="sm">
                <Link href="/add-post" className="flex items-center gap-1">
                  <Plus className="h-4 w-4" />
                  <span>Add Post</span>
                </Link>
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
