import React from "react";
import Avatar from "@mui/material/Avatar";
import { useState } from "react";
import { auth } from "../firebase";
import { useHistory } from "react-router";
function Nav() {

  const [adminEmail, setAdminEmail] = useState("");
  const [adminPass, setAdminPass] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function adminLogin(event) {
    event.preventDefault();

    try {
      setError("");
      setLoading(true);
      if(process.env.REACT_APP_ADMIN_EMAIL===adminEmail){
        await auth.signInWithEmailAndPassword(adminEmail, adminPass);
        localStorage.setItem('type','admin')
        window.location.href="/admin-dashboard"
      }
      else{
        setError("You are not admin");
        setLoading(false);
      }
      // history.push("/admin-dashboard");
      return
    } catch {
      setError("Incorrect username/password ");
    }

    setAdminEmail("");
    setAdminPass("");
    setLoading(false);
    
  }
    const [userEmail, setUserEmail] = useState("");
    const [userPass, setUserPass] = useState("");
    const [uerror, setUerror] = useState("");

    async function userLogin(event) {
    event.preventDefault();

    try {
      setError("");
      setLoading(true);
      if(process.env.REACT_APP_ADMIN_EMAIL!==userEmail){
        await auth.signInWithEmailAndPassword(userEmail, userPass);
       localStorage.setItem('type','user')
      // const authw=auth.getAuth()
      // console.log(cred.)uid
      history.push("/student-dashboard");
      }
      else{
        setUerror("You are not student");
        setLoading(false);
      }
       
    } catch {
      setUerror("Incorrect username/password ");
    }

    setAdminEmail("");
    setAdminPass("");
    setLoading(false);
    
  }

  return (
    <>
      <div className="Navbar">
        <div className="logo">
          <img alt="a" src="Images/mgitlogo.png" style={{ width: "50px" }} />
          <div className="title">MGIT PLACEMENTS</div>
        </div>

        <div className="inernav">
          <div
            className="log-in"
            onClick={() => {
              document.getElementsByClassName("login")[0].style.display =
                "block";
            }}
          >
            Student
          </div>
          <div
            className="admin"
            onClick={() => {
              document.getElementsByClassName("admin-log")[0].style.display = "block";
            }}
          >
            Admin
          </div>
        </div>
      </div>
      <div className="login">
        <div className="close" style={{ width: "100%", textAlign: "end" }}>
          <div
            onClick={() => {
              document.getElementsByClassName("login")[0].style.display = "none";
            }}
          >
            X
          </div>
        </div>
        <div className="log">
          <h4>STUDENT LOGIN</h4>
          <div className="avatar">
            <Avatar sx={{ height: 120, width: 120 }} />
          </div>
          <form>
            <input id="user" placeholder="User Id" value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)} required />
            <input id="pass" placeholder="Password" type="password"value={userPass}
              onChange={(e) => setUserPass(e.target.value)} required />
            <button type="submit" onClick={userLogin}>
            {loading ? "Loading..." : "Login"}
            </button>
          </form>
          <div className="forget">
          {uerror && <p>{uerror}</p>}
          </div>
        </div>
      </div>
      <div className="admin-log">
        <div className="close" style={{ width: "100%", textAlign: "end" }}>
          <div
            onClick={() => {
              document.getElementsByClassName("admin-log")[0].style.display =
                "none";
            }}
          >
            X
          </div>
        </div>
        <div className="admin-login">
          <h4>HELLO ADMIN</h4>
          <div className="avatar">
            <Avatar sx={{ height: 120, width: 120 }} />
          </div>
          <form>
            <input type='email'
              value={adminEmail}
              onChange={(e) => setAdminEmail(e.target.value)}
              id="user"
              placeholder="Email"
              required
            />
            <input
              value={adminPass}
              onChange={(e) => setAdminPass(e.target.value)}
              id="pass"
              placeholder="Password"
              type="password"
              required
            />
            <button onClick={adminLogin} type="submit">
              {loading ? "Loading..." : "Login"}
            </button>
          </form>
          <div className="forget">
          {error && <p>{error}</p>}
          </div>
          
        </div>
      </div>
    </>
  );
}
export default Nav;
