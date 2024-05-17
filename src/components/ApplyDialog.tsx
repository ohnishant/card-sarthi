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
import { useState } from "react";
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
import { useToast } from "@/components/ui/use-toast";

import { addEntryToApplications } from "@/actions/db";
import { CardType } from "@/actions/getCardsByBankAndType";

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

const ApplicationForm = ({
  details,
  onOpenChange: changeOpenState,
}: {
  details: CardType;
  onOpenChange: (val: boolean) => void;
}) => {
  const [sumbitting, setSubmitting] = useState(false);
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
  const { toast } = useToast();

  async function onSubmit(data: z.infer<typeof formSchema>) {
    setSubmitting(true);
    const applicationDetails = { ...data, cardName: details.key };
    const insertedId = await addEntryToApplications(applicationDetails);
    if (insertedId) {
      toast({
        title: "Application Submitted",
        description:
          "Your application has been submitted successfully, we will reach out to you soon!",
      });
    } else {
      toast({
        title: "Application Failed",
        description: "There was an error submitting your application...",
        variant: "destructive",
      });
    }
    changeOpenState(false);
    setSubmitting(false);
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
          <Button type="submit" disabled={sumbitting} onClick={() => {}}>
            Save changes
          </Button>
        </DialogFooter>
      </form>
    </Form>
  );
};

const ApplyDialog = ({
  children,
  details,
  open,
  setOpenState,
}: {
  children: React.ReactNode;
  details: CardType;
  open: boolean;
  setOpenState: (val: boolean) => void;
}) => {
  return (
    <Dialog open={open} onOpenChange={setOpenState}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Apply for {details.name}.</DialogTitle>
          <DialogDescription>
            Just a few details to get started
          </DialogDescription>
        </DialogHeader>
        <ApplicationForm details={details} onOpenChange={setOpenState} />
      </DialogContent>
    </Dialog>
  );
};

export default ApplyDialog;
