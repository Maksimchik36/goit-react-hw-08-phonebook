import { useDeleteContactMutation, useEditContactMutation } from "redux/userApi";
import { Item, Button } from './ContactItem.styled';

// из распыленного contact в ContactsList деструктуризируем след-щие параметры:
const ContactItem = ({id, name, number}) => {
    // ф-я возвращает ф-ю и статусы выполнения
  const [deleteContactFunc, { isLoading: isDeleting }] = useDeleteContactMutation();
  // const [EditContactFunc, { isLoading }] = useEditContactMutation();
  const edit = useEditContactMutation();
  console.log("edit", edit);

  
  return (
      <Item>{name}: {number}
      {/* <Button onClick={() => EditContactFunc(id)} disabled={ isLoading } >{isLoading ? 'Editing...' : 'Edit'}</Button> */}
      <Button onClick={() => deleteContactFunc(id)} disabled={ isDeleting } >{isDeleting ? 'Deleting...' : 'Delete'}</Button>
      </Item>
  )
}


export default ContactItem;