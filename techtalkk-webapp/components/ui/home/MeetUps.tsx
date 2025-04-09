import { Circle } from "lucide-react";
import ImageGallery from "@/components/ui/home/ImageCard";

const MeetUps = () => {
  return (
    <section className='container mx-auto my-15 '>
      <div className='w-full h-full flex flex-col sm:flex-row mb-0'>
        <div className='sm:w-[1207px] sm:h-[122px] text-4xl md:text-5xl font-black'>
          TeckTalkk{" "}
          <span className='text-[#4E60EE] inline-flex items-center justify-center'>Meetups:</span>
        </div>
        <div className='flex mt-5 sm:mt-0 flex-col sm:ml-4'>
          <h2 className='font-bold text-xl md:text-4xl mb-2'>Connect, Learn, and Grow Together</h2>
          <p className='font-medium font-sans text-lg/loose md:text-2xl/loose tracking-wide text-[#4b4b4b]'>
            TeckTalkk Meetups are weekly virtual gatherings designed to bring developers, tech
            enthusiasts, and industry experts together. Whether you&apos;re a beginner or an
            experienced developer
          </p>
        </div>
      </div>
      <div className='flex flex-col flex-wrap gap-4 mt-2'>
        <ImageGallery />
      </div>
      <div className='mt-20'>
        {/* <span>MeetUpCard</span> */}
        <span className='flex justify-center items-center gap-2'>
          <Circle className='w-4 h-4 fill-gray-300' fill='fill-gray-300' stroke='none' />
          <Circle className='w-4 h-4 fill-gray-300' fill='fill-gray-300' stroke='none' />
          <Circle className='w-4 h-4 fill-[#5D16EC]' fill='fill-gray-300' stroke='none' />
          <Circle className='w-4 h-4 fill-gray-300' fill='fill-gray-300' stroke='none' />
          <Circle className='w-4 h-4 fill-gray-300' fill='fill-gray-300' stroke='none' />
        </span>
      </div>
    </section>
  );
};
export default MeetUps;
