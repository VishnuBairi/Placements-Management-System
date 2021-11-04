import React from 'react'
import { useEffect,useState } from 'react';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DashboardIcon from '@mui/icons-material/Dashboard';
import HelpIcon from '@mui/icons-material/Help';
import FeedbackIcon from '@mui/icons-material/Feedback';
import SettingsIcon from '@mui/icons-material/Settings';
import PersonIcon from '@mui/icons-material/Person';
import MenuIcon from '@mui/icons-material/Menu';
import './Dashboard.css'
import Companies from './Companies';
import { db } from '../Firebase';
function StudentDashboard() {
    var [companies, setCompanies] = useState([]);
    useEffect(async () => {
        db.collection("Companies").onSnapshot((snapshot) => {
            setCompanies(snapshot.docs.map((doc) => ({
                cname: doc.data().cName,
                title: doc.data().title,
                cutOff: doc.data().cutOff,
                branches : doc.data().branches,
                date: doc.data().date,
            })
            ))
        })
    }, [])
    return (
        <div>
            <input type="checkbox" id="nav-toggle" />
            <div className="sidebar">
                <div className="sidebar-brand">
                    <h1><span><img alt="cbit" src="https://www.cbit.ac.in/wp-content/themes/CBIT/images/logo.png" height='80' width='100' /></span></h1>
                </div>

                <div className="sidebar-menu">
                    <ul>
                        <li>
                            <div id='a' className="active"><span><DashboardIcon /></span>
                                <span>Dashboard</span> </div>
                        </li>
                        <li>
                            <div id='a' onClick={() => { document.getElementsByClassName("add-student")[0].style.display = 'block' }}><span><AccountCircleIcon /></span>
                                <span>Account</span> </div>
                        </li>
                        <li>
                            <div id='a' onClick={() => { document.getElementsByClassName("view-students")[0].style.display = 'block' }}><span><SettingsIcon /></span>
                                <span>Settings</span> </div>
                        </li>
                        <li>
                            <div id='a' onClick={() => { document.getElementsByClassName("add-company")[0].style.display = 'block' }}><span><FeedbackIcon /></span>
                                <span>Feedback</span> </div>
                        </li>

                        <li>
                            <div id='a' href=""><span><HelpIcon /></span>
                                <span>Help </span> </div>
                        </li>
                        <li>
                            <div id='a' href=""><span><InsertChartIcon /></span>
                                <span>Insights</span> </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="main-content">
                <header>
                    <h2>
                        <label htmlFor="nav-toggle">
                            <span><MenuIcon /></span>
                        </label>
                        Dashboard
                    </h2>

                    <div className="user-wrapper">
                        <span> <PersonIcon /></span>
                        <div>
                            <h4>Student Name</h4>
                            <h6>roll number</h6>
                        </div>
                    </div>
                </header>

                {/*Add Student*/}
                <div className='add-student'>
                    <div className="close" style={{ width: '100%', textAlign: 'end' }}>
                        <div onClick={() => { document.getElementsByClassName("add-student")[0].style.display = 'none' }} >X</div>
                    </div>
                    <div className='student'>
                        Here we Post
                        <form>
                            {/*Add Student Details*/}
                        </form>
                    </div>
                </div>

                {/*View Students*/}
                <div className='view-students'>
                    <div className="close" style={{ width: '100%', textAlign: 'end' }}>
                        <div onClick={() => { document.getElementsByClassName("view-students")[0].style.display = 'none' }} >X</div>
                    </div>
                    <div className='view'>
                        <form>
                            {/*View Students*/}
                        </form>
                    </div>
                </div>

                {/*Add Company*/}
                <div className='add-company'>
                    <div className="close" style={{ width: '100%', textAlign: 'end' }}>
                        <div onClick={() => { document.getElementsByClassName("add-company")[0].style.display = 'none' }} >X</div>
                    </div>
                    <div className='add'>
                        <h4>ADD COMPANY DETAILS HERE</h4>
                        <form>
                            {/*Add Company Details*/}
                            <input id='name' placeholder='Company Name' />
                            <input id='title' placeholder='Job Title' />
                            <textarea id='desc' placeholder='Job Description' cols="30" rows="10"></textarea>
                            <input id='branch' placeholder='Eligible Branches' />
                            <input id='cutOff' placeholder='Cut-Off' />
                            <input id='date' type='date' />
                            <button type='submit'>Add Company</button>
                        </form>

                    </div>
                </div>
                <main>
                    <div className="cards">
                        <div className="card-single">
                            {companies.map((company) => {
                                return <Companies
                                    cname={company.cname}
                                    title={company.title}
                                    cutOff={company.cutOff}
                                    branches={company.branches}
                                    date={company.date}

                                />
                            })}
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default StudentDashboard
