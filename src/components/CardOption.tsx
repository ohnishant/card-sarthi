import { cn } from "@/lib/utils";

export default function CardOption({
  children,
  text,
  bgColor,
  size,
}: {
  children: React.ReactNode;
  text: string;
  bgColor?: string;
  size?: number;
}) {
  return (
    <div className={cn("flex flex-col items-center size-28", size)}>
      <div
        className={cn(
          "rounded-full flex items-center justify-center size-[80px]",
          bgColor,
        )}
      >
        {children}
      </div>
      <div>{text}</div>
    </div>
  );
}
