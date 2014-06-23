$('[data-role=page]').on('pageshow', function (event, ui) {
  $("#" + event.target.id).find(".ustatic.ufooter").load("footer.html", function(){
    $("#" + event.target.id).find("[data-role=navbar]").navbar();
  });

  $("#" + event.target.id).find(".ustatic.uheader").load("header.html", function(){
    $("#" + event.target.id).find("[data-role=navbar]").navbar();
  });

});


var hoverDelay = $.mobile.buttonMarkup.hoverDelay = 0;

$.mobile.defaultPageTransition = 'none';
$.mobile.defaultDialogTransition = 'none';
var context;
if(JSInterface){
	context = JSON.parse(JSInterface.login());
	JSInterface.requestLocation();
	console.log(context);

}
var info = {};
function getLocationCallBack(str){
	 console.log(str);
}




/*
var form1 = $("#form1");
$("#form1").submit(function(e) {
  e.preventDefault();//prevent the form from actually submitting
	var formdata = $(this).serializeArray();		
//		console.log(formdata);
	formdata = $.grep(formdata, function(v) {
		return ( v.value!="" );
	});

	$.ajax({
    type: "POST",
    url: "submit",
    data: formdata
  })
	.done(function() {		
		form1[0].reset();
		$('html,body').scrollTop(0);
	});

  return false;
});
    

*/
