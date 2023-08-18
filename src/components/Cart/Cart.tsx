'use client';

import Link from 'next/link';

interface CartProps {
    id?: string;
    src?: string;
    name?: string;
    lastCtNumber?: string;
    title?: string;
    author?: string;
}
const Cart: React.FC<CartProps> = ({ id, src, name, author, lastCtNumber, title }) => {
    return (
        <div className="flex flex-col text-sm max-w-full">
            <Link href={`/titles/${id}`} className="relative group ">
                <div className="aspect-w-2 aspect-h-3">
                    <img className="w-full h-full" src={src} alt={name} />
                </div>
                <div className="absolute pt-7 overflow-hidden w-full h-[72px] bottom-0 px-2 leading-none bg-linear group-hover:h-20">
                    <h4 className="truncate font-semibold text-white group-hover:text-[#ffd600]">{name}</h4>
                    <div className="mt-2 text-[10px] truncate uppercase">{author}</div>
                </div>
            </Link>
            {lastCtNumber && (
                <div className="bg-linear-black px-2 pb-5 rounded-b-lg border-t bg-linear-red">
                    <p className="text-white font-semibold mt-2">
                        <span className="text-sm">Chapter: </span>
                        <span>#{lastCtNumber}</span>
                    </p>
                    <p className="text-xs truncate">{title}</p>
                </div>
            )}
        </div>
    );
};

export default Cart;
