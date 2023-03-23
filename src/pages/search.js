import Head from 'next/head';
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useRouter } from 'next/router';
import { format } from 'date-fns';
import jsonData from '../../public/json/stays.json';
import InfoCard from '@/components/InfoCard';
import Map from '@/components/Map';

export default function Search({ searchResults }) {
    const router = useRouter();
    const { location, startDate, endDate, noOfGuests } = router.query;

    const formattedStartDate = format(new Date(startDate), 'dd MMM yy');
    const formattedEndDate = format(new Date(endDate), 'dd MMM yy');
    const noOfDays = Math.max(
        1,
        Math.floor((new Date(endDate) - new Date(startDate)) / (1000 * 60 * 60 * 24))
    );
    const range = `${formattedStartDate} - ${formattedEndDate}`;

    return (
        <div className="h-scren">
            <Head>
                <title>Airbnb Clone</title>
                <link rel="icon" href="/img/airbnb.png" />
            </Head>
            <Header
                sDate={new Date(startDate)}
                eDate={new Date(endDate)}
                guests={noOfGuests}
                placeholder={`${location} | ${range} | ${noOfGuests}`}
            ></Header>
            <main className="flex">
                <section className="flex-grow pt-6 px-6">
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
                    <div className="flex flex-col">
                        {searchResults.map(
                            ({ img, location, title, description, star, price, priceNum }) => (
                                <InfoCard
                                    key={priceNum}
                                    img={img}
                                    location={location}
                                    title={title}
                                    description={description}
                                    star={star}
                                    priceNum={priceNum}
                                    total={`£ ${priceNum * noOfDays}`}
                                ></InfoCard>
                            )
                        )}
                    </div>
                </section>
                <section className="hidden w-1/2 lg:inline-flex lg:min-w-[600px]">
                    <Map searchResults={searchResults}></Map>
                </section>
            </main>
            <Footer></Footer>
        </div>
    );
}

export async function getServerSideProps(context) {
    const searchResults = jsonData;

    return {
        props: { searchResults }
    };
}
