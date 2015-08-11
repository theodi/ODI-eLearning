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
	            _.each(this.getQuestionComponents(), function(component) {
			if (!component.get('_isComplete')) {
				return;
			}
			var obj = {};
			obj.id = component.get('_id');
			obj.complete = component.get('_isComplete');
			obj.correct = component.get('_isCorrect');
			obj.userAnswer = component.get('_userAnswer');
			obj.selectedItems = component.get('_selectedItems');
			var answers = JSON.parse(localStorage.getItem("ODI_" + moduleId + "_Answers"));
			if (answers == null) {
				var answers = {};
			}
			answers[obj.id] = {};
			answers[obj.id] = obj;
			localStorage.setItem("ODI_" + moduleId + "_Answers",JSON.stringify(answers));
		    });
	        }
	});

	Adapt.on('articleView:postRender', function(view) {
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
