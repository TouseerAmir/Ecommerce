import { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import './style.css'
import myImg from '../assets/pexels-shvetsa-4482900.jpg'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import { faInstagram , faTwitter, faLinkedin,faFacebookF } from "@fortawesome/free-brands-svg-icons"
import {faG} from '@fortawesome/free-solid-svg-icons'
import userImg from '../assets/user.png'
import vector from '../assets/Vector.png'
import cart from '../assets/Cart1.png'
function Signup() {
  const navigate=useNavigate();
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [username,setUsername]=useState('');
  const [role,setRole]=useState('');
  const handleSubmit= async(e)=>{
    e.preventDefault();
    try {
        let response=await axios.post("http://localhost:4000/api/v1/users/register",{email,password,username,role});
        alert("User registered sucessfully");
        window.location.href = '/login';
        console.log(response);
    } catch (error) {
        alert("Registeration failed. Please try again.");
        console.log(error);
    }
  }

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
          <main className="flex flex-col lg:flex-row">
            <div className="w-full lg:w-1/2">
           <img src={myImg} alt="Image not found" className="image w-full mb-10 sm:mb-20 mt-6 sm:mt-12" />
           </div>
         <div className="w-full lg:w-1/2 px-4 sm:ml-3">
         <div className="mt-12 sm:mt-24 flex justify-center">
           <h2 className="text-xl sm:text-2xl">Create an account</h2>
           </div>
           <div className="text-center sm:ml-72 my-1">
           Enter your details below
           </div>
           <form onSubmit={handleSubmit}>
            <div className="flex justify-center mt-6">           
           <input type="email"
           placeholder='Email'
           className="text-gray-800 border-b outline-none border-gray-300 focus:border-black mb-2 w-full sm:w-80"
           value={email}
           onChange={(e) => setEmail(e.target.value)
           } />
           </div>
           <div className="flex justify-center mt-6">
           <input type="text" 
           placeholder='Username'
           className="text-gray-800 border-b outline-none border-gray-300 focus:border-black mb-2 w-full sm:w-80"
           value={username}
           onChange={(e) =>setUsername(e.target.value)
           } />
           </div>
           <div className="flex justify-center mt-5">
           <select value={role}
                 onChange={(e) => setRole(e.target.value)}
                 defaultValue={"Role"}
                 className="text-gray-800 border-b border-gray-300 focus:border-black mb-2 w-full sm:w-80"
                >
                    <option value="role">Role</option>
                    <option value="customer">Customer</option>
                </select>
                </div>
           <div className="flex justify-center mt-5">
           <div className="relative w-full sm:w-80">
           <input
                type={showPassword ? 'text' : 'password'}
                placeholder='Password'
                className="text-gray-800 border-b outline-none border-gray-300 focus:border-black mb-2 w-full"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
           <div className="flex items-center space-x-2 mt-2">
                <input
                    type="checkbox"
                    id="showPassword"
                    checked={showPassword}
                    onChange={() => setShowPassword(!showPassword)}
                />
                <label htmlFor="showPassword" className="text-sm text-gray-600">
                    Show Password
                </label>
                </div>
                </div>
           </div>
           <div className="flex justify-center mt-4">
           <button className="register bg-red-600 rounded-md px-8 py-2 text-white w-full sm:w-80" type="submit">Register</button>
           </div>
           <div className="flex justify-center mt-4">
           <button className="register signup rounded-md px-8 py-2 text-black w-full sm:w-80">
           <FontAwesomeIcon className="mx-3 top-1" icon={faG} />
            Signup with Google</button>
           </div>
           <div className="flex justify-center mt-4">
            <p className="text-center w-full sm:w-80 px-8">Already have account?<a href="/login" className="underline ml-2">Log in</a></p>
           </div>
           </form>
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
                    <a href="http://twitter.com"  target="_blank"><FontAwesomeIcon icon={faTwitter} /></a>
                    <a href="http://facebook.com" target="_blank"><FontAwesomeIcon icon={faFacebookF} /></a>
                    <a href="http://linkedin.com" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a>
                </div>
                  </div>
                  </div>
           </footer>
        </div>
  )
}
export default Signup