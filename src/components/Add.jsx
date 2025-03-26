import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { addProduct } from '../services/allAPI';



const Add = () => {

    const [products,setProducts] = useState({
        name:"",price:"",description:"",gst:""
    })

    console.log(products);
    

    const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    setProducts("")
}

  const handleShow = () => setShow(true);

  const {name,price,description,gst} = products
  const reqBody = products

  const addProducts = async()=>{

    if(name && price && description && gst){

        try {

            const result = await addProduct(reqBody)
            console.log(result);
            if(result.status == 200){
                alert("Product added successfully")
                handleClose()
            }
            
            
        } catch (error) {
            console.log(error);
            
        }
    }else{
        alert("Please fill all the fields")
    }

    
  }

  return (
    <div>
        
       <div className='d-flex justify-content-between align-items-center'> 
        <h3 className='me-3 fw-bolder'>Your Products</h3>
        <button onClick={handleShow} className='btn bg-primary rounded pt-1 pb-1 ps-2 pe-2 text-white fw-bold'>Add +</button>
        </div>


        <Modal centered show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Your Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <input value={products.name} onChange={e=>setProducts({...products,name:e.target.value})} type="text" className='w-100 rounded p-1 mb-3' placeholder='Product name' />
            <input value={products.price} onChange={e=>setProducts({...products,price:e.target.value})} type="text" className='w-100 rounded p-1 mb-3' placeholder='Product price' />
            <input value={products.description} onChange={e=>setProducts({...products,description:e.target.value})} type="text" className='w-100 rounded p-1 mb-3' placeholder='Product desc' />
            <input value={products.gst} onChange={e=>setProducts({...products,gst:e.target.value})} type="text" className='w-100 rounded p-1 mb-3' placeholder='Product gst in %' />

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={addProducts}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
        
        </div>
  )
}

export default Add