"use client";
import CardOption from "@/components/CardOption";
import { Button } from "@/components/ui/button";
import {
  Armchair,
  Banknote,
  Gift,
  Luggage,
  ReceiptText,
  ShoppingCart,
  UtensilsCrossed,
} from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";

const validTabs = [
  "reward_card",
  "no_annual_fee",
  "lounge",
  "cashback",
  "shopping",
  "travel",
  "dine",
];

const CategoryOptions = () => {
  const [selectedTab, setSelectedTab] = React.useState("reward_card");
  const searchParams = useSearchParams();
  const category = searchParams.get("category") || "reward_card";
  const router = useRouter();
  const pathname = usePathname();

  function handleTabChange(tab: string) {
    const current = new URLSearchParams(Array.from(searchParams.entries())); // -> has to use this form
    const value = tab;

    if (!value || !validTabs.includes(value)) {
      // default to reward_card
      current.delete("category");
      setSelectedTab("reward_card");
    } else {
      current.set("category", tab);
      setSelectedTab(tab);
    }

    const search = current.toString();
    const query = search ? `?${search}` : "";
    router.push(`${pathname}${query}`, { scroll: false });
  }

  React.useEffect(() => {
    if (validTabs.includes(category)) {
      setSelectedTab(category);
    } else {
      setSelectedTab("reward_card");
    }
  }, [category]);

  return (
    <div className="bg-[#FEF7FF]">
      <div className="container flex flex-row items-center py-10 md:justify-between overflow-scroll no-scrollbar">
        <TabOption
          text="Reward"
          currentTab={selectedTab}
          activeOn="reward_card"
          onClick={() => handleTabChange("reward_card")}
          icon={<Gift />}
        />
        <TabOption
          text="No annual fee"
          currentTab={selectedTab}
          activeOn="no_annual_fee"
          onClick={() => handleTabChange("no_annual_fee")}
          icon={<ReceiptText />}
        />
        <TabOption
          text="Lounge"
          currentTab={selectedTab}
          activeOn="lounge"
          onClick={() => handleTabChange("lounge")}
          icon={<Armchair />}
        />
        <TabOption
          text="Cashback"
          currentTab={selectedTab}
          activeOn="cashback"
          onClick={() => handleTabChange("cashback")}
          icon={<Banknote />}
        />
        <TabOption
          text="Shopping"
          currentTab={selectedTab}
          activeOn="shopping"
          onClick={() => handleTabChange("shopping")}
          icon={<ShoppingCart />}
        />
        <TabOption
          text="Travel"
          currentTab={selectedTab}
          activeOn="travel"
          onClick={() => handleTabChange("travel")}
          icon={<Luggage />}
        />
        <TabOption
          text="Dine in"
          currentTab={selectedTab}
          activeOn="dine"
          onClick={() => handleTabChange("dine")}
          icon={<UtensilsCrossed />}
        />
      </div>
    </div>
  );
};

const TabOption = ({
  currentTab,
  activeOn,
  text,
  onClick,
  icon,
}: {
  currentTab: string;
  activeOn: string;
  text: string;
  onClick?: () => void;
  icon: JSX.Element;
}) => {
  return (
    <Button
      onClick={onClick}
      className="h-auto w-fit bg-transparent hover:bg-transparent text-black"
    >
      <CardOption
        text={text}
        bgColor={currentTab == activeOn ? "bg-[#EBB7F0]" : "bg-[#F6DCF8]"}
      >
        {icon}
      </CardOption>
    </Button>
  );
};

export default CategoryOptions;
