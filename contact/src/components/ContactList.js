import React, { useState, useEffect } from 'react';

const Contacts = () => {
  const [contacts, setContacts] = useState([]);
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [phone, setPhone] = useState('');
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
      setContacts(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleSurnameChange = (event) => {
    setSurname(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

	const handleSubmit = (event) => {
		event.preventDefault();
		if (name && surname && phone) {
			const newContact = {
				id: Date.now(),
				name: name,
				username: surname,
				phone: phone,
			};
			setContacts([...contacts, newContact]);
			setName('');
			setSurname('');
			setPhone('');
			setShowForm(false);
		}
	};
	

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const deleteContact = (id) => {
    const updatedContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(updatedContacts);
  };

  return (
    <div>
      <h1>Список контактов</h1>
      <table>
        <thead>
          <tr>
            <th>Имя</th>
            <th>Фамилия</th>
            <th>Телефон</th>
            <th>Действия</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <tr key={contact.id}>
              <td>{contact.name}</td>
              <td>{contact.username}</td>
              <td>{contact.phone}</td>
              <td>
                <button onClick={() => deleteContact(contact.id)}>
                  Удалить
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        {showForm ? (
          <form onSubmit={handleSubmit}>
            <label>
              Имя:
              <input type="text" value={name} onChange={handleNameChange} />
            </label>
            <br />
            <label>
              Фамилия:
              <input type="text" value={surname} onChange={handleSurnameChange} />
            </label>
            <br />
            <label>
              Телефон:
              <input type="text" value={phone} onChange={handlePhoneChange} />
            </label>
            <br />
            <button type="submit">Сохранить</button>
            <button type="button" onClick={toggleForm}>Отменить</button>
          </form>
        ) : (
          <button onClick={toggleForm}>Добавить контакт</button>
        )}
      </div>
    </div>
  );
};

export default Contacts;
