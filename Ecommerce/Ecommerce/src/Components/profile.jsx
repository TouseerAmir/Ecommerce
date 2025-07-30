import { useState } from 'react'
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigate } from 'react-router-dom'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faTwitter, faLinkedin, faFacebookF } from "@fortawesome/free-brands-svg-icons"
import 'flowbite';
import './style.css';
import userImg from '../assets/user.png'
import vector from '../assets/Vector.png'
import cart from '../assets/Cart1.png'
function Profile() {
    const navigate = useNavigate();
     const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        address: '',
        email: '',
        oldPassword: '',
        newPassword: '',
        confirmPassword: ''
    });

    // State for handling success or error messages
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    // Handle input change
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(''); // Reset error before making request
        setMessage(''); // Reset message

        if (formData.newPassword !== formData.confirmPassword) {
            setError("New Password and Confirm Password do not match.");
            return;
        }

        try {
          const token = localStorage.getItem('accessToken');
          if(token) {
            const response = await fetch('http://localhost:4000/api/v1/users/changePassword', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            if (response.status === 200) {
                setMessage(data.message);
            } else {
                setError(data.error || 'An error occurred.');
            }
          }
        } catch (err) {
            setError('An error occurred while updating the profile.');
        }
    };
  return (
    <div className="">
      <header>
        <div className='bg-black text-white align-text-top flex flex-wrap py-3 justify-center'>
          <div className="mx-96 justify-center mt-2">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! 
            <button className='ml-2 mt-0 underline'>ShopNow</button>
          </div>
          <select className="bg-black text-white border-none outline-none mr-12">
              <option value="en">English</option>
              <option value="en">Hindi</option>
              <option value="en">Urdu</option>
            </select>
        </div>
      </header>
      <nav className="mt-5 container flex mx-auto justify-between items-center">
        <div className="text-2xl font-bold ml-14">Exclusive</div>
        <div className="flex spacing-x-6">
          <a href="/home" className="hover:underline">Home</a>
          <a href="/contact" className="ml-8 hover:underline">Contact</a>
          <a href="/about" className="ml-8 hover:underline">About</a>
          <a href="/signup" onClick={() => navigate('/signup')} className="ml-8 hover:underline active:underline">Signup</a>
        </div>
        <div className="flex relative mr-4">
          <input type="text"
            placeholder="What are you looking for?"
            className="border rounded-md text-sm px-3 py-1 w-60"
          />
          <a href="" className="absolute left-52 top-1  text-gray-400"><FontAwesomeIcon icon={faMagnifyingGlass} /></a>
          <a href="" className="ml-4 mt-1"><img src={vector} alt="" /></a>
            <a href="" className="ml-4 mt-1"><img src={cart} alt="" /></a>
            <a href="/profile" className="ml-4 shadow-transparent hover:bg-red-600"><img className='' src={userImg} alt="" /></a>
        </div>
      </nav>
      <div className="mt-3 border-t w-full"></div>
      <main>
      <div className="container ml-36 px-4 py-12 w-full">
      {/* grid grid-cols-1 md:grid-cols-2 gap-4 */}
    <div className="flex flex-wrap gap-4 w-full">
      <div className="bg-white p-6 rounded-lg shadow-md w-1/4">
        <div className='my-4'>
          <div>
          </div>
            <h1 className='mt-2 font-bold ml-4'>Manage my Account</h1>
            <div className='ml-12 my-2 text-gray-700 '>
             <div>
                <a className='hover:text-red-500 active:text-red-500' href="/profile">My Profile</a>
                </div>
                <div>
                <a className='' href="">Address Book</a>
                </div>
                <div>
                <a className='' href="">My Payment Options</a>
                </div>
            </div>
        </div>
        <div className='my-4'>
          <div>
          </div>
            <h1 className='mt-2 font-bold ml-4'>My Orders</h1>
            <div className='ml-12 my-2 text-gray-700 '>
                <div>
                <a className='' href="">My Returns</a>
                </div>
                <div>
                <a className='' href="">My Cancellation</a>
                </div>
            </div>
        </div>
        <div className='my-4'>
          <div>
          </div>
            <h1 className='mt-2 font-bold ml-4'>My Wishlist</h1>
        </div>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md w-2/3">
        <h2 className="text-2xl font-bold mb-4 mx-10">Edit your Profile</h2>
        {message && <div className="text-green-500">{message}</div>}
        {error && <div className="text-red-500">{error}</div>}
        <form onSubmit={handleSubmit} className="space-y-4">
            <div className='flex flex-wrap gap-16 mx-10'>
                <div>
            <label className='my-4 font-semibold'>First Name</label><br />    
            <input type="text" placeholder='John' id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} className="bg-gray-100 w-72 mt-1 p-2
            border-none rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500" required />
            </div>
          <div>
            <label className='my-4 font-semibold'>Last Name</label><br />
            <input type="text" placeholder='Doe' id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} className="bg-gray-100 w-72 mt-1 p-2 border border-none rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500" required />
          </div>
          </div>
          <div className='flex flex-wrap gap-16 mx-10'>
                <div>
            <label className='my-4 font-semibold'>Email</label><br />    
            <input type="email" placeholder='Doe123@gmail.com' id="email" name="email" value={formData.email} onChange={handleChange} className="bg-gray-100 w-72 mt-1 p-2
            border-none rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500" required />
            </div>
          <div>
            <label className='my-4 font-semibold'>Address</label><br />
            <input type="text" placeholder='Sargojra garbi , Street no 17, Chakwal' id="address" name="address"
            value={formData.address} onChange={handleChange} className="bg-gray-100 w-72 mt-1 p-2 border border-none rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500" required />
          </div>
          </div>
          <div className=''>
          <label className='my-4 font-semibold mx-10'>Password Changes</label><br />
          <input type="password" placeholder='Current Password'  name="oldPassword" value={formData.oldPassword} onChange={handleChange} className="password bg-gray-100 mx-10  mt-1 p-2 border border-none rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500" required />
          <input type="password" placeholder='New Password'  name="newPassword" value={formData.newPassword}
          onChange={handleChange} className="password bg-gray-100 mx-10  mt-3 p-2 border border-none rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500" required />
          <input type="password" placeholder='Confirm New Password'  name="confirmPassword" value={formData.confirmPassword}
          onChange={handleChange} className="password bg-gray-100 mx-10  mt-3 p-2 border border-none rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500" required />
          </div>
          <div className='buttons flex justify-end gap-2'>
          <button type="button" className="w-40  bg-white text-black py-2 px-4 rounded-sm hover:red-blue-700 transition duration-300">Cancel</button>
            <button type="submit" className="w-40  bg-red-600 text-white py-2 px-4 rounded-sm hover:red-blue-700 transition duration-300">Save Changes</button>
          </div>
        </form>
      </div>
    </div>
  </div>
      </main>
      <footer className="bg-black text-white py-8">
        <div className="mx-16 grid grid-cols-1 md:grid-cols-5 gap-8 px-4">
          <div className="spacing-y-4">
            <div className="text-lg font-semibold">Exclusive</div>
            <p className="my-4">Subscribe</p>
            <p>Get 10% off your first order</p>
            <form className="flex items-center border-white">
              <input type="text"
                placeholder="Enter your email"
                className="px-2 py-1.5 rounded-sm bg-black  my-2" />
            </form>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Support</h3>
            <p>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
            <p>exclusive@gmail.com</p>
            <p>+88015-88888-9999</p>
          </div>
          <div className="space-y-4">
            <div className="text-lg font-semibold">Account</div>
            <ul className="space-y-2">
              <li><a className="hover:underline" href="#">My Accounts</a></li>
              <li><a className="hover:underline" href="#">Login / Register</a></li>
              <li><a className="hover:underline" href="#">Cart</a></li>
              <li><a className="hover:underline" href="#">Wishlist</a></li>
              <li><a className="hover:underline" href="#">Shop</a></li>
            </ul>
          </div>
          <div className="space-y-4">
            <div className="text-lg font-semibold">Quick Link</div>
            <ul className="space-y-2">
              <li><a className="hover:underline" href="#">Privacy Policy</a></li>
              <li><a className="hover:underline" href="#">Terms Of Use</a></li>
              <li><a className="hover:underline" href="#">FAQ</a></li>
              <li><a className="hover:underline" href="#">Contact</a></li>
            </ul>
          </div>
          <div className="spacing-y-4">
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
export default Profile;