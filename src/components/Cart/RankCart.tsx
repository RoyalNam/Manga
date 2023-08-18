import { PiMedalThin } from 'react-icons/pi';
import { GiSunkenEye } from 'react-icons/gi';
import Link from 'next/link';

interface RankCartProps {
    id?: string;
    src?: string;
    name?: string;
    onTop?: boolean;
    number: number;
    author?: string;
}
const RankCart: React.FC<RankCartProps> = ({ id, src, name, author, onTop, number }) => {
    return (
        <Link
            href={`/titles/${id}`}
            className="group flex flex-row items-center text-sm p-4 pb-2 opacity-80 hover:bg-black/5 hover:opacity-100"
        >
            <div className="relative w-20">
                <img className="h-28 min-w-[80px] block" src={src} alt={name} />
                <span className="absolute -top-3 left-1/2 -translate-x-1/2">
                    {onTop && (
                        <span className="absolute text-active top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-2xl ">
                            <PiMedalThin />
                        </span>
                    )}
                    <span className="bg-black text-white flex items-center justify-center rounded-full w-[30px] h-[30px] text-xs">
                        {number}
                    </span>
                </span>
            </div>
            <div className="flex flex-col ml-3">
                <div className="leading-4">
                    <h4 className="font-semibold truncate text-white group-hover:text-[#ffd600]">{name}</h4>
                    <p className="text-[10px] mt-1 truncate  uppercase">{author}</p>
                </div>
                <div className="flex text-white font-semibold mt-2">
                    <span className="text-lg mr-1">
                        <GiSunkenEye />
                    </span>
                    <span className="text-[10px]">821,942</span>
                </div>
            </div>
        </Link>
    );
};
export default RankCart;
