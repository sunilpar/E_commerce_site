import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store/store.js'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import {Login } from './components/index.js'
import Signup from "./components/Signup.jsx"
import ProductForm from "./components/productform/Productform.jsx"
import Home from "./pages/Home.jsx"
import Cart from './pages/cart.jsx'
import Post from './pages/Post.jsx'

//  //animation
//  const observer = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//       if (entry.isIntersecting) {
//         entry.target.classList.add("show");
//       } else {
//         entry.target.classList.remove("show");
//       }
//     });
//   });
//   const fadedElements = document.querySelectorAll(".fade");
//   fadedElements.forEach((el) => observer.observe(el));


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
        {
            path: "/",
            element: <Home />,
        },
        {
            path: "/post/:id",
            element: <Post />,
        },
        {
            path: "/cart",
            element: <Cart />,
        },
        {
            path: "/Addproduct",
            element: <ProductForm />,
        },
        {
            path: "/login",
            element: (
                    <Login />
                
            ),
        },
        {
            path: "/signup",
            element: (
               
                    <Signup />
               
            ),
        },
       
    ],
},
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)
