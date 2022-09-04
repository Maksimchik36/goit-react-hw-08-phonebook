import { useDeleteContactMutation } from "redux/userApi";
import { Item, Button } from './ContactItem.styled';
import { showSuccess } from "components/ToastMessages/ToastMessages";

// из распыленного contact в ContactsList деструктуризируем след-щие параметры:
const ContactItem = ({id, name, number}) => {
// ф-я возвращает ф-ю и статусы выполнения
const [deleteContactFunc, { isLoading: isDeleting }] = useDeleteContactMutation();

  
  return (
      <Item>{name}: {number}
      <Button onClick={() => { deleteContactFunc(id); showSuccess("Contact successfully deleted.")
 }} disabled={ isDeleting } >{isDeleting ? 'Deleting...' : 'Delete'}</Button>
      </Item>
  )
}


export default ContactItem;