import React from 'react'
import './Companies'
function Companies(props) {
    return (
        <div className="box">
            <div className="company-name">{props.cname}</div>
            <div className="title">Job Title : {props.title}</div>
           <div className="min-qualify">Cut off : {props.cutOff}</div>
            <div className="eligible">Eligible branches : {props.branches}</div>
            <div className="last-date">Last Date to Apply : {props.date}</div>
            </div>
    )
}

export default Companies
