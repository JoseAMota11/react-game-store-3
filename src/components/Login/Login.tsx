import { FormEvent, useEffect, useReducer, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getUserFromAPI } from '../../services/user.services';
import { SavedUserProps } from '../../interfaces/SavedUserProps';
import useLocalStorage from '../../hooks/useLocalStorage';

const reducer = (state, action) => {
  const { type, value } = action;
  return { ...state, [type]: value };
};

const Login = ({ savedUser, setSavedUser }: SavedUserProps) => {
  const [userSavedOnStorage, setUserSavedOnStorage] = useLocalStorage(
    'user',
    null
  );
  const [state, dispatch] = useReducer(reducer, {
    email: '',
    password: '',
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
        setSavedUser(() => ({ ...response[0], isLoggedIn: true }));
      } catch (error) {}
    })();
  }, []);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (
      state.email === savedUser.email &&
      state.password === savedUser.password
    ) {
      emailRef.current?.classList.add('correct');
      passwordRef.current?.classList.add('correct');
      setUserSavedOnStorage(savedUser);
      navigate('/');
    } else {
      dispatch({ type: 'error' });
      emailRef.current?.classList.add('incorrect');
      passwordRef.current?.classList.add('incorrect');
    }
  };

  const { email, password } = state;

  return (
    <div className='center-login'>
      <form className='login' onSubmit={handleSubmit}>
        <h2 className='login-title'>Login</h2>
        {state.status ? (
          <span className='login-error'>{state.message}</span>
        ) : null}
        <div className='login-email'>
          <ion-icon name='mail-outline' />
          <input
            type='email'
            placeholder='example@email.com'
            value={email}
            onChange={(e) => dispatch({ type: 'email', value: e.target.value })}
            ref={emailRef}
          />
        </div>
        <div className='login-password'>
          <ion-icon name='lock-closed-outline' />
          <input
            type='password'
            placeholder='********'
            value={password}
            onChange={(e) =>
              dispatch({ type: 'password', value: e.target.value })
            }
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
