import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faGreaterThan } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faTwitter, faLinkedin, faFacebookF } from "@fortawesome/free-brands-svg-icons"
import { Carousel } from "flowbite-react";
import 'flowbite';
import './style.css'
import firstImg from '../assets/1.png'
import secondImg from '../assets/2.png'
import thirdImg from '../assets/3.jpg'
import frame from '../assets/Frame1.png'
import frame2 from '../assets/frame2.png'
import frame3 from '../assets/frame3.png'
import frame4 from '../assets/frame4.png'
import frame5 from '../assets/frame5.png'
import frame6 from '../assets/frame6.png'
import frame7 from '../assets/frame7.png'
import frame8 from '../assets/frame8.png'
import Card from './Card.jsx'
import axios from 'axios'
import CategoryCard from './Category.jsx'
import userImg from '../assets/user.png'
import vector from '../assets/Vector.png'
import cart from '../assets/Cart1.png'
function Home() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  // console.log(products)

  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/v1/category/products/getallProducts');
      // console.log(response.data.product)
      setProducts(response.data.product.slice(0,4));
    } catch (err) {
      console.error('Error fetching products:', err);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  const [categories, setCategories] = useState([]);
  console.log("categories",categories)

  const fetchCategories = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/v1/category/getAllCategories');
      console.log("cate",response.data)
      setCategories(response.data.slice(0,6));
    } catch (err) {
      console.error('Error fetching categories:', err);
    }
  };
  useEffect(() => {
    fetchCategories();
  }, []);
  return (
    <div className="">
      <header>
        <div className='bg-black text-white flex flex-col sm:flex-row items-center justify-between py-3 px-4'>
          <div className="flex-1 text-center text-sm sm:text-base">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! 
            <button className='ml-2 underline hover:text-gray-300'>ShopNow</button>
          </div>
          <select className="bg-black text-white border-none outline-none mt-2 sm:mt-0 sm:ml-4">
              <option value="en">English</option>
              <option value="en">Hindi</option>
              <option value="en">Urdu</option>
            </select>
        </div>
      </header>
      <nav className="mt-5 container flex flex-col sm:flex-row mx-auto justify-between items-center px-4 space-y-4 sm:space-y-0">
        <div className="text-xl sm:text-2xl font-bold">Exclusive</div>
        <div className="flex flex-wrap justify-center space-x-4 sm:space-x-8">
          <a href="/home" className="hover:underline">Home</a>
          <a href="/contact" className="hover:underline">Contact</a>
          <a href="/about" className="hover:underline">About</a>
          <a href="/signup" onClick={() => navigate('/signup')} className="hover:underline active:underline">Signup</a>
        </div>
        <div className="flex items-center space-x-2 sm:space-x-4 w-full sm:w-auto">
          <div className="relative flex-1 sm:flex-none">
            <input type="text"
              placeholder="What are you looking for?"
              className="border rounded-md text-sm px-3 py-1 w-full sm:w-60"
            />
            <a href="" className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </a>
          </div>
          <a href="" className="flex items-center">
            <img src={vector} alt="Wishlist" className="h-5 sm:h-6" />
          </a>
          <a href="" className="flex items-center">
            <img src={cart} alt="Cart" className="h-5 sm:h-6" />
          </a>
          <a href="/profile" className="flex items-center hover:bg-red-600 rounded-full p-1">
            <img src={userImg} alt="Profile" className="h-5 sm:h-6" />
          </a>
        </div>
      </nav>
      <div className="mt-3 border-t w-full"></div>
      <main>
        <div className='flex flex-col lg:flex-row'>
          <div className='exclusive-container flex flex-wrap p-4 md:p-6 lg:p-8 w-full lg:w-1/2'>
            <ul className='md:ml-8 lg:ml-32 text-black font-serif space-y-4 text-sm sm:text-base'>
              <li><a href="">Women&#39;s Fashion <FontAwesomeIcon className='womens w-3 mt-1' icon={faGreaterThan} /> </a></li>
              <li><a href="" >Men&#39;s Fashion <FontAwesomeIcon className='ml-8 sm:ml-28 w-3 mt-1' icon={faGreaterThan} /> </a></li>
              <li><a href="">Electronics</a></li>
              <li><a href="">Home & LifeStyle</a></li>
              <li><a href="">Medicine</a></li>
              <li><a href="">Sports & Outdoors</a></li>
              <li><a href="">Baby&#39;s and Toys</a></li>
              <li><a href="">Groceries & Pets</a></li>
              <li><a href="">Health & Beauty</a></li>
            </ul>
          </div>
          <div className="border-l border-gray h-96 hidden lg:block"></div>
          <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 w-full m-4 sm:m-10 sm:mr-28">
            <Carousel>
              <div className='flex flex-col sm:flex-row bg-black text-white'>
                <div className='flex justify-center items-center text-2xl sm:text-5xl mx-4 sm:mx-10 font-semibold p-4'>Up to 10% off Vouchers
                </div>
                <img className='p-3 w-full sm:w-auto' src={firstImg} alt="..." />
              </div>
              <div className='flex flex-col sm:flex-row bg-black text-white'>
                <div className='flex justify-center items-center text-2xl sm:text-5xl mx-4 sm:mx-10 font-semibold p-4'>Up to 10% off Vouchers
                </div>
                <img className='p-3 h-48 sm:h-96 w-full sm:w-96' src={secondImg} alt="..." />
              </div>
              <img src={thirdImg} alt="..." />
            </Carousel>
          </div>
        </div>
        <div className='mx-4 sm:mx-40 mt-12 sm:mt-24'>
          <div className='flex'>
            <div className='h-8 sm:h-11 w-3 sm:w-5 bg-red-600 rounded-sm mb-4 sm:mb-7'>
            </div>
            <div className='text-red-600 ml-4 sm:ml-7 text-xl sm:text-2xl font-semibold mt-1'>Today&#39;s</div>
          </div>
          <div className='flex mb-4 sm:mb-7'>
            <div className='text-3xl sm:text-5xl font-bold'>Flash Sales</div>
          </div>
          <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
              {products.map((product) => (
                <Card
                  key={product._id}
                  title={product.name}
                  description={product.description}
                  image={product.images}
                  price={product.price}
                  category={product.category} 
                />
              ))}
            </div>
          </div>
          <button className='bg-red-700 px-4 py-2.5 text-white rounded-md mx-auto flex justify-center mb-8'>Add Products</button>
        </div>
        <div className='mx-4 sm:mx-40 mt-12 sm:mt-24'>
          <div className='flex'>
            <div className='h-8 sm:h-11 w-3 sm:w-5 bg-red-600 rounded-sm mb-4 sm:mb-7'>
            </div>
            <div className='text-red-600 ml-4 sm:ml-7 text-xl sm:text-2xl font-semibold mt-1'>Categories</div>
          </div>
          <div className='flex mb-4 sm:mb-7'>
            <div className='text-3xl sm:text-5xl font-bold'>Browse By Category</div>
          </div>
          <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 sm:gap-20">
              {categories.map((category) => (
                <CategoryCard
                  key={category._id}
                  title={category.name}
                  description={category.description}
                  image={category.images[0]}
                />
              ))}
            </div>
          </div>
          <button className='bg-red-700 px-4 py-2.5 text-white rounded-md mx-auto flex justify-center mb-8'>View All Products</button>
        </div>
        <div className='my-8 sm:my-12 max-w-full flex justify-center'>
          <img src={frame} alt="Image not found" className='w-full mx-4 sm:mx-36 rounded-md h-auto' />
        </div>
        <div>
        <div className='mx-4 sm:mx-40 mt-12 sm:mt-24'>
          <div className='flex'>
            <div className='h-8 sm:h-11 w-3 sm:w-5 bg-red-600 rounded-sm mb-4 sm:mb-7'>
            </div>
            <div className='text-red-600 ml-4 sm:ml-7 text-xl sm:text-2xl font-semibold mt-1'>Featured</div>
          </div>
          <div className='flex mb-4 sm:mb-7'>
            <div className='text-3xl sm:text-5xl font-bold'>New Arrival</div>
          </div>
        </div>
        <div className='flex flex-col lg:flex-row mb-8 sm:mb-12 mx-4 sm:mx-36'>
  <div className='w-full lg:w-1/2 p-2'>
    <img src={frame2} alt="" className='w-full h-auto'/>
  </div>
  <div className='w-full lg:w-1/2 p-2'>
    <img src={frame3} alt="" className='w-full h-auto'/>
    <div className='flex flex-col sm:flex-row mt-4 sm:mt-8 gap-4 md:gap-8'>
      <div className='w-full sm:w-1/2'>
        <img src={frame4} alt="" className='w-full h-auto'/>
      </div>
      <div className='w-full sm:w-1/2 '>
        <img src={frame5} alt="" className='w-full h-auto'/>
      </div>
    </div>
  </div>
</div>
</div>
         <div className='flex flex-col sm:flex-row flex-wrap mx-4 sm:mx-16 gap-8 sm:gap-28 justify-center my-12 sm:my-28'>
         <div className="text-center">
          <img src={frame6} alt="" className='mx-auto' />
          <div className='text-xl sm:text-2xl mt-4 font-bold text-black'>
            <p>FREE AND FAST DELIVERY</p>
          </div>
          <p className='text-sm sm:text-base'>Free delivery for all orders over $140</p>
         </div>
         <div className="text-center">
          <img src={frame7} alt="" className='mx-auto'/>
          <div className='mt-4 text-xl sm:text-2xl font-bold text-black'>
            <p>24/7 CUSTOMER SERVICES</p>
          </div>
          <p className='text-sm sm:text-base'>Friendly 24/7 customer support</p>
         </div>
         <div className="text-center">
          <img src={frame8} alt="" className='mx-auto' />
          <div className='mt-4 text-xl sm:text-2xl font-bold text-black'>
            <p>MONEY BACK GUARENTEE</p>
          </div>
          <p className='text-sm sm:text-base'>We return money within 30 Days</p>
         </div>
         </div>
      </main>
      <footer className="bg-black text-white py-8">
        <div className="mx-4 sm:mx-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 px-4">
          <div className="spacing-y-4">
            <div className="text-lg font-semibold">Exclusive</div>
            <p className="my-4">Subscribe</p>
            <p>Get 10% off your first order</p>
            <form className="flex items-center border-white">
              <input type="text"
                placeholder="Enter your email"
                className="px-2 py-1.5 rounded-sm bg-black my-2 w-full" />
            </form>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Support</h3>
            <p className="text-sm sm:text-base">111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
            <p className="text-sm sm:text-base">exclusive@gmail.com</p>
            <p className="text-sm sm:text-base">+88015-88888-9999</p>
          </div>
          <div className="space-y-4">
            <div className="text-lg font-semibold">Account</div>
            <ul className="space-y-2">
              <li><a className="hover:underline text-sm sm:text-base" href="#">My Accounts</a></li>
              <li><a className="hover:underline text-sm sm:text-base" href="#">Login / Register</a></li>
              <li><a className="hover:underline text-sm sm:text-base" href="#">Cart</a></li>
              <li><a className="hover:underline text-sm sm:text-base" href="#">Wishlist</a></li>
              <li><a className="hover:underline text-sm sm:text-base" href="#">Shop</a></li>
            </ul>
          </div>
          <div className="space-y-4">
            <div className="text-lg font-semibold">Quick Link</div>
            <ul className="space-y-2">
              <li><a className="hover:underline text-sm sm:text-base" href="#">Privacy Policy</a></li>
              <li><a className="hover:underline text-sm sm:text-base" href="#">Terms Of Use</a></li>
              <li><a className="hover:underline text-sm sm:text-base" href="#">FAQ</a></li>
              <li><a className="hover:underline text-sm sm:text-base" href="#">Contact</a></li>
            </ul>
          </div>
          <div className="spacing-y-4 sm:col-span-2 lg:col-span-1">
            <div className="text-lg font-semibold">Download App</div>
            <p className="text-gray-400 text-sm mt-4">Save $3 with App New User Only</p>
            <div className="flex space-x-8 mx-3 my-3">
              <a href="http://instagram.com" target="_blank"><FontAwesomeIcon icon={faInstagram} /></a>
              <a href="http://twitter.com" target="_blank"><FontAwesomeIcon icon={faTwitter} /></a>
              <a href="http://facebook.com" target="_blank"><FontAwesomeIcon icon={faFacebookF} /></a>
              <a href="http://linkedin.com" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a>
            </div>
          </div>
        </div>
      </footer>
    </div>

  )
}
export default Home