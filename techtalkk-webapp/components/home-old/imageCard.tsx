import Image from "next/image";

interface ImageCardProps {
  src: string;
  alt: string;
  className?: string;
}
const ImageCard: React.FC<ImageCardProps> = ({ src, alt, className = "" }) => {
  return (
    <div
      className={`relative w-[260px] h-[155px] xs:w-[360px] xs:h-[255px] sm:w-[577px] sm:h-[355px] md:w-[calc(50%-1rem)] md:h-[355] rounded-[20px] shadow-md overflow-hidden ${className}`}>
      <Image
        src={src}
        fill
        quality={100}
        alt={alt}
        className='bg-contain bg-no-repeat bg-center w-full h-full object-cover'
        sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 577px'
      />
      <div className='absolute inset-0 border-[#5D16EC]/ border-2 bg-[linear-gradient(236deg,_rgba(255,255,255,0)_39.46%,_rgba(94,22,236,0.02)_59.42%,_rgba(93,22,236,0.42)_100.83%)] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] rounded-[20px]' />
      <div className='relative z-10 p-4 text-white'></div>
    </div>
  );
};

const mockImages = [
  { src: "/images/home/Meetups-01.jpg", alt: "Meetup 1" },
  { src: "/images/home/Meetups-02.jpg", alt: "Meetup 2" },
  { src: "/images/home/Meetups-03.jpeg", alt: "Meetup 3" },
  { src: "/images/home/Meetups-04.jpeg", alt: "Meetup 4" },
];

const ImageGallery: React.FC = () => {
  return (
    <div className='flex flex-wrap justify-center gap-4 mt-20'>
      {mockImages.map((image, index) => (
        <ImageCard key={index} src={image.src} alt={image.alt} />
      ))}
    </div>
  );
};

export default ImageGallery;
