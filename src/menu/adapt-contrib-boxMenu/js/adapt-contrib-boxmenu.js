define(function(require) {

    var Backbone = require('backbone');
    var Adapt = require('coreJS/adapt');
    var MenuView = require('coreViews/menuView');

    var BoxMenuView = MenuView.extend({

        postRender: function() {
            var nthChild = 0;
            this.model.getChildren().each(function(item) {
                if(item.get('_isAvailable')) {
                    nthChild ++;
                    this.$('.menu-container-inner').append(new BoxMenuItemView({model:item, nthChild:nthChild}).$el);
                }
            });
        }

    }, {
        template:'boxmenu'
    });

    var BoxMenuItemView = MenuView.extend({

        className: function() {
            return [
                'menu-item',
                'menu-item-' + this.model.get('_id') ,
                'nth-child-' + this.options.nthChild,
                this.options.nthChild % 2 === 0  ? 'nth-child-even' : 'nth-child-odd'
            ].join(' ');
        },

        preRender: function() {
            this.model.getCompleteComponentsAsPercentage();
        },

        postRender: function() {
            this.$el.imageready(_.bind(function() {
                this.setReadyStatus();
            }, this));
        }

    }, {
        template:'boxmenu-item'
    });

    Adapt.on('router:menu', function(model) {

        // Listen to when Adapt hits a menu and navigate to a page. Make sure the string here is the page ID you're trying to route too.

        var newRouteId = 'co-01'

        Backbone.history.navigate('#/id/' + newRouteId, true);

    });

    Adapt.on('router:page', function(model) {

        // Hide the navigation back button. _.defer makes show everything is rendered before hiding.

        _.defer(function() {
            $('.navigation-back-button').addClass('display-none');
        });

    });

});
