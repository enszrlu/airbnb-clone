import React from 'react';
import Image from 'next/image';
import { HeartIcon } from '@heroicons/react/outline';
import { StarIcon } from '@heroicons/react/solid';

function InfoCard({ img, location, title, description, star, priceNum, total }) {
    return (
        <div className="flex items-center py-7 px-2 border-b cursor-pointer hover:opacity-80 hover:shadow-lg transition duration-200 ease-out first:border-t">
            <div className="relative h-32 w-40 rounded-sm md:h-52 md:w-80">
                <Image src={img} fill className="object-cover rounded-2xl" alt={title}></Image>
            </div>
            <div className="flex flex-col flex-grow pl-5">
                <div className="flex justify-between items-end md:pt-5">
                    <p className="text-sm md:text-base">{location}</p>
                    <HeartIcon className="h-7 cursor-pointer" />
                </div>

                <h4 className="md:text-xl">{title}</h4>
                <div className="border-b w-10 pt-2" />

                <p className="pt-2 text-xs text-gray-500 flex-grow md:text-sm">{description}</p>

                <div className="flex justify-between">
                    <p className="flex items-center text-xs md:text-base">
                        <StarIcon className="h-5 text-red-400" />
                        {star}
                    </p>
                    <div>
                        <p className="font-semibold pb-2 md:text-lg lg:text-2xl">{`£${priceNum} / night`}</p>
                        <p className="text-right font-extralight text-sm md:text-base">{total}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InfoCard;
