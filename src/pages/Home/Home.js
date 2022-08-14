import { getIsLoggedIn, getUserName } from '../../redux/auth/authSelector';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Container } from 'react-bootstrap';
import style from './Home.module.css';

const Home = () => {
  const isUserLoggedIn = useSelector(getIsLoggedIn);
  const userName = useSelector(getUserName);

  return isUserLoggedIn ? (
    <Container className={style.homeContainer}>
      <h1>Welcome to our application, {userName}!!!</h1>
      <p>To create your contact, click</p>
      <Link to="contacts">here</Link>
    </Container>
  ) : (
    <Container className={style.homeContainer}>
      <h1>Welcome to our application!!!</h1>
      <p>It's your first time?</p>
      <Link to="register">Sign Up</Link>
      <p>Already have account?</p>
      <Link to="login">Sign in</Link>
    </Container>
  );
};

export default Home;
