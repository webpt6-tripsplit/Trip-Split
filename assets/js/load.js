let cards = document.querySelectorAll('.card');
function getUrlParam(name) {
    var results = new RegExp('[\\?&]' + name + '=([^&#]*)').exec(window.location.href);
    return (results && results[1]) || undefined;
}

var tab = getUrlParam('tab');
if (tab == "tab2") {
    if(cards[1].style.display === 'none') {
        cards[0].style.display = 'none';
        cards[1].style.display = 'flex';
    } 
} else if(tab == 'tab3') {
    cards[0].style.display = 'none';
    cards[2].style.display = 'flex';
}

window.history.replaceState({}, document.title, "/" + "index.html");