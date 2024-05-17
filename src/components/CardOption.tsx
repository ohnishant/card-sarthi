"use client";
import { useMediaQuery } from "@/hooks/use-media-query";
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
  const isNotMobile = useMediaQuery("(min-width: 640px)");
  if (isNotMobile) {
    return (
      <div className={cn("flex flex-col items-center size-28", size)}>
        <div
          className={cn(
            "md:rounded-full rounded-lg flex items-center justify-center size-[80px]",
            bgColor,
          )}
        >
          {children}
        </div>
        <div>{text}</div>
      </div>
    );
  }
  return (
    <>
      <div className={cn("rounded-full flex items-center w-fit p-4", bgColor)}>
        {children}
        <div>{text}</div>
      </div>
    </>
  );
}
