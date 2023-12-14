import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/ContactsSlice/ContactsSlice';

const ContactForm = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newContact = { name, number };

    dispatch(addContact(newContact))
      .then(() => {
        setName('');
        setNumber('');
      })
      .catch((error) => {
        console.error('Error adding contact:', error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <br />
      <label>
        Number:
        <input type="text" value={number} onChange={(e) => setNumber(e.target.value)} />
      </label>
      <br />
      <button type="submit">Add Contact</button>
    </form>
  );
};

export default ContactForm;
