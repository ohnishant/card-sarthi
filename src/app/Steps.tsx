import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CircleArrowRight } from "lucide-react";

const Steps = () => {
  return (
    <div className="w-full items-center justify-center flex-col my-12">
      <div className="flex w-full items-center justify-center">
        <div className="w-[1118px] bg-gray-50 flex justify-between flex-row">
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
      <div className="rounded-full bg-[#FCF4E3] text-xl px-7 py-4">{count}</div>
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
