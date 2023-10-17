import React from 'react'
import {Link} from 'react-router-dom'
function WatchHistory() {
  return (
    <>
    <div className="container mt-5 mb-5 d-flex justify-content-between">
      <h3>Watch History</h3>
      <Link to={'/home'} style={{textDecoration:'none'}} className='d-flex align-items-center'><i class="fa-solid fa-arrow-left fa-beat me-2"></i> Back to Home</Link>
    </div>
    <table className='table mt-5 mb-5 container'>
      <thead>
        <tr>
          <th>#</th>
          <th>Caption</th>
          <th>URL</th>
          <th>Time Stamp</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Kanban</td>
          <td><a href="https://fontawesome.com/search?q=left%20arrow&o=r">https://fontawesome.com/search?q=left%20arrow&o=r</a></td>
          <td>4/10/23</td>
        </tr>
      </tbody>

    </table>
    </>
  )
}

export default WatchHistory