import { ContactsListItem } from '../ContactsListItem/ContactsListItem';
import { List } from './ContactsList.styled';
import PropTypes from 'prop-types';

export const ContactsList = ({ contacts, onRemove }) => {
  return (
    <List>
      {contacts.map(({ id, name, number }) => (
        <ContactsListItem
          key={id}
          id={id}
          name={name}
          number={number}
          onRemove={onRemove}
        />
      ))}
    </List>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  onRemove: PropTypes.func.isRequired,
};
