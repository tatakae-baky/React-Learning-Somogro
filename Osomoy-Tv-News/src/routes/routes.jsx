import { createBrowserRouter } from 'react-router-dom'
import HomeLayout from '../layouts/HomeLayout'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
  },
])

export default routes
