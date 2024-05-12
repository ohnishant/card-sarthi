"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";

const validBanks = ["axis", "hdfc", "idfc", "kotak_mahindra"];
const banks = [
  { name: "Axis Bank", value: "axis" },
  { name: "HDFC Bank", value: "hdfc" },
  { name: "IDFC Bank", value: "idfc" },
  { name: "Kotak Mahindra Bank", value: "kotak_mahindra" },
];

const Results = () => {
  return (
    <div className="flex flex-row container gap-2 my-4">
      <BankOptions />
      <div className="bg-red-100 w-full rounded-md">Content</div>
    </div>
  );
};

const BankOptions = () => {
  const [selectedBank, setSelectedBank] = React.useState("");
  const searchParams = useSearchParams();
  const category = searchParams.get("bank") || "";
  const router = useRouter();
  const pathname = usePathname();

  function handleBankChange(bank: string) {
    const current = new URLSearchParams(Array.from(searchParams.entries())); // -> has to use this form
    const value = bank;

    if (!value || !validBanks.includes(value)) {
      // default to reward_card
      current.delete("bank");
      setSelectedBank("");
    } else {
      current.set("bank", bank);
      setSelectedBank(bank);
    }

    const search = current.toString();
    const query = search ? `?${search}` : "";
    router.push(`${pathname}${query}`, { scroll: false });
  }

  React.useEffect(() => {
    if (validBanks.includes(category)) {
      setSelectedBank(category);
    } else {
      setSelectedBank("reward_card");
    }
  }, [category]);
  return (
    <div className="w-[216px]">
      <div className="text-[1.5rem] font-semibold">Select Bank</div>
      <div className="flex flex-col gap-0.5 mt-4">
        {banks.map((bank) => {
          return (
            <div key={bank.value} className="w-full flex flex-row">
              {selectedBank === bank.value && (
                <div className="w-2 bg-yellow-400"></div>
              )}
              <Button
                className={cn(
                  "text-[1rem] justify-start text-wrap w-full h-auto text-left rounded-none bg-white text-black hover:bg-white hover:text-black pl-0",
                  selectedBank === bank.value && "text-black pl-2",
                )}
                key={bank.value}
                onClick={() => handleBankChange(bank.value)}
              >
                {bank.name}
              </Button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Results;
