import React from 'react'
import { useState } from 'react'
import './Companies'
function Companies(props) {
    var [click, setClick] = useState(false)
    return (
        <div className="box">
            <div className="company-name">{props.cname}</div>
            <div className="title">Job Title : {props.title}</div>
            <div className="min-qualify">Cut off : {props.cutOff}</div>
            <div className="eligible">Eligible branches : {props.branches}</div>
            <div className="last-date">Last Date to Apply : {props.date}</div>
            {click ? <div classname='description'>Job Description : <br/> {props.description}</div> : <></>}
            {click ? <></> : <div className="viewmore" onClick={() => { setClick(true) }}> View more&gt; </div>}
            <div className="buttons">
                <div className="Cancel">
                    {click ? <button onClick={() => { setClick(false) }} >Cancel</button> : <></>}
                </div>
                <div className="Apply">
                    {click ? <button type="submit">Apply </button> : <></>}
                </div>
            </div>



        </div>

    )
}

export default Companies
