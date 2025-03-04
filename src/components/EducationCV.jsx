/* eslint-disable react/prop-types */

import "../styles/EducationCV.css"


function EducationComponent({index,person}){
    console.log(person);
    function dateFormatter(dateString){
        const dateObj = new Date(dateString);
        const options = { year: 'numeric', month: 'long' };
        const formattedDate = dateObj.toLocaleDateString('en-US', options);
        return formattedDate;



    }

    return(
        <div className="educationDiv">
            <div className="educationSection">
                <div className="collegeTitle">{person.collegeName}</div>
                <div>{"CGPA: "+`${person.cgpa}`}</div>

            </div>
            <div className="educationSection">
                <div>{person.degree}</div>
                <div>{`${dateFormatter(person.startDate)}`+" - "+`${dateFormatter(person.endDate)}`}</div>

            </div>
        
        </div>
    )

}

export default EducationComponent;