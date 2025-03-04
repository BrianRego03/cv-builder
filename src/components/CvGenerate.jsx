import "../styles/CVGenerate.css"

/* eslint-disable react/prop-types */




function CvGenerate({educationData,experienceData,personalData,onEditClick}){
    function hideCV(){
        // onEditClick();
        document.querySelector("body").style.backgroundColor="white";



    }

    console.log(personalData);
    console.log(onEditClick);

   return(
   <div id="CVdiv">
       <div >CV</div>
       <button type="button" onClick={onEditClick}>Edit</button>
       <div id="cvContainer">
       <div className="CVbody">

            <div id="cvTitle">{personalData.name}</div>
            <div id="cvSubTitle">
                <div>{personalData.mobile}</div>
                <div>|</div>
                <div><a href={"mailto:"+`${personalData.email}`}>{personalData.email}</a></div>
                <div>|</div>
                <div><a href={personalData.github}> Github</a></div>
            </div>
       </div>
       </div>
   </div>

    
   ) 


}

export default CvGenerate;
