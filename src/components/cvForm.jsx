import { useState, useCallback} from "react";

import AddEducation from "./Education.jsx";
import AddExperience from "./Experience.jsx";

import { v4 as uuidv4 } from "uuid";
import AddPersonal from "./PersonalDetails.jsx";
import CvGenerate from './CvGenerate.jsx'



function CvForm(){
    const [educationEntries, setEducationEntries]=useState([]);
    const [experienceEntries, setExperienceEntries]=useState([]);
    const [personalEntries, setPersonalEntries]=useState({});
    const [projectEntries, setProjectEntries]=useState({});
    const [isCVVisible, setIsCVVisible] = useState(false);
    const [isFormVisible, setIsFormVisible] = useState(true);





    function showPersonalDetails(){
        const personalDetails=document.getElementById("personalDetailsSection");
        if(personalDetails.style.display=="none"){
            personalDetails.style.display="block"

        }
        else{
            personalDetails.style.display="none"
        }
        
    }

    const addPersonalDetails= useCallback((personalObject)=>{
        setPersonalEntries(()=>{return personalObject});
    },[]);

    const addEducationObject= useCallback((newEducation,educationIndex) => {
        if (educationIndex!==undefined){
            setEducationEntries((prevEntries)=>{
                const updatedEntries=[...prevEntries];
                updatedEntries[educationIndex]=newEducation;
                return updatedEntries;

            })
        }
        else{
            setEducationEntries((prevEntries) => [...prevEntries, {id:uuidv4()}]);
        }
      
    }, []);

    function removeEducationalObject(uniqueID){
        console.log(uniqueID);
        console.log(educationEntries);
        setEducationEntries((prevEntries)=>prevEntries.filter(entry=>entry.id!==uniqueID))
    }



    const addExperienceObject = useCallback((newExperience, experienceIndex) => {
        setExperienceEntries((prevEntries) => {
            if (experienceIndex !== undefined) {
                const updatedEntries = [...prevEntries];
                updatedEntries[experienceIndex] = newExperience;
                return updatedEntries;
            } else {
                return [...prevEntries, { id: uuidv4() }];
            }
        });
    }, []);

    function removeExperienceObject(uniqueID){
        
        setExperienceEntries((prevEntries)=>prevEntries.filter(entry=>entry.id!==uniqueID))
    }

    function handleSubmit(event){
        event.preventDefault();
        
        // const cvFormComponent=document.getElementById("myForm");
        // cvFormComponent.style.display="none";
        // const cvGenerateComponent=document.getElementById("CVdiv");
        // cvGenerateComponent.style.display="block";
        setIsCVVisible((prevState)=> !prevState);
        setIsFormVisible((prevState)=> !prevState);
        document.querySelector("body").style.backgroundColor="grey";

    }
    function returnToForm(){
        setIsCVVisible((prevState)=> !prevState);
        setIsFormVisible((prevState)=> !prevState);
        document.querySelector("body").style.backgroundColor="white";

    }
    




    return(
        <>
            {isFormVisible && (<form id="myForm" onSubmit={handleSubmit}>
                <div>
                    <button type="button" onClick={showPersonalDetails}>Personal Details</button>
                </div>
                <AddPersonal person={personalEntries} onPersonalChange={addPersonalDetails} />
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
            </form>)}

            {isCVVisible && 
            (<CvGenerate className="cvGenerateHide" educationData={educationEntries}
                experienceData={experienceEntries} personalData={personalEntries} 
                onEditClick={returnToForm}/>)
                }

        </>
    )
}

export default CvForm;