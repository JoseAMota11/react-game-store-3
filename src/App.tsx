import { useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Route } from './routes/routes';
import Home from './pages/Home/Home';
import SinglePage from './pages/SinglePage/SinglePage';
import Login from './components/Login/Login';
import { User } from './interfaces/User';

const App = () => {
  const savedUserOnLocaleStorage = localStorage.getItem('user')
    ? JSON.parse(localStorage.getItem('user'))
    : null;
  const [currentPage, setCurrentPage] = useState(1);
  const [savedUser, setSavedUser] = useState<Partial<User[]>>(
    savedUserOnLocaleStorage
  );

  const router = createBrowserRouter([
    {
      path: Route.home,
      element: (
        <Home
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          savedUser={savedUser}
          setSavedUser={setSavedUser}
        />
      ),
    },
    {
      path: Route.game,
      element: <SinglePage savedUser={savedUser} setSavedUser={setSavedUser} />,
    },
    {
      path: Route.login,
      element: <Login savedUser={savedUser} setSavedUser={setSavedUser} />,
    },
  ]);

  return (
    <div className='App'>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
