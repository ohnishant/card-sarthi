"use client";
import Hero from "@/components/Hero";
import { useSearchParams } from "next/navigation";

const Page = () => {
  const searchParams = useSearchParams();
  const category = searchParams.get("category") || "reward_card";
  const heroDetails = heroes[category] || heroes["reward_card"];

  return (
    <>
      <Hero
        title={heroDetails.title}
        description={heroDetails.description}
        desktopImageURI={heroDetails.img}
        secondary
      />
    </>
  );
};

const heroes: { [key: string]: any } = {
  reward_card: {
    title:
      "Explore the best 2024 reward credit cards and apply for exclusive offers today!",
    description:
      "Looking for a credit card that fits your lifestyle like a glove? You've come to the right place! CardSathi is your one-stop destination for comparing and selecting from a diverse array of credit cards offered by leading banks and financial institutions.",
    img: "/heroes/reward-hero.png",
  },
  no_annual_fee: {
    title:
      "Best Lifetime Free Credit Card 2024 & Offers-Earn More, Enjoy More!",
    description:
      "Experience the freedom of smart spending with our Best Lifetime Free Credit Card. Enjoy pure benefits with no yearly charges, making managing finances simple and cost-effective from day one. Say goodbye to annual fees, giving you more room to enjoy rewards with our pocket-friendly financial companion.",
    img: "/heroes/noannual-hero.png",
  },
  lounge: {
    title: "Best Airport Lounge Credit Card 2024 & Offers for You to Apply",
    description:
      "Elevate your travel experience with our Best Airport Lounge Credit Card. Access exclusive lounges for peace amidst the airport hustle, enjoying complimentary gourmet meals and refreshments. Travel in style with domestic and international lounge access, turning your wait into a luxurious prelude to your journey.",
    img: "/heroes/lounge-hero.png",
  },
  cashback: {
    title: "Best Cashback Credit Card 2024 & Offers for You to Apply",
    description:
      "Elevate your travel experience with our Best Airport Lounge Credit Card. Access exclusive lounges for peace amidst the airport hustle, enjoying complimentary gourmet meals and refreshments. Travel in style with domestic and international lounge access, turning your wait into a luxurious prelude to your journey.",
    img: "/heroes/cashback-hero.png",
  },
  shopping: {
    title: "Best Shopping Credit Card 2024 & Offers for You to Apply",
    description:
      "Experience rewarding shopping with our Best Shopping Credit Cards, where every rupee spent unlocks perks. Maximize value whether at the mall or online, enjoying benefits across electronics, fashion, groceries, and more. Step into a new era of shopping privileges; apply now to start enjoying",
    img: "/heroes/shopping-hero.png",
  },
  travel: {
    title: "Best Travel Credit Cards 2024 & Offers for You to Apply",
    description:
      "Embark on adventures with our Best Travel Credit Cards, your ideal journey companion. Enjoy exclusive deals on flights and accommodations, earning rewards with every rupee spent. Transform your wanderlust into a treasure trove of benefits; apply today for your passport to travel privileges!",
    img: "/heroes/shopping-hero.png",
  },
  dine: {
    title: "Best Dining Credit Cards 2024 & Offers for You to Apply",
    description:
      "Dining credit cards offer meal discounts, exclusive deals, and loyalty points with restaurant partnerships. While they provide savings, they may come with fees, restrictions, and the risk of overspending. Choosing the right one involves considering dining habits, rewards, fees, and user feedback. Using them wisely can lead to substantial savings and better dining experiences.",
    img: "/heroes/dinein-hero.png",
  },
  movie: {
    title: "Best Movies Credit Card 2024 & Offers for You to Apply",
    description:
      "Immerse yourself in the cinematic universe with Movies Credit Cards. Unlock exclusive offers, discounted tickets, and premium seating with every swipe. Turn regular nights into unforgettable movie marathons, painting a richer movie-watching canvas. From blockbusters to indie gems, enjoy privileges that amplify your cinematic journey. Elevate your film experiences and apply now for your golden ticket!",
    img: "/heroes/movie-hero.png",
  },
};

export default Page;
