import React from "react";
import styles from "./ContactItem.module.css";

function ContactItem({ deleteFunction, contact }) {
  return (
    <li className={styles.li} key={contact.id}>
      {contact.name}: {contact.number}
      <button
        type="button"
        onClick={() => deleteFunction(contact.id)}
        className={styles.btn}
      >
        Delete
      </button>
    </li>
  );
}
export default ContactItem;
