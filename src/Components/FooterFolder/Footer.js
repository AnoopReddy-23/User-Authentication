import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div className='footer text-center bg-info mt-5'>
        <div className='box-container row'>
        <div className='box col-6'>
            <h3 className='m-3'>Contact Info</h3>
            <ul className='list '>
                <li className='mb-1'><a href="#">+123-456-7890</a></li>
                <li className='mb-1'><a href="#">+111-422-7890</a></li>
                <li className='mb-1'><a href="#">abc@gmail.com</a></li>
                <li className='mb-1'> <a href="#">edfg@gmail.com</a></li>
                <li className='mb-1'><a href="#">Hyderabad, India - 500070</a></li>
            </ul>
        </div>
        <div className='box col-6'>
            <h3 className='m-3'>Follow Us On</h3>
            <ul className='list'>
                <li className='mb-1'><a href="#">facebook</a></li>
                <li className='mb-1'><a href="#">Twitter</a></li>
                <li className='mb-1'><a href="#">Instagram</a></li>
                <li className='mb-1'><a href="#">Linkedin</a></li>
            </ul>
        </div>
        </div>
        <div className="credit">copyright @ 2022 by <span>Mr.Web designer</span></div>
    </div>
  )
}

export default Footer