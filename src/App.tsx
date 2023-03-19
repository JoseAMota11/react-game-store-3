import { useState } from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  useSearchParams,
} from 'react-router-dom';
import { route } from './routes/routes';
import Home from './pages/Home/Home';
import SinglePage from './pages/SinglePage/SinglePage';

const App = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const router = createBrowserRouter([
    {
      index: true,
      path: route.home,
      element: (
        <Home currentPage={currentPage} setCurrentPage={setCurrentPage} />
      ),
    },
    {
      path: route.game,
      element: <SinglePage />,
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
