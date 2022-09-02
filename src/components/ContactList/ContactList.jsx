import ContactItem from 'components/ContactItem';

const ContactList = ({ contacts }) => {
  
  return (
    <ul>        
        {contacts.map(contact=> (<ContactItem key={contact.id} {...contact}></ContactItem>))}
    </ul>
  )
}


export default ContactList;