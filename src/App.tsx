import { useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Route } from './routes/routes';
import Home from './pages/Home/Home';
import SinglePage from './pages/SinglePage/SinglePage';
import Login from './components/Login/Login';
import { User } from './interfaces/User';
import UnAuthorized from './components/UnAuthorized/UnAuthorized';

const App = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [savedUser, setSavedUser] = useState<Partial<User[]>>();
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

  console.log(savedUser);

  return (
    <div className='App'>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
