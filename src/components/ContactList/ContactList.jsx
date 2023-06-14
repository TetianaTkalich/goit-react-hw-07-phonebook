import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import css from './ContactList.module.css';
import { ElementContacts } from 'components/ElementContacts/ElementContacts';
import { getStateContacts } from 'redux/Contacts/selectors';
import { deleteContactsThunk, getContactsThunk } from 'redux/Contacts/thunks';

export function ContactList({ contacts }) {
  const dispatch = useDispatch();
  const { isLoading, error } = useSelector(getStateContacts);

  const handleDeleteContact = contactId => {
    dispatch(deleteContactsThunk(contactId));
  };

  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  return (
    <>
      {isLoading && <b>Loading contacts...</b>}
      {error && <b>{error}</b>}
      <ul className={css.list}>
        {contacts.map(item => (
          <li key={item.id}>
            <ElementContacts
              contacts={item}
              onDeleteContact={handleDeleteContact}
            />
          </li>
        ))}
      </ul>
    </>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};