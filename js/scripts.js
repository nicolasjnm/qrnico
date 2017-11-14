function validate_email(mail)   
{  
var error = 0;
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))  
  {  
		return (true)  
  }  
    return (false)  
} 

$(document).ready(function(e) {
    $("body").addClass("loaded");
	setTimeout(function(){
	    $("body").addClass("goform");
		setTimeout(function(){
			$(".home").remove();
		},1700)
	},4000)
});

var completed = 0;
var emailcompleted = 0;
setInterval(function(){
	/*Block1*/
	   var has_empty = false;

	$("input").each(function(index, element) {
		  if ( ! $(this).val() ) { has_empty = true; return false; }
	   if ( has_empty ) { return false; }
	
	});
	if(validate_email($(".email").val()) ){
		emailcompleted = 1;
	}else{
		emailcompleted = 0;
	}
	if(!has_empty && emailcompleted==1){
		$(".form .bt").removeClass("disabled")
		$(".form .bt").addClass("enabled")
		$(".form .ms").text("");
	}else if(has_empty){
		$(".form .bt").addClass("disabled")
		$(".form .bt").removeClass("enabled")
		$(".form .ms").text("Complete los campos");
	}else if(emailcompleted==0){
		$(".form .bt").addClass("disabled")
		$(".form .bt").removeClass("enabled")
		$(".form .ms").text("Compruebe su email");
	}
},500)
$(document).on("click", ".form .bt.enabled", function(){
		$("body").addClass("goqr");
		setTimeout(function(){
			$(".form").remove();
		},1700)

})
var url_bt, name_ficha;
setInterval(function(){
	url_bt = $(".scans li:last-child").text();
	name_ficha = url_bt.split("/");
	name_ficha = name_ficha[name_ficha.length-1].split(".")
	$(".qr.section .bt").attr({"href":url_bt})
	$(".nombre_ficha").text(name_ficha[0])
	
},1000)