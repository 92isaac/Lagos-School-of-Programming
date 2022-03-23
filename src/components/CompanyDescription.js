import React from 'react'
import './CompanyDescription.css'
import CompanyNav from './navbarfiles/CompanyNav'
// import VID from '../images/vid-1.mp4'

function CompanyDecsription() {
  return (
    <div>
        
        <div className='wrap'>
            <div className='head'>
            <h2>The Company</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed suscipit vel felis nec posuere. Fusce ac suscipit nulla, sit amet feugiat nisl. Vestibulum vitae vehicula enim. Vestibulum interdum tortor dapibus, sagittis metus a, euismod nisl. Proin tempor est vitae tortor tincidunt feugiat. Aenean volutpat turpis eget erat aliquam, vel lacinia dolor volutpat. Vivamus dictum </p>
            </div>
            <video src='/videos/video-3.mp4'type='video/mp4' controls/>
             

        </div>
    </div>
  )
}

export default CompanyDecsription