import React from "react";
import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ConatctList";
class App extends React.Component {
  state = {
    contacts: [
      { name: "Makar", number: "45847583" },
      { name: "Misha", number: "4584734325" },
      { name: "Bogdan", number: "45844665" },
    ],
    name: "",
    number: "",
    filter: "",
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleSubmit = (evt) => {
    evt.preventDefault();
    let newContact = {
      name: this.state.name,
      number: this.state.number,
    };
    if (
      this.state.contacts.find(
        (el) => el.name === newContact.name && el.number === newContact.number
      )
    ) {
      alert(`${newContact.name} is already in your list`);
    } else {
      this.setState((prevState) => {
        return {
          contacts: [...prevState.contacts, newContact],
        };
      });
    }
  };
  handleDelete = ({ target }) => {};

  render() {
    const { name, contacts, number, filter } = this.state;
    const filterContacts = contacts.filter((el) => el.name.startsWith(filter));

    return (
      <div>
        <h2>Phonebook</h2>
        <ContactForm
          numberValue={number}
          nameValue={name}
          nameChange={this.handleChange}
          submit={this.handleSubmit}
        />
        <h2>Contacts</h2>
        <ContactList
          deleteFunction={this.handleDelete}
          filterChange={this.handleChange}
          filterValue={filter}
          list={contacts}
          number={number}
        />
      </div>
    );
  }
}

export default App;
