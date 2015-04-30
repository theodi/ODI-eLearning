/*
* adapt-contrib-textInput
* License - http://github.com/adaptlearning/adapt_framework/LICENSE
* Maintainers - Kev Adsett <kev.adsett@gmail.com>, Daryl Hedley <darylhedley@hotmail.com>
*/

define(function (require) {
    var QuestionView = require('coreViews/questionView');
    var Adapt = require('coreJS/adapt');
    
    var TextInput = QuestionView.extend({
        events: {
            "click .textinput-widget .button.submit":"onSubmitClicked",
            "click .textinput-widget .button.reset":"onResetClicked",
            "click .textinput-widget .button.model":"onModelAnswerClicked",
            "click .textinput-widget .button.user":"onUserAnswerClicked",
            "blur input":"forceFixedPositionFakeScroll",
            "focus input":"clearValidationError"
        },

        forceFixedPositionFakeScroll: function() {
            if (Modernizr.touch) {
                _.defer(function() {
                    window.scrollTo(document.body.scrollLeft, document.body.scrollTop);
                });
            } 
        },

        canSubmit:function() {
            var canSubmit = true;
            this.$(".textinput-item-textbox").each(function() {
                if($(this).val()=="") {
                    canSubmit = false;
                }
            });
            return canSubmit;
        },

        onCannotSubmit: function() {
            this.showValidationError();
        },

        showValidationError: function() {
            this.$(".textinput-item-textbox").addClass("textinput-validation-error");
        },

        clearValidationError: function() {
            this.$(".textinput-item-textbox").removeClass("textinput-validation-error");
        },
        
        checkAnswerIsCorrect: function(possibleAnswers, userAnswer) {
            var answerIsCorrect = _.contains(possibleAnswers, this.cleanupUserAnswer(userAnswer));
            if(answerIsCorrect) this.model.set('_hasAtLeastOneCorrectSelection', true);
            return answerIsCorrect;
        },
        
        cleanupUserAnswer: function(userAnswer) {
            if(this.model.get('_allowsAnyCase')) {
                userAnswer = userAnswer.toLowerCase();
            }
            if(this.model.get('_allowsPunctuation')) {
                var userAnswerClean = userAnswer.replace(/[\.,-\/#!$£%\^&\*;:{}=\-_`~()]/g,"");
                userAnswer = $.trim(userAnswerClean);
            }
            return userAnswer;
        },
        
        forEachAnswer: function(callback) {
             _.each(this.model.get('_items'), function(item, index) {
                var userAnswer = this.$(".textinput-item-textbox").eq(index).val();
                callback(this.checkAnswerIsCorrect(item._answers, userAnswer), item);
            }, this);
        },
        
        markQuestion: function() {
            this.forEachAnswer(function(correct, item) {
                item.correct = correct;
            });
            QuestionView.prototype.markQuestion.apply(this);
        },
        
        onEnabledChanged: function() {
            this.$('.textinput-item-textbox').prop('disabled', !this.model.get('_isEnabled'));
        },
        
        onModelAnswerShown:function () {
            _.each(this.model.get('_items'), function(item, index){
                this.$(".textinput-item-textbox").eq(index).val(item._answers[0]);
            }, this);
        },
        
        onUserAnswerShown:function () {
            _.each(this.model.get('_items'), function(item, index){
                this.$(".textinput-item-textbox").eq(index).val(item.userAnswer);
            }, this);
        },
        
        postRender: function() {
            QuestionView.prototype.postRender.apply(this);
            this.setReadyStatus();
        },
        
        storeUserAnswer: function() {
            _.each(this.model.get('_items'), function(item, index) {
                item.userAnswer = this.$('.textinput-item-textbox').eq(index).val();
            }, this);
        }
        
    });
    
    Adapt.register("textinput", TextInput);
    
});