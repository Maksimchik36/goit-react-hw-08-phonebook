import ContactForm from "components/ContactForm";
import { useNavigate } from 'react-router-dom';
import { useNewContactMutation, useAllContactsQuery } from "redux/userApi";
import Loader from "components/Loader";
    
    
const AddContactPage = () => {
    // для отправки пользователя на другую page
    const navigate = useNavigate();

    // ф-я возвращает данные (и статусы выполнения, к-рые в данном случае не исп-ются
    const { data } = useAllContactsQuery();

    // ф-я возвращает ф-ю и статусы выполнения
    const [createContactFunc, {isLoading}] = useNewContactMutation();

    // добавляет элемент, используяданные из формы
    const handleSubmit = event => {
        event.preventDefault();
        // значение input поля name
        const name = event.target.elements.name.value;
        // значение input поля phone
        const number = event.target.elements.phone.value;
        // сброс значений инпутов формы
        event.currentTarget.reset();

        // есть ли добавляемый контакт в списке уже существующих контактов ?
        const contactIsInList = data.some(contact => contact.name === name);
        if (contactIsInList) {
            // сообщение об ошибке
            alert(`${name} is already in contacts list.`);    
            return;
        }
        // если нового контакта нет в списке, осуществляется вызов ф-и, к-рая создаёт новый контакт с данными, полученными из input-ов, и отправляет его на бэк-энд mockAPI.
        createContactFunc({ name, number, });
        navigate('/contacts');
    }


    return <div style={{display: "flex", justifyContent: "center", paddingTop: "20%"}}>

        {isLoading && <Loader />}

        <ContactForm onSubmit={handleSubmit}></ContactForm>

    </div>
}


export default AddContactPage;