import Head from 'next/head';
import Header from '@/components/Header';
import Banner from '@/components/Banner';
import jsonData from '../../public/json/places.json';
import cardsJson from '../../public/json/cards.json';
import SmallCard from '@/components/SmallCard';
import MediumCard from '@/components/MediumCard';
import LargeCard from '@/components/LargeCard';
import Footer from '@/components/Footer';

export default function Home({ exploreData, cardsData }) {
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

                    <div className="flex overflow-scroll scrollbar-hide p-3 -ml-3">
                        {cardsData.map((item) => (
                            <MediumCard key={item.img} img={item.img} title={item.title} />
                        ))}
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
