import {
  ContactListStyle,
  ContactItem,
  ButtonForDelete,
} from 'components/ContactList/ContactList.styled';

import { ReactComponent as DeletIcon } from '../Icon/remove-user.svg';

import { useSelector, useDispatch } from 'react-redux';
// import { getContacts, getFilter } from 'redux/selector';
import { deleteContact } from 'redux/operations';
import { selectFilteredContacts } from 'redux/selector';

export const ContactList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <div>
      <ContactListStyle>
        {filteredContacts.map((contact) => (
          <ContactItem key={contact.id}>
            {contact.name}: {contact.number}
            <ButtonForDelete
              type="button"
              onClick={() => dispatch(deleteContact(contact.id))}
            >
              <DeletIcon width="32" heigth="32" />
            </ButtonForDelete>
          </ContactItem>
        ))}
      </ContactListStyle>
    </div>
  );
};
