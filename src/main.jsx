
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import AboutPage from './pages/aboutpage'
import ContactPage from './pages/contactpage'
import HomePage from './pages/homepage'
import App from './app'


const router = createBrowserRouter([

    {
        path: '/',
        element: <App/>,
        children: [
            {
                index: true,
                element: <HomePage/>
            },
            {
                path: '/about',
                element: <AboutPage/>
            },
            {
                path: '/contact',
                element: <ContactPage/>
            },
        ]
    }




])

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router = {router}/>
)