import { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import { ContactsList } from './ContactsList/ContactsList';
import { nanoid } from 'nanoid';
import { Filter } from './Filter/Filter';
import { Container } from './App.styled';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContacts = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };
    const searchContact = this.state.contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    searchContact
      ? alert(`${name} is already in contact`)
      : this.setState(prevState => ({
          contacts: [contact, ...prevState.contacts],
        }));
  };
  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };
  getVisibleContact = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const contactParse = JSON.parse(contacts);
    if (contactParse) {
      this.setState({ contacts: contactParse });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  render() {
    const { filter } = this.state;
    const visibleContact = this.getVisibleContact();

    return (
      <>
        <Container>
          <h1>PhoneBook</h1>
          <ContactForm onSubmit={this.addContacts} />
          <h2>Contacts</h2>
          <Filter value={filter} onChange={this.changeFilter} />
          <ContactsList
            contacts={visibleContact}
            onRemove={this.deleteContact}
          />
        </Container>
      </>
    );
  }
}

export default App;
