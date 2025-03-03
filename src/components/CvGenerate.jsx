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
       <div className="CVbody">Name:{personalData.name}</div>
       </div>
   </div>

    
   ) 


}

export default CvGenerate;
