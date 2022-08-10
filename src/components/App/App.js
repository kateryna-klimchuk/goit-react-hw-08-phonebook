import { Route, Routes } from 'react-router-dom';
// import ContactForm from 'components/ContactForm';
// import Filter from 'components/Filter';
// import ContactList from 'components/ContactList';

// import { Title, SectionName, Container } from './App.Styled';
import SharedLayout from 'components/SharedLayout';
import Home from 'pages/Home';
import RegisterForm from 'pages/Registration/RegisterForm';
import LoginForm from 'pages/LogIn/LoginForm';
import ContactList from 'pages/Contacts/ContactsList.js/ContactList';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="contacts" element={<ContactList />} />
          <Route path="register" element={<RegisterForm />} />
          <Route path="login" element={<LoginForm />} />
        </Route>
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
