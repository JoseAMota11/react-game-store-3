import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className='center-login'>
      <form className='login'>
        <h2 className='login-title'>Login</h2>
        <div className='login-email'>
          <ion-icon name='mail-outline' />
          <input type='email' placeholder='example@email.com' />
        </div>
        <div className='login-password'>
          <ion-icon name='lock-closed-outline' />
          <input type='password' placeholder='********' />
        </div>
        <button className='login-button' type='submit'>
          Login
        </button>
        <Link className='login-link' to='/'>Already got an account?</Link>
      </form>
    </div>
  );
};

export default Login;
