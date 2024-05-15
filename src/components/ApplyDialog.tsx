import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const ApplyDialog = ({
  title,
  children,
  key,
}: {
  title: string;
  children: React.ReactNode;
  key: string;
}) => {
  // TODO: React Hook Form with zod validation here
  const [pan, setPan] = useState("");
  const [phone, setPhone] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [pincode, setPincode] = useState("");

  function handleSubmit() {
    const data = {
      pan,
      phone,
      fullName,
      email,
      pincode,
    };
    console.log(`Form submitted with data: ${JSON.stringify(data)} for ${key}`);
  }

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Apply for {title}</DialogTitle>
          <DialogDescription>
            Just a few details to get started
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              PAN
            </Label>
            <Input
              id="pan"
              value={pan}
              onChange={(e) => setPan(e.target.value)}
              placeholder="ABCDE1234F"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="phone" className="text-right">
              Mobile as per Aadhar
            </Label>
            <Input
              id="phone"
              value={phone}
              placeholder="9876543210"
              onChange={(e) => setPhone(e.target.value)}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Full Name
            </Label>
            <Input
              id="name"
              value={fullName}
              placeholder="John Doe"
              onChange={(e) => setFullName(e.target.value)}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="email" className="text-right">
              Email
            </Label>
            <Input
              id="email"
              value={email}
              placeholder="johndoe@email.com"
              onChange={(e) => setEmail(e.target.value)}
              className="col-span-3"
              type="email"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="pincode" className="text-right">
              Pincode
            </Label>
            <Input
              id="pincode"
              value={pincode}
              placeholder="xxxxxx"
              onChange={(e) => setPincode(e.target.value)}
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" onClick={handleSubmit}>
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ApplyDialog;
