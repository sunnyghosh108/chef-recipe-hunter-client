import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'



import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Error from './Components/Error/Error.jsx';
import Home from './Components/Home.jsx';
import Login from './Components/Login/Login.jsx';
import Register from './Components/Register/Register.jsx';
import Blog from './Components/Blog/Blog.jsx';

import Recipes from './Components/Recipes/Recipes.jsx';
import AuthProvider from './Components/AuthProvider/AuthProvider.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <Error></Error>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      },
      {
        path:'/blog',
        element:<Blog></Blog>
      },
      {
        path:'/category/:id',
        element:<Recipes></Recipes>,
        loader:({params})=>fetch(`http://localhost:5000/category/${params.id}`)
        //loader:({params})=>fetch(`https://chief-recipe-hunter-server-sunnyghosh108.vercel.app/${params.id}`)
      }
    ]
  },
]
);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
     
  </React.StrictMode>,
)
