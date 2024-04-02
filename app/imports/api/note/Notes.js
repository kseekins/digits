import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

/**
 * The ContactsCollection. It encapsulates state and variable values for notes.
 */
class NotesCollection {
  constructor() {
    // The name of this collection.
<<<<<<< Updated upstream
    this.name = 'NotesCollection';
=======
    this.name = 'ContactsCollection';
>>>>>>> Stashed changes
    // Define the Mongo collection.
    this.collection = new Mongo.Collection(this.name);
    // Define the structure of each document in the collection.
    this.schema = new SimpleSchema({
      note: String,
      contactId: String,
      owner: String,
      createdAt: Date,
    });
    // Attach the schema to the collection, so all attempts to insert a document are checked against schema.
    this.collection.attachSchema(this.schema);
    // Define names for publications and subscriptions
    this.userPublicationName = `${this.name}.publication.user`;
    this.adminPublicationName = `${this.name}.publication.admin`;
  }
}

/**
<<<<<<< Updated upstream
 * The singleton instance of the ContactsCollection.
 * @type {NotesCollection}
 */
export const Notes = new NotesCollection();
=======
 * The singleton instance of the NotesCollection.
 * @type {NotesCollection}
 */
export const Contacts = new NotesCollection();
>>>>>>> Stashed changes
