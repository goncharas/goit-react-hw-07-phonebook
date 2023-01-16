import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  GlobalStyle,
  MainTitle,
  ContactsTitle,
  WarningMessage,
} from './GlobalStyles';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts, getIsLoading } from 'redux/selector';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import { Loading } from './Loading';

export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const loading = useSelector(getIsLoading);

useEffect(() => {
  dispatch(fetchContacts());
}, [dispatch]);

  return (
    <div
      style={{
        width: '500px',
        padding: '20px',
        margin: '0 auto',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
        border: '2px solid #082911',
        borderRadius: '4px',
        backgroundColor: '#f1c40f0d',
      }}
    >
      <div>
        <MainTitle>Phonebook</MainTitle>
        <ContactForm />
      </div>
      <ContactsTitle> Contacts</ContactsTitle>
      {contacts.length !== 0 ? (
        <>
          <Filter />
          {loading === true && <Loading />}
          <ContactList />
        </>
      ) : loading === true ? (
        <Loading />
      ) : (
        <WarningMessage>
          Looks like you don`t have any contacts yet or just clear them all.
          Please add new contact🤔
        </WarningMessage>
      )}

      <GlobalStyle />
      <ToastContainer autoClose={2000} />
    </div>
  );
};
