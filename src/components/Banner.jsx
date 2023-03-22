import React from 'react';
import Image from 'next/image';

function Banner() {
    return (
        <div className="relative h-[50svw] md:h-[45svw] lg:h-[40svw]">
            <Image
                src="https://links.papareact.com/0fm"
                fill
                className="object-cover object-bottom"
            ></Image>
            <div className="absolute top-1/3 w-full text-center">
                <p className="text-sm sm:text-lg">Not sure where to go? Perfect</p>
                <button className="text-purple-500 bg-white px-10 py-4 rounded-full shadow-md font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150">
                    I'm Flexible
                </button>
            </div>
        </div>
    );
}

export default Banner;
