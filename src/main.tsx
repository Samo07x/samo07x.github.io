import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.tsx'
import './index.css'
import ErrorPage from './pages/error-page.tsx';
import Contact from './pages/Contact.tsx';
import About from './pages/About.tsx';

const router = createBrowserRouter([
  {
    path: "/*",
    element: <App />,	
    errorElement: <ErrorPage />,
    children: [
      {
      path: "contact",
      element: <Contact/>,	
      errorElement: <ErrorPage />,
    },  {
      path: "about",
      element: <About/>,	
      errorElement: <ErrorPage />,
    },],
  },  
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
