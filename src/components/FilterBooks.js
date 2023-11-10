import { useRecoilState } from 'recoil';
import { filterOptionAtom } from '../recoil/atoms/filterOptionAtom';

function FilterBooks() {
const [filterOption , setFilterOption] = useRecoilState(filterOptionAtom);

const handleFilterChange = (e) =>{
    setFilterOption(e.target.value)
}
  return (
    <div>
      <span>Filter Books:  </span>
      <select value={filterOption} onChange={handleFilterChange}>
        <option value="all">All</option>
        <option value="Published">Published</option>
        <option value="yetToPublished">yetToPublished</option>
        </select>
    </div>
  )
}

export default FilterBooks
