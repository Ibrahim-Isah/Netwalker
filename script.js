const profileDropdown = document.querySelector('.drop-down');
let dropIndicator = document.querySelector('#drop-indicator')

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