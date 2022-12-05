window.onload = function () {
    var img_names = ['../../images/street1.jpeg', '../../images/street2.jpg', 
    '../../images/street3.jpeg', '../../images/street4.jpeg', '../../images/mountain1.jpeg',
    '../../images/mountain2.jpeg', '../../images/landscape1.jpeg', '../../images/landscape2.jpeg',
    '../../images/landscape3.jpeg'];

    var image = img_names[Math.floor(Math.random()*img_names.length)];
    var path = window.location.pathname
    var page_name = path.split('/').pop();
    
    if (page_name == 'index.html' || page_name == '') {
        document.getElementById('banner').style.backgroundImage =  "linear-gradient(to top, rgba(46, 49, 65, 0.8), rgba(46, 49, 65, 0.8)), url("+image+")";
        document.getElementById('banner').style.backgroundRepeat = "no-repeat";
        document.getElementById('banner').style.backgroundSize = "cover";   
    }
    else {
        document.getElementsByTagName('header')[1].style.backgroundImage =  "linear-gradient(to top, rgba(46, 49, 65, 0.8), rgba(46, 49, 65, 0.8)), url("+image+")";
        document.getElementsByTagName('header')[1].style.backgroundRepeat = "no-repeat";
        document.getElementsByTagName('header')[1].style.backgroundSize = "cover";   
 
    } 
}
