
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateFilter } from '../../redux/ContactsSlice/ContactsSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.contacts.filter);

  return (
    <label>
      Filter by name:
      <input type="text" value={filter} onChange={(e) => dispatch(updateFilter(e.target.value))} />
    </label>
  );
};

export default Filter;
