define(function(require) {
  var ComponentView = require('coreViews/componentView');
  var Adapt = require('coreJS/adapt');

  var Accordion = ComponentView.extend({

    postRender: function() {
      this.setReadyStatus();
    },

    events: {
      'click .accordion-item-title' : 'toggleItem'
    },

    toggleItem: function (event) {
      event.preventDefault();
      this.$('.accordion-item-body').stop(true,true).slideUp(200);
      if (!$(event.currentTarget).hasClass('selected')) {
        this.$('.accordion-item-title').removeClass('selected');
        $(event.currentTarget).addClass('selected visited').siblings('.accordion-item-body').slideToggle(200);
        this.$('.accordion-item-title-icon').removeClass('icon-minus').addClass('icon-plus');
        $('.accordion-item-title-icon', event.currentTarget).removeClass('icon-plus').addClass('icon-minus');
        if ($(event.currentTarget).hasClass('accordion-item')) {
          this.setVisited($(event.currentTarget).index());
        } else {
          this.setVisited($(event.currentTarget).parent('.accordion-item').index());
        }
      } else {
        this.$('.accordion-item-title').removeClass('selected');
        $(event.currentTarget).removeClass('selected');
        $('.accordion-item-title-icon', event.currentTarget).removeClass('icon-minus').addClass('icon-plus');
      }
    },

    setVisited: function(index) {
      var item = this.model.get('_items')[index];
      item._isVisited = true;
      this.checkCompletionStatus();
    },

    getVisitedItems: function() {
      return _.filter(this.model.get('_items'), function(item) {
        return item._isVisited;
      });
    },

    checkCompletionStatus: function() {
      if (!this.model.get('_isComplete')) {
        if (this.getVisitedItems().length == this.model.get('_items').length) {
          this.setCompletionStatus();
        }
      }
    }

  });

  Adapt.register("accordion", Accordion);

  return Accordion;

});
