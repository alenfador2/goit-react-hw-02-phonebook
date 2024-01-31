import css from './ContactItem.module.css';
import PropTypes from 'prop-types';

const ContactItem = ({ id, name, number, onDelete }) => {
  return (
    <>
      <span className={css.item_span}>{name}</span>:<span>{number}</span>
      <button className={css.item_button} type='button' onClick={()=>onDelete(id)}>Delete</button>
    </>
  );
};

ContactItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired,
}

export default ContactItem;
