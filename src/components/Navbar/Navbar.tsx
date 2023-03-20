import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { SavedUserProps } from '../../interfaces/SavedUserProps';

const Navbar = ({ savedUser, setSavedUser }: SavedUserProps) => {
  const hamburgerRef = useRef<HTMLButtonElement>(null);

  const handleClick = () => {
    hamburgerRef.current?.classList.toggle('active');
  };

  return (
    <nav className='navbar'>
      <h1 className='navbar-logo'>Game Store 3.0</h1>
      <input
        className='navbar-input'
        type='search'
        placeholder='E.g. Minecraft'
      />
      {savedUser?.email?.length > 0 ? (
        <button
          onClick={() => setSavedUser(() => ({}))}
          className='navbar-button--logout'
        >
          Logout
        </button>
      ) : (
        <Link to='/login' className='navbar-button--login'>
          Login
        </Link>
      )}
      {/* <button
        className='navbar-hamburger'
        ref={hamburgerRef}
        onClick={handleClick}
      >
        <span className='navbar-hamburger__bar'></span>
      </button> */}
    </nav>
  );
};

export default Navbar;
