import CardOption from "@/components/CardOption";
import {
  Armchair,
  Backpack,
  BadgeDollarSign,
  Clapperboard,
  ShoppingCart,
  UtensilsCrossed,
} from "lucide-react";
import Link from "next/link";

const Categories = () => {
  return (
    <div className="flex flex-col bg-[#FEEFFF80] my-16 justify-center py-12 gap-8 items-center">
      <strong className="text-4xl font-semibold text-center">
        Our Best Categories
      </strong>
      <div className="md:flex md:flex-row grid grid-cols-3 container md:justify-around flex-wrap md:gap-16 w-full justify-items-center">
        {categories.map((category) => (
          <Link key={category.name} href={category.href}>
            <CardOption
              key={category.id}
              text={category.name}
              bgColor="bg-[#F6DCF8]"
            >
              {category.icon}
            </CardOption>
          </Link>
        ))}
      </div>
    </div>
  );
};

const categories = [
  {
    id: 1,
    name: "Travel",
    icon: <ShoppingCart />,
    href: "/",
  },
  {
    id: 2,
    name: "Cashback",
    icon: <BadgeDollarSign />,
    href: "/",
  },
  {
    id: 3,
    name: "Lounge",
    icon: <Armchair />,
    href: "/",
  },
  {
    id: 4,
    name: "Travel",
    icon: <Backpack />,
    href: "/",
  },
  {
    id: 5,
    name: "Dine in",
    icon: <UtensilsCrossed />,
    href: "/",
  },
  {
    id: 6,
    name: "Movie",
    icon: <Clapperboard />,
    href: "/",
  },
];

export default Categories;
