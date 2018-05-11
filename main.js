var sect0 = document.getElementById('port-section-0')
var sect1 = document.getElementById('port-section-1')
var sect2 = document.getElementById('port-section-2')

sect0.addEventListener('click', setPortSection(0))
sect1.addEventListener('click', setPortSection(1))
sect2.addEventListener('click', setPortSection(2))


function setPortSection(num){
    var modal = document.getElementsByClassName('modal')[num]
    var displayImg = document.getElementsByClassName('port-img')[num]
    var title = document.getElementsByClassName('port-title')[num]
    var exitBtn = document.getElementsByClassName('exit-btn')[num]

    displayImg.addEventListener('mouseover', displayTitle)
    displayImg.addEventListener('mouseout', removeTitle)
    displayImg.addEventListener('click', displayModal)
    exitBtn.addEventListener('click', exitModal)
    window.addEventListener('click', clickOutsideModal)


    function displayTitle(){
        title.style.display = "block";
        title.style.height = "0px"
    }

    function removeTitle(){
        title.style.display = "none"
    }

    function displayModal(){
        modal.style.display = "block"
    }

    function exitModal(){
        modal.style.display = "none"
    }

    function clickOutsideModal(e){
        if (e.target == modal) {
            modal.style.display = 'none';
        }
    }
}



function hamburger(x){
    x.classList.toggle("change")
}

var menu = document.getElementById('menu')
var hamham = document.getElementById('hamham')


//Display Menu
hamham.addEventListener('click', toggle)
var toggleOn = false;

function toggle(){
    if (toggleOn === false){
        menu.style.display = 'block';
        toggleOn = true;
    }
    else if (toggleOn === true){
        menu.style.display = "none";
        toggleOn = false;
    }
}
