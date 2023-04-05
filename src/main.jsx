import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Homepage from './Components/Homepage';
import Productss from './Components/Products/Productss';
import Books from './Components/Booksnav/Books';
import Bookindo from './Components/Booksnav/Bookindo';
import Error from './Components/Error';
import Phones from './Components/Phones/Phones';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement:<Error/>,
    children:[
      {
        path:"/",
        element: <Homepage/>,
        loader: ()=> fetch("mohaiminur.json")
      },
      {
        path:"/blog",
        element: <Productss/>,
        loader: ()=> fetch('product.json'),
        
      },
      {
        path:"/books",
        element: <Books/>,
        loader: ()=> fetch("https://api.itbook.store/1.0/search/mongodb"),
        
      },
      {
        path:"/product",
        element: <Phones/>,
        loader: ()=> fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
      },
      {
        path:"/books/:id",
        element: <Bookindo/>,
        loader: ({params})=> fetch(`https://api.itbook.store/1.0/books/${params.id}`)
      }
    ]
  },  
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
