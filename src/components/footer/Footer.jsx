import React from 'react'
const Footer = () => {
  return ( 
    <footer className="bg-white  shadow  dark:bg-gray-800">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-100 sm:text-center dark:text-gray-400">© 2024 <a href="" className="hover:underline">Goverment of Nepal</a>. All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">

            <li>
                <a href="#" className="hover:underline me-4 md:me-6">To Top</a>
            </li>
            
            <li>
                <a target='_blank' href="https://nepal.gov.np:8443/NationalPortal/EN" className="hover:underline">Contact</a>
            </li>
        </ul>
        </div>
    </footer>

   )
}

export default Footer

