import { Component } from 'react';
import { Input, Form, Label, Button } from './ContactForm.styled';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types'

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };
  nameInputId = nanoid();
  numberInputId = nanoid();

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);

    this.reset();
  };
  reset() {
    this.setState({ name: '', number: '' });
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <p>Name</p>
        <Label forHtml={this.nameInputId}>
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            value={this.state.name}
            onChange={this.handleChange}
            id={this.nameInputId}
            required
          />
          <p>Number</p>
          <Label forHtml={this.numberInputId}>
            <Input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              value={this.state.number}
              onChange={this.handleChange}
              id={this.numberInputId}
              required
            />
          </Label>
          <Button type="submit">Add Contact</Button>
        </Label>
      </Form>
    );
  }
}
export default ContactForm;

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}