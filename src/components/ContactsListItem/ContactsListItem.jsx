import PropTypes from 'prop-types';
import { Item, Button } from './ContactsListItem.styled';

export const ContactsListItem = ({ id, name, number, onRemove }) => {
  return (
    <Item>
      <p>
        {name}: {number}
      </p>
      <Button type="button" onClick={() => onRemove(id)}>
        Delete contact
      </Button>
    </Item>
  );
};

ContactsListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onRemove: PropTypes.func.isRequired,
};
