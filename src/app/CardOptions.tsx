"use client";
import CardOption from "@/components/CardOption";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
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
import {
  Banknote,
  CreditCard,
  Gift,
  Luggage,
  ReceiptText,
  ShoppingCart,
} from "lucide-react";
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
          {options.map((option) => (
            <MobileCard
              key={option.id}
              icon={option.icon}
              title={option.title}
              description={option.description}
              button={option.button}
              buttonOutline={option.buttonOutline}
              link={option.link}
              linkOutline={option.linkOutline}
            />
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

interface MobileCardProps {
  title: string;
  description: string;
  button: string;
  icon?: JSX.Element;
  buttonOutline: string;
  link: string;
  linkOutline: string;
}
const MobileCard: React.FC<MobileCardProps> = ({
  title,
  description,
  icon,
  button,
  buttonOutline,
  link,
  linkOutline,
}) => {
  return (
    <CarouselItem className="basis-3/4 md:basis-1/3 h-full">
      <div className="p-1 h-full">
        <Card className="bg-[#FDF8EE] h-full outline-none">
          <CardHeader>
            <div className="flex flex-row gap-2 font-semibold text-l">
              {icon}
              {title}
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-sm text-[#505050]">{description}</div>
          </CardContent>
          <CardFooter className="flex flex-col items-center gap-2">
            <div className="w-full">
              <Button className="w-full bg-[#FFD37A] text-black hover:bg-[#FFD37A] rounded-none">
                {button}
              </Button>
            </div>
            <div className="w-full">
              <Button variant="outline" className="w-full rounded-none">
                {buttonOutline}
              </Button>
            </div>
          </CardFooter>
        </Card>
      </div>
    </CarouselItem>
  );
};

const DesktopCardOptions = () => {
  return (
    <Tabs defaultValue="creditCard" className="w-full px-8 my-11">
      <TabsList className="flex flex-row h-auto py-10 justify-around bg-[#FDF9F0] flex-wrap">
        <TabsTrigger value="creditCard">
          <CardOption text="Credit Cards" bgColor="bg-[#FFE1A0]">
            <Gift />
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

const options = [
  {
    id: 1,
    icon: <Gift />,
    title: "Credit Cards",
    description:
      "Optimize Your Earnings with Our Best Rewards Credit Cards: Find credit cards that maximize your rewards on every purchase.",
    button: "Apply for Credit Card",
    buttonOutline: "Uncover more",
    link: "/",
    linkOutline: "/",
  },
  {
    id: 2,
    icon: <CreditCard />,
    title: "Reward Cards",
    description:
      "Enjoy retail therapy with shopping credit cards: Let your inner shopaholic shine!",
    button: "Apply for Reward Card",
    buttonOutline: "No annual Fee Card suggestion",
    link: "/",
    linkOutline: "/",
  },
  {
    id: 3,
    icon: <ReceiptText />,
    title: "No annual fee Cards",
    description:
      "Enjoy the advantages at No Cost: Find lifetime free credit cards",
    button: "Apply for Credit Card",
    buttonOutline: "Uncover more",
    link: "/",
    linkOutline: "/",
  },
  {
    id: 4,
    title: "Cashback Cards",
    icon: <Banknote />,
    description:
      "Check out the finest cashback credit cards matching your needs",
    button: "Apply for Cashback Card",
    buttonOutline: "No annual Fee Card suggestion",
    link: "/",
    linkOutline: "/",
  },
  {
    id: 5,
    title: "Shopping Cards",
    icon: <ShoppingCart />,
    description:
      "Enjoy retail therapy with shopping credit cards: Let your inner shopaholic shine!",
    button: "Apply for Shopping Card",
    buttonOutline: "Shopping Credit Card suggestion",
    link: "/",
    linkOutline: "/",
  },
  {
    id: 6,
    title: "Travel Cards",
    icon: <Luggage />,
    description:
      "Embark on adventures with travel credit cards: Discover the perks of exploring the world",
    button: "Apply for Credit Card",
    buttonOutline: "Travel Credit Card Suggestion",
    link: "/",
    linkOutline: "/",
  },
];
