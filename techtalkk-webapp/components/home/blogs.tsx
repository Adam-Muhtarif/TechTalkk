"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { BentoGridItem } from "@/constants/data";

interface BentoGridProps {
  items: BentoGridItem[];
  className?: string;
  containerClassName?: string;
  gap?: number;
}

export default function BentoGrid({
  items,
  className = "",
  containerClassName = "",
  gap = 4,
}: BentoGridProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className={cn("container mx-auto p-4", containerClassName)}>
      <div
        className={cn(
          `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 auto-rows-auto`,
          `gap-${gap}`,
          className,
        )}>
        {items.map((item) => (
          <div
            key={item.id}
            className={cn(
              "relative overflow-hidden rounded-3xl group transition-all duration-300 hover:scale-[1.03]",
              item.size.mobile,
              `md:${item.size.tablet}`,
              `lg:${item.size.desktop}`,
              item.className,
            )}>
            {/* Overlay */}
            <div
              className={cn(
                "absolute inset-0 z-10",
                item.overlayDirection ? `bg-gradient-${item.overlayDirection}` : "bg-gradient-to-t",
                item.overlayColor
                  ? `from-${item.overlayColor}/${item.overlayOpacity || 70}`
                  : "from-black/60",
                "to-transparent",
              )}
            />

            <div className='absolute inset-0 bg-gradient-to-t from-black/70 to-transparent w-full' />
            {/* Text Content */}
            {item.title && (
              <div
                className={cn(
                  "absolute z-20 p-6",
                  item.textPosition === "top-left" && "top-0 left-0",
                  item.textPosition === "top-right" && "top-0 right-0",
                  item.textPosition === "bottom-left" && "bottom-0 left-0",
                  item.textPosition === "bottom-right" && "bottom-0 right-0",
                  item.textPosition === "center" &&
                    "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center",
                  !item.textPosition && "bottom-0 left-0",
                  item.textColor || "text-white",
                )}>
                <h2 className='text-lg md:text-xl lg:text-2xl font-bold line-clamp-2'>
                  {item.title}
                </h2>
                {item.description && (
                  <p className='text-lg font-sans font-medium mt-2 opacity-90 line-clamp-2'>
                    {item.description.length > 50
                      ? `${item.description.substring(0, 47)}...`
                      : item.description}
                  </p>
                )}
              </div>
            )}

            {/* Image */}
            <Image
              src={item.image}
              alt={item.title}
              width={800}
              height={600}
              className='w-full h-full object-cover transition-all duration-300 group-hover:scale-103 group-hover:opacity-60'
            />
          </div>
        ))}
      </div>
    </div>
  );
}
