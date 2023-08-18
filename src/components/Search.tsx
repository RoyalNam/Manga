import { BiSearch } from 'react-icons/bi';

interface SearchProps {
    notResponsive?: boolean;
}

const Search: React.FC<SearchProps> = ({ notResponsive }) => {
    return (
        <form action="get">
            <div
                className={`rounded flex items-center lg:border-b border-gray-700 focus-within:border-red-700 ${
                    !notResponsive && 'border-b'
                }`}
            >
                <input
                    className={`bg-transparent p-2 w-full py-1 outline-none lg:block ${notResponsive && 'hidden'}`}
                    type="text"
                    placeholder="Search by title or author"
                />
                <button title="Search" className="text-2xl p-2 text-white">
                    <BiSearch />
                </button>
            </div>
        </form>
    );
};

export default Search;
