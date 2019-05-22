var screenshot = document.querySelectorAll('.screenshot');
var modal = document.querySelector('#screenshotModal');
$(document).ready(function() {
    $(screenshot).click(function() {
        $(modal).modal()
    })
})