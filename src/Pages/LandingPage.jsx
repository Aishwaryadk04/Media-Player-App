import React from 'react'
import { Col, Row,Card } from 'react-bootstrap'
import {useNavigate} from 'react-router-dom'

function LandingPage() {
  const navigateByUrl = useNavigate()
  return (
    <>
      <Row className='mt-5 mb-5  align-items-center justify-content-between w-100'>
        <Col></Col>
        <Col lg={5}>
          <h3>Welcome to <span className='text-warning'>Media Player</span></h3>
          <p style={{textAlign:'justify'}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quo doloremque dolor officiis culpa, inventore in iusto temporibus perspiciatis facere sit beatae saepe ea, est autem vero consectetur corporis molestiae.</p>
          <button onClick={()=>navigateByUrl('/home')} className='mt-5 btn btn-info'> Get Started <i className="fa-solid fa-arrow-right fa-beat ms-2"></i></button>
        </Col>
        <Col></Col>
        <Col lg={5}>
          <img className='img-fluid' src="https://media.tenor.com/lhlDEs5fNNEAAAAC/music-beat.gif" alt="landing" />
        </Col>
      </Row>
      <div className="container mt-5 d-flex align-items-center justify-content-center flex-column">
        <h3>Features</h3>
        <div className='cards mt-5 mb-5 d-flex align-items-center justify-content-between w-100'>
        <Card className='p-3 ' style={{ width: '22rem' }}>
      <Card.Img width={'300px'} height={'300px'} variant="top" src="https://prabinparajuli.com.np/wp-content/uploads/2016/11/habibar-rahman-gear.gif" />
      <Card.Body>
        <Card.Title>Managing Videos</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
    <Card className='p-3 ' style={{ width: '22rem' }}>
      <Card.Img width={'300px'} height={'300px'} variant="top" src="https://media0.giphy.com/media/1bG7bbKHn8Rtm5FOdO/giphy.gif" />
      <Card.Body>
        <Card.Title>Categorise Videos</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
    <Card className='p-3 ' style={{ width: '22rem' }}>
      <Card.Img width={'300px'} height={'300px'} variant="top" src="https://media.giphy.com/media/149mbArhpEpry0/giphy.gif" />
      <Card.Body>
        <Card.Title>Watch History</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>

        </div>
        </div>
        
        <div className="container border rounder p-5 border-secondary b-5 mt-5 d-flex align-items-center justify-content-between w-100">
          <div className="col-lg-5">
            <h3 className='me-5 text-warning'>Simple, Fast and Powerful</h3>
            <h6 className='mb-3'>
              <span className='fs-5 fw-bolder'>Play Everything</span> : Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit asperiores sint, officia assumenda consequuntur ipsam id mollitia aspernatur ipsum ut corrupti perspiciatis numquam laborum tenetur aliquid animi placeat nulla illo?
            </h6>
            <h6 className='mb-3'>
              <span className='fs-5 fw-bolder'>Categories Videos</span> : Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit asperiores sint, officia assumenda consequuntur ipsam id mollitia aspernatur ipsum ut corrupti perspiciatis numquam laborum tenetur aliquid animi placeat nulla illo?
            </h6>
            <h6 className='mb-3'>
              <span className='fs-5 fw-bolder'>Managing History</span> : Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit asperiores sint, officia assumenda consequuntur ipsam id mollitia aspernatur ipsum ut corrupti perspiciatis numquam laborum tenetur aliquid animi placeat nulla illo?
            </h6>
          </div>
          <div className="video col-lg-6">
          <iframe width="100%" height="387" src="https://www.youtube.com/embed/Po3jStA673E" title="LEO - Official Trailer | Thalapathy Vijay | Lokesh Kanagaraj | Anirudh Ravichander" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>

        </div>
    </>
  )
}

export default LandingPage