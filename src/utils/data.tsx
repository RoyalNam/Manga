import path from './path';
import { AiOutlineHome, AiOutlineCrown } from 'react-icons/ai';
import { MdOutlineFiberNew } from 'react-icons/md';
import { FaRegChessKing } from 'react-icons/fa6';

const navLinks = [
    {
        title: 'Home',
        link: path.home,
        icon: <AiOutlineHome />,
    },
    {
        title: 'Genres',
        link: path.genres,
        icon: <AiOutlineCrown />,
    },
    {
        title: 'New',
        link: path.new,
        icon: <MdOutlineFiberNew />,
    },
    {
        title: 'Completed',
        link: path.completed,
        icon: <FaRegChessKing />,
    },
];
export { navLinks };
