import '../styles/education.css'
import React, { useState } from 'react';


function AddEducation({identifier,person}) {
    const [isEducationVisible, setIsEducationVisible] = useState(false);
    console.log(identifier);
    console.log(person);
    const index=identifier;
    function toggleEducation() {

      setIsEducationVisible((prevState) => !prevState);
    }

    return(
       <>
       <div>
        <button type="button" onClick={toggleEducation}>Education</button>
        <button type="button">X</button>

    </div>
    {isEducationVisible && (
    <fieldset id="educationSection">
        <legend>Education</legend>
        <div><label htmlFor={`college${index}`}>College name:</label></div>
        <div><input type="text" id={`college${index}`} defaultValue={person.collegeName} ></input></div>
        <div><label htmlFor={`degree${index}`}>Degree:</label></div>
        <div><input type="text" id={`degree${index}`} defaultValue={person.degree}></input></div>
        <div><label htmlFor={`startDate${index}`}>Start Date:</label></div>
        <div><input type="date" id={`startDate${index}`} defaultValue={person.startDate}></input></div>
        <div><label htmlFor={`endDate${index}`}>End Date:</label></div>
        <div><input type="date" id={`endDate${index}`} defaultValue={person.endDate}></input></div>
        <div><label htmlFor={`cgpa${index}`}>CGPA:</label></div>
        <div><input type="text" id={`cgpa${index}`} defaultValue={person.CGPA}></input></div>

    </fieldset>)}</> 
    )
}

export default AddEducation;