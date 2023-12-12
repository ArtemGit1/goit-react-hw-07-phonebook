import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/ContactsSlice/ContactsSlice';
import { v4 as uuidv4 } from 'uuid';

const ContactForm = () => {
  
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.list);

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const isDuplicate = contacts.some((contact) => contact.name.toLowerCase() === name.toLowerCase());

    if (isDuplicate) {
      alert('This contact already exists!');
    } else {
      dispatch(addContact({ id: uuidv4(), name, number }));
      setName('');
      setNumber('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>

      <label>
        Number:
        <input type="text" value={number} onChange={(e) => setNumber(e.target.value)} />
      </label>

      <button type="submit">Add Contact</button>
    </form>
  );
};

export default ContactForm;