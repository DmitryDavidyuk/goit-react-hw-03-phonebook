import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import CSS from './Contacts.module.css';

class ContactsForm extends Component {
  state = {
    name: '',
    number: '',
  };

  nameInputId = nanoid(5);
  phoneInputId = nanoid(5);

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset() {
    this.setState({ name: '', number: '' });
  }

  render() {
    const { name, number } = this.state;
    return (
      <form className={CSS.form} onSubmit={this.handleSubmit}>
        <label htmlFor={this.nameInputId}>Ім'я</label>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Назва може містити лише літери, апостроф, тире та пробіли. Наприклад Адріан, Джейкоб Мерсер, Шарль де Бац де Кастельмор д'Артаньян"
          required
          value={name}
          onChange={this.handleChange}
          id={this.nameInputId}
        />
        <label htmlFor={this.phoneInputId}>Телефон</label>
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          value={number}
          placeholder="+380123456789"
          maxLength="13"
          minLength="10"
          onChange={this.handleChange}
          id={this.phoneInputId}
          title="Номер телефону повинен складатися з цифр в форматі +380123456789"
          required
        />
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

export default ContactsForm;
