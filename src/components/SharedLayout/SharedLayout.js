import { Outlet } from 'react-router-dom';
import NavyBar from 'components/NavyBar';
// import { Navbar, Nav, Row, Col, Container } from 'react-bootstrap';
import style from './SharedLayout.module.css';

const SharedLayout = () => {
  return (
    <div className={style.mainContainer}>
      <header>
        <NavyBar />
      </header>
      <Outlet />
    </div>
  );
};

export default SharedLayout;
