import { useGetUserQuery, useLoginUserMutation } from '../../redux/usersSlice';
import { useState } from 'react';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { data } = useGetUserQuery();
  console.log(data);
  const [loginUser] = useLoginUserMutation();

  const handleInputChange = event => {
    const { name, value } = event.currentTarget;

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
      await loginUser({ email, password });
    } catch (error) {
      console.log(error);
    }
    reset();
  };

  const reset = () => {
    setEmail('');
    setPassword('');
  };

  return (
    <form onSubmit={handleSubmitChange}>
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
export default LoginForm;
