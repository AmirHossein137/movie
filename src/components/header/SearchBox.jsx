import { Search } from 'lucide-react';

const SearchBox = () => {
  return (
    <div className="w-full h-14 flex items-center gap-3 border border-slate-700 rounded-xl px-4 bg-slate-600 mb-9">
      <input 
        type="text"
        placeholder="Search for a movie , TV Show or celebrity you are looking for"
        className='flex-1 h-full bg-transparent outline-none placeholder:text-slate-400'
        />
        <Search />
    </div>
  );
};

export default SearchBox;
