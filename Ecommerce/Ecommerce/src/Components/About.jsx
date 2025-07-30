import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigate } from 'react-router-dom'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faTwitter, faLinkedin, faFacebookF } from "@fortawesome/free-brands-svg-icons"
import 'flowbite';
import './style.css'
import frame6 from '../assets/frame6.png'
import frame7 from '../assets/frame7.png'
import frame8 from '../assets/frame8.png'
import sideimg from '../assets/Side Image.png'
import service from '../assets/Services.png'
import service1 from '../assets/Services (1).png'
import service2 from '../assets/Services (2).png'
import service3 from '../assets/Services (3).png'
import image1 from '../assets/image1.webp'
import image2 from '../assets/image2.webp'
import image3 from '../assets/image3.webp'
import userImg from '../assets/user.png'
import vector from '../assets/Vector.png'
import cart from '../assets/Cart1.png'
function About() {
    const navigate = useNavigate();
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
        
        <div className='first flex flex-col lg:flex-row flex-wrap my-8 sm:my-16'>
            <div className='w-full lg:w-1/2 my-6 sm:my-12 px-4 sm:pl-40'>
                <h1 className='text-2xl sm:text-4xl font-semibold'>Our Story</h1>
                <p className='my-4 sm:my-6 text-sm sm:text-base'>Launched in 2015,Exclusive in South Asia premier online shopping marketplace with an active presence in Bangladesh.Supported by a wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sailers and 300 brands and services 3 millions customers across the region.</p>
                <p className='text-sm sm:text-base'>Exclusive has more than 1 Million products to offer, growing at a very fast.Exclusive offers a diverse assotment in categories ranging from consumer.</p>
            </div>
            <div className='w-full lg:w-1/2 px-4 sm:ml-10 sm:mr-0'>
            <img src={sideimg} alt="" className='w-full h-auto' />
            </div>
        </div>
        <div className='second'>
        <div className="container mx-4 sm:ml-40 my-12 sm:my-24">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 h-auto sm:h-48">
      <div className="border border-gray-400 p-4 text-center rounded-md">
        <img src={service} alt="" className='mx-auto h-8 sm:h-12'/>
        <h1 className='my-2 font-bold text-xl sm:text-2xl'>10.5K</h1>
        <p className='text-sm sm:text-base'>Sailers active our side</p>
      </div>
      <div className="border border-gray-400 p-4 text-center rounded-md bg-red-500 overflow-auto">
      <img src={service3} alt="" className='mx-auto h-8 sm:h-12'/>
      <h1 className='my-2 font-bold text-xl sm:text-2xl'>33K</h1>
      <p className='text-sm sm:text-base'>Monthly Product Sale</p>
      </div>
      <div className="border border-gray-400 p-4 text-center rounded-md">
      <img src={service1} alt="" className='mx-auto h-8 sm:h-12'/>
      <h1 className='my-2 font-bold text-xl sm:text-2xl'>45.5K</h1>
      <p className='text-sm sm:text-base'>Customer active in our site</p>
      </div>
      <div className="border border-gray-400 p-4 text-center rounded-md">
      <img src={service2} alt="" className='mx-auto h-8 sm:h-12' />
      <h1 className='my-2 font-bold text-xl sm:text-2xl'>25K</h1>
      <p className='text-sm sm:text-base'>Annual gross sale in our site</p>
      </div>
    </div>
  </div>
        </div>
        <div className='third'>
        <div className="container mx-4 sm:mx-36 px-4 py-8">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-3">
      <div className="text-center">
        <img src={image1} alt="Image 1" className="w-full sm:w-80 h-64 sm:h-96 object-cover rounded-lg mx-auto" />
        <h1 className='text-2xl sm:text-3xl font-semibold mt-4'>Tom Cruise</h1>
        <div className='ml-1'>Founder & Chairman</div>
        <div className="flex space-x-4 mx-1 my-3 justify-center">
              <a href="http://instagram.com" target="_blank"><FontAwesomeIcon icon={faInstagram} /></a>
              <a href="http://twitter.com" target="_blank"><FontAwesomeIcon icon={faTwitter} /></a>
              <a href="http://facebook.com" target="_blank"><FontAwesomeIcon icon={faFacebookF} /></a>
            </div>
      </div>
      <div className="text-center">
        <img src={image2} alt="Image 2" className="w-full sm:w-80 h-64 sm:h-96 object-cover rounded-lg mx-auto" />
        <h1 className='text-2xl sm:text-3xl font-semibold mt-4'>Emma Watson</h1>
        <div className='ml-1'>Managing Director</div>
        <div className="flex space-x-4 mx-1 my-3 justify-center">
              <a href="http://instagram.com" target="_blank"><FontAwesomeIcon icon={faInstagram} /></a>
              <a href="http://twitter.com" target="_blank"><FontAwesomeIcon icon={faTwitter} /></a>
              <a href="http://facebook.com" target="_blank"><FontAwesomeIcon icon={faFacebookF} /></a>
            </div>
      </div>
      <div className="text-center sm:col-span-2 lg:col-span-1">
        <img src={image3} alt="Image 3" className="w-full sm:w-80 h-64 sm:h-96 object-cover rounded-lg mx-auto" />
        <h1 className='text-2xl sm:text-3xl font-semibold mt-4'>Will Smith</h1>
        <div className='ml-1'>Product Designer</div>
        <div className="flex space-x-4 mx-1 my-3 justify-center">
              <a href="http://instagram.com" target="_blank"><FontAwesomeIcon icon={faInstagram} /></a>
              <a href="http://twitter.com" target="_blank"><FontAwesomeIcon icon={faTwitter} /></a>
              <a href="http://facebook.com" target="_blank"><FontAwesomeIcon icon={faFacebookF} /></a>
            </div>
      </div>
    </div>
  </div>
        </div>
      <div className='flex flex-col sm:flex-row flex-wrap mx-4 sm:mx-16 gap-8 sm:gap-28 justify-center my-16 sm:my-28'>
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
export default About;