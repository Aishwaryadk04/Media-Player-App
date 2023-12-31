import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Add from '../Components/Add';
import View from '../Components/View';
import Category from '../Components/Category';

function Home() {
  const [uploadVideoServerRespone,setUploadVideoServerResponse] = useState({})

  return (
    <>
    <div className="container-fluid w-100 mt-5 mb-5 d-flex justify-content-between align-items-center">
      <div className="add-videos">
      <Add setUploadVideoServerResponse={setUploadVideoServerResponse} />
      </div>
      
      <Link to='/watch-history' className='fs-5' style={{textDecoration:'none',color:'white'}} >Watch History</Link>
    </div>

    <div className="container mt-5 mb-5 d-flex justify-content-between align-items-center">
      <div className="all-videos col-lg-9">
        <h3>All Videos</h3>
      <View uploadVideoServerResponse={uploadVideoServerRespone} />
      </div>
      <div className="category col-lg-3">
        <Category/>

      </div>
    </div>
    </>
  )
}

export default Home