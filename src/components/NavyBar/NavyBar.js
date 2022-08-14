import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { getIsLoggedIn } from '../../redux/auth/authSelector';
import { useSelector } from 'react-redux';
import UserMenu from 'components/UserMenu';
import style from './NavyBar.module.css';

const NavyBar = () => {
  const isUserLoggedIn = useSelector(getIsLoggedIn);

  return (
    <Navbar collapseOnSelect className={style.navBar}>
      <Container>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Navbar.Brand>Phonebook</Navbar.Brand>
          <Nav.Link as="div">
            <NavLink to="/">Home</NavLink>
          </Nav.Link>
          <Nav as="ul" className={style.nav}>
            {isUserLoggedIn && (
              <div className={style.wrapper}>
                <Nav.Link as="li">
                  <NavLink to="contacts">Contacts</NavLink>
                </Nav.Link>
                <Nav.Link as="li">
                  <UserMenu />
                </Nav.Link>
              </div>
            )}
            {!isUserLoggedIn && (
              <div className={style.wrapper}>
                <Nav.Link as="li">
                  <NavLink to="register">Registration</NavLink>
                </Nav.Link>
                <Nav.Link as="li">
                  <NavLink to="login">Log in</NavLink>
                </Nav.Link>
              </div>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavyBar;
