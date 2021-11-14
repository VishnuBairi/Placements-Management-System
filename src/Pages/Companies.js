import React from 'react'
import { useState } from 'react'
import './Companies'
import { db } from '../firebase'
function Companies(props) {
    var [click, setClick] = useState(false)
    const apply = async () => {
        const upload = db.collection('Companies').doc(props.docid).collection("Applicants").doc(localStorage.getItem("uid"));
        // console.log(props.docid)
        await upload.set({
            uid: localStorage.getItem("uid")
        })
        window.confirm("All the best for you!!")
    }
    const [applicant, setApplicant] = useState([])
    const applicants = async () => {

        db.collection("Companies").doc(props.docid).collection("Applicants").onSnapshot(async (snapshot) => {
            async function geter() {
            var temp = []
                for(let doc of snapshot.docs){
                    const snapsho = await db.collection('Students').doc(doc.data().uid).get()
                    // console.log(snapsho.data())
                    temp.push({
                        name: snapsho.data().sname,
                        sid: snapsho.data().sid,
                        email: snapsho.data().semail,
                        resume: snapsho.data().resume,
                    })
                }
            console.log(temp)
                return temp;
            }
            setApplicant(await geter())
            // console.log(applicant)
            localStorage.setItem('data',JSON.stringify(applicant))
            window.open('applicants-list')
        })
        // db.collection('Companies').doc(props.docid).collection("Applicants").onSnapshot(async (snapshot) => {
        //     // console.log(snapshot.docs)
        //     var temp = []
        //     const nes = async()=>{
        //         for (let i of snapshot.docs) {
        //             const user = await db.collection('Students').doc(i.data().uid).get()
        //             temp.push({
        //                 name: user.data().sname,
        //                 sid: user.data().sid,
        //                 email: user.data().semail,
        //                 resume: user.data().resume,
        //             })
        //         }
        //     }
        //     await nes();
        //     setApplicant(temp);
        //     // setApplicant()
        //     // console.log(temp)
            
        //     console.log(applicant)
        // })
    }

    return (
        <div className="box">
            <div className="company-name">{props.cname}</div>
            <div className="title">Job Title : {props.title}</div>
            <div className="min-qualify">Cut off : {props.cutOff}</div>
            <div className="eligible">Eligible branches : {props.branches}</div>
            <div className="last-date">Last Date to Apply : {props.date}</div>
            {click ? <div classname='description'>Job Description : <br /> {props.description}</div> : <></>}
            {click ? <></> : <div className="viewmore" onClick={() => { setClick(true) }}> View more&gt; </div>}
            <div className="buttons">
                <div className="Cancel">
                    {click ? <button onClick={() => { setClick(false) }} >Cancel</button> : <></>}
                </div>
                <div style={{ display: localStorage.getItem("type") === 'admin' ? 'none' : 'block' }} className="Apply">
                    {click ? <button onClick={apply} type="submit">Apply </button> : <></>}
                </div>
                <div style={{ display: localStorage.getItem("type") === 'admin' ? 'block' : 'none' }} className="Apply">
                    {click ? <button onClick={() => applicants()}>Applicants </button> : <></>}
                </div>
            </div>
        </div>

    )
}

export default Companies
