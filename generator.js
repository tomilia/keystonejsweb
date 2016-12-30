$(document).ready(function() {
 everything();


$("#gene").click(function() {
  everything();
  });



function getRandomColor() {
  var hex = Math.floor(Math.random() * 0xFFFFFF);
  return "#" + ("000000" + hex.toString(16)).substr(-6);
}

function everything(){

  var colorvar = getRandomColor();

  $("body").css({
    transition: 'background-color 1s ease-in-out',
    "background-color": colorvar
  })
  var quotetext="";
  var quoteAuthor="";
  $.getJSON("http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?", function(val) {
  quotetext=val.quoteText;
    quoteAuthor=val.quoteAuthor; $("#quote").html(JSON.stringify(quotetext))
    $("#author").html("- "+JSON.stringify(quoteAuthor).replace(/['"]+/g, ''))

})
  $("#twitter").click(function(){
window.location.href = "https://twitter.com/intent/tweet/?text="+quotetext+" -"+quoteAuthor});
}
});
