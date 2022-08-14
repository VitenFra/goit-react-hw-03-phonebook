import PropTypes from 'prop-types';
import css from './ContactListItem.module.css'

export const ContactsListItem = ({ name, number, id, deleteContact }) => {
    return (
    
        <li className={css.contactItem} key={id}>
            <p className={css.contactName}>{name} {number} </p>
            <button className={css.deleteBtn} onClick={()=>deleteContact(id)}>Delete</button>
        </li>
    )
};

ContactsListItem.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    deleteContact:PropTypes.func.isRequired,
}
