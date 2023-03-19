import { useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { route } from './routes/routes';
import Home from './pages/Home/Home';
import SinglePage from './pages/SinglePage/SinglePage';
import Login from './components/Login/Login';
import { User } from './interfaces/User';

const App = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [savedUser, setSavedUser] = useState<Partial<User[]>>();
  const router = createBrowserRouter([
    {
      index: true,
      path: route.home,
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
      path: route.game,
      element: <SinglePage />,
    },
    {
      path: route.login,
      element: <Login savedUser={savedUser} setSavedUser={setSavedUser} />,
    },
  ]);

  localStorage.clear();

  return (
    <div className='App'>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
