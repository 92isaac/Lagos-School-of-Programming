import React from 'react'
import './Footer.css'
import FOOTLOGO from '../../images/logo.png'
// import {Link}from 'react-router-dom'import 
import POL from '../../images/Polygon-1.png'
import POL1 from '../../images/Polygon-2.png'

function Footer() {
  return (
    <div>
        <div className='footer-grids'>
            <div className='footer-grid1'>
                <a href='/'>
               <img src={FOOTLOGO} alt='' className='foot-img' width="200" height="50"/>
               </a>

               <p>At <span>LASOP</span>, we are not static but dynamic. We are evolving with latest trends in technology. We are determined to meet the demands of our students and making Nigeria the tech-hub of Africa and the world at large.</p>

               <a href="mailto:info@lasop.net" ><i className='fas fa-envelope'></i>info@lasop.net |</a>
               <br/>
               <a href="tel:+234 702 571 3326" target="_blank"><i className='fas fa-phone'></i>+234 702 571 3326 
 |              +234 807 402 4260</a>
               <br/>
               <a href="https://wa.me/7025713326" target="_blank"><i className="fa-brands fa-whatsapp-square"></i>+234 702 571 3326</a>
               <br/>
               <a href="https://www.facebook.com/lasopdotnet" target="_blank"><i className="fa-brands fa-facebook-square"></i>Facebook</a>
               <br/>
               <a href="https://www.instagram.com/lasopdotnet" target="_blank"><i className="fa-brands fa-instagram-square"></i>Instagram</a>
               <br/>
               <a href="https://twitter.com/Lasopdotnet" target="_blank"><i className="fa-brands fa-twitter-square"></i>Twitter</a>
               <br/>
               <a href="https://linkedin.com/company/lasopdotnet" target="_blank"><i className="fa-brands fa-linkedin"></i>LinkedIn</a>
            </div>
            
            <div className='Footer-grid2'>
                <h5>Quick Links</h5>
                <a href='/blog'>Our Blog</a>
                <a href='/contact'>Contact Us</a>
                <a href='/faq'>FAQ</a>

            </div>
            <div className='Footer-grid3'>
                <h5>About</h5>
                <a href='/company'>The Company</a>
                <a href='/team'>The Team</a>
                <a href='/mentor'> The Course Mentor</a>
                <a href='/director'>Non Executive Director</a>

            </div>
            <div className='Footer-grid4'>
                <img src={POL} className='pol1' />
                <img src={POL1} className='pol2'/>
            </div>

        </div>
    </div>
  )
}

export default Footer