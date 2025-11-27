import React from 'react'
import { Link } from 'react-router-dom'

function Pnf() {
  return (
    <div style={{height:'80vh'}} className='flex justify-center items-center flex-col'>
      <img width={'25%'} src="https://miro.medium.com/v2/resize:fit:1400/0*GUYQoLJ08bNdTigR.gif" alt="page not found" />
      <p>Oh No !</p>
      <h4 className='text-4xl font-bold  mt-2'>Look Like You're Lost</h4>
      <p>The page you are looking for is not available</p>
      <Link className='btn text-white mt-5  p-2 rounded' to={'/'} style={{backgroundColor:'cornflowerblue'}}>BACK HOME</Link>
    </div>
  )
}

export default Pnf