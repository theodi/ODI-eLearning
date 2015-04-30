/*
* adapt-contrib-text
* License - http://github.com/adaptlearning/adapt_framework/blob/master/LICENSE
* Maintainers - Daryl Hedley <darylhedley@hotmail.com>, Brian Quinn <brian@learningpool.com>
*/
define(function(require) {

    var ComponentView = require('coreViews/componentView');
    var Adapt = require('coreJS/adapt');

    var Text = ComponentView.extend({
        
        postRender: function() {
            this.setReadyStatus();
            this.listenTo(this.model, 'change:_isComplete', this.removeInviewListener);

            // Check if instruction or body is set, otherwise force completion
            var cssSelector = this.$('.component-instruction').length > 0 ? '.component-instruction' 
                : (this.$('.component-body').length > 0 ? '.component-body' : null);

            if (!cssSelector) {
                this.setCompletionStatus();
            } else {
                this.model.set('cssSelector', cssSelector);
                this.$(cssSelector).on('inview', _.bind(this.inview, this));
            }
        },


        inview: function(event, visible, visiblePartX, visiblePartY) {
            if (visible) {
                if (visiblePartY === 'top') {
                    this._isVisibleTop = true;
                } else if (visiblePartY === 'bottom') {
                    this._isVisibleBottom = true;
                } else {
                    this._isVisibleTop = true;
                    this._isVisibleBottom = true;
                }

                if (this._isVisibleTop && this._isVisibleBottom) {                   
                    this.setCompletionStatus();
                }
            }
        },

        removeInviewListener: function(model, changeAttribute) {
            if (changeAttribute) {
                this.$(this.model.get('cssSelector')).off('inview');
            }
        },

        remove: function() {
            this.$(this.model.get('cssSelector')).off('inview');
            Backbone.View.prototype.remove.apply(this, arguments);
        }
        
    });
    
    Adapt.register("text", Text);
    
});