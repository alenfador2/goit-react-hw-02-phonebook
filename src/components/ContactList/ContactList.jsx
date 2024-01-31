import css from './ContactList.module.css';
import PropTypes from 'prop-types';
import ContactItem from 'components/ContactItem/ContactItem';


function ContactList({ filterContacts, onDelete }) {
  return (
    <>
      <ul>
        {filterContacts().map(({ id, number, name }) => (
          <ContactItem
            id={id}
            key={id}
            number={number}
            name={name}
            onDelete={onDelete}
          />
        ))}
      </ul>
    </>
  );
}

ContactList.propTypes = {
  filterContacts: PropTypes.func.isRequired,
};

export default ContactList;
