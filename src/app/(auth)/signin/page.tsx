import { type Metadata } from "next";
import SignInForm from "./form";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sign In",
};

export default function SignInPage() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center">
      <div className="border-foreground/10 flex w-full flex-col gap-2.5 px-8 py-5 md:w-96">
        <h1 className="text-4xl font-bold">Sign In</h1>
        <p className="text-lg">Login to your account</p>
        <SignInForm />
        <div className="flex items-center justify-center gap-2">
          <small>Don&apos;t have account?</small>
          <Link href={"/signup"} className="text-sm leading-none font-bold">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}
