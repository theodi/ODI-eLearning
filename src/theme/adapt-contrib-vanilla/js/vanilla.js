define(function(require) {
	
	var Adapt = require('coreJS/adapt');

	var RecordAnswers = Backbone.View.extend({
		initialize: function() {
	            this.listenTo(this.model, 'change:_isComplete', this.assessmentComplete);
                    this.listenTo(Adapt, 'remove', this.removeAssessment);
		    this.listenTo(Adapt, 'questionView:showFeedback', this.recordAnswers);
	        },

	        getQuestionComponents: function() {
	            var childComponents = this.model.findDescendants('components');
		    return _.filter(childComponents.models, function(component) {
	                if (component.get('_questionWeight')) {
				return component;
	                }
	            });
		},

		recordAnswers: function() {
		    console.log("In here");
	            _.each(this.getQuestionComponents(), function(component) {
			console.log(component);
			console.log("Complete: " + component.get('_isComplete'));
			console.log("Correct: " + component.get('_isCorrect'));
			console.log(component.get('_selectedItems'));
		    });
	        }
	});

	Adapt.on('articleView:postRender', function(view) {
		console.log("Got a hook!");
		new RecordAnswers({model:view.model});
	});

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
