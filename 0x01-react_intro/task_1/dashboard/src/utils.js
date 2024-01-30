import React from "react";

// FUNCTION THAT GET FULL YEAR

function getFullYear(){
    return new Date().getFullYear()
}

//FUNCTION THAT COPY FOOTER
function getFooterCopy(isIndex) {
    return isIndex ? "Holberton School" : "Holberton School main dashboard";
  }

export { getFullYear, getFooterCopy };
