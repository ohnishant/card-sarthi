"use client";
import CardOption from "@/components/CardOption";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useMediaQuery } from "@/hooks/use-media-query";
import { cn } from "@/lib/utils";
import { CreditCard } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

export default function CardOptions() {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  return isDesktop ? <DesktopCardOptions /> : <MobileCardOptions />;
}

const MobileCardOptions = () => {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));
  return (
    <div className="w-full px-6 flex pt-8 items-center justify-center">
      <Carousel
        className="w-full"
        opts={{ align: "start", loop: true }}
        plugins={[plugin.current]}
      >
        <CarouselContent>
          <CarouselItem className="basis-1/2 md:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-4xl font-semibold">1</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          <CarouselItem className="basis-1/2 md:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-4xl font-semibold">2</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          <CarouselItem className="basis-1/2 md:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-4xl font-semibold">3</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          <CarouselItem className="basis-1/2 md:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-4xl font-semibold">4</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  );
};

const DesktopCardOptions = () => {
  return (
    <Tabs defaultValue="creditCard" className="w-full px-8 my-11">
      <TabsList className="flex flex-row h-auto py-10 justify-around bg-[#FDF9F0] flex-wrap">
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
      <TabsContent value="creditCard" className="h-auto">
        <div className="flex flex-col gap-16 lg:flex-row justify-around h-auto">
          <div className="flex flex-row">
            <div className="flex flex-col gap-4">
              <strong className="text-4xl font-semibold">Credit Cards</strong>
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
        <div className="flex flex-col gap-16 lg:flex-row justify-around h-auto">
          <div className="flex flex-row">
            <div className="flex flex-col gap-4">
              <strong className="text-4xl font-semibold">Reward Cards</strong>
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
        <div className="flex flex-col gap-16 lg:flex-row justify-around h-auto">
          <div className="flex flex-row">
            <div className="flex flex-col gap-4">
              <strong className="text-4xl font-semibold">
                No annual fee Cards
              </strong>
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
        <div className="flex flex-col gap-16 lg:flex-row justify-around h-auto">
          <div className="flex flex-row">
            <div className="flex flex-col gap-4">
              <strong className="text-4xl font-semibold">Cashback Cards</strong>
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
        <div className="flex flex-col gap-16 lg:flex-row justify-around h-auto">
          <div className="flex flex-row">
            <div className="flex flex-col gap-4">
              <strong className="text-4xl font-semibold">Shopping Cards</strong>
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
        <div className="flex flex-col gap-16 lg:flex-row justify-around h-auto">
          <div className="flex flex-row">
            <div className="flex flex-col gap-4">
              <strong className="text-4xl font-semibold">Travel Cards</strong>
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
};
