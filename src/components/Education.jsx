import '../styles/education.css'
import React, { useState, useEffect } from 'react';
/* eslint-disable react/prop-types */



function AddEducation({index,person,onEducationChange}) {
    const [isEducationVisible, setIsEducationVisible] = useState(false);
    const [formData,setFormData]=useState({
        collegeName:"",
        degree:"",
        startDate:"",
        endDate:"",
        cgpa:""
    });


    function handleInputChange(e){
        const { name, value } = e.target;
        setFormData((prevEntries)=>{
            const updatedEntries={...prevEntries, [name]:value}
            return updatedEntries;
        });
        console.log(formData);
        onEducationChange(formData,index);

    }
   

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
        <div><input type="text" id={`college${index}`} value={formData.collegeName}
                        onChange={handleInputChange} name="collegeName"></input></div>
        <div><label htmlFor={`degree${index}`}>Degree:</label></div>
        <div><input type="text" id={`degree${index}`} value={formData.degree}
                        onChange={handleInputChange} name="degree"></input></div>
        <div><label htmlFor={`startDate${index}`}>Start Date:</label></div>
        <div><input type="date" id={`startDate${index}`} value={formData.startDate}
                        onChange={handleInputChange} name="startDate"></input></div>
        <div><label htmlFor={`endDate${index}`}>End Date:</label></div>
        <div><input type="date" id={`endDate${index}`} value={formData.endDate}
                        onChange={handleInputChange} name="endDate"></input></div>
        <div><label htmlFor={`cgpa${index}`}>CGPA:</label></div>
        <div><input type="text" id={`cgpa${index}`} value={formData.cgpa}
                        onChange={handleInputChange} name="cgpa"></input></div>

    </fieldset>)}</> 
    )
}

export default AddEducation;