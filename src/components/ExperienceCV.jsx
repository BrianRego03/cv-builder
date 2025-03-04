/* eslint-disable react/prop-types */

import "../styles/ExperienceCV.css"

function ExperienceComponent(index,person){
    function dateFormatter(dateString){
        const dateObj = new Date(dateString);
        const options = { year: 'numeric', month: 'long' };
        const formattedDate = dateObj.toLocaleDateString('en-US', options);
        return formattedDate;



    }

}