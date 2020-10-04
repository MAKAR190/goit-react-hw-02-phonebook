import React from "react";
import styles from "./ContactList.module.css";
export default class ContactList extends React.Component {
  render() {
    const {deleteFunction} = this.props;
    return (
      <div>
        <h2>Find contacts by name</h2>
        <ul>
          {this.props.list.map((contact) => (
            <li className={styles.li} key={contact.id}>
              {contact.name}: {contact.number}
              <button
                type="button"
                onClick={deleteFunction}
                className={styles.btn}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
