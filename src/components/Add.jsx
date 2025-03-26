import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'



const Add = () => {

    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
            <input type="text" className='w-100 rounded p-1 mb-3' placeholder='Product name' />
            <input type="text" className='w-100 rounded p-1 mb-3' placeholder='Product price' />
            <input type="text" className='w-100 rounded p-1 mb-3' placeholder='Product desc' />
            <input type="text" className='w-100 rounded p-1 mb-3' placeholder='Product gst in %' />

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
        
        </div>
  )
}

export default Add