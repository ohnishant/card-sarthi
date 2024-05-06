import Link from "next/link";
import Image from "next/image";
import { ArrowRightIcon, CircleArrowOutUpRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="flex items-center justify-center flex-row">
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row justify-center items-center">
        <div className="flex flex-col justify-center gap-6 rounded-lg px-6 py-10 md:w-2/5 md:px-20">
          <p
            className={`text-xl flex flex-col gap-6 text-gray-800 antialiased md:text-xl md:leading-normal`}
          >
            <strong className="text-6xl leading-normal">
              Pick The Right Credit Card
            </strong>
            Access a variety of India's best credit cards in one central hub and
            find the right one for you.
          </p>
          <Link href="/" className="flex items-center gap-2">
            Know your credit score
            <CircleArrowOutUpRight size={24} />
          </Link>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          {/* Add Hero Images Here */}
          <Image
            src="/hero_img.png"
            width={500}
            height={401}
            className="hidden md:block"
            alt="Screenshot of the dashboard project in the desktop mode"
          />
          <Image
            src="/hero-mobile.png"
            width={560}
            height={620}
            className="block md:hidden"
            alt="Screenshot of the dashboard project in the mobile mode"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
