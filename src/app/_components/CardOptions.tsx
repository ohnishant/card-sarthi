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
import Link from "next/link";

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
      <TabsList className="h-auto py-10 bg-[#FDF9F0] w-full">
        <div className="container flex flex-row justify-around flex-wrap">
          {options.map((option) => (
            <TabsTrigger key={option.key} value={option.key}>
              <CardOption text={option.title} bgColor="bg-[#FFE1A0]">
                {option.icon}
              </CardOption>
            </TabsTrigger>
          ))}
        </div>
      </TabsList>
      {options.map((option) => (
        <TabsContent key={option.key} value={option.key} className="h-auto">
          <div className="flex flex-row justify-between container h-auto">
            <div className="flex flex-row">
              <div className="flex flex-col gap-4">
                <strong className="text-4xl font-semibold">
                  {option.title}
                </strong>
                <div className="max-w-[466px]">{option.description}</div>
              </div>
            </div>
            <div className="flex flex-col gap-10">
              <Button
                className="bg-[#FFD37A] text-black hover:bg-[#FFD37A] rounded-none mt-3"
                asChild
              >
                <Link href={option.link}>{option.button}</Link>
              </Button>
              <Button variant="outline" className="rounded-none mb-3" asChild>
                <Link href={option.linkOutline}>{option.buttonOutline}</Link>
              </Button>
            </div>
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );
};

const options = [
  {
    id: 1,
    icon: <Gift />,
    key: "creditCard",
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
    key: "rewardCards",
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
    key: "noAnnualFee",
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
    key: "cashbackCards",
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
    key: "shoppingCards",
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
    key: "travelCards",
    icon: <Luggage />,
    description:
      "Embark on adventures with travel credit cards: Discover the perks of exploring the world",
    button: "Apply for Credit Card",
    buttonOutline: "Travel Credit Card Suggestion",
    link: "/",
    linkOutline: "/",
  },
];
