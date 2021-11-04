import React from 'react';
import { useEffect,useState } from 'react';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import DashboardIcon from '@mui/icons-material/Dashboard';
import BusinessIcon from '@mui/icons-material/Business';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import PersonIcon from '@mui/icons-material/Person';
import MenuIcon from '@mui/icons-material/Menu';
import './Dashboard.css'
import Companies from './Companies';
import { db } from '../Firebase';
function Dashboard() {
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

    
    const addCompany = (e) => {
        e.preventDefault();
        let name = document.getElementById('name').value;
        let title = document.getElementById('title').value;
        let desc = document.getElementById('desc').value;
        let cutOff = document.getElementById('cutOff').value;
        let branch = document.getElementById('branch').value;
        let date = document.getElementById('date').value;
        db.collection("Companies").add({
            cName: name,
            description: desc,
            title: title,
            cutOff:cutOff,
            branches: branch,
            date : date,
            timestamps: new Date(),
        })
        document.getElementsByClassName("add-company")[0].style.display = 'none' ;
    }
 
    return (
        <>
        <input type="checkbox" id="nav-toggle"/>
        <div className="sidebar">
                <div className="sidebar-brand">
                    <h1><span><img alt="cbit" src="https://www.cbit.ac.in/wp-content/themes/CBIT/images/logo.png" height='80' width='100'/></span></h1> 
                </div>

                <div className="sidebar-menu">
                 <ul>
                    <li>
                        <div id='a' className="active"><span><DashboardIcon/></span>
                        <span>Dashboard</span> </div>
                        </li>
                        <li>
                        <div id='a' onClick={()=>{document.getElementsByClassName("add-student")[0].style.display='block'}}><span><PersonAddAlt1Icon/></span>
                        <span>Add Student</span> </div>
                        </li>
                        <li>
                        <div id='a' onClick={()=>{document.getElementsByClassName("view-students")[0].style.display='block'}}><span><PersonSearchIcon /></span>
                        <span>View Students</span> </div>
                        </li>
                        <li>
                        <div id='a' onClick={()=>{document.getElementsByClassName("add-company")[0].style.display='block'}}><span><AddBusinessIcon /></span>
                        <span>Add Company</span> </div>
                        </li>
                        
                        <li>
                        <div id='a' href=""><span><BusinessIcon/></span>
                        <span>View Companies</span> </div>
                        </li>
                        <li>
                        <div id='a' href=""><span><InsertChartIcon/></span>
                        <span>Insights</span> </div>
                    </li>
                 </ul> 
                </div>    
        </div>
        <div className="main-content">
        <header>
            <h2> 
                <label htmlFor="nav-toggle">
                    <span><MenuIcon/></span>
                    </label>
                    Dashboard
            </h2>

            <div className="user-wrapper">
                <span> <PersonIcon/></span>
                <div><h4>Admin</h4></div>
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
                        <input id='name' placeholder='Company Name'/>
                        <input id='title' placeholder='Job Title'/>
                        <textarea id='desc' placeholder='Job Description' cols="30" rows="10"></textarea>
                        <input id='branch' placeholder='Eligible Branches'/>
                        <input id='cutOff' placeholder='Cut-Off'/>
                        <input id='date' type='date'/>
                        <button type='submit' onClick={addCompany}>Add Company</button>
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
    </>
    )
}

export default Dashboard
