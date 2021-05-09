function generatoryears(start , end){
    "use strict";
var  years;
document.write("<select>");
    for(years = start ; years<=end ; years++){
      
       
document.write("<option value=\""+years+"\">" + years + "</option>");
    }
    document.write("/select");

}
generatoryears(1990,2020)