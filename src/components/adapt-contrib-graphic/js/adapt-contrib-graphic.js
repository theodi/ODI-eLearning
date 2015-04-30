define(function(require) {

    var ComponentView = require("coreViews/componentView");
    var Adapt = require("coreJS/adapt");

    var Graphic = ComponentView.extend({

        preRender: function() {
            this.listenTo(Adapt, 'device:changed', this.resizeImage);
            this.listenTo(this.model, 'change:_isComplete', this.removeInviewListener);
        },

        postRender: function() {
            this.resizeImage(Adapt.device.screenSize);
            this.$('.component-widget').on('inview', _.bind(this.inview, this));
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
        
        resizeImage: function(width) {
            var src = this.$('.graphic-widget img').attr('data-' + width);
            this.$('.graphic-widget img').attr('src', src);

            this.$('.graphic-widget').imageready(_.bind(function() {
                this.setReadyStatus();
            }, this));
        },

        removeInviewListener: function(model, changeAttribute) {
            if (changeAttribute) {
                this.$('.component-widget').off('inview');
            }
        },

        remove: function() {
            this.$('.component-widget').off('inview');
            Backbone.View.prototype.remove.apply(this, arguments);
        }
    });

    Adapt.register("graphic", Graphic);
});