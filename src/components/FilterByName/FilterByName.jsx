import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { Container, Input, Label } from './FilterByName.styled';

const FilterByName = () => {
  // получает ссылку на функцию для отправки действий
  const dispatch = useDispatch();

  // записывает в filter(store) вводимые в input(FilterByName) данные 
   const handleFilter = (event) => {  
  // отправляет action setFilter со значением value
  dispatch(setFilter(event.target.value))
  };


    return(<Container ><Label>Find contact by Name
      <Input type="text" onChange={handleFilter} />
    </Label></Container>)
}


export default FilterByName;