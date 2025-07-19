import { createBrowserRouter, Navigate } from 'react-router-dom'
import HomeLayout from '../layouts/HomeLayout'
import CategoryNews from '@/pages/CategoryNews'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    children: [
      {
        path: '',
        element: <Navigate to={"/category/01"}></Navigate>
      },
      {
        path:"/category/:id",
        element:<CategoryNews></CategoryNews>,
        loader: ({params}) => fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`),
    }
  ]
  },
])

export default routes
