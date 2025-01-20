import React,{useState,useEffect} from 'react'
import service from '../../backend/config';

function Searchsuggestion({query}) {
    console.log(typeof query,query,"query reached search suggestion");
    
    const [product, setProduct] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const getproducts = await service.searchProductWithSuggestion(query);
                console.log(getproducts.data,"getproducts.data");
                
                setProduct(getproducts.data);
            } catch (error) {
                console.error("Error fetching products for suggestions:", error);
            }
        })();
    }, []);

  return (
    <>
    <div>
    {product.map((productItem) => (
          <div key={productItem._id} className="w-fit h-fit ">
            <div className='text-iphone-white'>
                {productItem.Title}
            </div>
          </div>
        ))}
    </div>
    </>
  )
}

export default Searchsuggestion