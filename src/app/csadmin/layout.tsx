import { Toaster } from "@/components/ui/sonner";
import { ReactNode } from "react";

import { auth } from "auth";
import { SignIn } from "@/components/sign-in";

export default async function Layout({ children }: { children: ReactNode }) {
  const session = await auth();

  if (!session?.user) {
    return (
      <div className="w-full h-dvh flex items-center justify-center content-center bg-gray-200">
        <SignIn />
      </div>
    );
  }
  return (
    <>
      {children}
      <Toaster />
    </>
  );
}
