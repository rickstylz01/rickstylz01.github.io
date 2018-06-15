$(document).ready(function() {
    $('img').hide();
    $('img').fadeIn(4000);
    $('#toolbar').hide();
    $('#toolbar').slideDown(5000);
    $('p').hide();
    $('p').fadeIn(2000);
    $('#header').hide();
    $('#header').fadeIn(10000);
});

var answer = window.prompt("Having a good day so far?"); 

if(answer === "yes"){
    alert("Fantastic!");
} else {
    alert("I see.  Try to look on the bright side!");
}
