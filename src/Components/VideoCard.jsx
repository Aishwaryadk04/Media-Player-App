import React,{useState} from 'react'
import { Card,Modal} from 'react-bootstrap'

function VideoCard() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    
    <>
      <div>
      <Card>
      <Card.Img onClick={handleShow} variant="top" src="https://pbs.twimg.com/profile_images/446356636710363136/OYIaJ1KK_400x400.png" />
      <Card.Body>
        <Card.Title className='d-flex justify-content-between align-items-center'>
          <h6>Video Caption</h6>
          <button className='btn '><i className='fa-solid fa-trash text-danger'></i></button>

        </Card.Title>
      </Card.Body>
    </Card>

    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Video Caption</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width="100%" height="370" src="https://www.youtube.com/embed/Rh3tobg7hEo?autoplay=1" title="Learn React With This One Project" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </Modal.Body>
      </Modal>
      </div>
    </>
  )
}

export default VideoCard