import PropTypes from 'prop-types';
import { Input, Label } from '../ContactForm/ContactForm.styled';

export const Filter = ({ value, onChange }) => {
  return (
    <Label>
      Find Contacts by name
      <Input type="text" value={value} onChange={onChange} />
    </Label>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
