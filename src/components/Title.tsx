import Link from 'next/link';
import React from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';
interface TitleProps {
    title: string;
    bgLinear?: boolean;
    bgRedLinear?: boolean;
    link?: string;
}
const Title: React.FC<TitleProps> = ({ title, bgLinear, bgRedLinear, link = '/' }) => {
    return (
        <div
            className={`flex justify-between py-5 ${bgLinear && 'bg-linear-red-row'} ${
                bgRedLinear && 'bg-linear-red2'
            }`}
        >
            <h4 className="font-bold uppercase pl-4 text-white text-xl">{title}</h4>
            <Link
                href={link}
                className="flex items-center bg-yellow text-black font-medium text-xs px-2 rounded-l-md hover:px-3 hover:rounded-l-full"
            >
                <span className="ml-1">View Alls</span>
                <span className="text-xl">
                    <MdKeyboardArrowRight />
                </span>
            </Link>
        </div>
    );
};
//

export default Title;
