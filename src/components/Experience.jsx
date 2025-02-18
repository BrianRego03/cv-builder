// import '../styles/education.css'
import React, { useState } from 'react';


function AddExperience() {
    const [isExperienceVisible, setIsExperienceVisible] = useState(false);
  
    function toggleExperience() {

        setIsExperienceVisible((prevState) => !prevState);
    }

    return(
       <>
       <div>
        <button type="button" onClick={toggleExperience}>Experience</button>

    </div>
    {isExperienceVisible && (
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

    </fieldset>)}</> 
    )
}

export default AddExperience;