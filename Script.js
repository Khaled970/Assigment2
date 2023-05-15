import {useState} from "react";

function myFunction(){
    document.getElementById("myApp").classList.toggle("show");
}
window.onclick = function(event){
    if(!event.target.matches('.apppro')){
        var dropdowns = document.getElementsByClassName("Portfolio-con");
        var i;
        for(i = 0; i < dropdowns.length; i++){
            var openDropdown = dropdowns[i];
            if(openDropdown.classList.contains('show')){
                openDropdown.classList.remove('show');
            }
        }
    }
}


var dropdown = document.getElementsByClassName("Logginbtn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}