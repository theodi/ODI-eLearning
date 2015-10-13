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

	function displayResources(resources) {
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
	}
	
	Adapt.once('app:dataReady', function() {

		var resources = Adapt.course.get('_resources');
	
		// FIXEME: MAKE LEGACY COMPATIBLE BY DETECTING OBJECT OR ARRAY! 
		if (resources instanceof Array) {
		} else {
			var out = [];
			out.push(resources);
			resources = out;
		}
	
		var refine = false;
		var refineResources = {};
		var refineIndex = 0;
		for (i=0;i<resources.length;i++) {
			var courseResources = resources[i];
			if (courseResources) {
				var title = courseResources.title;
				if (title == "Open Refine Servers") {
					refine = "true";	
					refineResources = courseResources;
					refineIndex = i;
				}
			}
		}
		if (refine) {
			var lines = [];
			$.get("http://training.theodi.org/refine.csv",function(data){
				lines = data.split('\n');
			})
			.done(function() {
				refineResources._resourcesItems = [];
				for (k=0;k<lines.length;k++) {
					if (lines[k] !="") {
						var item = {};
						item._type = "link";
						item.description = "Open refine server for use in data cleaning exercise";
						item._link = lines[k];
						item.title = "Refine Server " + (k+1);
						refineResources._resourcesItems.push(item);
					}
				}
				resources[refineIndex] = refineResources;
				displayResources(resources);
			})
			.fail(function() {
				displayResources(resources);
			})
			.always(function() {
				$('.navigation-drawer-toggle-button').removeClass('display-none');
			});
		} else {
			displayResources(resources);
		}
	});

})
