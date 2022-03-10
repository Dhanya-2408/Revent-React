import React from 'react';
import { toast } from 'react-toastify';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Menu, Image, Dropdown } from 'semantic-ui-react';
import { signOutUser } from '../auth/authActions';
import { signOutFirebase } from '../../app/firestore/firebaseService';

export default function SignedInMenu() {
  const dispatch = useDispatch();
  const {currentUser} = useSelector(state => state.auth);
  const history = useHistory();

  async function handleSignOut() {

    // dispatch(signOutUser());
    // history.push('/');
      
    try {
      history.push('/');
      await signOutFirebase();
    } catch (error) {
      toast.error(error.message);
    }
  }


  return (
    <Menu.Item position='right'>
      <Image avatar spaced='right' src={currentUser.photoURL || '/assets/user.png'} />
      <Dropdown pointing='top left' text={currentUser.email}>
        <Dropdown.Menu>
          <Dropdown.Item
            as={Link}
            to='/createEvent'
            text='Create Event'
            icon='plus'
          />
          <Dropdown.Item text='My profile' icon='user' />
          <Dropdown.Item
           onClick={handleSignOut}
            text='Sign out'
            icon='power'
          />
        </Dropdown.Menu>
      </Dropdown>
    </Menu.Item>
  );
}
