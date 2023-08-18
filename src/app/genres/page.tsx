'use client';
import { getAction } from '@/services/manga';
import { useEffect } from 'react';

function Genres() {
    useEffect(() => {
        const fetchData = async () => {
            const data = getAction();
            console.log('dataa', data);
        };
        fetchData();
    }, []);
    return <div>Genres</div>;
}

export default Genres;
