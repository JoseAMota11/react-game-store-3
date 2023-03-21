import { useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Route } from './routes/routes';
import Home from './pages/Home/Home';
import SinglePage from './pages/SinglePage/SinglePage';
import Login from './components/Login/Login';
import { User } from './interfaces/User';
import Alert from './modules/Alert/Alert';

const App = () => {
  const savedUserOnLocaleStorage = localStorage.getItem('user')
    ? JSON.parse(localStorage.getItem('user'))
    : null;
  const [currentPage, setCurrentPage] = useState(1);
  const [savedUser, setSavedUser] = useState<User>(savedUserOnLocaleStorage);
  const [showAlert, setShowAlert] = useState({ status: false, message: '' });

  const router = createBrowserRouter([
    {
      path: Route.home,
      element: (
        <>
          <Home
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            savedUser={savedUser}
            setSavedUser={setSavedUser}
            setShowAlert={setShowAlert}
          />
          {showAlert.status ? (
            <Alert
              setShowAlert={setShowAlert}
              key={showAlert.message}
              message={showAlert.message}
            />
          ) : null}
        </>
      ),
    },
    {
      path: Route.game,
      element: <SinglePage savedUser={savedUser} setSavedUser={setSavedUser} />,
    },
    {
      path: Route.login,
      element: (
        <Login
          savedUser={savedUser}
          setSavedUser={setSavedUser}
          setShowAlert={setShowAlert}
        />
      ),
    },
  ]);

  return (
    <div className='App'>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
