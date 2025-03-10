// import '../styles/education.css'

import { useState } from 'react';

/* eslint-disable react/prop-types */


function AddProject({index,person,onProjectChange,onProjectDelete}) {
    const [isProjectVisible, setIsProjectVisible] = useState(false);
    const [formData,setFormData]=useState({
        projectName: person.projectName || "",
        techStack: person.techStack || "",
        projectStartDate: person.projectStartDate || "",
        projectEndDate: person.projectEndDate || "",
        projectDetails0: person.projectDetails0 || "",
        projectDetails1: person.projectDetails1 || "",
        projectDetails2: person.projectDetails2 || "",
        projectDetails3: person.projectDetails3 || "",
        id:`${person.id}`,
    });

    function handleInputChange(e){
        const { name, value } = e.target;
        setFormData((prevEntries)=>{
            const updatedEntries={...prevEntries, [name]:value};
            return updatedEntries;
        });
        onProjectChange({...formData,[name]:value});

    }
    
    function toggleProject() {

        setIsProjectVisible((prevState) => !prevState);
    }

    return(
       <>
       <div>
        <button className="componentButton" type="button" onClick={toggleProject}>{`Project ${index+1}`}</button>
        <button className="componentDeleteButton" type="button" onClick={()=>{onProjectDelete(formData.id)}}>X</button>

    </div>
    {isProjectVisible && (
    <fieldset id="projectSection">
    <legend>Projects</legend>
    <div><label htmlFor={`projectName${index}`}>Project name:</label></div>
    <div><input type="text" id={`projectName${index}`} value={formData.projectName}
            onChange={handleInputChange} name="projectName"></input></div>
    <div><label htmlFor={`techStack${index}`}>Tech stack:</label></div>
    <div><input type="text" id={`techStack${index}`} value={formData.techStack}
            onChange={handleInputChange} name="techStack"></input></div>
    <div><label htmlFor={`projectStartDate${index}`}>Start Date:</label></div>
    <div><input type="month" id={`projectStartDate${index}`} value={formData.projectStartDate}
            onChange={handleInputChange} name="projectStartDate"></input></div>
    <div><label htmlFor={`projectEndDate${index}`}>End Date:</label></div>
    <div><input type="month" id={`projectEndDate${index}`} value={formData.projectEndDate}
            onChange={handleInputChange} name="projectEndDate"></input></div>
    <div><label htmlFor={`projectDetails0${index}`}>Project Details:</label></div>
    <div><input type="text" id={`projectDetails0${index}`} value={formData.projectDetails0}
            onChange={handleInputChange} name="projectDetails0"></input></div>
    <div><label htmlFor={`projectDetails1${index}`}></label></div>
    <div><input type="text" id={`projectDetails1${index}`} value={formData.projectDetails1}
            onChange={handleInputChange} name="projectDetails1"></input></div>
    <div><label htmlFor={`projectDetails2${index}`}></label></div>
    <div><input type="text" id={`projectDetails2${index}`} value={formData.projectDetails2}
            onChange={handleInputChange} name="projectDetails2"></input></div> 
    <div><label htmlFor={`projectDetails3${index}`}></label></div>
    <div><input type="text" id={`projectDetails3${index}`} value={formData.projectDetails3}
            onChange={handleInputChange} name="projectDetails3"></input></div>                           
    

    </fieldset>)}</> 
    )
}

export default AddProject;