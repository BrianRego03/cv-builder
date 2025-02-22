// import '../styles/education.css'

import { useState } from 'react';

// eslint-disable-next-line react/prop-types
function AddExperience({identifier}) {
    const [isExperienceVisible, setIsExperienceVisible] = useState(false);
    const index=identifier;
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
    <div><label htmlFor={`jobTitle${index}`}>Job Title:</label></div>
    <div><input type="text" id={`jobTitle${index}`}></input></div>
    <div><label htmlFor={`company${index}`}>Company:</label></div>
    <div><input type="text" id={`company${index}`}></input></div>
    <div><label htmlFor={`jobStartDate${index}`}>Start Date:</label></div>
    <div><input type="month" id={`jobStartDate${index}`}></input></div>
    <div><label htmlFor={`jobEndDate${index}`}>End Date:</label></div>
    <div><input type="month" id={`jobEndDate${index}`}></input></div>
    <div><label htmlFor={`jobDetails${index}`}>Job Details:</label></div>
    <div><input type="text" id={`jobDetails${index}`}></input></div>
    <div><label htmlFor={`jobLocation${index}`}>Job Location:</label></div>
    <div><input type="text" id={`jobLocation${index}`}></input></div>

    </fieldset>)}</> 
    )
}

export default AddExperience;