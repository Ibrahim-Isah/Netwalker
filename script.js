const profileDropdown = document.querySelector('.drop-down');
let dropIndicator = document.querySelector('#drop-indicator')
let profileDetails = document.querySelectorAll('.row-profile'), i;


profileDropdown.addEventListener('click' , myFunction)
    
function myFunction(){
    let dropdownContent = document.querySelector('.dropdown-content');
    if (dropdownContent.style.display === "none") {
        dropIndicator.classList.remove('fa-chevron-down')
        dropIndicator.classList.add('fa-chevron-up')
        dropdownContent.style.display = "block";
    } else {
        dropIndicator.classList.add('fa-chevron-down')
        dropIndicator.classList.remove('fa-chevron-up')
        dropdownContent.style.display = "none";
    }
}

console.log("looking" , profileDetails)

for(i = 0; i < profileDetails.length; i = i + 2){
    profileDetails[i].style.backgroundColor = "bisque";
}