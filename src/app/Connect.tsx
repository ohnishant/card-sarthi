import { Button } from "@/components/ui/button";
import Image from "next/image";
const Connect = () => {
  return (
    <div className="flex my-32 justify-center md:bg-[#FEEFFF80] bg-[#FDF8EE] md:py-0 py-2 w-full items-center">
      <div className="w-[1112px] flex gap-16">
        <span className="hidden md:block">
          <Image
            src="/support_img.png"
            width={474}
            height={316}
            alt="Let's talk"
          />
        </span>
        <div className=" flex md:items-center md:justify-center mx-auto">
          <div>
            <strong className="md:text-4xl text-2xl font-medium">
              Still having problem choosing?
            </strong>
            <div className="justify-items-end w-full">
              <Button className="h-16 rounded-none md:bg-[#F6DCF8] bg-[#FFD37A] text-black w-40 font-normal text-base items-center">
                Let&apos;s connect
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Connect;
