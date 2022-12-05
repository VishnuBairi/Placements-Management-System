import React from 'react'
import Nav from "./Nav"
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import './Home.css'
function Home(){
return <>
<Nav/>
<img alt='mgit'  src='https://mgit.ac.in/wp-content/uploads/2022/10/ABCDEView-scaled.jpg'/>
<div className='footer'>
            <div className="footer-container">
                <div className="about">
                        <p className="footer-subscription-heading">
                            College Contact Info</p>
                            <p className="footer subscription-text">
                            Gandipet, Hyderabad, Telangana,<br/>
                            PIN : 500075<br/>
                            Phone: 040-24193276<br/>
                            Mobile: 8466997201<br/>
                            For Admissions Enquiry: 8466997216<br/>
                            Email: principal@mgit.ac.in<br/>
                        </p>
                </div>
                <div className="links">
                    <ul className="footer-lists">
                            <li><a href="http://202.65.141.245/contact.html">Contact Us</a></li>
                            <li><a href="http://202.65.141.245/About_aes.html">Academics </a></li>
                            <li><a href="https://mgit.ac.in/academic/">Admissions</a></li>
                            <li><a href="https://nptel.ac.in/">NPTEL</a></li>
                            <li><a href="http://202.65.141.245/placements.html">Placements</a></li>
                            <li><a href="https://swayam.gov.in/">Swayam</a></li>
                            <li><a href="http://202.65.141.245/mgit-rd.html">Research &amp; Consultancy </a></li>
                    </ul>
                </div>
            </div>
            <div className="bottom">
                <h2>MGIT PLACEMENTS</h2>
                &copy; Bairi vishnu
                &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; Follow Us : <a href="https://www.instagram.com/__vi_sh_nu__bai_ri/"> <InstagramIcon/> </a>
                &emsp;<a href="https://twitter.com/@Vishnu39363357"><TwitterIcon/></a>
                &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; Contact Us : 98498***54
            </div>
        </div>
</>
}
export default Home;