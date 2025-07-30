import { useState } from 'react'
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigate } from 'react-router-dom'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faTwitter, faLinkedin, faFacebookF } from "@fortawesome/free-brands-svg-icons"
import 'flowbite';
import './style.css';
import emailIcon from '../assets/icons-mail.png'
import phoneIcon from '../assets/icons-phone.png'
import userImg from '../assets/user.png'
import vector from '../assets/Vector.png'
import cart from '../assets/Cart1.png'
function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('http://localhost:4000/api/v1/users/contactUs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      
      if (response.ok) {
        setFormStatus('Message sent successfully!');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        setFormStatus(result.error || 'Failed to send message.');
      }
    } catch (error) {
      setFormStatus('Something went wrong. Please try again.');
    }
  };
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
      <div className="container mx-4 sm:ml-36 px-4 py-8 sm:py-12 w-full">
    <div className="flex flex-col lg:flex-row gap-4 w-full">
      <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md w-full lg:w-1/4">
        <h2 className="text-xl sm:text-2xl font-bold mb-4">Contact Information</h2>
        <div className='flex flex-wrap my-4'>
          <div>
          <img src={phoneIcon} alt="" />
          </div>
            <h1 className='mt-2 ml-3 font-semibold'>Call To Us</h1>
        </div>
        <p className="mb-2 text-sm sm:text-base">We are available 24/7 days in a week</p>
        <p className="mb-2 text-sm sm:text-base"><strong>Phone:</strong> +92 331 9838178</p>
        <p className="text-sm sm:text-base"><strong>Address:</strong> 123 Street Name, City, Country</p>
        <div className='my-4 border-t border-gray-400'></div>
        <div className='flex flex-wrap my-4'>
          <div>
          <img src={emailIcon} alt="" />
          </div>
            <h1 className='mt-2 ml-3 font-semibold'>Write To Us</h1>
        </div>
        <p className="mb-2 text-sm sm:text-base">Fill out form and we will contact you within 24 hours</p>
        <p className="mb-2 text-sm sm:text-base"><strong>Email:</strong>picckone567@gmail.com</p>
        <p className="text-sm sm:text-base"><strong>Emails:</strong>support@exclusives.com</p>
      </div>
      <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md w-full lg:w-2/3">
        <h2 className="text-xl sm:text-2xl font-bold mb-4">Send Us a Message</h2>
        <form onSubmit={handleSubmit} method="POST" className="space-y-4">
            <div className='flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-7'>
                <div className="w-full sm:w-auto">
            <input type="text"  value={formData.name} onChange={handleChange} placeholder='Your Name*' id="name" name="name" className="bg-gray-100 w-full sm:w-60 mt-1 p-2
            border-none rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500" required />
            </div>
          <div className="w-full sm:w-auto">
            <input type="email" value={formData.email} onChange={handleChange} placeholder='Your Email*' id="email" name="email" className="bg-gray-100 w-full sm:w-60 mt-1 p-2 border border-none rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500" required />
          </div>
          <div className="w-full sm:w-auto">
            <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder='Your Phone*' className="w-full sm:w-60 mt-1 p-2 bg-gray-100 border-none rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500" required />
            </div>
          </div>
          <div>
            <textarea id="message" name="message" rows="4" value={formData.message} onChange={handleChange} placeholder='Your Message' className="h-32 sm:h-52 w-full mt-1 p-2 border-none bg-gray-100 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500" required></textarea>
          </div>
          <div className='flex justify-center sm:justify-end'>
            <button type="submit" className="w-full sm:w-60 bg-red-600 text-white py-2 px-4 rounded-sm hover:red-blue-700 transition duration-300">Send Message</button>
          </div>
        </form>
        {formStatus && <p className="mt-4 text-center">{formStatus}</p>}
      </div>
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
export default Contact;