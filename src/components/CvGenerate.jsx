
function CvGenerate(){
    function hideCV(){
        document.getElementById("CVdiv").style.display="none";
        document.getElementById("myForm").style.display="block";


    }

   return(
   <div id="CVdiv">
       <div >CV</div>
       <button type="button" onClick={hideCV}>Edit</button>
   </div>

    
   ) 


}

export default CvGenerate;