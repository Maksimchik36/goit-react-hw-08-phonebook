import { useSelector } from "react-redux";
import ContactList from "components/ContactList";
import { useAllContactsQuery } from "redux/userApi";
import Loader from "components/Loader";
import FilterByName from "components/FilterByName";
import { Container } from "./ContactsPage.styled";
import { showInfo } from "components/ToastMessages/ToastMessages";

const ContactsPage = () => {
    // ф-я возвращает данные и статусы выполнения
  const { data, isFetching, status } = useAllContactsQuery();

    // читает данные из state.filter(store) и подписывается на их обновление
  const inputData = useSelector(state => state.filter.value)
   
    // выдает отфильтрованные контакты (если есть data - обрабатывает, а если нет - [])
  const filteredContacts = data?.filter(obj => obj.name.toLowerCase().includes(inputData)) ?? [];
  
  // проверяет по завершению запроса наличие данных и запроса фильтрации и выдает сообщение об ошибке, если нет результатов, удовлетворяющих запросу фильтрации
  if (status === "fulfilled" && data.length !== 0 && filteredContacts.length === 0) {
    showInfo("No contact matches the request.")
  }

  // проверяет по завершению запроса наличие данных и запроса фильтрации и выдает сообщение об ошибке, если нет данных с бэкэнда
  if (status === "fulfilled" && data.length === 0 && filteredContacts.length === 0) {
    showInfo("No contacts in your phonebook.")
  }

    
   return <Container>
       {isFetching && <Loader />}
       
       <FilterByName></FilterByName>
       
       {status === "fulfilled" && data && <ContactList contacts={filteredContacts} />}
   </Container>
}


export default ContactsPage;