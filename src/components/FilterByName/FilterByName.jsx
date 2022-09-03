import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';

const FilterByName = () => {
  // получает ссылку на функцию для отправки действий
  const dispatch = useDispatch();

  // записывает в filter(store) вводимые в input(FilterByName) данные 
   const handleFilter = (event) => {  
  // отправляет action setFilter со значением value
  dispatch(setFilter(event.target.value))
  };


    return(<div style={{textAlign: "center"}}><label>Find contact by Name
      <input type="text" onChange={handleFilter} />
    </label></div>)
}


export default FilterByName;