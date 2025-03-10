import '../styles/education.css'
import "../styles/cvForm.css"

import { useState } from 'react';

/* eslint-disable react/prop-types */


function AddExperience({index,person,onExperienceChange,onExperienceDelete}) {
    const [isExperienceVisible, setIsExperienceVisible] = useState(false);
    const [formData,setFormData]=useState({
        jobTitle: person.jobTitle || "",
        company: person.company || "",
        jobStartDate: person.jobStartDate || "",
        jobEndDate: person.jobEndDate || "",
        jobDetails0: person.jobDetails0 || "",
        jobDetails1: person.jobDetails1 || "",
        jobDetails2: person.jobDetails2 || "",
        jobLocation: person.jobLocation || "",
        id:`${person.id}`,
    });

    function handleInputChange(e){
        const { name, value } = e.target;
        setFormData((prevEntries)=>{
            const updatedEntries={...prevEntries, [name]:value};
            return updatedEntries;
        });
        onExperienceChange({...formData,[name]:value},index);

    }
    
    function toggleExperience() {

        setIsExperienceVisible((prevState) => !prevState);
    }

    return(
       <>
       <div>
        <button className="componentButton" type="button" onClick={toggleExperience}>{`Job ${index+1}`}</button>
        <button className="componentDeleteButton" type="button" onClick={()=>{onExperienceDelete(formData.id)}}>X</button>

    </div>
    {isExperienceVisible && (
    <fieldset id="experienceSection">
    <legend>Experience</legend>
    <div><label htmlFor={`jobTitle${index}`}>Job Title:</label></div>
    <div><input type="text" id={`jobTitle${index}`} value={formData.jobTitle}
            onChange={handleInputChange} name="jobTitle"></input></div>
    <div><label htmlFor={`company${index}`}>Company:</label></div>
    <div><input type="text" id={`company${index}`} value={formData.company}
            onChange={handleInputChange} name="company"></input></div>
    <div><label htmlFor={`jobStartDate${index}`}>Start Date:</label></div>
    <div><input type="month" id={`jobStartDate${index}`} value={formData.jobStartDate}
            onChange={handleInputChange} name="jobStartDate"></input></div>
    <div><label htmlFor={`jobEndDate${index}`}>End Date:</label></div>
    <div><input type="month" id={`jobEndDate${index}`} value={formData.jobEndDate}
            onChange={handleInputChange} name="jobEndDate"></input></div>
    <div><label htmlFor={`jobDetails0${index}`}>Job Details:</label></div>
    <div><input type="text" id={`jobDetails0${index}`} value={formData.jobDetails0}
            onChange={handleInputChange} name="jobDetails0"></input></div>
    <div><label htmlFor={`jobDetails1${index}`}></label></div>
    <div><input type="text" id={`jobDetails1${index}`} value={formData.jobDetails1}
            onChange={handleInputChange} name="jobDetails1"></input></div>
    <div><label htmlFor={`jobDetails2${index}`}></label></div>
    <div><input type="text" id={`jobDetails2${index}`} value={formData.jobDetails2}
            onChange={handleInputChange} name="jobDetails2"></input></div>            
    <div><label htmlFor={`jobLocation${index}`} >Job Location:</label></div>
    <div><input type="text" id={`jobLocation${index}`} value={formData.jobLocation}
            onChange={handleInputChange} name="jobLocation"></input></div>

    </fieldset>)}</> 
    )
}

export default AddExperience;