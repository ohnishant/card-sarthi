"use client";
import { Button } from "@/components/ui/button";
import { useMediaQuery } from "@/hooks/use-media-query";
import { cn } from "@/lib/utils";
import { CircleArrowRight } from "lucide-react";

const Steps = () => {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  return isDesktop ? <StepsDesktop /> : <StepsMobile />;
};
const StepsMobile = () => {
  return (
    <div className="flex flex-col my-12 p-6">
      <strong className="text-xl font-semibold">
        Get personalized reccomendations with minimal effort.
      </strong>
      <div className="flex flex-col gap-2 py-3">
        {steps.map((step) => {
          return <Step key={step.count} step={step.step} count={step.count} />;
        })}
      </div>
      <div className="text-xs text-[#636262]">
        *Note: Product suggestions can be obtained without providing your mobile
        number
      </div>
      <div className="flex justify-end">
        <Button className="h-16 mt-2 rounded-none bg-[#FFD37A] hover:bg-[#FFD38A] text-black w-52 gap-2 font-normal text-base items-center">
          Take the first step <CircleArrowRight />
        </Button>
      </div>
    </div>
  );
};
const StepsDesktop = () => {
  return (
    <div className="w-full items-center justify-center flex-col my-12">
      <div className="flex w-full items-center justify-center">
        <div className="container flex justify-between flex-row">
          <div>
            <div className="flex flex-col w-96 gap-8">
              <strong className="text-4xl font-semibold">
                Get personalized reccomendations with minimal effort.
              </strong>
              <Button className="h-16 rounded-none bg-[#FFD37A] text-black w-52 gap-2 font-normal text-base items-center">
                Take the first step <CircleArrowRight />
              </Button>
            </div>
          </div>
          <div className="flex flex-col gap-2 py-3">
            {steps.map((step) => {
              return (
                <Step key={step.count} step={step.step} count={step.count} />
              );
            })}
          </div>
        </div>
      </div>
      <div className="text-center text-xs text-[#636262]">
        *Note: Product suggestions can be obtained without providing your mobile
        number
      </div>
    </div>
  );
};

const Step = ({
  step,
  count,
  className,
}: {
  step: string;
  count: number;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-row gap-4 items-center", className)}>
      <div className="rounded-full bg-[#FCF4E3] md:text-xl font-bold md:font-normal px-3 py-1 md:px-7 md:py-4">
        {count}
      </div>
      <div>{step}</div>
    </div>
  );
};

const steps = [
  { count: 1, step: "Share a few information with us" },
  {
    count: 2,
    step: "Card Sarthi intelligent algorithm handles the processing.",
  },
  { count: 3, step: "Receive top-notch product recommendations" },
];

export default Steps;
