var screenshot = document.querySelector('.homeImage');
var modal = document.querySelector('#screenshotModal');
$(document).ready(function() {
    $(screenshot).click(function() {
        $(modal).modal()
    })
})