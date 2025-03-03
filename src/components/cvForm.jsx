import { useState } from "react";

import AddEducation from "./Education.jsx";
import AddExperience from "./Experience.jsx";

import { v4 as uuidv4 } from "uuid";


function CvForm(){
    const [educationEntries, setEducationEntries]=useState([]);
    const [experienceEntries, setExperienceEntries]=useState([]);




    function showPersonalDetails(){
        const personalDetails=document.getElementById("personalDetailsSection");
        if(personalDetails.style.display=="none"){
            personalDetails.style.display="block"

        }
        else{
            personalDetails.style.display="none"
        }
        
    }

    function addEducationObject(newEducation,educationIndex){
        // setEducationEntries((prevEntries) => [...prevEntries, newEducation]);
        if (educationIndex!==undefined){
            setEducationEntries((prevEntries)=>{
                const updatedEntries=[...prevEntries];
                updatedEntries[educationIndex]=newEducation;
                console.log(educationEntries);
                return updatedEntries;

            })
        }
        else{
            setEducationEntries((prevEntries) => [...prevEntries, {id:uuidv4()}]);
        }
      
    }

    function removeEducationalObject(uniqueID){
        console.log(uniqueID);
        console.log(educationEntries);
        setEducationEntries((prevEntries)=>prevEntries.filter(entry=>entry.id!==uniqueID))
    }

    function addExperienceObject(newExperience,experienceIndex){
        if (experienceIndex!==undefined){
            setExperienceEntries((prevEntries)=>{
                const updatedEntries=[...prevEntries];
                updatedEntries[experienceIndex]=newExperience;
                console.log(experienceEntries);
                return updatedEntries;

            })
        }
        else{
            setExperienceEntries((prevEntries) => [...prevEntries, {id:uuidv4()}]);
        }
      

    }
    function removeExperienceObject(uniqueID){
        
        setExperienceEntries((prevEntries)=>prevEntries.filter(entry=>entry.id!==uniqueID))
    }

    function handleSubmit(event){
        event.preventDefault();
        
        const cvFormComponent=document.getElementById("myForm");
        cvFormComponent.style.display="none";
        const cvGenerateComponent=document.getElementById("CVdiv");
        cvGenerateComponent.style.display="block";
        document.querySelector("body").style.backgroundColor="grey";

    }
    




    return(
        <>
            <form id="myForm" onSubmit={handleSubmit}>
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
                <button type ="button" onClick={()=>{addEducationObject()}} 
                id="educationSection">Add an education Section + </button>
                
                <div>{educationEntries.map((item,indice)=>{return(
                    <AddEducation key={item.id} index={indice} person={item} 
                    id={item.id}
                    onEducationChange={addEducationObject} 
                    onEducationDelete={removeEducationalObject}/>
                )  
                }            
                )
                }</div>

                <button type ="button" onClick={addExperienceObject} 
                id="experienceSection">Add an experience Section + </button>
                <div>{experienceEntries.map((item,indice)=>{return(
                    <AddExperience key={item.id} index={indice} person={item} 
                    id={item.id}
                    onExperienceChange={addExperienceObject} 
                    onExperienceDelete={removeExperienceObject}/>
                )  
                }            
                )
                }</div>

                <button type="submit">Save & Submit</button>
            </form>
        </>
    )
}

export default CvForm;