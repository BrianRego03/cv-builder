function AddEducation(){
    function toggleEducation(){
        const educationDetails=document.getElementById("educationSection");
        if(educationDetails.style.display=="none"){
            educationDetails.style.display="block"

        }
        else{
            educationDetails.style.display="none"
        }

    }

    return(
       <>
       <div>
        <button type="button" onClick={toggleEducation}>Education</button>

    </div>

    <fieldset id="educationSection">
        <legend>Education</legend>
        <div><label htmlFor="college">College name:</label></div>
        <div><input type="text" id="college"></input></div>
        <div><label htmlFor="degree">Degree:</label></div>
        <div><input type="text" id="degree"></input></div>
        <div><label htmlFor="startDate">Start Date:</label></div>
        <div><input type="date" id="startDate"></input></div>
        <div><label htmlFor="endDate">End Date:</label></div>
        <div><input type="date" id="endDate"></input></div>
        <div><label htmlFor="cgpa">CGPA:</label></div>
        <div><input type="text" id="cgpa"></input></div>

    </fieldset></> 
    )
}

export default AddEducation;