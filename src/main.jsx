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

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
        {
            path: "/",
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
