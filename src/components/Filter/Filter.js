import { useSelector, useDispatch } from 'react-redux';
import { Form } from 'react-bootstrap';
import { filterContact } from 'redux/filter/filterActions';
import { getFilter } from 'redux/contacts/contactsSelector';
const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const changeFilter = event => {
    dispatch(filterContact(event.currentTarget.value));
  };

  return (
    <Form>
      <Form.Group controlId="ControlInput1">
        <Form.Label>Find contact by name</Form.Label>
        <Form.Control
          type="text"
          name="filter"
          value={filter}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={changeFilter}
        />
      </Form.Group>
    </Form>
  );
};

export default Filter;
