import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './component/Home.jsx';
import Header from './component/Header.jsx';
import Contact from './component/Contact.jsx';
import About from './component/About.jsx';
import Users from './component/Users.jsx';
import UserDetails from './component/UserDetails.jsx';

const router= createBrowserRouter([
  {
    path:'/',
    element:<Home></Home>,
    children:[
      {
        path:'/about',
        element:<About></About>
      },
      
      {
        path:'/contact',
        element: <Contact></Contact>
      },
      {
        path:'/header',
        element:<Header></Header>
      },
      {
        path:'/users',
        loader: ()=> fetch('https://jsonplaceholder.typicode.com/users'),
        element:<Users></Users>
      },
      {
        path:'/user/:id',
        loader: ({params})=> fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`),
        element:<UserDetails></UserDetails>
      }


    ]
  }
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
