import React from "react";

// FUNCTION THAT GET FULL YEAR

function getFullYear(){
    return new Date().getFullYear()
}

//FUNCTION THAT COPY FOOTER
function getFooterCopy(isIndex) {
    return isIndex ? "Holberton School" : "Holberton School main dashboard";
  }

// FUNCTION THAT GET LAST NOTIFICATION:
function getLatestNotification(){
  return '<strong>Urgent requirement</strong> - complete by EOD';
}


export { getFullYear, getFooterCopy,getLatestNotification };
