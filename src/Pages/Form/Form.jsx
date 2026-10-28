
import React from 'react';
import "./Form.css";
import { useState } from 'react'
export default function Talktous() {
    const [usersdata, setUserData] = useState({
        uname: "",
        umobile: "",
        uemail: "",
        umessages: ""
    });


    const [error, setError] = useState({});


    function handleChange(userInfo) {
        setUserData({ ...usersdata, [userInfo.target.name]: userInfo.target.value });
        setError({ ...error, [userInfo.target.name]: "" });
    }


    const validateForm = () => {
        let tempError = {};


        if (!usersdata.uname.trim()) {
            tempError.uname = "Please Fill the data";
        }
        else if ((usersdata.uname.trim().length < 3)) {
            tempError.uname = "please fill the correct format  name Data "
        }




        const mobileRule = /^[6-9][0-9]{9}$/;
        if (!usersdata.umobile.trim()) {
            tempError.umobile = "please fill the Mobile Data"
        }
        else if (!mobileRule.test(usersdata.umobile)) {
            tempError.umobile = "please fill correct mobile number"
        }


        const emailRule = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/
        if (!usersdata.uemail.trim()) {
            tempError.uemail = "please fill the data"
        }
        else if (!(emailRule.test(usersdata.uemail))) {
            tempError.uemail = "please fill the correct email data"
        }


        if (!usersdata.umessages.trim()) {
            tempError.umessages = "please fill the data "
        }


        setError(tempError);
        return Object.keys(tempError).length === 0;
    }




    const formSubmit = (userInfo) => {
        userInfo.preventDefault();


        if (validateForm()) {
            console.log("Form filled..", usersdata);
            alert("Data Printed in console ,, thank you ...!!");
            setUserData({ uname: "", umobile: "", uemail: "", umessages: "" })
        }


      
    }
    return (
        <section className='Formsections'>
            <div className="workcontent">
                <h1>Talk To Us</h1>
                <p>Aenean nec tempor metus. Maecenas ligula dolor, commodo in imperdiet interdum, vehicula ut ex. Donec ante diam.</p>
            </div>
            <div className="formpart">
                <div className="formleft">
                    <h2>Keep in touch</h2>
                    <p>110-220 Quisque diam odio, maximus ac consectetur eu, 10260
                        auctor non lorem</p>
                    <p>You are NOT allowed to re-distribute Softy Pinko template on any template collection websites. Thank you.</p>
                </div>
                <div className="formright">
                    <form onSubmit={formSubmit}>
                        <div className="inputs">
                            <label htmlFor="cname">Client Name</label>
                            <div className="fields">
                                <input type="text" name='uname' placeholder='Enter your Fullname'
                                    value={usersdata.uname}
                                    onChange={handleChange} />
                                {error.uname && <p> {error.uname} </p>}
                            </div>
                        </div>


                        <div className="inputs">
                            <label htmlFor="cname">Client Mobile</label>
                            <div className="fields">
                                <input type="tel" name='umobile' placeholder='Enter your Mobile Number'
                                    value={usersdata.umobile}
                                    onChange={handleChange} />
                                {error.umobile && <p> {error.umobile} </p>}
                            </div>
                        </div>


                        <div className="inputs">
                            <label htmlFor="cname">Client Email</label>
                            <div className="fields">
                                <input type="email" name='uemail' placeholder='Enter your Email'
                                    value={usersdata.uemail}
                                    onChange={handleChange} />
                                {error.uemail && <p> {error.uemail} </p>}
                            </div>
                        </div>


                        <div className="inputs">
                            <label htmlFor="cname">Client Messages</label>
                            <div className="fields">
                                <textarea name="umessages" placeholder='Enter your Messages...!!!'
                                    value={usersdata.umessages}
                                    onChange={handleChange} ></textarea>
                                {error.umessages && <p> {error.umessages} </p>}
                            </div>
                        </div>


                        <div className="buttonpart">
                            <button type="submit">Send Message...!</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

