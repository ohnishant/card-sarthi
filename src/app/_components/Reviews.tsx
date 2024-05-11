import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const Reviews = () => {
  return (
    <div className="container flex w-full px-6 justify-center">
      <div className="">
        <strong className="md:text-4xl text-xl font-semibold">
          See what our clients shared
        </strong>
        <div className="grid md:grid-cols-2 md:gap-16 gap-8 pt-6 flex-wrap">
          <Review
            name="Vaishnavi"
            message="We greatly value your positive feedback about our bank. It's rewarding to hear that our services have met your expectations. Your satisfaction motivates us to continually improve and serve you better. Thank you for entrusting us with your financial needs."
          />
          <Review
            name="Suresh"
            message="Your positive feedback fuels our commitment to excellence in banking. Thank you for sharing your satisfaction with us. We're dedicated to continuously enhancing your banking experience. Your trust in us means everything."
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
          {/* TODO: Generate the number of stars programatically */}
          <div className="grid grid-cols-5 text-[#747474]">
            <Star fill="#EEB541" strokeWidth={0} size={15} />
            <Star fill="#EEB541" strokeWidth={0} size={15} />
            <Star fill="#EEB541" strokeWidth={0} size={15} />
            <Star fill="#EEB541" strokeWidth={0} size={15} />
            <Star strokeWidth={1} size={14} />
          </div>
        </div>
      </div>
      <div className="text-[#505050] pt-2 text-sm">{message}</div>
    </div>
  );
};

export default Reviews;
