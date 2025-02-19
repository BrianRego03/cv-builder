import { useState } from "react";

import AddEducation from "./components/Education.jsx";
import AddExperience from "./components/Experience.jsx";

function CvForm(){
    const [educationEntries, setEducationEntries]=useState([]);
    const [experienceEntries, setExperienceEntries]=useState([]);
   
    class personalObject
    { 
        constructor (name,email,mobile,github){
        this.name=name;
        this.email=email;
        this.mobile=mobile;
        this.github=github;
    };
    }




    function showPersonalDetails(){
        const personalDetails=document.getElementById("personalDetailsSection");
        if(personalDetails.style.display=="none"){
            personalDetails.style.display="block"

        }
        else{
            personalDetails.style.display="none"
        }
        
    }

    function addEducationSection(){
        setEducationEntries([...educationEntries,<AddEducation key={educationEntries.length} 
            identifier={educationEntries.length} />])
      
        // console.log(educationEntries.length);
    }

    function addExperienceSection(){
        setExperienceEntries([...experienceEntries,<AddExperience key={experienceEntries.length}
            identifier={experienceEntries.length} />])
      

    }

    function handleSubmit(event){
        event.preventDefault();
        const eduComponentsNumber=educationEntries.length;
        const expComponentsNumber=experienceEntries.length;
        console.log(eduComponentsNumber);
        console.log(expComponentsNumber);
        const person=fetchPersonal();
        const educationalArray=fetchEducation();
        console.log(person);
        console.log(educationalArray);
        const personal = new personalObject();
    }
    function fetchPersonal(){
        return {
            name:document.getElementById("name").value,
            email:document.getElementById("email").value,
            mobile:document.getElementById("mobile").value,
            github:document.getElementById("github").value

        }
    }
    function fetchEducation(){
        const returningArray=[];
        if(educationEntries.length!=0){
            for(let i=0;i<educationEntries.length;i++){
                returningArray[i]={
                    college:document.getElementById(`college${i}`).value,
                    degree:document.getElementById(`degree${i}`).value,
                    startDate:document.getElementById(`startDate${i}`).value,
                    endDate:document.getElementById(`endDate${i}`).value,
                    cgpa:document.getElementById(`cgpa${i}`).value


                }
            }

            return returningArray;

        }
        else return [];
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
                <button type ="button" onClick={addEducationSection} 
                id="educationSection">Add an education Section + </button>
                
                {/* <AddEducation />
                <AddEducation /> */}
                <div>{educationEntries}</div>

                <button type ="button" onClick={addExperienceSection} 
                id="experiencenSection">Add an experience Section + </button>
                <div>{experienceEntries}</div>

                {/* <AddExperience /> */}
                <button type="submit">Save & Submit</button>
            </form>
        </>
    )
}

export default CvForm;