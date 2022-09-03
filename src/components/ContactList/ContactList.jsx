import ContactItem from 'components/ContactItem';
import { ListSt } from './ContactList.styled';

const ContactList = ({ contacts }) => {
  
  return (
    <ListSt>        
        {contacts.map(contact=> (<ContactItem key={contact.id} {...contact}></ContactItem>))}
    </ListSt>
  )
}


export default ContactList;