import { useState } from 'react';
import { useAddUserMutation } from 'redux/usersSlice';

const RegisterForm = () => {
  const [addUser] = useAddUserMutation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleInputChange = event => {
    const { name, value } = event.currentTarget;
    if (name === 'name') {
      setName(value);
    }
    if (name === 'email') {
      setEmail(value);
    }
    if (name === 'password') {
      setPassword(value);
    }
  };

  const handleSubmitChange = async event => {
    event.preventDefault();
    try {
      await addUser({ name, email, password });
    } catch (error) {
      console.log(error);
    }
    reset();
  };

  const reset = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <form onSubmit={handleSubmitChange}>
      <label>
        Name
        <input
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleInputChange}
          autoComplete="true"
        />
      </label>
      <label>
        Email
        <input
          type="email"
          name="email"
          value={email}
          pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$"
          title="Email must be digits—0 to 9, lowercase Latin letters—a to z"
          required
          onChange={handleInputChange}
          autoComplete="true"
        />
      </label>
      <label>
        Password
        <input
          type="password"
          name="password"
          value={password}
          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
          title="Must contain at least one  number and one uppercase and lowercase letter, and at least 6 or more characters"
          required
          onChange={handleInputChange}
          autoComplete="false"
        />
      </label>
      <button type="submit">Sign Up</button>
    </form>
  );
};
export default RegisterForm;
