import CardOption from "@/components/CardOption";
import {
  Armchair,
  Backpack,
  BadgeDollarSign,
  Clapperboard,
  ShoppingCart,
  UtensilsCrossed,
} from "lucide-react";

const Categories = () => {
  return (
    <div className="flex flex-col bg-[#FEEFFF80] my-16 justify-center py-12 gap-8 items-center">
      <strong className="text-4xl font-semibold">Our Best Categories</strong>
      <div className="flex flex-row justify-around flex-wrap gap-16 w-full">
        {categories.map((category) => (
          <CardOption
            key={category.id}
            text={category.name}
            bgColor="bg-[#F6DCF8]"
          >
            {category.icon}
          </CardOption>
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
  },
  {
    id: 2,
    name: "Cashback",
    icon: <BadgeDollarSign />,
  },
  {
    id: 3,
    name: "Lounge",
    icon: <Armchair />,
  },
  {
    id: 4,
    name: "Travel",
    icon: <Backpack />,
  },
  {
    id: 5,
    name: "Dine in",
    icon: <UtensilsCrossed />,
  },
  {
    id: 6,
    name: "Movie",
    icon: <Clapperboard />,
  },
];

export default Categories;
