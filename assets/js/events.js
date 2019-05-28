var screenshot = document.querySelectorAll('.screenshot');
var modal = document.querySelector('#screenshotModal');
$(document).ready(function() {
    $(screenshot).click(function() {
        $(modal).modal()
    })
})



let tagLine = document.querySelector('.tagline');
tagLine.addEventListener('click', function(){
    this.style.color = 'black';
});

let content = document.querySelector('.contentHeader');
content.addEventListener('click', function(){
    content.style.fontSize = '40px';
});

let contentText = document.querySelector('.contentText');
contentText.addEventListener('click', function(){
    this.style.color = 'gold';
});


