// implementing smooth scroll
var navMenuAnchorTag = document.querySelectorAll('.nav-menu a');
var interval;
for(var i=0;i<navMenuAnchorTag.length;i++){
    navMenuAnchorTag[i].addEventListener('click',function(e){
        e.preventDefault();
        var targetSectionID = this.textContent.trim().toLowerCase();
        var targetSection = document.getElementById(targetSectionID);
        interval = setInterval(scrollVertically,20,targetSection);
    });
}
//scroll function
function scrollVertically(targetSection){
    var targetSectionCoordinates = targetSection.getBoundingClientRect();
    if(targetSectionCoordinates.top<=0){
        clearInterval(interval);
        return;
    }
    window.scrollBy(0,50);
}

// ***************************************************
// creating the skill bar animation for every single bar
var progressBar = document.querySelectorAll('.skill-progress>div');
window.addEventListener('scroll',checkScroll);
let arr = new Array(progressBar.length);
for(let i of arr){
    i = false;
}
initialiseBar();

function initialiseBar(){
    console.log('hello');
    for(let bar of progressBar){
        bar.style.width = 0 + '%';
    }
}

function checkScroll(){
    let i=0;
    for(let bar of progressBar){
        var coordinate = bar.getBoundingClientRect();
        if(!arr[i] && coordinate.top<=window.innerHeight){
            console.log('bar '+ i +' is filling');
            arr[i] = true;
            fillBar(i); 
        }
        i++;
    }
}

function fillBar(i){
    let targetLength = progressBar[i].getAttribute('data-bar-width');
    let currLength = 0;
    let interval = setInterval(function(){
        if(currLength>=targetLength){
            clearInterval(interval);
            return;
        }
        currLength++;
        progressBar[i].style.width = currLength + '%';
    },10);
}


// *************************************************//
// creating the skill bar animation
// var progressBars = document.querySelectorAll('.skill-progress > div');
// var skillsContainer = document.getElementById('skills-display');
// //Handle Scroll Event on windows
// window.addEventListener('scroll',checkScroll);
// var animationDone = false;

// function checkScroll(){
//     //check that skills sections container is visible or not
//     var coordinates = skillsContainer.getBoundingClientRect();
//     if(!animationDone && coordinates.top<=window.innerHeight){
//         animationDone  = true;
//         console.log('skill section visible');
//         fillBars();
//     }else if(coordinates.top>window.innerHeight){
//         animationDone = false;
//         initialiseBars();
//     }
// }


// //ensure that initial width of colored skills div to 0
// function initialiseBars(){
//     for(let bar of progressBars){
//         bar.style.width = 0 + '%';
//         console.log(bar.width);
//     }
// }
// initialiseBars();
// // start animation on every div
// function fillBars(){
//     for(let bar of progressBars){
//         let targetWidth = bar.getAttribute('data-bar-width');
//         let currWidth = 0;
//         let interval = setInterval(function(){
//             if(currWidth>targetWidth){
//                 clearInterval(interval);
//                 return;
//             }
//             currWidth++;
//             bar.style.width = currWidth + '%';
//         },10);
//     }
// }
// // store skill level 
