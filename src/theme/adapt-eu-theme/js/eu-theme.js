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

function emailSave(email) {
        localStorage.setItem("email",email);
        $('#save-section').fadeOut( function() {
                $('#save-section').html("");
                checkState();
                interval = setInterval(function() { checkState(); },5000);
        });
}

function showSave() {
        var email=prompt("Please enter your email...");
        emailSave(email);
}

function checkState() {
        var sessionEmail = localStorage.getItem("email");
        var sessionID = localStorage.getItem("_id");
        var lastSave = localStorage.getItem(moduleId + "_lastSave");

        if (!sessionEmail && sessionID) {
                $('#save-section').html("<button onClick='showSave();' class='slbutton' id='saveSession'>Save Progress</button>");
                $('#save-section').fadeIn();
                clearInterval(interval);
        } else {
                if (!sessionID) { sessionID = "Unknown"; }
                if (!lastSave) { lastSave = "Unknown"; }
                $('#save-status').html("Module ID: " + moduleId + "<br/>Session ID: " + sessionID + "<br/>Last Save: " + lastSave);
                $('#save-section').addClass('saving');
                $('#save-section').fadeIn();
        }

}
