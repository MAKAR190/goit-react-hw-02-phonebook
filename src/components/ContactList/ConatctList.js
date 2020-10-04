import React from "react";
import ContactItem from "../ContactItem/ContactItem";
export default class ContactList extends React.Component {
  render() {
    const { deleteFunction } = this.props;
    return (
      <div>
        <h2>Find contacts by name</h2>
        <ul>
          {this.props.list.map((contact) => (
            <ContactItem deleteFunction={deleteFunction} contact={contact} />
          ))}
        </ul>
      </div>
    );
  }
}
