import Image from 'next/image'
import React from 'react'
import StarIcon from "./StarIcon.svg"
import StarIconHalf from "./StarIconHalf.svg"
import { Star } from 'lucide-react';
export default function Meet() {
    const overlapAmount = "-ml-3"; // Adjusting value to control the overlap

    return (
        <div className='flex flex-col sm:flex sm:flex-row items-center justify-center'>
            <div className='flex items-center'>
                {Array.from({ length: 6 }).map((_, index) => (
                    <Image
                        key={index}
                        src={`/images/herov2/member${index + 1}.jpeg`} alt={`Member ${index + 1}`}
                        className={`rounded-full border-2 border-white ${index > 0 ? overlapAmount : ''} relative z-[${6 - index}]`}
                        width={32} height={32} />
                ))}
            </div>
            <div className='flex flex-col justify-start sm:items-start ml-2'>
                <div className='flex justify-center items-center'>
                    {
                        Array.from({ length: 5 }).map((_, index) => (
                            <React.Fragment key={index}>
                                {index < 4 ? <StarIcon /> : <StarIconHalf />}
                            </React.Fragment>
                        ))
                    }
                    <p className='text-sm text-[#353F48] font-bold font-archivo ml-2'>4.8+</p>
                </div>
                <p className='text-sm text-[#353F48] font-medium'>Meet <span className='font-semibold font-bricolage text-[#5E16EC]'>300+</span> Somali Dev’s</p>
            </div>
        </div>
    )
}