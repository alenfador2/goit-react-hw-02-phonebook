import React from 'react';
import { Formik, Field, Form } from 'formik';
import css from './ContactForm.module.css';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

const usernameInputId = nanoid();
const usertelInputId = nanoid();

function ContactForm({ onSubmit }) {
  const initialValues = {
    name: '',
    number: '',
  };

  

  const handleFormSubmit = ({name, number}, { resetForm }) => {
    const numberAlreadyExist = this.state.contacts.name.includes(name);
    if (numberAlreadyExist) {
      alert(`${name} is already exist!`);
      resetForm();
    }
    onSubmit({ id: nanoid(), name, number });
    resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleFormSubmit}>
      <Form>
        <div className={css.contact_container}>
          <label htmlFor={usernameInputId} className={css.username_label}>
            Name
          </label>
          <Field
            type="text"
            name="name"
            id={usernameInputId}
            className={css.username_input}
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <label htmlFor={usertelInputId} className={css.usertel_label}>
            Number
          </label>
          <Field
            type="tel"
            name="number"
            id={usertelInputId}
            className={css.usertel_input}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <button type="submit" className={css.add_button}>
            Add contact
          </button>
        </div>
      </Form>
    </Formik>
  );
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
