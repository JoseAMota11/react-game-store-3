// import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { SavedUserProps } from '../../interfaces/SavedUserProps';

const Navbar = ({ savedUser, setSavedUser }: SavedUserProps) => {
  // const hamburgerRef = useRef<HTMLButtonElement>(null);

  const logout = () => {
    setSavedUser(() => ({}));
    localStorage.clear();
  };

  return (
    <nav className='navbar'>
      <h1 className='navbar-logo'>Game Store 3.0</h1>
      {savedUser?.email?.length > 0 ? (
        <button onClick={logout} className='navbar-button--logout'>
          Logout
        </button>
      ) : (
        <Link to='/login' className='navbar-button--login'>
          Login
        </Link>
      )}
    </nav>
  );
};

export default Navbar;
