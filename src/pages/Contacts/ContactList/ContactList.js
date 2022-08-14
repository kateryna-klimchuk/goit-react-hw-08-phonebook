import { useSelector } from 'react-redux';
import { ListGroup, Button } from 'react-bootstrap';
import {
  useGetContactQuery,
  useDeleteContactMutation,
} from '../../../redux/contacts/contactsApi.js';
import { useNavigate } from 'react-router-dom';

import { getFilter } from 'redux/contacts/contactsSelector';
import style from './ContactList.module.css';

const ContactList = () => {
  const navigate = useNavigate();

  const searchFilter = useSelector(getFilter);
  const { data } = useGetContactQuery();
  const [deleteContact] = useDeleteContactMutation();

  const getVisibleContacts = () => {
    if (searchFilter !== '') {
      return data.filter(({ name }) =>
        name.toLowerCase().includes(searchFilter)
      );
    }
    return data;
  };

  const visibleContacts = getVisibleContacts();

  const handleDeleteClick = id => {
    deleteContact(id);
  };

  return (
    <ListGroup className={style.contactList}>
      {visibleContacts &&
        visibleContacts.map(({ id, name, number }) => {
          return (
            <ListGroup.Item key={id} className={style.contactItem}>
              <div className={style.contactItem}>
                <p>{name}</p>
                <p>{number}</p>
                <div className={style.btnWrapper}>
                  <Button
                    type="button"
                    onClick={() => navigate(`/contacts/${id}`)}
                    variant="outline-light"
                  >
                    Edit
                  </Button>
                  <Button
                    type="button"
                    onClick={() => handleDeleteClick(id)}
                    variant="outline-light"
                  >
                    x
                  </Button>
                </div>
              </div>
            </ListGroup.Item>
          );
        })}
    </ListGroup>
  );
};

export default ContactList;
