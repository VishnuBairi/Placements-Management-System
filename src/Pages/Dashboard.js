import React from "react";
import { useEffect, useState } from "react";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import DashboardIcon from "@mui/icons-material/Dashboard";
import BusinessIcon from "@mui/icons-material/Business";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import PersonIcon from "@mui/icons-material/Person";
import MenuIcon from "@mui/icons-material/Menu";
import "./Dashboard.css";
import Companies from "./Companies";
import Students from "./Students";
import LogoutIcon from '@mui/icons-material/Logout';
import { db, auth } from "../firebase";
import { useHistory } from "react-router";
import { Bar } from 'react-chartjs-2'

function Dashboard() {
  var [click, setClick] = useState('dash')
  var [cName, setCName] = useState(["active", "", "", "", ""])
  const [companies, setCompanies] = useState([]);
  useEffect(() => {
    db.collection("Companies").onSnapshot((snapshot) => {
      var temp = []

      for (let i of snapshot.docs) {
        temp.push({
          cname: i.data().cName,
          title: i.data().title,
          cutOff: i.data().cutOff,
          branches: i.data().branches,
          date: i.data().date,
          description: i.data().description,
          docid: i.id,
        })

      }
      setCompanies(temp);
      // snapshot.docs.map(async(doc) => await )

      // setCompanies(
      //   snapshot.docs.map((doc) => ({;
      //     cname: doc.data().cName,
      //     title: doc.data().title,
      //     cutOff: doc.data().cutOff,
      //     branches: doc.data().branches,
      //     date: doc.data().date,
      //     description: doc.data().description,
      //   }))
      // );
    });
  }, []);
  var [students, setStudents] = useState([]);
  useEffect(() => {
    db.collection("Students").onSnapshot((snapshot) => {
      setStudents(
        snapshot.docs.map((doc) => ({
          sname: doc.data().sname,
          suser: doc.data().sid,
          semail: doc.data().semail,
          resume : doc.data().resume,
        }))
      );
    });
  }, []);

  const addStudent = (e) => {
    e.preventDefault();
    const email = document.getElementById("semail").value;
    const password = document.getElementById("suser").value;
    const sname = document.getElementById("sname").value;
    //creating user authentication
    if(password.length===12)
    {
      try {
        auth.createUserWithEmailAndPassword(email, password).then(cred => {
          db.collection('Students').doc(cred.user.uid).set({
            sname: sname,
            sid: password,
            semail: email,
            branch: "",//document.getElementById('Branch').value,
            gender: "",//gender,
            cgpa: "",//document.getElementById('cgpa').value,
            resume: "",
            contact: "",// document.getElementById('contact').value,
          })
        });
      }
      catch {
      }
      window.confirm("Student Added");
      document.getElementById("sform").reset();
    }
    else{
      alert("Please enter the valid UserId!!")
    }
    
  };
  const addCompany = (e) => {
    e.preventDefault();
    let name = document.getElementById("name").value;
    let title = document.getElementById("title").value;
    let desc = document.getElementById("desc").value;
    let cutOff = document.getElementById("cutOff").value;
    let branch = document.getElementById("branch").value;
    let date = document.getElementById("date").value;
    if(name!==''&&title!==''&&desc!==''&&cutOff!==''&&branch!==''&&date!==''){
      db.collection("Companies").add({
      cName: name,
      description: desc,
      title: title,
      cutOff: cutOff,
      branches: branch,
      date: date,
      timestamps: new Date(),
    });
    window.confirm("Company Added");
    document.getElementById('cform').reset();
  }
  else{
    alert("Fill All Fields")
  }
  };

  const history = useHistory();

  async function logOut(event) {
    event.preventDefault();
    try {
      await auth.signOut();
      history.replace('/');
    }
    catch {

    }
  }

  return (
    <>
      <input type="checkbox" id="nav-toggle" />
      <div className="sidebar">
        <div className="sidebar-brand">
          <h1>
            <span>
              <img
                alt="cbit"
                src="https://www.cbit.ac.in/wp-content/themes/CBIT/images/logo.png"
                height="80"
                width="100"
              />
            </span>
          </h1>
        </div>

        <div className="sidebar-menu">
          <ul>
            <li>
              <div id="a" className={cName[0]} onClick={() => { setCName(["active", "", "", "", ""]); setClick('dash'); }}>
                <span>
                  <DashboardIcon />
                </span>
                <span>Dashboard</span>{" "}
              </div>
            </li>
            <li>
              <div
                id="a" className={cName[1]} onClick={() => { setCName(["", "active", "", "", ""]); setClick('addstudent'); }}>
                <span>
                  <PersonAddAlt1Icon />
                </span>
                <span>Add Student</span>{" "}
              </div>
            </li>
            <li>
              <div
                id="a" className={cName[2]} onClick={() => { setCName(["", "", "active", "", ""]); setClick('viewstudent'); }}>
                {/**document.getElementsByClassName(
                    "view-students"
                  )[0].style.display = "block"; */}
                <span>
                  <PersonSearchIcon />
                </span>
                <span>View Students</span>{" "}
              </div>
            </li>
            <li>
              <div
                id="a"
                className={cName[3]} onClick={() => { setCName(["", "", "", "active", ""]); setClick('addcompany'); }} >
                <span>
                  <AddBusinessIcon />
                </span>
                <span>Add Company</span>{" "}
              </div>
            </li>

            <li>
              <div id="a" className={cName[4]} onClick={() => { setCName(["", "", "", "", "active"]); setClick('viewcompany'); }}>
                <span>
                  <BusinessIcon />
                </span>
                <span>View Companies</span>{" "}
              </div>
            </li>
            <li>
              <div id="a"  className={cName[5]} onClick={() => {setCName(["", "", "", "","","active"]);setClick('Insights')}}>
                <span>
                  <InsertChartIcon />
                </span>
                <span>Insights</span>{" "}
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="main-content">
        <header>
          <h2>
            <label htmlFor="nav-toggle">
              <span>
                <MenuIcon />
              </span>
            </label>
            Dashboard
          </h2>

          <div className="user-wrapper">
            <span>
              {" "}
              <PersonIcon />
            </span>
            <div>
              <h4>Admin</h4>
            </div>
            <div onClick={logOut}>
              <LogoutIcon />
            </div>
          </div>
        </header>
        
        <main>
        <div className="cards">
                          {click==='dash'?<div className="card-single">
                                              {companies.map((company) => {
                                                return (
                                                <Companies
                                                cname={company.cname}
                                                title={company.title}
                                                cutOff={company.cutOff}
                                                description={company.description}
                                                branches={company.branches}
                                                date={company.date}
                                                docid={company.docid}
                                                />
                                              );
                                              })}
                            </div>: click==='addstudent'?
                            <div className="add-student">
                              <div className="student">
                              Add Student Details
                              <form id="sform">
                              <input placeholder="Student Name" id="sname" required />
                              <input placeholder="Student Id" id="suser" pattern="[0-9]{12}" required />
                              <input type ="email" placeholder="Email Id" id="semail" required />
                              <input type ="submit" value="Add Student" onClick={addStudent}/>
                              </form>
                              </div>
                            </div>: click==='viewstudent'?
                            <div className="stud">
                                {students.map((student) => {
                                  return (
                                  <Students
                                  sname={student.sname}
                                  suser={student.suser}
                                  semail={student.semail}
                                  resume={student.resume}
                                  />
                                );
                                })}
                            </div>: click==='addcompany'?
                            <div className="add-company">
                            <div className="add">
                            <h4>ADD COMPANY DETAILS HERE</h4>
                            <form id='cform'>
                          {/*Add Company Details*/}
                            <input id="name" placeholder="Company Name" />
                            <input id="title" placeholder="Job Title" />
                            <textarea
                            id="desc"
                            placeholder="Job Description"
                            cols="30"
                            rows="10"
                            ></textarea>
                            <input id="branch" placeholder="Eligible Branches" />
                            <input id="cutOff" placeholder="Cut-Off" />
                            <input id="date" type ="date" />
                            <button type ="submit" onClick={addCompany}>
                            Add Company
                            </button>
                            </form>
                            </div>
                            </div>: click==='viewcompany'?
                              <div className="card-single">
                              {companies.map((company) => {
                                return (
                                <Companies
                                cname={company.cname}
                                title={company.title}
                                cutOff={company.cutOff}
                                description={company.description}
                                branches={company.branches}
                                date={company.date}
                                />
                              );
                              })}
                                </div>: 
                                <><Bar
                                data={{
                                  labels: ['2014-2015', '2015-2016', '2016-2017', '2017-2018', '2018-2019', '2019-2020'],
                                  datasets: [{
                                    label: 'No of Students Selected',
                                    data: [1176, 1335, 1363, 961, 1217, 1219],
                                    backgroundColor: [
                                        'rgba(255, 99, 132, 0.2)',
                                        'rgba(54, 162, 235, 0.2)',
                                        'rgba(255, 206, 86, 0.2)',
                                        'rgba(75, 192, 192, 0.2)',
                                        'rgba(153, 102, 255, 0.2)',
                                        'rgba(255, 159, 64, 0.2)'
                                    ],
                                    borderColor: [
                                        'rgba(255, 99, 132, 1)',
                                        'rgba(54, 162, 235, 1)',
                                        'rgba(255, 206, 86, 1)',
                                        'rgba(75, 192, 192, 1)',
                                        'rgba(153, 102, 255, 1)',
                                        'rgba(255, 159, 64, 1)'
                                    ],
                                    borderWidth: 2
                                }]
                                }}
                                    height={400}
                                    width={500}
                                    options={{ maintainAspectRatio: false }}
                                /></>
                  }
          </div>
        </main>
        </div>
    </>
  );
}

export default Dashboard;
