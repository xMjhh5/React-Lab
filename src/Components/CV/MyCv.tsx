// import React from 'react'
import "./MyCv.css";
import Img from "../../public/vite.svg"

export default function MyCv() {
    return (
        <div>

            <img src={Img} alt="" />
            <h1 className="appbar">Mohammed Alkhaldi</h1>
            <h3 className="appbar">Programer | ERP Administrator</h3>

            <hr />

            <div className="div-1">
                <h2 className="title">Personal information's</h2>
            </div>

            <ul className="info">
                <li>City : Riyadh</li>
                <li>Email : ssqss@live.com</li>
                <li>Phone : 0599699892</li>
            </ul>

            <div>

                <h2 className="title">Education :</h2>
            </div>

            <ol className="info-2">
                <li>Bachelor : Software Engineering .</li>
                <li>Diploma : Programming Technology .</li>
            </ol>

            <div>

                <h2 className="title">Experience</h2>
            </div>

            <ul className="info-2">
                <li><h4>CAAPP Company</h4></li>
                <ul>
                    <li>Django/Python web application developer</li>
                    <li>ERP System Administrator</li>
                    <li>Supervising the implementation of Odoo ERP</li>
                    <li>System Operations Analysis</li>
                    <li>Staff training on the system</li>
                </ul>
            </ul>
            <ul className="info-2">
                <li><h4>Technical College - information technology</h4></li>
                <ul>
                    <li>Support technician</li>
                    <li>Computer maintenance and performance monitoring</li>

                </ul>
            </ul>


            <div>
                <h2>Skills</h2>
            </div>
            <ul className="info-2">
                <li>Proficiency in Microsoft office</li>
                <li>communication skills</li>
                <li>Supervision and coordination of technical projects</li>
                <li>Knowledge of agile basics</li>
                <li>Research and analysis of operations</li>
            </ul>
            <div>
                <h2 className="title">Courses</h2>
            </div>
            <ul className="info-2">

                <li>.Net Core MVC / Entity Freamwork : Abad Institute</li>
                <li>C# Language : Abad Institute</li>
                <li>Technical Project Management : The ministry of communications</li>
                <li>Microsoft MOS : Microsoft academy</li>
                <li>Intro to SQl  : Oracle academy</li>

            </ul>
            <div>
                <h2 className="title">Technical Skills</h2>
            </div>
            <ul className="info-2">
                <li> Python - Django/Authentication&Authorisation</li>
                <li>Bootstrap</li>
                <li>C#</li>
                <li>.Net Core MVC</li>
                <li>API RESTful</li>
                <li>Git/Github</li>
                <li>Shelf/web server</li>
                <li>Linux</li>

            </ul>

            <hr />

        </div>
    )
}
