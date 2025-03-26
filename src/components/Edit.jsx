import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import {  updateProduct } from '../services/allAPI';

const Edit = ({product,getAllProducts}) => {

    const [edit,setEdit] = useState({
        id:product._id,
        name:product.name,
        price:product.price,
        description:product.description,
        gst:product.gst
    })

     const [show, setShow] = useState(false);
    
      const handleClose = () => {
        setShow(false);
        
    }
    
      const handleShow = () => setShow(true);

      const editProducts = async(id)=>{
        console.log("id",id);
        
        try {
            const result = await updateProduct(id,edit)
            console.log(result);
            if(result.status==200){
                setEdit(result.data)
                alert("Product updated successfully")
                handleClose()
                getAllProducts()
            }
            
            
        } catch (error) {
            console.log(error);
            
        }

      }


  return (
    <div>
                <button onClick={handleShow} className='btn bg-none border-none' ><i class="fa-solid fa-pen-to-square"></i></button>


                <Modal centered show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>edit Your Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <input value={edit.name} onChange={e=>setEdit({...edit,name:e.target.value})} type="text" className='w-100 rounded p-1 mb-3' placeholder='Product name' />
            <input value={edit.price} onChange={e=>setEdit({...edit,price:e.target.value})} type="text" className='w-100 rounded p-1 mb-3' placeholder='Product price' />
            <input value={edit.description} onChange={e=>setEdit({...edit,description:e.target.value})} type="text" className='w-100 rounded p-1 mb-3' placeholder='Product desc' />
            <input value={edit.gst} onChange={e=>setEdit({...edit,gst:e.target.value})} type="text" className='w-100 rounded p-1 mb-3' placeholder='Product gst in %' />

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>editProducts(edit.id)}>
            edit
          </Button>
        </Modal.Footer>
      </Modal>
        

    </div>
  )
}

export default Edit