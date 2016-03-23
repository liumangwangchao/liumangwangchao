$(function(){
	$(".btn_url").click(function(){
		//$(".player, .content").slideDown(600);
		//$(".info").slideUp(600);
		$("#playfrm").click();
		$("#playfrm").disabled = true;
	});
	$("#u").focus(function(){
		var txt_value = $(this).val();
		if(txt_value==this.defaultValue){
			$(this).val("");
		};
	});
	$("#u").blur(function(){
		var txt_value = $(this).val();
		if(txt_value==""){
			$(this).val(this.defaultValue);
		};
	});
});

$(document).ready(function(){ 
    var hash = window.location.hash + '';
    if(hash.indexOf('#%21')==0){
        hash = decodeURIComponent(hash);
    }
    if(hash.match(/#!u=(.+)/)){
        var url = hash.match(/#!u=(.+)/)[1];
        if(url){
            $('#u').val(url);
            $('#frompost').submit();
        }
    }
});