// import { useState } from "react";

import AddEducation from "./components/Education.jsx";
import AddExperience from "./components/Experience.jsx";

function CvForm(){

    function showPersonalDetails(){
        const personalDetails=document.getElementById("personalDetailsSection");
        if(personalDetails.style.display=="none"){
            personalDetails.style.display="block"

        }
        else{
            personalDetails.style.display="none"
        }
        
    }





    return(
        <>
            <form action={"#"} method="POST">
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
 
                <AddEducation />

                <AddExperience />
                <button type="submit">Save & Submit</button>
            </form>
        </>
    )
}

export default CvForm;