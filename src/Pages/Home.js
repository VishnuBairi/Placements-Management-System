import React from 'react'
import Nav from "./Nav"
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import './Home.css'
function Home(){
return <>
<Nav/>
<img alt='cbit' src='Images/cbit.jpg'/>
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
                            Email: principal@cbit.ac.in<br/>
                        </p>
                </div>
                <div className="links">
                    <ul className="footer-lists">
                            <li><a href="https://www.cbit.ac.in//contact-us/">Contact Us</a></li>
                            <li><a href="https://www.cbit.ac.in//academic_post/academic/">Academics </a></li>
                            <li><a href="https://www.cbit.ac.in//admission_post/admissions/">Admissions</a></li>
                            <li><a href="https://nptel.ac.in/">NPTEL</a></li>
                            <li><a href="https://www.cbit.ac.in//placement_post/placement/">Placements</a></li>
                            <li><a href="https://swayam.gov.in/">Swayam</a></li>
                            <li><a href="https://www.cbit.ac.in//research_post/research-consultency/">Research &amp; Consultancy </a></li>
                            <li><a href="http://www.cbit.edugrievance.com/">Online Grievance </a></li>
                            <li><a href="https://www.cbit.ac.in/current_students/recruitment/">Recruitment</a></li>
                            <li><a href="https://aicte-india.org/feedback/">AICTE Feedback</a></li>
                    </ul>
                </div>
            </div>
            <div className="bottom">
                <h2>PLACEMENTS_DRIVE</h2>
                &copy; ashok_nalla, nimmala_bhoomika, dhanalaxmi_bellala
                &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; Follow Us : <a href="https://www.instagram.com/_ashok_nalla/"> <InstagramIcon/> </a>
                &emsp;<a href="https://twitter.com/Ashoknalla040"><TwitterIcon/></a>
                &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; Contact Us : 91828***54
            </div>
        </div>
</>
}
export default Home;