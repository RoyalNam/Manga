'use client';
import { getChapter } from '@/services/manga';
import { Chapter } from '@/types/manga';
import { useEffect, useState } from 'react';
import ViewerLayout from './layout';

const Viewer = ({ params }: { params?: { slug?: string } }) => {
    // const Viewer = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            if (params?.slug) {
                const resp = await getChapter(params.slug);
                console.log(resp.data);
                setData(resp.data);
            }
        };
        fetchData();
    }, [params]);
    console.log('data', data);

    return (
        <ViewerLayout>
            <div className="flex justify-between items-center flex-col">
                <div className="fixed top-0 left-0 right-0 bottom-0">
                    <div className="absolute inset-x-0 top-0 bg-black/80">
                        <h4 className="text-center font-semibold  py-2">Chu thuat hoi chien</h4>
                    </div>
                    <div className="absolute inset-x-0 bottom-0 bg-black/80">
                        <div className="flex items-center">
                            <span className="text-center">Demo</span>
                        </div>
                    </div>
                </div>
                <div className="max-w-3xl w-full pb-4">
                    {data.map((item: Chapter, index) => (
                        <div className="" key={index}>
                            <img alt="/" src={item.img} />
                        </div>
                    ))}
                </div>
            </div>
        </ViewerLayout>
    );
};

export default Viewer;
