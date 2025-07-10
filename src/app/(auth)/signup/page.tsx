import { type Metadata } from "next";
import Link from "next/link";
import SignUpForm from "./form";

export const metadata: Metadata = {
  title: "Sign Up",
};

export default function SignUpPage() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center p-10">
      <div className="border-foreground/10 flex w-full flex-col gap-2.5 px-8 py-5 md:w-96">
        <h1 className="text-4xl font-bold">Sign Up</h1>
        <p className="text-lg">Create a new account</p>
        <SignUpForm />
        <div className="flex items-center justify-center gap-2">
          <small>Already have account?</small>
          <Link href={"/signin"} className="text-sm leading-none font-bold">
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
}
