import React, { Component } from "react";
import PropTypes from 'prop-types';
import css from './FormAddContact.module.css';

export class FormAddContacts extends Component{
    state = {
    name: '',
    number: '',
  }
    
    hendleChange = e => {
    const { name, value } = e.currentTarget;
    
    this.setState({
      [name]: value
    })
    };

    hendleSubmit = e => {
    e.preventDefault();
    

        console.log(this.state)
        this.props.onSubmit(this.state)
    this.reset();
    };
    
     reset = () => {
    this.setState({ name: '', number: '' })
    };
    
    render() {
        return (
            <>
            <form  className = {css.formAddContact} onSubmit={this.hendleSubmit}> 
          <label className={css.formInputTitle}>
            Name 
            <input
            className={css.formInput}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Назва може містити лише літери, апостроф, тире та пробіли. Наприклад Адріан, Джейкоб Мерсер, Шарль де Бац де Кастельмор д'Артаньян"
                required
              value={this.state.name}
              onChange={this.hendleChange}   
                  />
          </label>
           <label className={css.formInputTitle}>
            Number
            <input
            className={css.formInput}
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Номер телефону має складатися з цифр і може містити пробіли, тире, круглі дужки та починатися з +"
                required
                value={this.state.number}
                onChange={this.hendleChange}
            />
          </label>
          
          <button  className ={css.addBtn} type="submit">Add contact</button>
        </form></>
        )
    }
};

FormAddContacts.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}
