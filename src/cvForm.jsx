



function CvForm(){


    return(
        <>
            <form action={"#"} method="POST">
                <button type="button">Personal Details</button>
                <fieldset>
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
                <fieldset>
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

                </fieldset>

                <fieldset>
                <legend>Experience</legend>
                <div><label htmlFor="jobTitle">Job Title:</label></div>
                <div><input type="text" id="jobTitle"></input></div>
                <div><label htmlFor="company">Company:</label></div>
                <div><input type="text" id="company"></input></div>
                <div><label htmlFor="jstartDate">Start Date:</label></div>
                <div><input type="month" id="startDate"></input></div>
                <div><label htmlFor="endDate">End Date:</label></div>
                <div><input type="month" id="endDate"></input></div>
                <div><label htmlFor="jobDetails">Job Details:</label></div>
                <div><input type="text" id="jobDetails"></input></div>
                <div><label htmlFor="jobLocation">Job Location:</label></div>
                <div><input type="text" id="jobLocation"></input></div>

                </fieldset>
                <button type="submit">Save & Submit</button>
            </form>
        </>
    )
}

export default CvForm;