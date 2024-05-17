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
    <div className="flex flex-col bg-[#FEEFFF80] justify-center py-12 gap-8 items-center">
      <strong className="text-4xl font-semibold text-center">
        Our Best Categories
      </strong>
      <div className="md:flex md:flex-row grid grid-cols-3 container md:justify-around flex-wrap md:gap-16 w-full justify-items-center">
        {categories.map((category) => (
          <Link key={category.name} className="my-2" href={category.href}>
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
    name: "Shopping",
    icon: <ShoppingCart />,
    href: "/categories?category=shopping",
  },
  {
    id: 2,
    name: "Cashback",
    icon: <BadgeDollarSign />,
    href: "/categories?category=cashback",
  },
  {
    id: 3,
    name: "Lounge",
    icon: <Armchair />,
    href: "/categories?category=lounge",
  },
  {
    id: 4,
    name: "Travel",
    icon: <Backpack />,
    href: "/categories?category=travel",
  },
  {
    id: 5,
    name: "Dine in",
    icon: <UtensilsCrossed />,
    href: "/categories?category=dine",
  },
  {
    id: 6,
    name: "Movie",
    icon: <Clapperboard />,
    href: "/categories?category=movie",
  },
];

export default Categories;
