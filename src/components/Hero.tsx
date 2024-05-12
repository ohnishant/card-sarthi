import Link from "next/link";
import Image from "next/image";
import { ArrowRightIcon, CircleArrowOutUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const Hero = ({
  desktopImageURI,
  phoneImageURI,
  title,
  description,
  secondary,
}: {
  desktopImageURI?: string;
  phoneImageURI?: string;
  title?: string;
  description?: string;
  secondary?: boolean;
}) => {
  return (
    <div className="flex items-center justify-center flex-row px-8">
      <div className="mt-4 lg:container xl:container 2xl:container flex grow flex-col gap-4 md:flex-row justify-center items-center">
        <div
          className={cn(
            "hidden md:flex flex-col justify-center gap-6 rounded-lg pr-6 py-10 md:w-1/2 md:pr-10 lg:w-2/5 lg:pr-14",
            secondary ? "md:w-4/6 lg:w-5/6" : "",
          )}
        >
          <p
            className={cn(
              `text-xl flex flex-col gap-6 text-gray-800 antialiased md:text-xl md:leading-normal`,
              secondary ? "md:text-xs lg:text-s" : "",
            )}
          >
            <strong
              className={cn(
                "lg:text-6xl text-5xl",
                "lg:leading-normal md:leading-snug",
                secondary ? "lg:text-5xl text-4xl" : "", // make text smaller since content is more on secondary pages
              )}
            >
              {title || "Pick The Right Credit Card"}
            </strong>
            {description ||
              "Access a variety of India's best credit cards in one central hub and find the right one for you."}
          </p>
          {!secondary && (
            <Link href="/" className="flex items-center gap-2">
              Know your credit score
              <CircleArrowOutUpRight size={24} />
            </Link>
          )}
        </div>
        <div className="flex items-center justify-center p-6 md:w-1/2 lg:w-3/5 md:pl-6 lg:pl-16 md:py-12">
          {/* Add Hero Images Here */}
          <Image
            src={desktopImageURI || "/hero_img.png"}
            width={500}
            height={401}
            className="hidden md:block"
            alt="Screenshot of the dashboard project in the desktop mode"
          />
          <Image
            src={phoneImageURI || "/hero_mobile.png"}
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
