/*
* adapt-contrib-iFrame-vimeo
* License - http://github.com/adaptlearning/adapt_framework/LICENSE
* Maintainers - Kevin Corry <kevinc@learningpool.com>
*/
define(function(require) {

    var ComponentView = require("coreViews/componentView");
    var Adapt = require("coreJS/adapt");

    var ResponsiveIframe = ComponentView.extend({

        events: {
            'inview':'inview'
        },

        preRender: function() {
            this.listenTo(Adapt, 'device:changed', this.resizeControl);
        },

        postRender: function() {
            var that = this;
            this.$('.iFrame-vimeo-iframe').ready(function() {
                that.resizeControl(Adapt.device.screenSize);
                that.setReadyStatus();
            });
        },

        inview: function(event, visible) {
            if (visible) {
                this.setCompletionStatus();
            }
        },

        resizeControl: function(size) {
            var width = this.$('.iFrame-vimeo-iframe').attr('data-width-' + size);
            var height = this.$('.iFrame-vimeo-iframe').attr('data-height-' + size);
            this.$('.iFrame-vimeo-iframe').width(width);
            this.$('.iFrame-vimeo-iframe').height(height);
        }

    });

    Adapt.register("iFrame-vimeo", ResponsiveIframe);

});
