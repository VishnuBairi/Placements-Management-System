import React from "react";
function Nav() {
    return <div className='Navbar'>
        <div className='logo'><img  alt='a' src='Images/logo.png' style={{width:'50px'}}/>
        <div className="title">PLACEMENTS DRIVE</div>
        </div>
        
        <div className='inernav'>
            <div className="log-in">Log In</div>
            <div className="admin">Admin</div>
        </div>
    </div>
}
export default Nav;