"use client";
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
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const formSchema = z.object({
  pan: z
    .string()
    .regex(/[A-Z]{5}[0-9]{4}[A-Z]{1}/, { message: "Invalid PAN number" })
    .min(10)
    .max(10),
  mobile: z.string().min(10).max(10),
  name: z.string().min(1),
  email: z.string().email(),
  pincode: z
    .string()
    .min(6, { message: "Invalid Pincode, too short" })
    .max(6, { message: "Invalid Pincode, too long" })
    .refine(
      (value) => {
        const numericPin = parseInt(value);
        if (isNaN(numericPin)) {
          return false;
        }
        return numericPin >= 100000 && numericPin <= 999999;
      },
      { message: "Invalid Pincode" },
    ),
});

const ApplicationForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      pan: "",
      mobile: "",
      name: "",
      email: "",
      pincode: "",
    },
  });
  function onSubmit(data: z.infer<typeof formSchema>) {
    console.log(data);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input placeholder="Your Name" {...field} />
              </FormControl>
              <FormDescription></FormDescription>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="pan"
          render={({ field }) => (
            <FormItem>
              <FormLabel>PAN Number</FormLabel>
              <FormControl>
                <Input placeholder="ABCDE1234F" {...field} />
              </FormControl>
              <FormMessage />
              <FormDescription></FormDescription>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email Address</FormLabel>
              <FormControl>
                <Input placeholder="Your Email Address" {...field} />
              </FormControl>
              <FormDescription></FormDescription>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="mobile"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Mobile Number</FormLabel>
              <FormControl>
                <Input placeholder="Mobile number as per Aadhar" {...field} />
              </FormControl>
              <FormDescription></FormDescription>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="pincode"
          render={({ field }) => (
            <FormItem>
              <FormLabel>PinCode</FormLabel>
              <FormControl>
                <Input placeholder="xxxxxx" {...field} />
              </FormControl>
              <FormDescription></FormDescription>
            </FormItem>
          )}
        />
        <DialogFooter>
          <Button type="submit" onClick={() => {}}>
            Submit
          </Button>
        </DialogFooter>
      </form>
    </Form>
  );
};

const ApplyDialog = ({
  title,
  children,
  key,
}: {
  title: string;
  children: React.ReactNode;
  key: string;
}) => {
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
        <ApplicationForm />
      </DialogContent>
    </Dialog>
  );
};

export default ApplyDialog;
