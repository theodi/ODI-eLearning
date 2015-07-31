define(function(require) {
	
	var Adapt = require('coreJS/adapt');
	
});

var interval; 
$(document).ready(function() {
	interval = setInterval(function() { checkState(); },5000);
});

var moduleId = "";
$.getJSON("course/config.json",function(data) {
        moduleId = data._moduleId;
});

function emailSave() {
	var email = $('#email').val();
	localStorage.setItem("ODI_email",email);
	$('#save-section').fadeOut( function() {
		checkState();
		interval = setInterval(function() { checkState(); },5000);
		$('#save-section').fadeIn();
	});
}

function showSave() {
	$('#save-section').fadeOut( function() {
		$('#save-section').html("<div class='saveLoad'>EMail: <input type='text' id='email' name='email' cols='80'></input><button class='slbutton' id='emailSave' onClick='emailSave();'>Save</button></div>");
		$('#save-section').fadeIn();
	});
}

function checkState() {
	var sessionEmail = localStorage.getItem("ODI_email");
	var sessionID = localStorage.getItem("ODI_id");
	var lastSave = localStorage.getItem("ODI_lastSave");

	if (!sessionEmail && sessionID) {
		$('#save-section').html("<button onClick='showSave();' class='slbutton' id='saveSession'>Save Progress</button>");
		clearInterval(interval);
	} else {
		if (!sessionID) { sessionID = "Unknown"; }
		if (!lastSave) { lastSave = "Unknown"; }
		$('#save-section').html("Module ID: " + moduleId + "<br/>Session ID: " + sessionID + "<br/>Last Save: " + lastSave);
	}	

}
