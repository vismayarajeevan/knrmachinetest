import React from 'react'
import Add from '../components/Add'

const Home = () => {
  return (
   <div className='d-flex align-items-center justify-content-center p-3'> 
    <div>
        <h1 className='fw-bold'>All Products</h1>
        <div className='mt-5'>
            <Add />
        </div>

        </div>
    </div>
  )
}

export default Home