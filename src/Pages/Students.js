import React from 'react'

function Students(props) {
    return (
        <div className="student-box">
            <div className="student-name" >Name : {props.sname}</div>
            <div className="student-roll" >Roll no : {props.suser}</div>
            <div className="student-email" >Email Id : {props.semail}</div>
            <div className="student-resume"><a href={props.resume}>resume</a> </div>
        </div>
    )
}

export default Students
