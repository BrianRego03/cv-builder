import "../styles/CvGenerate.css"

function CvGenerate(){
    function hideCV(){
        document.getElementById("CVdiv").style.display="none";
        document.getElementById("myForm").style.display="block";
        document.querySelector("body").style.backgroundColor="white";



    }

   return(
   <div id="CVdiv">
       <div >CV</div>
       <button type="button" onClick={hideCV}>Edit</button>
       <div id="cvContainer">
       <div className="CVbody">name</div>
       </div>
   </div>

    
   ) 


}

export default CvGenerate;