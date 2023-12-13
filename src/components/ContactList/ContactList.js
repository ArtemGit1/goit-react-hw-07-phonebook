import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts, deleteContact } from '../../redux/ContactsSlice/ContactsSlice';

const ContactList = () => {
  const dispatch = useDispatch();
  const contactsState = useSelector((state) => state.contacts);
  const filter = contactsState.filter;

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const filteredContacts = contactsState.items.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleDelete = async (id) => {
    try {
      await dispatch(deleteContact(id));
    } catch (error) {
      console.error('Error deleting contact:', error);
    }
  };

  return (
    <ul>
      {filteredContacts.map((contact) => (
        <li key={contact.id}>
          {contact.name}: {contact.number}
          <button type="button" onClick={() => handleDelete(contact.id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
