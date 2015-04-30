/*
* adapt-contrib-tutor
* License - http://github.com/adaptlearning/adapt_framework/LICENSE
* Maintainers - Kevin Corry <kevinc@learningpool.com>, Daryl Hedley <darylhedley@hotmail.com>
*/
define(function(require) {

  var Adapt = require('coreJS/adapt');
  var Backbone = require('backbone');

  var TutorView = Backbone.View.extend({

    className: "extension-tutor",

    initialize: function () {
      this.render();
      this.listenTo(Adapt, 'remove', this.closeTutor, this);
      this.listenTo(Adapt, 'device:resize', this.resetTutorSize);
    },

    events: {
      'click .tutor-done':'closeTutor',
      'click .tutor-icon':'closeTutor'
    },

    render: function () {
      var data = this.model.toJSON();
      var template = Handlebars.templates["tutor"];
      this.$el.html(template(data)).appendTo('#wrapper');
      this.$('.tutor').css({display: 'block', opacity: 0});
      _.defer(_.bind(function() {
        this.showTutor();
      }, this));
      return this;
    },

    resetTutorSize: function() {
      this.$('.tutor').removeAttr('style');
      this.resizeTutor(true);
    },

    resizeTutor: function(noAnimation) {
      var windowHeight = $(window).height();
      var tutorHeight = this.$('.tutor').height();
      var animationSpeed = 400;
      if (tutorHeight > windowHeight) {
        this.$('.tutor').css({
          'height':'100%', 
          'top':0, 
          'overflow-y': 'scroll', 
          '-webkit-overflow-scrolling': 'touch',
          'opacity':1
        });
      } else {
        if (noAnimation) {
          var animationSpeed = 0;
        }
        this.$('.tutor').css({
          'margin-top': -(tutorHeight/2)-50, 'opacity': 0
        }).velocity({
          'margin-top': -(tutorHeight/2), 'opacity':1
        }, animationSpeed);
      }
    },

    showTutor: function() {
      this.resizeTutor();
      this.$('.tutor').show();
      this.$('.tutor-shadow').fadeIn('slow');
      
    },

    closeTutor: function (event) {
      if (event && event.preventDefault) event.preventDefault();
      this.$el.fadeOut('fast', _.bind(function() {
        this.remove();
        Adapt.trigger('tutor:closed');
      }, this));
      Adapt.trigger('popup:closed');
    }

  });

  Adapt.on('questionView:showFeedback', function(view) {
    new TutorView({
      model: view.model
    });
    Adapt.trigger('popup:opened');
  });

});