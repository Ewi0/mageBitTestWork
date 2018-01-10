$(document).ready(function() {
    $("#signUpInputs").css('display', 'none'); 
});
$("#signUp").click(function(){
    $("#login-form").animate({
    	left: '20px',
    }, 1000);
    $("#signUpLeft").fadeOut(1000);
    $("#loginRight").fadeIn(1000);
    $("#signUpInputs").fadeIn(800);
    $("#loginInputs").fadeOut(800);
});

$("#login").click(function(){
    $("#login-form").animate({
    	left: '440px',
    }, 1000);
    $("#signUpLeft").fadeIn(1000);
    $("#loginRight").fadeOut(1000);
    $("#signUpInputs").fadeOut(800);
    $("#loginInputs").fadeIn(800);
});

function trueText() {
	var someeetext = document.getElementById('someText').value;
	if (someeetext != ""){
		document.getElementById('someText').style.color = '#f8bf35';
		document.getElementById('someText').style.borderBottom = '1px solid #f8bf35';
		var someeetext = document.getElementById('someText').value;
	}else if (someeetext == "") {
		document.getElementById('someText').style.color = '#ccc';
		document.getElementById('someText').style.borderBottom = '1px solid #ccc';
		var someeetext = document.getElementById('someText').value;
	}
}
function trueText2() {
	var someeetext2 = document.getElementById('someText2').value;
	if (someeetext2 != ""){
		document.getElementById('someText2').style.color = '#f8bf35';
		document.getElementById('someText2').style.borderBottom = '1px solid #f8bf35';
		var someeetext2 = document.getElementById('someText2').value;
	}else if (someeetext2 == "") {
		document.getElementById('someText2').style.color = '#ccc';
		document.getElementById('someText2').style.borderBottom = '1px solid #ccc';
		var someeetext2 = document.getElementById('someText2').value;
	}
}
function trueText3() {
	var someeetext3 = document.getElementById('someText3').value;
	if (someeetext3 != ""){
		document.getElementById('someText3').style.color = '#f8bf35';
		document.getElementById('someText3').style.borderBottom = '1px solid #f8bf35';
		var someeetext3 = document.getElementById('someText3').value;
	}else if (someeetext3 == "") {
		document.getElementById('someText3').style.color = '#ccc';
		document.getElementById('someText3').style.borderBottom = '1px solid #ccc';
		var someeetext3 = document.getElementById('someText3').value;
	}
}
function trueText4() {
	var someeetext4 = document.getElementById('someText4').value;
	if (someeetext4 != ""){
		document.getElementById('someText4').style.color = '#f8bf35';
		document.getElementById('someText4').style.borderBottom = '1px solid #f8bf35';
		var someeetext4 = document.getElementById('someText4').value;
	}else if (someeetext4 == "") {
		document.getElementById('someText4').style.color = '#ccc';
		document.getElementById('someText4').style.borderBottom = '1px solid #ccc';
		var someeetext4 = document.getElementById('someText4').value;
	}
}
function trueText5() {
	var someeetext5 = document.getElementById('someText5').value;
	if (someeetext5 != ""){
		document.getElementById('someText5').style.color = '#f8bf35';
		document.getElementById('someText5').style.borderBottom = '1px solid #f8bf35';
		var someeetext5 = document.getElementById('someText5').value;
	}else if (someeetext5 == "") {
		document.getElementById('someText5').style.color = '#ccc';
		document.getElementById('someText5').style.borderBottom = '1px solid #ccc';
		var someeetext5 = document.getElementById('someText5').value;
	}
}
