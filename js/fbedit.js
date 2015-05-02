$(document).ready(function() {
    var v = Math.floor(Math.random() * 45.0) + 1;
    var inp = document.getElementsByClassName('_5vb_');
    var bck = document.getElementById('contentCol');
    bck.style.setProperty('background-color', 'rgba(255, 255, 255, .0)', null);
    for (i = 0; i < inp.length; i++)
    {
        console.log(inp[i]);
        var id = chrome.runtime.id;
        inp[i].style.setProperty('background-image',
                                 'url(chrome-extension://' + id +
                                 '/backgrounds/' + v +
                                  '.jpg' + ')', null);
        inp[i].style.setProperty('background-position', 'center', null);
        inp[i].style.setProperty('background-repeat', 'repeat', null);
    }
    var leftcol = document.getElementById('leftCol');
    leftcol.style.setProperty('background', '#e9eaed');
});
