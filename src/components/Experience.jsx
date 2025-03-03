// import '../styles/education.css'

import { useState } from 'react';

/* eslint-disable react/prop-types */


function AddExperience({index,person,onExperienceChange,onExperienceDelete}) {
    const [isExperienceVisible, setIsExperienceVisible] = useState(false);
    const [formData,setFormData]=useState({
        jobTitle:"",
        company:"",
        jobStartDate:"",
        jobEndDate:"",
        jobDetails:"",
        jobLocation:"",
        id:`${person.id}`,
    });

    function handleInputChange(e){
        const { name, value } = e.target;
        setFormData((prevEntries)=>{
            const updatedEntries={...prevEntries, [name]:value}
            return updatedEntries;
        });
        console.log(formData);
        onExperienceChange(formData,index);

    }
    function toggleExperience() {

        setIsExperienceVisible((prevState) => !prevState);
    }

    return(
       <>
       <div>
        <button type="button" onClick={toggleExperience}>Experience</button>
        <button type="button" onClick={()=>{onExperienceDelete(formData.id)}}>X</button>

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
    <div><label htmlFor={`jobDetails${index}`}>Job Details:</label></div>
    <div><input type="text" id={`jobDetails${index}`} value={formData.jobDetails}
            onChange={handleInputChange} name="jobDetails"></input></div>
    <div><label htmlFor={`jobLocation${index}`} >Job Location:</label></div>
    <div><input type="text" id={`jobLocation${index}`} value={formData.jobLocation}
            onChange={handleInputChange} name="jobLocation"></input></div>

    </fieldset>)}</> 
    )
}

export default AddExperience;