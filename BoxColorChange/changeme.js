var button = document.querySelector('button');
var box = document.getElementById('changeMe');

function changeColor(){
    if(box.style.background != 'red'){
        box.style.background = 'pink';
    }
    else{
        box.style.background='turquoise';
    }
}


