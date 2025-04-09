import BentoGrid from "@/components/ui/home/Blogs";
import { aiBentoGridItems } from "@/constants/data";

const Test = () => {
  return (
    <main className='min-h-screen dark:bg-gray-950 py-10'>
      <BentoGrid items={aiBentoGridItems} />
      {/* <SolidBento /> */}
    </main>
  );
};
export default Test;
