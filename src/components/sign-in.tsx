import { signIn } from "auth";
import { redirect } from "next/navigation";
import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function SignIn() {
  return (
    <form
      action={async (formData) => {
        "use server";
        try {
          await signIn("credentials", formData);
        } catch (error) {
          console.error("Failed to sign in", error);
          redirect("/");
        }
      }}
    >
      <Card className="sm:w-96 p-4 w-full shadow-xl">
        <CardTitle className="flex justify-center pb-4">Sign In</CardTitle>
        <CardContent>
          <div>
            <Label>Username</Label>
            <Input name="username" type="text" />
          </div>
          <div>
            <Label>Password</Label>
            <Input name="password" type="password" />
          </div>
        </CardContent>
        <CardFooter>
          <Button>Sign In</Button>
        </CardFooter>
      </Card>
    </form>
  );
}
