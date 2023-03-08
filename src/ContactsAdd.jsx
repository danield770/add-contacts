import contacts from './contacts';
import close from './assets/close.png';
import plus from './assets/plus.png';
import { useState } from 'react';
import './ContactsAdd.css';

function ContactsAdd() {
  const [notAddedContacts, setNotAddedContacts] = useState(contacts);
  const [addedContacts, setAddedContacts] = useState([]);

  function handleAddContact(id, name, image_34, image_24) {
    setAddedContacts([...addedContacts, { id, name, image_34, image_24 }]);
    setNotAddedContacts((currentContacts) =>
      currentContacts.filter((contact) => contact.id !== id)
    );
  }

  function handleRemoveContact(id, name, image_34, image_24) {
    setNotAddedContacts([
      ...notAddedContacts,
      { id, name, image_34, image_24 },
    ]);
    setAddedContacts((currentAddedContacts) =>
      currentAddedContacts.filter((contact) => contact.id !== id)
    );
  }

  return (
    <div className='wpr'>
      <h2 className='header'>Add people from the list to the area below</h2>
      <ul>
        {notAddedContacts.map(({ id, name, image_34, image_24 }) => (
          <li key={id} className='contact-item'>
            <img src={image_34} className='large-img' alt='Contact image' />
            <div className='contact-name'>{`@${name}`}</div>
            <button
              className='add-btn'
              onClick={() => handleAddContact(id, name, image_24, image_34)}
            >
              <span>Add</span>
              <img src={plus} className='' alt='' />
            </button>
          </li>
        ))}
      </ul>
      <div className='added-contacts-wpr'>
        {addedContacts.length === 0 ? (
          <div className='empty-state-msg'>Items should appear here...</div>
        ) : (
          <ul className='added-list'>
            {addedContacts.map(({ id, name, image_24, image_34 }) => (
              <li key={id} className='added-contact'>
                <img src={image_24} className='small-img' alt='Contact image' />
                <div className='contact-name'>{`@${name}`}</div>
                <button
                  className='close-btn'
                  onClick={() =>
                    handleRemoveContact(id, name, image_24, image_34)
                  }
                >
                  <img src={close} className='close-img' alt='' />
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
