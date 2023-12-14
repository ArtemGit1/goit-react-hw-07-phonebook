// ContactForm.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/ContactsSlice/ContactsSlice';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.items);

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const lowerCaseName = name.toLowerCase();
    const lowerCaseNumber = number.toLowerCase();

    const isContactExists = contacts.some(
      (contact) => contact.name.toLowerCase() === lowerCaseName || contact.number.toLowerCase() === lowerCaseNumber
    );

    if (isContactExists) {
      alert('Contact already exists!');
      return;
    }

    dispatch(addContact({ name, number }));

    setName('');
    setNumber('');
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
