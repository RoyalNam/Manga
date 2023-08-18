'use client';

import { useState, useEffect } from 'react';
import { HomeData, getCompleted, getHottest, getManga, getOnGoing } from '@/services/manga';
import RankCart from './Cart/RankCart';
import { Manga } from '@/types/manga';
import Cart from './Cart/Cart';
import Title from './Title';

interface DataProps {
    id: string;
    type?: string;
}

const Test = () => {
    const [data, setData] = useState<Manga[]>([]);
    const [dataComp, setDataComp] = useState<Manga[]>([]);
    const [mangaData, setMangaData] = useState<Manga[]>([]);
    useEffect(() => {
        const fetchData = async () => {
            const resp = await getOnGoing();
            setData(resp);
            const respComp = await getCompleted();
            setDataComp(respComp);

            const respTop = await getManga({ limit: 25, order: { followedCount: 'desc' } });
            setMangaData(respTop);
        };
        fetchData();
    }, []);

    console.log('on', data);
    console.log(mangaData);
    console.log('compled', dataComp);

    return (
        <div className="flex w-[100vw]">
            <div className="bg-[#131313] flex flex-col flex-1">
                <div>
                    <Title title="Daily Updates" bgLinear />
                    <div className="grid px-4 py-6 grid-cols-3 xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 gap-x-2 gap-y-3">
                        {Array.isArray(data) &&
                            data.map(
                                (manItem: Manga) =>
                                    manItem.chapters[0] && (
                                        <Cart
                                            key={manItem.id}
                                            id={manItem.id}
                                            src={manItem.image}
                                            name={manItem.title}
                                            lastCtNumber={manItem.chapters[0].chapterNumber}
                                            title={manItem.chapters[0].title}
                                            author={manItem.author.attributes.name}
                                        />
                                    ),
                            )}
                    </div>
                </div>
                <div className="">
                    <Title title="Completed" bgLinear />
                    <div className="grid px-4 py-6 grid-cols-3 xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 gap-x-2 gap-y-4">
                        {Array.isArray(dataComp) &&
                            dataComp.map(
                                (manItem: Manga) =>
                                    manItem.chapters[0] && (
                                        <Cart
                                            key={manItem.id}
                                            id={manItem.id}
                                            src={manItem.image}
                                            name={manItem.title}
                                            author={manItem.author.attributes.name}
                                        />
                                    ),
                            )}
                    </div>
                </div>
            </div>
            <div className="hidden md:block md:w-[35%] xl:w-[25%] ml-4">
                <Title title="Hottest" bgRedLinear />
                <div className="flex flex-col bg-[#5d0914] max-w-full overflow-hidden">
                    {Array.isArray(mangaData) &&
                        mangaData.map((manItem, index) => (
                            <RankCart
                                key={manItem.id}
                                id={manItem.id}
                                onTop={index < 3 ? true : false}
                                number={index + 1}
                                src={manItem.image}
                                name={manItem.title}
                                author={manItem.author.attributes.name}
                            />
                        ))}
                </div>
            </div>
        </div>
    );
};

export default Test;
