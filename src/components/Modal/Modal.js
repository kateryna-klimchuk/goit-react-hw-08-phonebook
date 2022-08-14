import { Button, Form } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';
import {
  useEditContactMutation,
  useGetMaterialByIdQuery,
} from '../../redux/contacts/contactsApi.js';

import style from './Modal.module.css';
const Modal = () => {
  const { contactId } = useParams();
  console.log(contactId);
  const { data: contact } = useGetMaterialByIdQuery(contactId);
  console.log(contact);
  const [editContact] = useEditContactMutation();

  const navigate = useNavigate();
  const closeModal = () => navigate('/contacts');

  const handleEditContact = async fields => {
    try {
      await editContact({ id: contactId, ...fields });
      closeModal();
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className={style.overlay}>
      <div className={style.modal}>
        {contact && (
          <Form onSubmit={handleEditContact}>
            <Form.Group>
              <Form.Label>Edit contact</Form.Label>
              <Form.Control name="name" value={contact.name} />
              <Form.Control name="number" value={contact.number} />
              <Button variant="light" type="submit">
                Save changes
              </Button>
            </Form.Group>
          </Form>
        )}
      </div>
    </div>
  );
};

export default Modal;
