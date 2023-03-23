import Head from 'next/head';
import Header from '@/components/Header';
import Banner from '@/components/Banner';
import jsonData from '../../public/json/places.json';
import cardsJson from '../../public/json/cards.json';
import SmallCard from '@/components/SmallCard';
import MediumCard from '@/components/MediumCard';
import LargeCard from '@/components/LargeCard';
import Footer from '@/components/Footer';
import { useEffect, useRef, useState } from 'react';

export default function Home({ exploreData, cardsData }) {
    const divRef = useRef(null);
    const [scrollPos, setScrollPos] = useState(0);
    const [isRightScrollingActive, setIsRightScrollingActive] = useState(false);
    const [isLeftScrollingActive, setIsLeftScrollingActive] = useState(false);

    useEffect(() => {
        let interval;
        if (isRightScrollingActive) {
            interval = setInterval(() => {
                setScrollPos((scrollPos) =>
                    Math.min(scrollPos + 1, divRef.current.scrollWidth - divRef.current.clientWidth)
                );
            }, 1);
        }
        if (isLeftScrollingActive) {
            console.log(divRef.current.clientWidth);
            interval = setInterval(() => {
                setScrollPos((scrollPos) => Math.max(scrollPos - 1, 0));
            }, 1);
        }
        return () => clearInterval(interval);
    }, [isRightScrollingActive, isLeftScrollingActive]);

    if (divRef.current) {
        divRef.current.scrollLeft = scrollPos;
    }

    return (
        <>
            <Head>
                <title>Airbnb Clone</title>
                <link rel="icon" href="/img/airbnb.png" />
            </Head>
            <Header></Header>
            <Banner></Banner>
            <main className="max-w-7xl mx-auto px-8 sm:px-16">
                <section className="pt-6">
                    <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {exploreData.map((item) => (
                            <SmallCard
                                key={item.img}
                                img={item.img}
                                location={item.location}
                                distance={item.distance}
                            ></SmallCard>
                        ))}
                    </div>
                </section>
                <section>
                    <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>

                    <div className="relative">
                        <div ref={divRef} className="flex overflow-scroll scrollbar-hide p-3 -ml-3">
                            {cardsData.map((item) => (
                                <MediumCard key={item.img} img={item.img} title={item.title} />
                            ))}
                        </div>
                        <div
                            onMouseEnter={() => setIsLeftScrollingActive(true)}
                            onMouseLeave={() => setIsLeftScrollingActive(false)}
                            className="absolute top-3 h-5/6 w-6 left-[-12px] hover:bg-gray-50"
                        ></div>
                        <div
                            onMouseEnter={() => setIsRightScrollingActive(true)}
                            onMouseLeave={() => setIsRightScrollingActive(false)}
                            className="absolute top-3 h-5/6 w-6 right-[-5px] hover:bg-gray-50"
                        ></div>
                    </div>
                </section>
                <LargeCard
                    image="https://links.papareact.com/4cj"
                    title="The Greatest Outdoors"
                    description="Wishlists curated by Airbnb"
                    buttonText="Get Inspired"
                ></LargeCard>
            </main>
            <Footer></Footer>
        </>
    );
}

export async function getStaticProps() {
    // const exploreData = await fetch('https://links.papareact.com/pyp').then((res) => res.json());

    const exploreData = jsonData;

    const cardsData = cardsJson;

    return {
        props: {
            exploreData,
            cardsData
        }
    };
}
