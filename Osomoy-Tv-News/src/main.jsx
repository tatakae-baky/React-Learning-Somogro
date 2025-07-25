import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router-dom'
import routes from './routes/routes.jsx'

createRoot(document.getElementById('root')).render(
    <RouterProvider router={routes}></RouterProvider>
)
