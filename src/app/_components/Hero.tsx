import Link from "next/link";
import Image from "next/image";
import { ArrowRightIcon, CircleArrowOutUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const Hero = () => {
  return (
    <div className="flex items-center justify-center flex-row px-8">
      <div className="mt-4 lg:container xl:container 2xl:container flex grow flex-col gap-4 md:flex-row justify-center items-center">
        <div className="hidden md:flex flex-col justify-center gap-6 rounded-lg px-6 py-10 md:w-1/2 md:px-10 lg:w-2/5 lg:px-14">
          <p
            className={`text-xl flex flex-col gap-6 text-gray-800 antialiased md:text-xl md:leading-normal`}
          >
            <strong
              className={cn(
                "lg:text-6xl text-5xl",
                "lg:leading-normal md:leading-snug",
              )}
            >
              Pick The Right Credit Card
            </strong>
            Access a variety of India&apos;s best credit cards in one central
            hub and find the right one for you.
          </p>
          <Link href="/" className="flex items-center gap-2">
            Know your credit score
            <CircleArrowOutUpRight size={24} />
          </Link>
        </div>
        <div className="flex items-center justify-center p-6 md:w-1/2 lg:w-3/5 md:px-6 lg:px-16 md:py-12">
          {/* Add Hero Images Here */}
          <Image
            src="/hero_img.png"
            width={500}
            height={401}
            className="hidden md:block"
            alt="Screenshot of the dashboard project in the desktop mode"
          />
          <Image
            src="/hero_mobile.png"
            width={768}
            height={355}
            className="block md:hidden"
            alt="Screenshot of the dashboard project in the mobile mode"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
