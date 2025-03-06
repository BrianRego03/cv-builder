/* eslint-disable react/prop-types */

import "../styles/EducationCV.css"

import "../styles/ExperienceCV.css"

function ProjectComponent({index,person}){
    function dateFormatter(dateString){
        const dateObj = new Date(dateString);
        const options = { year: 'numeric', month: 'long' };
        const formattedDate = dateObj.toLocaleDateString('en-US', options);
        return formattedDate;



    }

    return <>
    <div className="educationDiv">
            <div className="educationSection">  
                <div>
                    <span className="collegeTitle">{person.projectName} </span>
                    <span>{person.techStack}</span>
                
                </div>
                <div>{`${dateFormatter(person.projectStartDate)}`+" - "+`${dateFormatter(person.projectEndDate)}`}</div>
            </div>
            <div>
                <ul className="descriptionList">
                {person.projectDetails0 && person.projectDetails0 !== "" && (<li>{person.projectDetails0}</li>)}
                {person.projectDetails1 && person.projectDetails1 !== "" && (<li>{person.projectDetails1}</li>)}
                {person.projectDetails2 && person.projectDetails2 !== "" && (<li>{person.projectDetails2}</li>)}
                {person.projectDetails3 && person.projectDetails3 !== "" && (<li>{person.projectDetails3}</li>)}


                </ul>
            </div>
    </div>   

    </>
}    

export default ProjectComponent;