// import Navbar from './components/navbar/Navbar'

import Layout from './pages/layout/layout'
import HomePage from './pages/homePage/homePage'
import ListPage from './pages/listPage/listPage'
import ListingPage from './pages/listingPage/listingPage'
import SinglePage from './pages/singlePage/singlePage'
import Login from './pages/login/login'

import { 
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import ProfilePage from './pages/profilePage/profilePage'



function App() {
  
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout/>,
      children: [
        {
          path: '/',
          element: <HomePage/>
        },
        {
          path: '/list',
          element: <ListPage/>
        },
        {
          path: '/listing',
          element: <ListingPage/>
        },
        {
          path: '/:id',
          element: <SinglePage/>
        },
        {
          path: '/profile',
          element: <ProfilePage />
        },
        {
          path: '/login',
          element: <Login/>
        },
      ]
    },
  ])
  
  return (
    <RouterProvider router={router}/>
  );
}

export default App