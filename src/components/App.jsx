import { ContactList } from "./ContactList/ContactList";
import { Form } from "./Form/Form";



export const App = () => {
  return (
    <div style={{marginLeft: `20px`}}>
      <h1>Phonebook</h1>
      <Form/>
      <ContactList/>
    </div>
  );
};