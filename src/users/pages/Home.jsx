import React from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      <Header/>
      <div>
        {/* landing part - search */}
        <div style={{height:'600px'}} className='flex justify-center items-center flex-col bg-[url(/background-image.jpg)] bg-cover bg-center text-white'>
            <div style={{height:'600px', backgroundColor:'rgba(0,0,0,0.4)'}} className='w-full flex justify-center items-center flex-col '>
              <h1 className='text-5xl font-bold mb-2'>Wonderful Gifts</h1>
              <p>Gift your family and friends a book</p>
              {/* search */}
              <div className="mt-9 flex items-center">
                <input type="text" className="bg-white rounded-3xl text-black w-100 placeholder-gray-500 p-2" placeholder='Search Books Here' />
                <button className="text-gray-500" style={{ marginLeft: '-40px' }}><FaSearch /></button>
              </div>
            </div>
        </div>
        
        {/* new arrival part */}
        <section className='md:px-40 p-5 my-5 flex flex-col justify-center items-center'>
          <h1 className="text-3xl font-bold">NEW ARRIVALS</h1>
          <h2 className="text-2xl ">Explore Our Latest Collection</h2>
          {/* book row & col */}
          <div className="md:grid grid-cols-4 w-full mt-10">
            {/* duplicate book card div */}
              <div className="shadow rounded p-3 mx-4 mb-5 md:mb-0">
                <img width={'300px'} height={'300px'} src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/contemporary-fiction-night-time-book-cover-design-template-1be47835c3058eb42211574e0c4ed8bf_screen.jpg?ts=1734004864" alt="book" />
                <div className="flex justify-center items-center flex-col mt-4">
                  <h3 className='text-blue-600 font-bold text-lg'>Author</h3>
                  <h4 className="text-lg">Title</h4>
                  <h4>$ price</h4>
                </div>
              </div>
              {/* duplicate book card div */}
              <div className="shadow rounded p-3 mx-4">
                <img width={'300px'} height={'300px'} src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/contemporary-fiction-night-time-book-cover-design-template-1be47835c3058eb42211574e0c4ed8bf_screen.jpg?ts=1734004864" alt="book" />
                <div className="flex justify-center items-center flex-col mt-4">
                  <h3 className='text-blue-600 font-bold text-lg'>Author</h3>
                  <h4 className="text-lg">Title</h4>
                  <h4>$ price</h4>
                </div>
              </div>
              {/* duplicate book card div */}
              <div className="shadow rounded p-3 mx-4">
                <img width={'300px'} height={'300px'} src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/contemporary-fiction-night-time-book-cover-design-template-1be47835c3058eb42211574e0c4ed8bf_screen.jpg?ts=1734004864" alt="book" />
                <div className="flex justify-center items-center flex-col mt-4">
                  <h3 className='text-blue-600 font-bold text-lg'>Author</h3>
                  <h4 className="text-lg">Title</h4>
                  <h4>$ price</h4>
                </div>
              </div>
              {/* duplicate book card div */}
              <div className="shadow rounded p-3 mx-4">
                <img width={'300px'} height={'300px'} src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/contemporary-fiction-night-time-book-cover-design-template-1be47835c3058eb42211574e0c4ed8bf_screen.jpg?ts=1734004864" alt="book" />
                <div className="flex justify-center items-center flex-col mt-4">
                  <h3 className='text-blue-600 font-bold text-lg'>Author</h3>
                  <h4 className="text-lg">Title</h4>
                  <h4>$ price</h4>
                </div>
              </div>
          </div>
          {/* all books link */}
          <div className="text-center mt-20">
            <Link to={'/books'} className="p-3 bg-black text-white">Explore More...</Link>
          </div>
        </section>
        {/* author */}
        <section className='md:px-40 p-5 my-5 md:grid grid-cols-2 items-center gap-10'>
          {/* author content */}
          <div className="text-center">
            <h1 className="text-2xl font-bold">FEATURED AUTHORS</h1>
            <h2 className="text-xl ">Captivates With Every Word</h2>
            <p className="text-justify mt-9">
              Welcome to this thoughtfully crafted online book store, a space designed for passionate readers who love to explore new stories, immerse themselves in rich narratives, and discover books across every genre. This website demo showcases how an author can present their works in a clean, modern, and responsive layout that makes browsing simple and enjoyable. From detailed book descriptions to preview sections and well-organized categories, every part of the site is built to help readers connect with the right book effortlessly. The design focuses on clarity, smooth navigation, and an inviting atmosphere that encourages visitors to stay, scroll, and explore.
            </p>
            <p className="text-justify mt-5">
              Beyond showcasing books, this demo highlights how an author can share their journey, writing style, and inspirations through a dedicated profile section that builds a genuine connection with readers. It reflects a passionate commitment to storytelling and offers a seamless reading discovery experience for users on any device. With an engaging interface, intuitive features, and a visually appealing layout, this book store website brings an author’s world to life while delivering a smooth and memorable experience for every visitor.
            </p>
          </div>
          {/* author image */}
          <div className="p-5 flex justify-center items-center">
            <img className='w-full' src="https://images.squarespace-cdn.com/content/v1/64bfd6aa127fba0754a78d65/1690617601186-7MS4W32UWBXKFKZTCQ14/authorphotos5-1024x683.jpg" alt="author" />
          </div>
        </section>
        {/* testimony */}
        <section className='md:px-40 p-5 my-5 flex flex-col justify-center items-center'>
          <h1 className="text-3xl font-bold">TESTIMONIALS</h1>
          <h2 className="text-2xl ">See What Others Are Saying</h2>
          <div className="my-10 flex justify-center items-center flex-col">
            {/* user image */}
            <img width={'200px'} height={'200px'} style={{borderRadius : '50%'}} src="https://img.freepik.com/premium-photo/happy-man-ai-generated-portrait-user-profile_1119669-1.jpg" alt="user" />
            {/* feedback */}
            <p className="mt-5">Lucas Alexander</p>
            <p className="text-justify mt-4"><span className="font-bold me-2">“Amazing collection of books service and quick navigation."</span>I had a great experience browsing this bookstore. The layout is clean, and finding my favorite genres was incredibly easy. The detailed book descriptions helped me choose the perfect read. This is one of the most organized online bookstores I’ve used. The search feature is fast, and I love how the recommendations feel personal and relevant to my interests.</p>
          </div>
        </section>
      </div>
      <Footer/>
    </>
  )
}

export default Home