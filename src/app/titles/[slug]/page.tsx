'use client';
import { getInfo } from '@/services/manga';
import { Manga } from '@/types/manga';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { IoBookOutline } from 'react-icons/io5';

const Title = ({ params }: { params?: { slug?: string } }) => {
    // const Title = ({ slug = '8610757f-eaea-4c42-9c8e-5b91124d7f34' }) => {
    const [data, setData] = useState<Manga | null>(null);
    const [show, setShow] = useState(1);
    const [chapterRanges, setChapterRanges] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            if (params?.slug) {
                const resp = await getInfo(params?.slug);
                setData(resp);
                const chapterArr: number[][] = [];
                const chaptersLength = resp?.chapters.length ?? 0;

                for (let index = 0; index < chaptersLength / 50; index++) {
                    const top = index * 50 + 1;
                    let end;

                    if (index === Math.ceil(chaptersLength / 50) - 1) {
                        end = chaptersLength + 1;
                    } else {
                        end = top + 49;
                    }
                    chapterArr.push([top, end]);
                }
                setChapterRanges(chapterArr);
            }
        };
        fetchData();
    }, [params]);
    console.log('length', data?.chapters.length);
    console.log('data', data);

    return (
        data && (
            <div className="mb-11">
                <div className="flex flex-col md:flex-row gap-6 px-5 pt-12 pb-6">
                    <div className="mx-auto min-w-[250px] max-w-[270px] min-h-[375px] max-h-[405px]">
                        <img alt="/" className="w-full object-cover h-full" src={data.image} />
                    </div>
                    <div className="flex-1 mt-6 md:mt-0">
                        <div className="bg-linear-black px-6 pt-5 pb-3">
                            <h2 className="text-2xl font-semibold text-white">{data.title}</h2>
                            <p className="uppercase text-sm">Author Author</p>
                        </div>
                        <div>
                            <h4 className="border-b border-gray-700 px-5 py-4 mt-3 uppercase font-semibold tracking-widest text-sm">
                                Summary
                            </h4>
                            <p className="px-5 py-7 ">
                                "In the countryside of Hiroshima, there is a girl who, against all odds, realizes that
                                she is in love with her beloved Sasaki-kun. Blessed with the opportunity to be sitting
                                next to her crush, she attempts to seduce him with the guidance of the god of teenage
                                love! Meeko-sama! This is the story of a young teen figuring out what it means to be in
                                love and the art of seduction."
                            </p>
                        </div>
                        <div className="md:px-4 hover:opacity-75">
                            <button className="bg-[#ffd600] w-full min-w-[150px] md:w-auto text-black rounded-lg font-semibold text-lg px-4 py-3">
                                Read Now
                            </button>
                        </div>
                    </div>
                </div>
                <div className=" max-w-7xl mt-6 mx-auto">
                    <div className="flex mx-4 items-center gap-1 text-lg font-semibold pb-2 border-b border-gray-700">
                        <span>
                            <IoBookOutline />
                        </span>
                        <span>Chapters</span>
                    </div>
                    <div className="mx-4">
                        <div className="flex flex-wrap my-5 gap-4">
                            {chapterRanges.map((item, index) => (
                                <span
                                    key={index}
                                    onClick={() => setShow(index + 1)}
                                    className={`${
                                        index + 1 === show && 'text-[#ffd600]'
                                    } bg-black  px-3 hover:text-[#ffd600] py-1 text-sm rounded-full`}
                                >
                                    {`${item[0]} - ${item[1]}`}
                                </span>
                            ))}
                        </div>

                        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                            {chapterRanges.map(
                                (item, index) =>
                                    index + 1 == show &&
                                    Array.from({ length: item[1] - item[0] + 1 }, (_, index) => item[0] + index).map(
                                        (number, index) => (
                                            <Link
                                                href={`/viewer/${data.chapters[number]?.id}`}
                                                key={index}
                                                className="border border-gray-700 hover:bg-gradient-to-r hover:from-black hover:to-transparent px-2 py-1 rounded-lg"
                                            >
                                                Chapter <span> {number}</span>
                                            </Link>
                                        ),
                                    ),
                            )}
                        </div>
                    </div>
                </div>
            </div>
        )
    );
};

export default Title;
