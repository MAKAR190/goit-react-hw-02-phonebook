import React from "react";
import { v4 } from "uuid";
import styles from "./ContactList.module.css";
export default class ContactList extends React.Component {
  render() {
    const { filterChange, filterValue, deleteFunction} = this.props;
    return (
      <div>
        <h2>Find contacts by name</h2>
        <input
          className={styles.input}
          type="text"
          name="filter"
          value={filterValue}
          onChange={filterChange}
        ></input>
        <ul>
          {this.props.list.map((contact) => (
            <li className={styles.li} key={v4()}>
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
