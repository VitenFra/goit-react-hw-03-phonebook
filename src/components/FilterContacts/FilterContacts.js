import PropTypes from 'prop-types';
import css from './FilterContacts.module.css';

export const FilterContacts = ({ contact, filter }) => {
    return (<>
        <div className={css.filterContainer}>
        <label htmlFor='filter' className={css.filterTitle}> Find contacts by name </label>
        <input
                id='filter'
                className={css.filterInput}
                type="text"
                name="filter"
                value={contact}
                onChange={filter}
            ></input>
        </div>
    </>
    )
};

FilterContacts.propTypes = {
    contact: PropTypes.string.isRequired,
    filter: PropTypes.func.isRequired,
}
