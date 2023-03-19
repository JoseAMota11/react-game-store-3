import { useRef } from 'react';

const Navbar = () => {
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
      <button className='navbar-button'>Login</button>
      <button
        className='navbar-hamburger'
        ref={hamburgerRef}
        onClick={handleClick}
      >
        <span className='navbar-hamburger__bar'></span>
      </button>
    </nav>
  );
};

export default Navbar;
