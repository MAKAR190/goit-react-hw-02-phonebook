import React from "react";
import styles from "./ContactForm.module.css";
import PropTypes from "prop-types";
export default class ContactForm extends React.Component {
  static propTypes = {
    submit: PropTypes.func.isRequired,
    nameChange: PropTypes.func.isRequired,
    nameValue: PropTypes.string.isRequired,
    numberValue: PropTypes.string.isRequired,
  };
  render() {
    const { submit, nameChange, nameValue, numberValue } = this.props;
    return (
      <form className={styles.wrapper} onSubmit={submit}>
        <p>Name</p>
        <input
          className={styles.input}
          type="text"
          placeholder="Enter name"
          name="name"
          value={nameValue}
          onChange={nameChange}
        ></input>
        <p>Number</p>
        <input
          className={styles.input}
          type="text"
          placeholder="Enter number"
          name="number"
          value={numberValue}
          onChange={nameChange}
        ></input>
        <button className={styles.button} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}
