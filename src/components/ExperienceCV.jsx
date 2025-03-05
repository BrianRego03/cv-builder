/* eslint-disable react/prop-types */

import "../styles/EducationCV.css"

import "../styles/ExperienceCV.css"

function ExperienceComponent({index,person}){
    function dateFormatter(dateString){
        const dateObj = new Date(dateString);
        const options = { year: 'numeric', month: 'long' };
        const formattedDate = dateObj.toLocaleDateString('en-US', options);
        return formattedDate;



    }
    console.log(person.jobStartDate)
return <>
    <div className="educationDiv">
            <div className="educationSection">
                <div className="collegeTitle">{person.jobTitle}</div>
                <div>{`${dateFormatter(person.jobStartDate)}`+" - "+`${dateFormatter(person.jobEndDate)}`}</div>

            </div>
            <div className="educationSection">
                <div>{person.company}</div>
                <div>{person.jobLocation}</div>

            </div>
            <div>
                <ul className="descriptionList">
                {person.jobDetails0 && person.jobDetails0 !== "" && (<li>{person.jobDetails0}</li>)}
                {person.jobDetails1 && person.jobDetails1 !== "" && (<li>{person.jobDetails1}</li>)}
                {person.jobDetails2 && person.jobDetails2 !== "" && (<li>{person.jobDetails2}</li>)}


                </ul>
            </div>
        
        </div>
        </>

}

export default ExperienceComponent;