import { useDeleteContactMutation } from "redux/userApi";
import { Item, Button } from './ContactItem.styled';

// из распыленного contact в ContactsList деструктуризируем след-щие параметры:
const ContactItem = ({id, name, number}) => {
    // ф-я возвращает ф-ю и статусы выполнения
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();

  
  return (
      <Item>{name}: {number}
      <Button onClick={() => deleteContact(id)} disabled={ isDeleting } >{isDeleting ? 'Deleting...' : 'Delete'}</Button>
      </Item>
  )
}


export default ContactItem;