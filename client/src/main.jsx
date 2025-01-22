import React, { useEffect } from 'react'
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
import Cart from './pages/Cart.jsx'
import Post from './pages/Post.jsx'
import Search from './pages/Search.jsx'
import Sucess from './pages/Sucess.jsx'
import Failure from './pages/Failure.jsx'
import KhaltiPayment from './pages/KhaltiPayment.jsx'

//test 
import Test from './components/Test.jsx'

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
            path: "/Sucess",
            element: <Sucess />,
        },
        {
            path: "/Failure",
            element: <Failure />,
        },
        {
            path: "/KhaltiPayment",
            element: <KhaltiPayment />,
        },
        {
            path: "/post/:id",
            element: <Post />,
        },
        {
            path: "/Search/:id",
            element: <Search />,
        },
        {
            path: "/test",
            element: <Test/>,
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
