const parallax = document.getElementById('parallax');
const parallax2 = document.getElementById('para2');

window.addEventListener('scroll', function(){
    let offset = window.pageYOffset;
    parallax.style.backgroundPositionY = offset * 0.4 + "px";

});

window.addEventListener('scroll' ,function(){
    let offset = window.pageYOffset;
    parallax2.style.backgroundPositionY = offset * 0.4 +"px";
});