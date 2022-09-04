import ContactForm from "components/ContactForm";
import { useNewContactMutation, useAllContactsQuery } from "redux/userApi";
import Loader from "components/Loader";
import { Container } from "./AddContactPage.styled";
import { showSuccess, showError } from "components/ToastMessages/ToastMessages";
    
    
const AddContactPage = () => {
    // ф-я возвращает данные (и статусы выполнения, к-рые в данном случае не исп-ются
    const { data } = useAllContactsQuery();

    // ф-я возвращает ф-ю и статусы выполнения
    const [createContactFunc, {isLoading}] = useNewContactMutation();

    // добавляет элемент, используя данные из формы
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
            showError(`${name} is already in contacts list.`);
            return;
        }
        // если нового контакта нет в списке, осуществляется вызов ф-и, к-рая создаёт новый контакт с данными, полученными из input-ов, и отправляет его на бэк-энд mockAPI.
        createContactFunc({ name, number, });
        showSuccess("Contact successfully created.")
    }


    return <Container>

        {isLoading && <Loader />}

        <ContactForm onSubmit={handleSubmit}></ContactForm>

    </Container>
}


export default AddContactPage;