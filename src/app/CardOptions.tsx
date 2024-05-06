"use client";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { CreditCard } from "lucide-react";

export default function CardOptions() {
  return (
    <Tabs defaultValue="creditCard" className="w-full px-8">
      <TabsList className="flex flex-row h-[232px] justify-around bg-[#FDF9F0]">
        <TabsTrigger value="creditCard">
          <CardOption text="Credit Cards" bgColor="bg-[#FFE1A0]">
            <CreditCard />
          </CardOption>
        </TabsTrigger>
        <TabsTrigger value="rewardCards">
          <CardOption text="Reward Cards" bgColor="bg-[#FFE1A0]">
            <CreditCard />
          </CardOption>
        </TabsTrigger>
        <TabsTrigger value="noAnnualFee">
          <CardOption text="No Annual Fees" bgColor="bg-[#FFE1A0]">
            <CreditCard />
          </CardOption>
        </TabsTrigger>
        <TabsTrigger value="cashbackCards">
          <CardOption text="Cashback Cards" bgColor="bg-[#FFE1A0]">
            <CreditCard />
          </CardOption>
        </TabsTrigger>
        <TabsTrigger value="shoppingCards">
          <CardOption text="Shopping Cards" bgColor="bg-[#FFE1A0]">
            <CreditCard />
          </CardOption>
        </TabsTrigger>
        <TabsTrigger value="travelCards">
          <CardOption text="Travel Cards" bgColor="bg-[#FFE1A0]">
            <CreditCard />
          </CardOption>
        </TabsTrigger>
      </TabsList>
      <TabsContent value="creditCard">
        <div className="flex flex-col gap-16 lg:flex-row justify-around h-40">
          <div className="flex flex-row">
            <div className="flex flex-col gap-4">
              <strong className="text-4xl">Credit Cards</strong>
              <div className="w-[466px]">
                Optimize Your Earnings with Our Best Rewards Credit Cards: Find
                credit cards that maximize your rewards on every purchase.
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-10">
            <Button className="bg-[#FFD37A] text-black hover:bg-[#FFD37A] rounded-none mt-3">
              Apply for Credit Card
            </Button>
            <Button variant="outline" className="rounded-none mb-3">
              Want to uncover more
            </Button>
          </div>
        </div>
      </TabsContent>
      <TabsContent value="rewardCards">
        <div className="flex flex-col gap-16 lg:flex-row justify-around h-40">
          <div className="flex flex-row">
            <div className="flex flex-col gap-4">
              <strong className="text-4xl">Reward Cards</strong>
              <div className="w-[466px]">
                Enjoy retail therapy with shopping credit cards: Let your inner
                shopaholic shine!
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-10">
            <Button className="bg-[#FFD37A] text-black hover:bg-[#FFD37A] rounded-none mt-3">
              Compare and Apply for Credit Card
            </Button>
            <Button variant="outline" className="rounded-none mb-3">
              No annual Fee Card suggestion
            </Button>
          </div>
        </div>
      </TabsContent>
      <TabsContent value="noAnnualFee">
        <div className="flex flex-col gap-16 lg:flex-row justify-around h-40">
          <div className="flex flex-row">
            <div className="flex flex-col gap-4">
              <strong className="text-4xl">No annual fee Cards</strong>
              <div className="w-[466px]">
                Enjoy the advantages at No Cost: Find lifetime free credit cards
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-10">
            <Button className="bg-[#FFD37A] text-black hover:bg-[#FFD37A] rounded-none mt-3">
              Apply for Credit Card
            </Button>
            <Button variant="outline" className="rounded-none mb-3">
              Want to uncover more
            </Button>
          </div>
        </div>
      </TabsContent>
      <TabsContent value="cashbackCards">
        <div className="flex flex-col gap-16 lg:flex-row justify-around h-40">
          <div className="flex flex-row">
            <div className="flex flex-col gap-4">
              <strong className="text-4xl">Cashback Cards</strong>
              <div className="w-[466px]">
                Check out the finest cashback credit cards matching your needs
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-10">
            <Button className="bg-[#FFD37A] text-black hover:bg-[#FFD37A] rounded-none mt-3">
              Compare and Apply for Credit Card
            </Button>
            <Button variant="outline" className="rounded-none mb-3">
              No annual Fee Card suggestion
            </Button>
          </div>
        </div>
      </TabsContent>
      <TabsContent value="shoppingCards">
        <div className="flex flex-col gap-16 lg:flex-row justify-around h-40">
          <div className="flex flex-row">
            <div className="flex flex-col gap-4">
              <strong className="text-4xl">Shopping Cards</strong>
              <div className="w-[466px]">
                Enjoy retail therapy with shopping credit cards: Let your inner
                shopaholic shine!
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-10">
            <Button className="bg-[#FFD37A] text-black hover:bg-[#FFD37A] rounded-none mt-3">
              Compare Apply for Credit Card
            </Button>
            <Button variant="outline" className="rounded-none mb-3">
              Shopping Credit Card suggestion
            </Button>
          </div>
        </div>
      </TabsContent>
      <TabsContent value="travelCards">
        <div className="flex flex-col gap-16 lg:flex-row justify-around h-40">
          <div className="flex flex-row">
            <div className="flex flex-col gap-4">
              <strong className="text-4xl">Travel Cards</strong>
              <div className="w-[466px]">
                Embark on adventures with travel credit cards: Discover the
                perks of exploring the world
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-10">
            <Button className="bg-[#FFD37A] text-black hover:bg-[#FFD37A] rounded-none mt-3">
              Apply for Credit Card
            </Button>
            <Button variant="outline" className="rounded-none mb-3">
              Travel Credit Card Suggestion
            </Button>
          </div>
        </div>
      </TabsContent>
    </Tabs>
  );
}

function CardOption({
  children,
  text,
  bgColor,
  size,
}: {
  children: React.ReactNode;
  text: string;
  bgColor?: string;
  size?: number;
}) {
  return (
    <div className={cn("flex flex-col items-center size-28", size)}>
      <div
        className={cn(
          "rounded-full flex items-center justify-center size-[80px]",
          bgColor,
        )}
      >
        {children}
      </div>
      <div>{text}</div>
    </div>
  );
}
