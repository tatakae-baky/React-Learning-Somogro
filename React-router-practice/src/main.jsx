import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './component/About/About.jsx'
import Contacts from './component/Contacts/Contacts.jsx'
import Users from './component/Users/Users.jsx'
import UserDetails from './component/UserDetails/UserDetails.jsx'
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/contact',
        element: <Contacts />,
      },
      {
        path: '/users',
        loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
        element: <Users />,
      },
      {
        path: '/user/:id',
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`),
        element: <UserDetails />,
      }
    ],
  }
])

createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />,
)
