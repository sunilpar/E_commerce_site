import React, {useState, useEffect} from 'react'
import { Container } from '../components'
import appwriteService from "../appwrite/config";
import Book from "../components/Book";
import { Query} from "appwrite";


function Product(productTitles) {
    const [product, setProduct] = useState([])
 
    const allTitles = Object.values(productTitles).flat();
    
    
    useEffect(() => {
        appwriteService.getProducts([Query.contains("Product_Title", allTitles)]).then((product) => {
            if (product) {
                setProduct(product.documents);
            }
        })
    }, [])

    
    return (
        <div className='w-full py-8 '>
        <div  className='flex flex-row flex-wrap justify-center '>
        {product.map((product) => (
            <div className=' w-fit h-fit '>
                <Book {...product}/>
            </div>
        ))}
            </div>
    </div>
  )
}

export default Product