'use client';
import Cart from '@/components/Cart/Cart';
import { getManga } from '@/services/manga';
import { Manga } from '@/types/manga';
import { SetStateAction, useEffect, useState } from 'react';

const Completed = () => {
    const [page, setPage] = useState(1);
    const [data, setData] = useState<Manga[]>([]);
    useEffect(() => {
        const fetchData = async () => {
            const dataM = await getManga({ limit: 40, offset: page * 40 + 1 });
            console.log('hello');
            console.log('page', page);

            setData(dataM as SetStateAction<Manga[]>);
            return dataM;
        };
        fetchData();
    }, [page]);
    console.log('demoooo', data);

    return (
        <div className="max-w-screen-xl mx-auto px-4">
            <div className="grid grid-cols-3  md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-x-2 gap-y-3">
                {data.map((item) => (
                    <div key={item.id}>
                        <Cart name={item.title} author={item.author.attributes.name} src={item.image} />
                    </div>
                ))}
            </div>
            <div>
                <button onClick={() => setPage((pre) => pre + 1)}>Click me</button>
            </div>
        </div>
    );
};
export default Completed;
