import { useSelector } from "react-redux";
import ContactList from "components/ContactList";
import { useAllContactsQuery } from "redux/userApi";
import Loader from "components/Loader";
import FilterByName from "components/FilterByName";
import { Container } from "./ContactsPage.styled";

const ContactsPage = () => {
    // ф-я возвращает данные и статусы выполнения
  const { data, isFetching } = useAllContactsQuery();
  console.log("data", data);
  console.log("useAllContactsQuery()", useAllContactsQuery());

    // читает данные из state.filter(store) и подписывается на их обновление
  const inputData = useSelector(state => state.filter.value)
  // console.log("inputData", inputData);
   
    // выдает отфильтрованные контакты (если есть data - обрабатывает, а если нет - [])
  const filteredContacts = data?.filter(obj => obj.name.toLowerCase().includes(inputData)) ?? [];
  console.log("filteredContacts", filteredContacts);

    
   return <Container>
       {isFetching && <Loader />}
       
       <FilterByName></FilterByName>
       
       {data && <ContactList contacts={filteredContacts} />}
   </Container>
}


export default ContactsPage;