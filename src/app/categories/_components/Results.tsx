"use client";

import getCardsByBankAndType, {
  CardType,
} from "@/actions/getCardsByBankAndType";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";
import Image from "next/image";
import ImageWithFallback from "@/components/ImageWithFallback";
import CardCard from "@/components/CardCard";

const validBanks = ["axis", "hdfc", "idfc", "kotak_mahindra"];
const banks = [
  { name: "Axis Bank", value: "axis" },
  { name: "HDFC Bank", value: "hdfc" },
  { name: "IDFC Bank", value: "idfc" },
  { name: "Kotak Mahindra Bank", value: "kotak_mahindra" },
];

const Results = () => {
  const searchParams = useSearchParams();
  const _bank = searchParams.get("bank") || "";
  const bank = validBanks.includes(_bank) ? _bank : "";
  const category = searchParams.get("category") || "reward_card";
  const [cards, setCards] = React.useState<CardType[]>([]);

  React.useEffect(() => {
    fetchCards(bank, category);
  }, [bank, category]);

  async function fetchCards(bank: string, category: string) {
    const fetchedCards: CardType[] = await getCardsByBankAndType(
      bank,
      category,
    );
    console.log(fetchedCards);
    setCards(fetchedCards as any);
  }

  return (
    <div className="flex flex-row container gap-2 my-4">
      <BankOptions />
      <div className="flex flex-col gap-3 w-full rounded-md">
        {cards.map((card) => {
          return <CardCard key={card.id} details={card} />;
        })}
      </div>
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
    <div className="w-[216px] hidden md:block">
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
