import React from 'react';
import Image from 'next/image';
import {
    SearchIcon,
    GlobeAltIcon,
    MenuIcon,
    UserCircleIcon,
    UsersIcon
} from '@heroicons/react/solid';

function Header() {
    return (
        <header className="sticky top-0 z-50 grid grid-cols-3 items-center bg-white shadow-md p-5">
            {/* Banner */}
            <div className="relative flex items-center h-8 cursor-pointer my-auto">
                <Image
                    src="/img/airbnb_banner.png"
                    fill
                    className="object-contain object-left"
                ></Image>
            </div>

            {/* Search Box */}
            <div className="flex items-center rounded-full p-2 pl-5 justify-between gap-2 md:border-2">
                <input
                    type="text"
                    placeholder="Start your search"
                    className="bg-transparent outline-none flex-grow text-sm text-gray-600 placeholder-gray-400"
                />
                <SearchIcon className="hidden h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:inline-flex"></SearchIcon>
            </div>
            {/* Right Buttons */}
            <div className="flex items-center space-x-4 justify-end text-gray-500">
                <p className="cursor-pointer hidden md:inline">Become a host</p>
                <GlobeAltIcon className="h-6 cursor-pointer"></GlobeAltIcon>
                <div className="flex border-2 rounded-full space-x-2 p-2">
                    <MenuIcon className="h-6 cursor-pointer"></MenuIcon>
                    <UserCircleIcon className="h-6 cursor-pointer"></UserCircleIcon>
                </div>
            </div>
        </header>
    );
}

export default Header;
