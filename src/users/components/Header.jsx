import React, { useState } from 'react'
import { FaBars, FaFacebook, FaInstagram, FaUser } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

function Header() {
  
  const [listStatus,setListStatus] = useState(false)
  const menuBtnClick =()=>{
    setListStatus(!listStatus)
  }

  return (
    <>
    {/* header  upper part-title & login */}
    <div className='grid grid-cols-3 p-2'>
      {/* logo with title */}
      <div className="flex items-center">
        <img width={'100px'} height={'100px'} src="https://i.pinimg.com/736x/af/d1/e6/afd1e65cacca8822d1f857d5182b3aed.jpg" alt="logo" />
        <h1 className='text-2xl font-bold  md:hidden'>BOOKSTORE</h1>
      </div>
      {/* title */}
      <div className="md:flex justify-center items-center hidden">
        <div className="text-3xl font-bold">BOOK STORE</div>
      </div>
      {/* login */}
      <div className="md:flex justify-end items-center hidden">
        
        {/* insta,facebook,twitter */}
        <FaInstagram/>
        <FaFacebook className='mx-2'/>
        <FaXTwitter/>
        <Link to={'/login'} className='ms-4 border rounded py-1 px-2 hover:bg-black hover:text-white flex items-center'><FaUser className='me-1'/> Login</Link>
      </div>
    </div>
    {/* header lower part - links & menu + login btn in mobile screen */}
    <nav className='w-full p-2 bg-black text-white md:flex justify-center items-center'>
      {/* menu bar & login btn */}
      <div className="flex justify-between items-center md:hidden">
        {/* menu bar */}
        <button onClick={menuBtnClick} className='cursor-pointer'><FaBars/></button>
        <Link to={'/login'} className='ms-4 border rounded py-1 px-2 hover:bg-black hover:text-white flex items-center'><FaUser className='me-1'/> Login</Link>
        {/* login button */}
      </div>
      {/* ul for links */}
      <ul className={listStatus?"flex flex-col":"md:flex justify-center items-center hidden"}>
        <li className='md:mx-4 mt-3 md:mt-0'><Link to={'/'}>HOME</Link></li>
        <li className='md:mx-4 my-3 md:my-0'><Link to={'/books'}>BOOKS</Link></li>
        <li className='md:mx-4 mb-3 md:mb-0'><Link to={'/contact'}>CONTACT</Link></li>
      </ul>
    </nav>
    </>
  )
}

export default Header