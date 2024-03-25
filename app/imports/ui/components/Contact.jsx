import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
const Contact = ({ stuff }) => (
  <tr>
    <td>{contact.name}</td>
    <td>{contact.quantity}</td>
    <td>{contact.condition}</td>
    <td>
      <Link to={`/edit/${contact._id}`}>Edit</Link>
    </td>
  </tr>
);

// Require a document to be passed to this component.
Contact.propTypes = {
  stuff: PropTypes.shape({
    name: PropTypes.string,
    quantity: PropTypes.number,
    condition: PropTypes.string,
    _id: PropTypes.string,
  }).isRequired,
};

export default Contact;
