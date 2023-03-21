import { useEffect, useState, ChangeEvent } from 'react';
import { searchGame } from '../../services/search.game.services';
import debounce from '../../algorithms/debounce';

type Props = {
  setData: (data: object) => object[];
  setTotalCount: (count: number) => number;
  setIsSearching: (inSearching: boolean) => boolean;
  currentPage: number;
};

const Search = ({
  setData,
  setTotalCount,
  setIsSearching,
  currentPage,
}: Props) => {
  const [search, setSearch] = useState('');

  useEffect(() => {
    debounce(async function getGameBySearch() {
      const response = await searchGame(search, currentPage);
      setData(response.results);
      setTotalCount(response.count);
      console.log('Here');
    }, 3000);
  }, [search, currentPage]);

  const handleChange = (e: ChangeEvent) => {
    setIsSearching(true);
    setSearch(e.target.value);

    if (search.length === 0) setIsSearching(false);
  };

  return (
    <div className='search'>
      <input
        className='search-input'
        type='search'
        placeholder='E.g. Minecraft'
        onChange={handleChange}
      />
    </div>
  );
};

export default Search;
