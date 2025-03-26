import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { deleteProduct } from '../services/allAPI'



const View = ({allProducts,getAllProducts}) => {

    const deleteProducts =async(id)=>{
 
        try {
            const result = await deleteProduct(id)
            if(result.status ==200){
                getAllProducts()
            }
            
        } catch (error) {
          console.log(error);
            
        }
    }


  return (
    <div className='d-flex justify-content-between align-items-center gap-5'>
    {
        allProducts?.length>0?
        allProducts.map(product=>(
    <div>
                <Card style={{ width: '18rem' }}>
      <Card.Body>
        <div className=' d-flex justify-content-between align-items-center'>
            <Card.Title>{product.name}</Card.Title>
            <p className='fw-bolder' style={{color:"green"}}>₹ {product.price}</p>
            </div>
        <Card.Text>
          {product.description}
        </Card.Text>
        <p style={{color:'red'}}>gst: {product.gst}</p>
       <div className='d-flex justify-content-between align-items-center'>
        <button onClick={()=>deleteProducts(product._id)} className='btn bg-none border-none' ><i class="fa-solid fa-trash bg-none" ></i></button>
        <button className='btn bg-none border-none' ><i class="fa-solid fa-pen-to-square"></i></button>

        </div>
      </Card.Body>
    </Card>
            </div>
        )):
        <div>No produts added</div>
    }
    </div>
  )
}

export default View