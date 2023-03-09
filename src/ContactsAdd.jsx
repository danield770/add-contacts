import contacts from './contacts';
import close from './assets/close.png';
import plus from './assets/plus.png';
import { useState } from 'react';
import styles from './ContactsAdd.module.css';

function ContactsAdd() {
  const [addedContacts, setAddedContacts] = useState([]);

  function handleAddContact(id, name, image_24) {
    setAddedContacts([...addedContacts, { id, name, image_24 }]);
  }

  function handleRemoveContact(id) {
    setAddedContacts((currentAddedContacts) =>
      currentAddedContacts.filter((contact) => contact.id !== id)
    );
  }

  const notAddedContacts = contacts.filter(
    (contact) =>
      !addedContacts.find((addedContact) => addedContact.id === contact.id)
  );

  return (
    <div className={styles.wpr}>
      <h2 className={styles.header}>
        Add people from the list to the area below
      </h2>
      <ul>
        {notAddedContacts.map(({ id, name, image_34, image_24 }) => (
          <li key={id} className={styles.contactItem}>
            <img
              src={image_34}
              className={styles.largeImg}
              alt='Contact image'
            />
            <div className={styles.contactName}>{`@${name}`}</div>
            <button
              className={styles.addBtn}
              onClick={() => handleAddContact(id, name, image_24)}
            >
              <span>Add</span>
              <img src={plus} alt='' />
            </button>
          </li>
        ))}
      </ul>
      <div className={styles.addedContactsWpr}>
        {addedContacts.length === 0 ? (
          <div className={styles.emptyStateMsg}>
            Items should appear here...
          </div>
        ) : (
          <ul className={styles.addedList}>
            {addedContacts.map(({ id, name, image_24 }) => (
              <li key={id} className={styles.addedContact}>
                <img
                  src={image_24}
                  className={styles.smallImg}
                  alt='Contact image'
                />
                <div className={styles.addedContactName}>{`@${name}`}</div>
                <button
                  className={styles.closeBtn}
                  onClick={() => handleRemoveContact(id)}
                >
                  <img src={close} className={styles.closeImg} alt='' />
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default ContactsAdd;
