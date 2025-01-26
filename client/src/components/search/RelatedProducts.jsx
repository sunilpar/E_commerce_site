import React,{useState,useEffect} from 'react'
import Searchbook from './Searchbook'
import service from '../../backend/config';

function RelatedProducts({Tags}) {
    const [product, setProduct] = useState([]);
  
    useEffect(() => {
      (async () => {
        try {
          const getproducts = await service.getProductsByTags(Tags);
          setProduct(getproducts.data);
        } catch (error) {
          console.error("Error while searching realated products:", error);
        }
      })();
    }, [Tags]);
  
    return (
      <div className="w-full py-8 flex justify-center">
        <div className="flex flex-row flex-wrap justify-center gap-5  w-[1000px] ">
          {product.map((productItem) => (
            <div key={productItem._id} className="w-fit h-fit ">
              <Searchbook {...productItem} />
            </div>
          ))}
        </div>
      </div>
    );
}

export default RelatedProducts