"use client";
import CardOption from "@/components/CardOption";
import { Button } from "@/components/ui/button";
import { Gift } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";

const CategoryOptions = () => {
  const [selectedTab, setSelectedTab] = React.useState("reward_card");
  const searchParams = useSearchParams();
  const category = searchParams.get("category") || "reward_card";
  const router = useRouter();
  const pathname = usePathname();

  function handleTabChange(tab: string) {
    // now you got a read/write object
    const current = new URLSearchParams(Array.from(searchParams.entries())); // -> has to use this form

    // update as necessary
    const value = tab;

    if (!value) {
      current.delete("category");
    } else {
      current.set("category", tab);
      setSelectedTab(tab);
    }

    // cast to string
    const search = current.toString();
    // or const query = `${'?'.repeat(search.length && 1)}${search}`;
    const query = search ? `?${search}` : "";

    router.push(`${pathname}${query}`);
  }

  return (
    <div className="bg-[#FEF7FF]">
      <div className="container flex flex-row items-center py-10 justify-between">
        <TabOption
          text="Reward"
          currentTab={selectedTab}
          activeOn="reward_card"
          onClick={() => handleTabChange("reward_card")}
        />
        <TabOption
          text="No annual fee"
          currentTab={selectedTab}
          activeOn="no_annual_fee"
          onClick={() => handleTabChange("no_annual_fee")}
        />
        <TabOption
          text="Lounge"
          currentTab={selectedTab}
          activeOn="lounge"
          onClick={() => handleTabChange("lounge")}
        />
        <TabOption
          text="Cashback"
          currentTab={selectedTab}
          activeOn="cashback"
          onClick={() => handleTabChange("cashback")}
        />
        <TabOption
          text="Shopping"
          currentTab={selectedTab}
          activeOn="shopping"
          onClick={() => handleTabChange("shopping")}
        />
        <TabOption
          text="Travel"
          currentTab={selectedTab}
          activeOn="travel"
          onClick={() => handleTabChange("travel")}
        />
        <TabOption
          text="Dine in"
          currentTab={selectedTab}
          activeOn="dine"
          onClick={() => handleTabChange("dine")}
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
}: {
  currentTab: string;
  activeOn: string;
  text: string;
  onClick?: () => void;
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
        <Gift />
      </CardOption>
    </Button>
  );
};

export default CategoryOptions;
