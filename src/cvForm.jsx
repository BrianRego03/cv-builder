// import { useState } from "react";

import AddEducation from "./components/Education.jsx";

function CvForm(){

    function showPersonalDetails(){
        const personalDetails=document.getElementById("personalDetailsSection");
        if(personalDetails.style.display=="none"){
            personalDetails.style.display="block"

        }
        else{
            personalDetails.style.display="none"
        }
        
    }

    function toggleExperience(identity){
        const experienceSection=document.getElementById(identity);
        if(experienceSection.style.display=="none"){
            experienceSection.style.display="block"

        }
        else{
            experienceSection.style.display="none"
        }

    }



    return(
        <>
            <form action={"#"} method="POST">
                <div>
                    <button type="button" onClick={showPersonalDetails}>Personal Details</button>
                </div>
                <fieldset className="personalDetails" id="personalDetailsSection">
                    <legend>Personal Information</legend>
                    <div><label htmlFor="name">Name:</label></div>
                    <input type="text" id="name"></input>
                    <div><label htmlFor="email">Email:</label></div>
                    <div><input type="email" id="email"></input></div>
                    <div><label htmlFor="mobile">Phone number:</label></div>
                    <div><input type="tel" id="mobile"></input></div>
                    <div><label htmlFor="github">Github link:</label></div>
                    <div><input type="url" id="github"></input></div>
                    

                </fieldset>
                {/* <div>
                    <button type="button" onClick={toggleEducation}>Education</button>

                </div>

                <fieldset id="educationSection">
                    <legend>Education</legend>
                    <div><label htmlFor="college">College name:</label></div>
                    <div><input type="text" id="college"></input></div>
                    <div><label htmlFor="degree">Degree:</label></div>
                    <div><input type="text" id="degree"></input></div>
                    <div><label htmlFor="startDate">Start Date:</label></div>
                    <div><input type="date" id="startDate"></input></div>
                    <div><label htmlFor="endDate">End Date:</label></div>
                    <div><input type="date" id="endDate"></input></div>
                    <div><label htmlFor="cgpa">CGPA:</label></div>
                    <div><input type="text" id="cgpa"></input></div>

                </fieldset> */}
                <AddEducation />
                <div>
                    <button type="button" 
                    onClick={()=>{toggleExperience("experienceSection")}}>Experience</button>

                </div>
                <fieldset id="experienceSection">
                <legend>Experience</legend>
                <div><label htmlFor="jobTitle">Job Title:</label></div>
                <div><input type="text" id="jobTitle"></input></div>
                <div><label htmlFor="company">Company:</label></div>
                <div><input type="text" id="company"></input></div>
                <div><label htmlFor="jobStartDate">Start Date:</label></div>
                <div><input type="month" id="jobStartDate"></input></div>
                <div><label htmlFor="JobEndDate">End Date:</label></div>
                <div><input type="month" id="JobEndDate"></input></div>
                <div><label htmlFor="jobDetails">Job Details:</label></div>
                <div><input type="text" id="jobDetails"></input></div>
                <div><label htmlFor="jobLocation">Job Location:</label></div>
                <div><input type="text" id="jobLocation"></input></div>

                </fieldset>
                <button type="submit">Save & Submit</button>
            </form>
        </>
    )
}

export default CvForm;