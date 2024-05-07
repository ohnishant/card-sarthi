import { Button } from "@/components/ui/button";
import Image from "next/image";
const Connect = () => {
  return (
    <div className="flex my-32 justify-center bg-[#FEEFFF80] w-full items-center">
      <div className="w-[1112px] flex gap-16">
        <span>
          <Image
            src="/support_img.png"
            width={474}
            height={316}
            alt="Let's talk"
          />
        </span>
        <div className=" flex items-center justify-center mx-auto">
          <div>
            <strong className="text-4xl font-medium">
              Still having problem choosing?
            </strong>
            <Button className="h-16 rounded-none bg-[#F6DCF8] text-black w-40 font-normal text-base items-center">
              Let&apos;s connect
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Connect;
