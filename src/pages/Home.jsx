import React, { useEffect, useState } from 'react'
import Add from '../components/Add'
import View from '../components/View'
import { getProduct } from '../services/allAPI'

const Home = () => {
 
    const [allProducts, setAllProducts] = useState([])

    const getAllProducts = async()=>{
        try {
            const result = await getProduct()
            console.log(result);
            setAllProducts(result.data)
            
            
        } catch (error) {
            console.log(error);
            
        }
    }

    useEffect(()=>{
        getAllProducts()
    })


  return (
   <div className='d-flex align-items-center justify-content-center p-3 '> 
    <div>
        <h1 className='fw-bold text-center'>All Products</h1>
        <div className='mt-5'>
            <Add getAllProducts={getAllProducts}/>
        </div>
        <div className='mt-5'>
          <div >  
            <View allProducts={allProducts}/>
            
            </div>
        </div>

        </div>
    </div>
  )
}

export default Home