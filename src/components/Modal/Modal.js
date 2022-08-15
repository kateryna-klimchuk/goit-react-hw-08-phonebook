import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import {
  useEditContactMutation,
  useGetContactQuery,
} from '../../redux/contacts/contactsApi.js';

import style from './Modal.module.css';

const Modal = ({ id, modalName, modalNumber }) => {
  const [name, setName] = useState(modalName);
  const [number, setNumber] = useState(modalNumber);
  const { data: contacts } = useGetContactQuery();
  const contact = contacts.find(item => item.id === id);
  const [editContact] = useEditContactMutation();

  const navigate = useNavigate();
  const closeModal = () => navigate('/contacts');

  const handleInputChange = e => {
    const { name, value } = e.currentTarget;
    if (name === 'name') {
      setName(value);
    }
    if (name === 'number') {
      setNumber(value);
    }
  };
  const handleEditContact = async e => {
    e.preventDefault();
    try {
      await editContact({ name, number });
      closeModal();
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    // <div className={style.overlay}>
    <div className={style.modal}>
      {contact && (
        <Form onSubmit={handleEditContact}>
          <Form.Group>
            <Form.Label>Edit contact</Form.Label>
            <Form.Control
              name="name"
              value={name}
              onChange={handleInputChange}
            />
            <Form.Control
              name="number"
              value={number}
              onChange={handleInputChange}
            />
            <Button variant="light" type="submit">
              Save changes
            </Button>
          </Form.Group>
        </Form>
      )}
    </div>
    // </div>
  );
};

export default Modal;
