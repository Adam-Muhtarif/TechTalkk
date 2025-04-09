"use client";

import Image from "next/image";
import {
  AlarmClockIcon,
  BookOpen,
  Users,
  // PlayCircle,
  BarChart3,
  BadgeIcon as Certificate,
  ChevronRight,
  ArrowRight,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export type DifficultyLevel = "Beginner" | "Intermediate" | "Advanced" | "Expert";

export interface CourseCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  instructor: {
    name: string;
    avatar: string;
    title?: string;
  };
  category: string[];
  difficulty: DifficultyLevel;
  modules: number;
  duration: number;
  members: number;
  rating?: number;
  reviewCount: number;
  price?: {
    current: number;
    original?: number;
    currency?: string;
  };
  isEnrolled?: boolean;
  progress?: number;
  isFeatured?: boolean;
  isNew?: boolean;
  hasCertificate?: boolean;
  onEnroll?: () => void;
  onPreview?: () => void;
  onSave?: () => void;
  onShare?: () => void;
  className?: string;
}

const CourseCard2 = ({
  title,
  description,
  image,
  instructor,
  category = [],
  difficulty = "Beginner",
  modules = 0,
  duration = 0,
  members = 0,
  isEnrolled = false,
  progress = 0,
  isFeatured = false,
  isNew = false,
  className,
}: CourseCardProps) => {
  const getDifficultyColor = (level: DifficultyLevel) => {
    switch (level) {
      case "Beginner":
        return "bg-emerald-100 text-emerald-700";
      case "Intermediate":
        return "bg-blue-100 text-blue-700";
      case "Advanced":
        return "bg-purple-100 text-purple-700";
      case "Expert":
        return "bg-rose-100 text-rose-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div
      className={cn(
        "group relative flex flex-col w-full rounded-xl overflow-hidden bg-white transition-all duration-300",
        "border border-gray-200 hover:border-gray-300",
        "shadow-sm hover:shadow-md hover:translate-y-[-4px]",
        className,
      )}>
      {/* Badges */}
      <div className='absolute top-4 left-4 z-10 flex flex-col gap-2'>
        {isFeatured && (
          <Badge className='bg-amber-500 hover:bg-amber-600 text-white'>Featured</Badge>
        )}
        {isNew && <Badge className='bg-blue-500 hover:bg-blue-600 text-white'>New</Badge>}
      </div>

      {/* Course thumbnail */}
      <div className='relative w-full pt-[56.25%] overflow-hidden'>
        <Image
          alt={`${title} course thumbnail`}
          src={image || "/placeholder.svg"}
          fill
          sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
          className='object-cover transition-transform duration-500 group-hover:scale-105'
          priority
        />

        {/* Preview button */}

        {/* Difficulty badge */}
        <Badge className={cn("absolute bottom-4 left-4", getDifficultyColor(difficulty))}>
          {difficulty}
        </Badge>
      </div>

      {/* Course content */}
      <div className='flex flex-col p-5 flex-grow'>
        {/* Categories */}
        <div className='flex flex-wrap gap-2 mb-2'>
          {category.map((cat, index) => (
            <Badge key={index} variant='outline' className='text-xs bg-gray-50'>
              {cat}
            </Badge>
          ))}
        </div>

        {/* Title and description */}
        <h2 className='text-xl font-bold text-gray-900 mb-2 line-clamp-2'>{title}</h2>
        <p className='text-sm text-gray-600 mb-4 line-clamp-2'>{description}</p>

        {/* Instructor info */}
        <div className='flex items-center mb-4'>
          <Avatar className='h-8 w-8 mr-2'>
            <AvatarImage src={instructor.avatar} alt={instructor.name} />
            <AvatarFallback>{instructor.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <p className='text-sm font-medium text-gray-900'>{instructor.name}</p>
            {instructor.title && <p className='text-xs text-gray-500'>{instructor.title}</p>}
          </div>
        </div>

        {/* Course stats */}
        <div className='grid grid-cols-2 gap-3 mb-4'>
          <div className='flex items-center gap-2'>
            <div className='w-7 h-7 flex items-center justify-center rounded-full bg-blue-50'>
              <BookOpen className='w-3.5 h-3.5 text-blue-600' />
            </div>
            <span className='text-sm text-gray-700'>{modules} Modules</span>
          </div>

          <div className='flex items-center gap-2'>
            <div className='w-7 h-7 flex items-center justify-center rounded-full bg-blue-50'>
              <AlarmClockIcon className='w-3.5 h-3.5 text-blue-600' />
            </div>
            <span className='text-sm text-gray-700'>{duration} hours</span>
          </div>

          <div className='flex items-center gap-2'>
            <div className='w-7 h-7 flex items-center justify-center rounded-full bg-blue-50'>
              <Users className='w-3.5 h-3.5 text-blue-600' />
            </div>
            <span className='text-sm text-gray-700'>{members.toLocaleString()}+ Students</span>
          </div>

          <div className='flex items-center gap-2'>
            <div className='w-7 h-7 flex items-center justify-center rounded-full bg-blue-50'>
              <BarChart3 className='w-3.5 h-3.5 text-blue-600' />
            </div>
            <span className='text-sm text-gray-700'>{difficulty}</span>
          </div>
        </div>

        {/* Progress bar for enrolled courses */}
        {isEnrolled && (
          <div className='mb-4'>
            <div className='flex justify-between items-center mb-1'>
              <span className='text-xs font-medium text-gray-700'>Your progress</span>
              <span className='text-xs font-medium text-gray-700'>{progress}%</span>
            </div>
            <Progress value={progress} className='h-2' />
          </div>
        )}

        {/* Price and CTA */}
        <div className='mt-auto pt-4 flex items-center justify-end'>
          {/* {price ? (
            <div className='flex flex-col'>
              <div className='flex items-center gap-2'>
                <span className='text-xl font-bold text-gray-900'>
                  {formatPrice(price.current, price.currency)}
                </span>
                {price.original && price.original > price.current && (
                  <span className='text-sm text-gray-500 line-through'>
                    {formatPrice(price.original, price.currency)}
                  </span>
                )}
              </div>
              {price.original && price.original > price.current && (
                <span className='text-xs text-green-600 font-medium'>
                  {Math.round((1 - price.current / price.original) * 100)}% off
                </span>
              )}
            </div>
          ) : (
            // <span className='text-xl font-bold text-gray-900'>Free</span>
            <span className='text-xl font-bold text-gray-900'></span>
          )} */}

          <Button variant='link' className='relative group '>
            Enroll Now
            <ArrowRight className='w-4 h-4 transition-transform duration-300 group-hover:translate-x-1' />
          </Button>
          {/* <Button
            onClick={isEnrolled ? onPreview : onEnroll}
            className={cn("bg-blue-600 hover:bg-blue-700 text-white", "flex items-center gap-1")}>
            {isEnrolled ? "Continue Learning" : "Enroll Now"}
            <ChevronRight className='w-4 h-4' />
          </Button> */}
        </div>
      </div>
    </div>
  );
};

export default CourseCard2;
