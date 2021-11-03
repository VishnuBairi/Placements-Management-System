import React from "react";
function Nav() {
    return (
        <>
    <div className='Navbar'>
        <div className='logo'><img  alt='a' src='Images/logo.png' style={{width:'50px'}}/>
        <div className="title">PLACEMENTS DRIVE</div>
        </div>
        
        <div className='inernav'>
            <div className="log-in" onClick={()=>{document.getElementsByClassName("login")[0].style.display='block'}}>Log In</div>
            <div className="admin">Admin</div>
        </div>
    </div>
    <div className='login'>
                <div className="close" style={{ width: '100%', textAlign: 'end' }}>
                    <div onClick={() => { document.getElementsByClassName("login")[0].style.display = 'none' }} >X</div>
                </div>
                <div className='log'>
                    <form>
                        {/*View Students*/}
                    </form>
                </div>
        </div>
    </>
    )}
export default Nav;