define(function(require) {

	var Adapt = require('coreJS/adapt');

});


var interval;
var save_enabled = false;
var need_email = false;
var click_bind = false;

var theme = "DLAB";
var version = "1.1.14";
var platform = "web";


$(document).ready(function() {
	setTimeout(function() {updateLanguageSwitcher(); },1000);
	interval = setInterval(function() { checkState(); },3000);
	$.getJSON("course/en/course.json",function(data) {
        if (typeof data.format === 'undefined') {
        	showSaveSection();
        }
        if (data.format != "course") {
        	showSaveSection();
        }
	$('#drawer').hide();
	});
});
$(document).keypress(function(e) {
    if (e.which == 115) {
    	showSaveSection();       
	}
});



var moduleId = "";
$.getJSON("course/config.json",function(data) {
        moduleId = data._moduleId;
});

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
 (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
 m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
 })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-34573394-31', 'auto');
ga('send', 'pageview');

function showSaveSection() {
    $(".save-section-outer").fadeIn();
    $("#country-select").removeClass('normal');
    if (need_email) {
		$("#country-select").addClass('save-shown');
	} else {
		$("#country-select").addClass('status-shown');
	}
    save_enabled = true;
}

function checkWelcome() {
	if (localStorage.getItem("email") == null && localStorage.getItem("ODI_Welcome_Done") == null && save_enabled) {
		showMessage('enter_email');
		localStorage.setItem("ODI_Welcome_Done",true);
	}
}

function showMessage(phraseId) {
	var Adapt = require('coreJS/adapt');
	var foo = {};
	foo.model = {}
	foo.model.toJSON = function() {
		var bar = {};
		bar.feedbackMessage = config["_phrases"][phraseId];
		return bar;
	}
	Adapt.trigger('questionView:showFeedback', foo);
}


function addListeners() {
	if (!click_bind) {
                $('.save-section-outer').click(function() {
                        $('#cloud-status').slideToggle();
                });
                click_bind = true;
        }
}

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function getEmail() {
	email = $("input[id='email']").val();
	if (validateEmail(email)) {
		localStorage.setItem("email",email);
		emailSave(email);
	}
}

function emailSave(email) {
	if (email == "" || !email) {
		return;
	}
	localStorage.setItem("email",email);
	$('#save-section').fadeOut( function() {
    		var sl = document.getElementById('save-section');
		var ss = document.getElementById('cloud-status-text');
		$(sl).html("");
		$(sl).addClass('saving');
		var toClass = "cloud_saving";
		$(sl).css('background-image','url(adapt/css/assets/' + toClass + '.gif)');
		$(ss).html(config["_phrases"][toClass]);
		var ssi = document.getElementById('cloud-status-img');
		$(ssi).attr('src','adapt/css/assets/' + toClass + '.gif');
		var ssi2 = document.getElementById('cloud-status-img2');
		$(ssi2).attr('src','adapt/css/assets/' + toClass + '.gif');
		$(sl).fadeIn();
		addListeners();
		checkState();
		interval = setInterval(function() { checkState(); },5000);
	});
}

function showSave() {
	showMessage('enter_email');
}

function checkState() {
	var sessionEmail = localStorage.getItem("email");
	var sessionID = localStorage.getItem("_id");
	var lastSave = localStorage.getItem(moduleId + "_lastSave");

	if (!sessionEmail && sessionID) {
		checkWelcome();
		$('#save-section').html("<button onClick='showSave();' class='slbutton' id='saveSession'>Save progress</button>");
		$('#save-section').fadeIn();
		$('#save-status').html("Version: " + version + "<br/>Module ID: " + moduleId + "<br/>Session ID: " + sessionID + "<br/>Last Save: " + lastSave);
	    $("#country-select").removeClass('status-shown');
		$("#country-select").addClass('save-shown');
		clearInterval(interval);
		click_bind = false;
		$('.save-section-outer').unbind('click');
	} else if (sessionID) {
		if (!lastSave) { lastSave = "Unknown"; }
		$('#save-status').html("Version: " + version + "<br/>Module ID: " + moduleId + "<br/>Session ID: " + sessionID + "<br/>Last Save: " + lastSave);
		$('#save-section').addClass('saving');
		$("#country-select").removeClass('save-shown');
		$("#country-select").addClass('status-shown');
		addListeners();
	} else {
    		var sl = document.getElementById('save-section');
		var ss = document.getElementById('cloud-status-text');
		$(sl).addClass('saving');
		var toClass = "cloud_failed";
		$(sl).css('background-image','url(adapt/css/assets/' + toClass + '.gif)');
		$(ss).html(config["_phrases"][toClass]);
		var ssi = document.getElementById('cloud-status-img');
		$(ssi).attr('src','adapt/css/assets/' + toClass + '.gif');
		var ssi2 = document.getElementById('cloud-status-img2');
		$(ssi2).attr('src','adapt/css/assets/' + toClass + '.gif');
		$('#save-section').fadeIn();
		$("#country-select").removeClass('save-shown');
		$("#country-select").addClass('status-shown');
		addListeners();
	}	
}

function updateLanguageSwitcher() {
	createDropDown();

        var $dropTrigger = $(".dropdown dt a");
        var $languageList = $(".dropdown dd ul");

	$(".dropdown dt a").click(function() {
		$dropTrigger.addClass("active");
		$languageList.slideDown(200);
	});
        // open and close list when button is clicked
        $dropTrigger.toggle(function() {
                $languageList.slideDown(200);
                $dropTrigger.addClass("active");
        }, function() {
                $languageList.slideUp(200);
                $(this).removeAttr("class");
        });

        // close list when anywhere else on the screen is clicked
        $(document).bind('click', function(e) {
                var $clicked = $(e.target);
                if (! $clicked.parents().hasClass("dropdown"))
                       $languageList.slideUp(200);
                       $dropTrigger.removeAttr("class");
       });

        // when a language is clicked, make the selection and then hide the list
        $(".dropdown dd ul li a").click(function() {
                var clickedValue = $(this).parent().attr("class");
                var clickedTitle = $(this).find("em").html();
                $("#target dt").removeClass().addClass(clickedValue);
                $("#target dt em").html(clickedTitle);
                $languageList.hide();
                $dropTrigger.removeAttr("class");
		if (lang != clickedValue) {
			current = window.location.href;
			newLocation = current.replace("/" + lang + "/","/" + clickedValue + "/");
			window.location.href = newLocation;
		}
        });
}

function navGoModule(module) {
	window.location.href = module;
}

function createDropDown(){	
	var $form = $("div#country-select form");
	$form.hide();
	var source = $("#country-options");
	source.removeAttr("autocomplete");
	var selected = source.find('[title="'+lang+'"]');
	var options = $("option", source);
	$("#country-select").append('<dl id="target" class="dropdown"></dl>')
		$("#target").append('<dt class="' + selected.val() + '"><a href="#" style="display: inline;"><span class="flag"></span><em>' + selected.text() + '</em></a></dt>')
		$("#target").append('<dd><ul></ul></dd>')
		options.each(function(){
				$("#target dd ul").append('<li class="' + $(this).val() + '"><a href="' + $(this).attr("title") + '"><span class="flag"></span><em>' + $(this).text() + '</em></a></li>');
				});
}
/*
* Drawer
* License - https://github.com/adaptlearning/adapt_framework/blob/master/LICENSE
* Maintainers - Daryl Hedley <darylhedley@hotmail.com>
*/

define(function(require) {

	var Backbone = require('backbone');
	var Adapt = require('coreJS/adapt');

	var DrawerView = Backbone.View.extend({

		className: 'drawer',

		initialize: function() {
			this._isVisible = false;
			this.listenTo(Adapt, 'navigation:toggleDrawer', this.toggleDrawer);
			this.listenTo(Adapt, 'drawer:triggerCustomView', this.openCustomView);
			this.listenToOnce(Adapt, 'adapt:initialize', this.checkIfDrawerIsAvailable);
			this.listenTo(Adapt, 'drawer:closeDrawer', this.onCloseDrawer);
			this.listenTo(Adapt, 'remove', this.onCloseDrawer);
			this.render();
			this.hideDrawer();
			this.drawerDuration = Adapt.config.get('_drawer')._duration;
			this.drawerDuration = (this.drawerDuration) ? this.drawerDuration : 400;
			// Setup cached selectors
			this.$wrapper = $('#wrapper');
		},

		events: {
			'click .drawer-back': 'onBackButtonClicked',
			'click .drawer-close':'onCloseDrawer'
		},

		render: function() {
			var template = Handlebars.templates['drawer']
	                $(this.el).html(template).appendTo('.navigation');
//	                $(this.el).html(template).appendTo('body');
            		return this;
		},

		openCustomView: function(view, hasBackButton) {
			// Set whether back button should display
			this._hasBackButton = hasBackButton;
			this._isCustomViewVisible = true;
			Adapt.trigger('drawer:empty');
			this.toggleDrawer();
			this.$('.drawer-holder').html(view);
			
		},

		checkIfDrawerIsAvailable: function() {
			if(this.collection.length == 0) {
				$('.navigation-drawer-toggle-button').addClass('display-none');
			}
		},

		onBackButtonClicked: function(event) {
			event.preventDefault();
			this.showDrawer(true);
		},

		onCloseDrawer: function(event) {
			if (event) {
				event.preventDefault();
			}
			this._isVisible = false;
			this.hideDrawer();
		},

		toggleDrawer: function() {
			if (this._isVisible) {
// && this._isCustomViewVisible === false) {
				this._isVisible = false;
				this.hideDrawer();
			} else {
				this._isVisible = true;
				this.showDrawer(true);
			}
		},

		showDrawer: function(emptyDrawer) {
			Adapt.trigger('popup:opened');
			var drawerWidth = this.$el.width();
			if (emptyDrawer) {
				this.$('.drawer-back').addClass('display-none');
				this._isCustomViewVisible = false;
				this.emptyDrawer();
				this.renderItems();
				Adapt.trigger('drawer:openedItemView');
			} else {
				if (this._hasBackButton) {
					this.$('.drawer-back').removeClass('display-none');
				} else {
					this.$('.drawer-back').addClass('display-none');
				}
				Adapt.trigger('drawer:openedCustomView');
			}
			_.defer(_.bind(function() {
				this.$el.show();
//				var showEasingAnimation = Adapt.config.get('_drawer')._showEasing;
//				var easing = (showEasingAnimation) ? showEasingAnimation : 'easeOutQuart';
//				this.$el.velocity({'right': 0}, this.drawerDuration, easing);
				// Dim down the page or menu containers
				// CSS is used here as on mobile/tablet devices it makes the animation jerky
				$('.page, .menu').css({opacity:0.5});
			
				this.addBodyEvent();
				Adapt.trigger('drawer:opened');

			}, this));
		},

		emptyDrawer: function() {
			this.$('.drawer-holder').empty();
		},

		renderItems: function() {
			Adapt.trigger('drawer:empty');
			this.emptyDrawer();
			this.collection.each(function(item) {
				new DrawerItemView({model: item});
			});
		},

		hideDrawer: function() {
			Adapt.trigger('popup:closed');

//			var showEasingAnimation = Adapt.config.get('_drawer')._hideEasing;
//			var easing = (showEasingAnimation) ? showEasingAnimation : 'easeOutQuart';

//			var duration = Adapt.config.get('_drawer')._duration;
//			duration = (duration) ? duration : 400;

//			this.$el.velocity({'right': -this.$el.width()}, this.drawerDuration, easing);
			$('.page, .menu').css({opacity:1});
			this.$el.hide();
			this._isCustomViewVisible = false;
			this.removeBodyEvent();
			Adapt.trigger('drawer:closed');
		},

		addBodyEvent: function() {
			$('.page, .menu').one('click touchstart', _.bind(function() {
				this.onCloseDrawer();
			}, this));
		},

		removeBodyEvent: function() {
			$('.page, .menu').off('click touchstart');
		}

	});

	var DrawerItemView = Backbone.View.extend({

		className: 'drawer-item',

		initialize: function() {
			this.listenTo(Adapt, 'drawer:empty', this.remove);
			this.render();
		},

		events: {
			'click .drawer-item-open': 'onDrawerItemClicked'
		},

		render: function() {
			var data = this.model.toJSON();
			var template = Handlebars.templates['drawerItem']
            $(this.el).html(template(data)).appendTo('.drawer-holder');
            return this;
		},

		onDrawerItemClicked: function(event) {
			event.preventDefault();
			var eventCallback = this.model.get('eventCallback');
			Adapt.trigger(eventCallback);
		}

	});

	return DrawerView;

});
