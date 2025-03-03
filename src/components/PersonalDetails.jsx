import { useState } from 'react';

/* eslint-disable react/prop-types */


function AddPersonal({person, onPersonalChange}) {
    const [formData,setFormData]=useState({
        name: person.name || "",
        email: person.email || "",
        mobile: person.mobile || "",
        github: person.github || "",
    });

    function handleInputChange(e){
        const { name, value } = e.target;
        setFormData((prevEntries)=>{
            const updatedEntries={...prevEntries, [name]:value};
            onPersonalChange(updatedEntries);
            return updatedEntries;
        });

    }
    
    return(
       <>
    
    {(
    <fieldset id="personalDetailsSection">
    <legend>Personal Information</legend>
    <div><label htmlFor="name">Name:</label></div>
    <div><input type="text" id="name" value={formData.name}
            onChange={handleInputChange} name="name"></input></div>
    <div><label htmlFor="email">Email:</label></div>
    <div><input type="email" id="email" value={formData.email}
            onChange={handleInputChange} name="email"></input></div>
    <div><label htmlFor="mobile">Mobile:</label></div>
    <div><input type="text" id="mobile" value={formData.mobile}
            onChange={handleInputChange} name="mobile"></input></div>
    <div><label htmlFor="github">Github:</label></div>
    <div><input type="url" id="github" value={formData.github}
            onChange={handleInputChange} name="github"></input></div>
    </fieldset>)}</> 
    )
}

export default AddPersonal;