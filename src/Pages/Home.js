import React from 'react'
import Nav from "./Nav"
import './Home.css'
function Home(){
return <>
<Nav/>
<img alt='cbit' src='Images/cbit.jpg'/>
<div className="footer">
  <div className="footer-container">
    <section className="footer-subscription">
      <p className="footer-subscription-heading">
      College Contact Info
      Gandipet, Hyderabad, Telangana,
      PIN : 500075
      Phone: 040-24193276
      Mobile: 8466997201
      For Admissions Enquiry: 8466997216
      Email: principal@cbit.ac.in
      </p>
      <p className="footer subscription-text">
      Learn how to build a React website from scratch in this tutorial. We will use React Hooks and React Router for this beginner React JS Project
      </p>
      <div className="input-areas">
        <button>subscribe</button>
      </div>
    </section>
    <div className="footer-links">
      <div className="footer-link-wrapper">
        <div className="footer-link-items">
          <h2>About Us</h2>
        </div>
      </div>
    </div>
  </div>
</div>
</>
}
export default Home;