import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useRouter } from 'next/router';
import { format } from 'date-fns';

export default function Search() {
    const router = useRouter();
    const { location, startDate, endDate, noOfGuests } = router.query;

    const formattedStartDate = format(new Date(startDate), 'dd MMM yy');
    const formattedEndDate = format(new Date(endDate), 'dd MMM yy');
    const range = `${formattedStartDate} - ${formattedEndDate}`;

    return (
        <div className="h-scren">
            <Header
                sDate={new Date(startDate)}
                eDate={new Date(endDate)}
                guests={noOfGuests}
                placeholder={`${location} | ${range} | ${noOfGuests}`}
            ></Header>
            <main className="flex">
                <section className="flex-grow pt-14 px-6">
                    <p className="text-xs">
                        300+ Stays - {range} - for {noOfGuests}{' '}
                        {noOfGuests > 1 ? 'guests' : 'guest'}
                    </p>
                    <h1 className="text-3xl font-semibold mt-2 mb-6">Stays in {location}</h1>

                    <div className="hidden gap-3 mb-5 text-gray-800 whitespace-nowrap md:flex">
                        <p className="filterButton">Cancellation Flexibility</p>
                        <p className="filterButton">Type Of Place</p>
                        <p className="filterButton">Price</p>
                        <p className="filterButton">Rooms and Beds</p>
                        <p className="filterButton">More Filters</p>
                    </div>
                </section>
            </main>
            <Footer></Footer>
        </div>
    );
}
