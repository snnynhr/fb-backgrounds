var arr = [
'http://www.moritzkrauss.de/images/header-2015.jpg',
'http://passionact.com/wp-content/uploads/2014/09/dawn-190053.jpg',
'https://elpensaderodesegundo.files.wordpress.com/2015/02/cropped-el-teide-michael-bolognesi.jpg',
'http://www.timteller.pl/wp-content/uploads/2015/02/jungle-601542_1920.jpg',
'http://isrageo.com/wp_site/wp-content/uploads/2015/03/11086458_1106706329345151_1487392015_o.jpg',
'http://s3.amazonaws.com/simplifit_blog/media/2015/04/simplifit-news.jpg'];

console.log('Initiated DOM handler');

$(document).ready(function() {
    var v = Math.floor(Math.random() * 6.0);
    console.log('Hello');
    var inp = document.getElementsByClassName('_5vb_');
    var bck = document.getElementById('contentCol');
    bck.style.setProperty('background-color', '#4264CB', null);
    for (i = 0; i < inp.length; i++)
        inp[i].style.setProperty('background-image', 'url(' + arr[v] + ')', null);
    console.log(inp.style);
    //$('#contentCol').css('background-color', '#1F2C51');
});
// document.addEventListener('DOMContentLoaded', function() {
//     console.log('About to change');
//     $( '#contentCol' ).css( 'background-color', '0x1F2C51' );
// });
