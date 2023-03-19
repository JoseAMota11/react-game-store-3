import { ChangeEvent, FormEvent, useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getUserFromAPI } from '../../services/user.services';
import { User } from '../../interfaces/User';
import { ErrorLogin } from '../../interfaces/Error';
import { SavedUserProps } from '../../interfaces/SavedUserProps';

const Login = ({ savedUser, setSavedUser }: SavedUserProps) => {
  const [user, setUser] = useState<User>({
    email: '',
    password: '',
  });
  const [error, setError] = useState<ErrorLogin>({
    status: false,
    message: '',
  });
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    (async function getUser() {
      try {
        const response = await getUserFromAPI();
        setSavedUser(response[0]);
      } catch (error) {}
    })();
  }, []);

  const handleChange = (e: ChangeEvent) => {
    const { type, value } = e.target;
    setUser((prevState) => ({ ...prevState, status: true, [type]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (
      user.email === savedUser.email &&
      user.password === savedUser.password
    ) {
      emailRef.current?.classList.add('correct');
      passwordRef.current?.classList.add('correct');
      navigate('/');
    } else {
      setError(() => ({
        status: true,
        message: 'The email or password is incorrect.',
      }));
      emailRef.current?.classList.add('incorrect');
      passwordRef.current?.classList.add('incorrect');
    }
  };

  const { email, password } = user;

  return (
    <div className='center-login'>
      <form className='login' onSubmit={handleSubmit}>
        <h2 className='login-title'>Login</h2>
        {error.status ? (
          <span className='login-error'>{error.message}</span>
        ) : null}
        <div className='login-email'>
          <ion-icon name='mail-outline' />
          <input
            type='email'
            placeholder='example@email.com'
            value={email}
            onChange={handleChange}
            ref={emailRef}
          />
        </div>
        <div className='login-password'>
          <ion-icon name='lock-closed-outline' />
          <input
            type='password'
            placeholder='********'
            value={password}
            onChange={handleChange}
            ref={passwordRef}
          />
        </div>
        <button className='login-button' type='submit'>
          Login
        </button>
        <Link className='login-link' to='/'>
          Already got an account?
        </Link>
      </form>
    </div>
  );
};

export default Login;
