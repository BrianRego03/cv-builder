import '../styles/education.css'
import { useState } from 'react';
/* eslint-disable react/prop-types */



function AddEducation({index,person,onEducationChange,onEducationDelete}) {
    const [isEducationVisible, setIsEducationVisible] = useState(false);
    const [formData,setFormData]=useState({
        collegeName: person.collegeName || "",
        degree: person.degree || "",
        startDate: person.startDate || "",
        endDate:person.endDate || "",
        cgpa: person.cgpa || "",
        id:`${person.id}`,
    });

    function handleInputChange(e){
        const { name, value } = e.target;
        setFormData((prevEntries)=>{
            const updatedEntries={...prevEntries, [name]:value}
            onEducationChange(updatedEntries,index);

            return updatedEntries;

        });

    }
   

    function toggleEducation() {

      setIsEducationVisible((prevState) => !prevState);
    }

    return(
       <>
       <div>
        <button type="button" onClick={toggleEducation}>Education</button>
        <button type="button" onClick={()=>{onEducationDelete(formData.id)}}>X</button>

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