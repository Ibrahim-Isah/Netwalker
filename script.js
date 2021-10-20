const profileDropdown = document.querySelector('.drop-down');
let dropIndicator = document.querySelector('#drop-indicator')
let profileDetails = document.querySelectorAll('.row-profile'), i;
let hamburger = document.querySelector('.hamburger')
const dropLIS = document.querySelector('.dropLIS');


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


for(i = 0; i < profileDetails.length; i = i + 2){
    profileDetails[i].style.backgroundColor = "bisque";
}

hamburger.addEventListener('click' , openNav)

function openNav() {
    let sidebar = document.getElementById("mySidenav")
    if(sidebar.style.width === "250px"){
        sidebar.style.width = "0"
        document.querySelector("main").style.marginLeft = "0"
    } else {
        sidebar.style.width = "250px"
        document.querySelector("main").style.marginLeft = "280px"
    }
}

dropLIS.addEventListener('click' , dropdownLIS);

function dropdownLIS(){
    let sidebarDrop = document.querySelector('.show-LIS')
    if(sidebarDrop.style.display === "none"){
        sidebarDrop.style.display = "block"
    } else {
        sidebarDrop.style.display = "none"
    }
}