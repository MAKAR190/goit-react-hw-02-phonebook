import React from "react";
import ContactItem from "../ContactItem/ContactItem";
import PropTypes from "prop-types";
export default class ContactList extends React.Component {
  static propTypes = {
    deleteFunction: PropTypes.func.isRequired,
  };
  render() {
    const { deleteFunction } = this.props;
    return (
      <div>
        <ul>
          {this.props.list.map((contact) => (
            <ContactItem deleteFunction={deleteFunction} contact={contact} />
          ))}
        </ul>
      </div>
    );
  }
}
