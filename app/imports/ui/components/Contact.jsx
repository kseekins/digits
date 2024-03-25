import React from 'react';
import PropTypes from 'prop-types';
import { Card, Image } from 'react-bootstrap';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
const Contact = ({ contact }) => (
  <Card>
    <Card.header>
      <Image src={contact.image} width={75} />
      <Card.Title>{contact.firstname} {contact.lastname}</Card.Title>
      <Card.subtitle>{contact.address}</Card.subtitle>
    </Card.header>
    <Card.Body>
      <Card.Text>{contact.description}</Card.Text>
    </Card.Body>
  </Card>
);

// Require a document to be passed to this component.
Contact.propTypes = {
  contact: PropTypes.shape({
    firstname: PropTypes.string,
    lastname: PropTypes.string,
    address: PropTypes.string,
    image: PropTypes.string,
    description: PropTypes.string,
    // _id: PropTypes.string,
  }).isRequired,
};

export default Contact;
