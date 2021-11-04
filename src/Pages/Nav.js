import React from "react";
import Avatar from '@mui/material/Avatar';
function Nav() {
    return (
        <>
    <div className='Navbar'>
        <div className='logo'><img  alt='a' src='Images/logo.png' style={{width:'50px'}}/>
        <div className="title">PLACEMENTS DRIVE</div>
        </div>
        
        <div className='inernav'>
            <div className="log-in" onClick={()=>{document.getElementsByClassName("login")[0].style.display='block'}}>Log In</div>
            <div className="admin"  onClick={() => { document.getElementsByClassName("admin-log")[0].style.display = 'block' }}>Admin</div>
        </div>
    </div>
    <div className='login'>
            <div className="close" style={{ width: '100%', textAlign: 'end' }}>
                <div onClick={() => { document.getElementsByClassName("login")[0].style.display = 'none' }} >X</div>
            </div>
            <div className='log'>
                <h4>STUDENT LOGIN</h4>
                <div className="avatar"><Avatar sx={{height:120,width:120}}/></div>
                <form>
                    <input id="user" placeholder="User Id" required/> 
                    <input id='pass' placeholder='Password' type='password' required/>
                    <button type='submit' >Login</button>
                </form>
                <div className="forget">
                    Forgot Password? <span>Reset</span>
                </div>
            </div>
    </div>
    <div className='admin-log'>
            <div className="close" style={{ width: '100%', textAlign: 'end' }}>
                <div onClick={() => { document.getElementsByClassName("admin-log")[0].style.display = 'none' }} >X</div>
            </div>
            <div className='admin-login'>
                <h4>HELLO ADMIN</h4>
                <div className="avatar"><Avatar sx={{height:120,width:120}}/></div>
                <form>
                    <input id="user" placeholder="User Id" required/> 
                    <input id='pass' placeholder='Password' type='password' required/>
                    <button type='submit' >Login</button>
                </form>
                <div className="forget">
                    Forgot Password? <span>Reset</span>
                </div>
            </div>
    </div>
    </>
    )}
export default Nav;