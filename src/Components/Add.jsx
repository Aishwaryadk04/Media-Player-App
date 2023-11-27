import React,{useState} from 'react'
import {Modal,Button,Form} from 'react-bootstrap'
import { uploadVideo } from '../Services/allAPI';


function Add({setUploadVideoServerResponse}) {
  const [videos,setVideos] = useState({
    id:"",
    caption:"",
    url:"",
    embedLink:""
  })

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const getEmbedLink = (e)=>{
    const {value} = e.target
    if(value){
      const link = `http://www.youtube.com/embed/${value.slice(-11)}`
      setVideos({...videos,embedLink:link})
    }else{
      setVideos({...videos,embedLink:""})
    }
 
  }

  const handleUpload = async()=>{
    const {id,caption,url,embedLink} = videos
    if(!id||!caption||!url||!embedLink){
      alert("Please fill the form completly!!!")
    }else{
         //make api call upload video
        const response = await uploadVideo(videos)
        // console.log(response);
         if(response.status>200 && response.status<300){
          // set server response 
          setUploadVideoServerResponse(response.data)
          //hide modal
          handleClose()
          alert(`'${response.data.caption}' video uploaded successfuly!!! `)

         }else{
          alert("cannot perform the operation now. Please try after sometime....")
         }
    }
  }

  return (
<>
      <div className='d-flex align-items-center'>
        <h5>Upload New Video</h5>
        <button onClick={handleShow} className='btn'><i className="fa-solid fa-circle-plus fs-5"></i></button>
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Upload a Video</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Please fill the following details !!!</p>

          <form className='border border-secondary rounded p-3'>
          <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Enter Video ID" onChange={(e)=>setVideos({...videos,id:e.target.value})} />
      </Form.Group> 

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Enter Video Caption" onChange={(e)=>setVideos({...videos,caption:e.target.value})} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Enter Video Image URL" onChange={(e)=>setVideos({...videos,url:e.target.value})} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Enter Youtube Video Link" onChange={getEmbedLink} />
      </Form.Group>

          </form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleUpload} variant="btn btn-info">Upload</Button>
        </Modal.Footer>
      </Modal>
      
</>
  )
}

export default Add

