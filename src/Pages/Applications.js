import React from 'react';
import { useEffect } from 'react';
import "./Applications.css";
function Applications() {
    useEffect(async() => {
        let data = await JSON.parse(localStorage.getItem('data'));
         var str = "";
        for(let i of data)
        {
            str += "<tr>";
            str += `<td> ${i.name} </td>
            <td> ${i.sid} </td>
            <td> ${i.email} </td>
            <td><a href=${i.resume}>Resume</a></td>`
            str+="</tr>";
        }
            document.getElementById('applicants-table').innerHTML += str
        
    }, []);
    return (
        <div className='table'><h1>List of Applied Students</h1>
            <table id='applicants-table' border='1' cellSpacing='0'>
                <thead>
                    <th>Student Name</th>
                    <th>Roll No</th>
                    <th>Email Id</th>
                    <th>Resume</th>
                </thead>
            </table>
        </div>
    )
}

export default Applications
