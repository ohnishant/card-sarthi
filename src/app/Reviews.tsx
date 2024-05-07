import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const Reviews = () => {
  return (
    <div className="flex w-full justify-center">
      <div className="w-[1112px]">
        <strong className="text-4xl font-semibold">
          See what our clients shared
        </strong>
        <div className="grid grid-cols-2 gap-16">
          <Review
            name="Vaishnavi"
            message="Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat"
          />
          <Review
            name="Suresh"
            message="Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat"
          />
        </div>
      </div>
    </div>
  );
};

const Review = ({ name, message }: { name: string; message: string }) => {
  return (
    <div>
      <div className="w-40 flex flex-row items-center gap-2 font-normal">
        <Avatar className="w-12 h-12">
          <AvatarImage src="" />
          <AvatarFallback>{name.at(0)}</AvatarFallback>
        </Avatar>
        <div>
          <div>{name}</div>
          <div className="text-xs text-[#636363]">
            31<sup>st</sup> March, 2024
          </div>
          <div className="grid grid-cols-5 text-[#747474]">
            <Star fill="yellow" strokeWidth={1} />
            <Star fill="yellow" strokeWidth={1} />
            <Star fill="yellow" strokeWidth={1} />
            <Star fill="yellow" strokeWidth={1} />
            <Star strokeWidth={1} />
          </div>
        </div>
      </div>
      <div className="text-[#505050] text-sm">{message}</div>
    </div>
  );
};

export default Reviews;
