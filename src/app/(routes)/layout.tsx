import Navbar from "@/components/navbar";
import { Suspense } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="">
      <Suspense fallback={<p>Loading...</p>}>
        <Navbar />
      </Suspense>
      <main>{children}</main>
    </div>
  );
}
