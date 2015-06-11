/*
* Page Level Progress
* License - http://github.com/adaptlearning/adapt_framework/LICENSE
* Maintainers - Daryl Hedley <darylhedley@hotmail.com>
*/

define(function(require) {

	var Adapt = require('coreJS/adapt');
	var Backbone = require('backbone');
	var ResourcesView = require('extensions/adapt-contrib-resources/js/adapt-contrib-resourcesView');
	var ResourcesHelpers = require('extensions/adapt-contrib-resources/js/adapt-contrib-resourcesHelpers');

	function setupResources(resourcesModel, resourcesItems, index) {

		var resourcesCollection = new Backbone.Collection(resourcesItems);
		var resourcesModel = new Backbone.Model(resourcesModel);

		Adapt.on('resources:showResources' + index, function() {
			Adapt.drawer.triggerCustomView(new ResourcesView({
				model: resourcesModel, 
				collection: resourcesCollection
			}).$el);
		});
	
	}
	
	Adapt.once('app:dataReady', function() {

		var resources = Adapt.course.get('_resources');
	
		// FIXEME: MAKE LEGACY COMPATIBLE BY DETECTING OBJECT OR ARRAY! 

		for (i=0;i<resources.length;i++) {
			var courseResources = resources[i];
			if (courseResources) {
				var drawerObject = {
		       		title: courseResources.title,
		        	description: courseResources.description,
		        	className: 'resources-drawer'
		    	};
		        Adapt.drawer.addItem(drawerObject, 'resources:showResources'+i);
			} else {
				return console.log('Sorry, no resources object is set on the course.json file');
			}

			setupResources(courseResources, courseResources._resourcesItems,i);		
		}
	});

})
