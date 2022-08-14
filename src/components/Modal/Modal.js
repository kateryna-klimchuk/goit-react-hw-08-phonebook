import { Button, Overlay, Form } from 'react-bootstrap';

import { useState, useRef } from 'react';
// import { useSelector } from 'react-redux';
import {
  useEditContactMutation,
  useGetContactQuery,
} from '../../redux/contacts/contactsApi.js';

const ModalW = ({ id, name, number }) => {
  const [show, setShow] = useState(false);
  const target = useRef(null);
  const [nm, setNm] = useState(name);
  const [numb, setNumb] = useState(number);
  const { data } = useGetContactQuery();
  // const contact = data.find(contact => contact.id === id);
  const [editContact] = useEditContactMutation({ id, name, number });

  const handleChanges = event => {
    const { name, value } = event.currentTarget;
    if (name === 'name') {
      setNm('');
      setNm(value);
    }
    if (name === 'number') {
      setNumb('');
      setNumb(value);
    }
  };

  const handleSubmit = async event => {
    event.preventDefault();
    try {
      await editContact({ nm, numb });
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <Button variant="light" ref={target} onClick={() => setShow(!show)}>
        Click me to see
      </Button>
      <Overlay target={target.current} show={show} placement="left">
        {({ placement, arrowProps, show: _show, popper, ...props }) => (
          <div
            {...props}
            style={{
              position: 'absolute',
              backgroundColor: 'rgba(250, 174, 202, 1)',
              padding: '16px 10px',
              color: 'white',
              borderRadius: 3,
              ...props.style,
            }}
          >
            <Form onSubmit={() => handleSubmit(id)}>
              <Form.Group>
                <Form.Label>Edit contact</Form.Label>
                <Form.Control name="name" value={nm} onChange={handleChanges} />
                <Form.Control
                  name="number"
                  value={numb}
                  onChange={handleChanges}
                />
                <Button variant="light" type="submit">
                  Save changes
                </Button>
              </Form.Group>
            </Form>
          </div>
        )}
      </Overlay>
    </>
  );
};

export default ModalW;

// {/* {isOpenModal && modalId === id && ( */}

// <Form>
//   {/* // onSubmit={handleSubmit}> */}
//   <Form.Group>
//     <Form.Label>Edit contact</Form.Label>
//     <Form.Control
//       name="name"
//       value={name}
//       onChange={handleChanges}
//     />
//     <Form.Control
//       name="number"
//       value={number}
//       onChange={handleChanges}
//     />
//     <Button variant="light" type="submit">
//       Save changes
//     </Button>
//   </Form.Group>
// </Form>
// )}
// {/* )} */}
