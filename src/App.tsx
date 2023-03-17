import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { route } from './routes/routes';
import Home from './pages/Home/Home';
import SinglePage from './pages/SinglePage/SinglePage';

const App = () => {
  const router = createBrowserRouter([
    {
      path: route.home,
      element: <Home />,
    },
    {
      path: route.game,
      element: <SinglePage />,
    },
  ]);

  return (
    <div className='App'>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
