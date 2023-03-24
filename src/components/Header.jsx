import React, { useState } from 'react';
import Image from 'next/image';
import {
    SearchIcon,
    GlobeAltIcon,
    MenuIcon,
    UserCircleIcon,
    UsersIcon
} from '@heroicons/react/solid';
import 'react-date-range/dist/styles.css'; // date-range main css file
import 'react-date-range/dist/theme/default.css'; // date-range theme css file
import { DateRangePicker } from 'react-date-range';
import { useRouter } from 'next/router';

function Header({
    sDate = new Date(),
    eDate = new Date(),
    guests = 1,
    placeholder = 'Start your search'
}) {
    const [searchInput, setSearchInput] = useState('');
    const [startDate, setStartDate] = useState(sDate);
    const [endDate, setEndDate] = useState(eDate);
    const [noOfGuests, setNoOfGuests] = useState(guests);
    const router = useRouter();

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: 'selection'
    };

    function handleSelect(ranges) {
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    }

    function resetInput() {
        setSearchInput('');
    }

    function search() {
        setSearchInput('');
        router.push({
            pathname: '/search',
            query: {
                location: searchInput,
                startDate: startDate.toISOString(),
                endDate: endDate.toISOString(),
                noOfGuests
            }
        });
    }

    return (
        <header className="sticky top-0 z-50 grid grid-cols-3 items-center bg-white shadow-md p-5">
            {/* Banner */}
            <div
                className="relative flex items-center h-8 cursor-pointer my-auto"
                onClick={() => router.push('/')}
            >
                <Image
                    src="/img/airbnb_banner.png"
                    fill
                    className="object-contain object-left"
                    alt="Airbnb Logo"
                ></Image>
            </div>

            {/* Search Box */}
            <div className="flex items-center rounded-full p-2 pl-5 justify-between gap-2 md:border-2">
                <input
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                    type="text"
                    placeholder={placeholder}
                    className="bg-transparent outline-none flex-grow text-sm text-gray-600 placeholder-gray-400"
                />
                <SearchIcon
                    className="hidden h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:inline-flex"
                    onClick={search}
                ></SearchIcon>
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

            {searchInput && (
                <div className="flex flex-col col-span-3 mx-auto p-5 shadow-md max-w-full md:max-w-none">
                    <DateRangePicker
                        ranges={[selectionRange]}
                        minDate={new Date()}
                        rangeColors={['#FD5B61']}
                        onChange={handleSelect}
                        className="scale-90 md:scale-100 m-0 p-0"
                    />
                    <div className="flex items-center border-b mb-4">
                        <h2 className="text-lg flex-grow md:text-2xl ">Number of Guests</h2>
                        <UsersIcon className="h-5"></UsersIcon>
                        <input
                            type="number"
                            className="w-8 pl-2 text-lg outline-none text-red-400  md:w-12"
                            value={noOfGuests}
                            min={1}
                            onChange={(e) => setNoOfGuests(e.target.value)}
                        />
                    </div>
                    <div className="flex">
                        <button
                            className="flex-grow text-gray-500 cursor-pointer"
                            onClick={resetInput}
                        >
                            Cancel
                        </button>
                        <button className="flex-grow text-red-400 cursor-pointer" onClick={search}>
                            Search
                        </button>
                    </div>
                </div>
            )}
        </header>
    );
}

export default Header;
