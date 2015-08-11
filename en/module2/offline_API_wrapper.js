var api_url = "http://localhost/~davetaz/backend/";
var updateInt;
if (!localStorage.getItem("ODI_id")) {
  	$.get( api_url + "create_id.php", function( data ) {
  		window.localStorage.setItem("ODI_id",data);
//		console.log("KEY " + data);
	});
}
	
var moduleId = "";
$.getJSON("course/config.json",function(data) {
	moduleId = data._moduleId;
});

$(document).ready(function() {
	var ODI_id = QueryString.id;
	if (ODI_id != "") {
		loadRemote(ODI_id);
	}
	$.getJSON("course/config.json",function(data) {
		moduleId = data._moduleId;
		if (moduleId == "nav"){
			setInterval(function() {updateProgress();},5000);
		}
	});
});

function updateProgress() {
	var frame = document.getElementById('contentFrame').contentDocument;
	for (i=1;i<13;i++) {
		key = "ODI_" + i + "_cmi.suspend_data";
    		try {
			value = localStorage.getItem(key);
			data = $.parseJSON(value);
			completion = data.spoor.completion;
			total = completion.length;
			complete = completion.match(/1/g || []).length;	
			percent = (complete/total) * 100;
			frame.getElementById('ODI_' + i).setAttribute('value',percent);
		}
		catch(err) {
		}
	}
}

function getModuleId() {
	return moduleId;
}

function loadRemote(id) {
	url = api_url + "/load.php?id=" + id;
	$.getJSON(url,function(data) {
		for (key in data) {
			window.localStorage.setItem(key,data[key]);		
		}
	});
}

function updateRemote() {
    if(window.localStorage!==undefined) {
        send = {};
	send.data = JSON.stringify(localStorage);
        $.ajax({
           type: "POST",
           url: api_url + "store.php",         
           data: send,
           success: function(ret) {
    		var d = new Date();
    		window.localStorage.setItem('ODI_lastSave',d.toUTCString());
		clearUpdateInt();
	   },
	   error: function(ret) {
    		window.localStorage.setItem('ODI_lastSave',"No connection to server (Saving locally only)");
		setUpdateInt();
	   }  
        });
    } 
}

function setUpdateInt() {
	if (!updateInt) {
		updateInt = setInterval(function() {updateRemote();},5000);
	}
}

function clearUpdateInt() {
	clearInterval(updateInt);
}
function getValue(cname) {
    module_id = getModuleId();
    cname = "ODI_" + module_id + "_" + cname;
    value = localStorage.getItem(cname);
    if (value) return value;
    return "";
}

function setValue(cname, cvalue) {
    module_id = getModuleId();
    cname = "ODI_" + module_id + "_" + cname;
    localStorage.setItem(cname,cvalue);
    updateRemote();
}

var QueryString = function () {
  // This function is anonymous, is executed immediately and 
  // the return value is assigned to QueryString!
  var query_string = {};
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i=0;i<vars.length;i++) {
    var pair = vars[i].split("=");
        // If first entry with this name
    if (typeof query_string[pair[0]] === "undefined") {
      query_string[pair[0]] = decodeURIComponent(pair[1]);
        // If second entry with this name
    } else if (typeof query_string[pair[0]] === "string") {
      var arr = [ query_string[pair[0]],decodeURIComponent(pair[1]) ];
      query_string[pair[0]] = arr;
        // If third or later entry with this name
    } else {
      query_string[pair[0]].push(decodeURIComponent(pair[1]));
    }
  } 
    return query_string;
}();

var API = {
	LMSInitialize: function() {
		this.data = {};
		this.data["cmi.core.lesson_status"] = "not attempted";
		var lesson_status = getValue("cmi.core.lesson_status");
		if (lesson_status != "") {
			this.data["cmi.core.lesson_status"] = lesson_status;
		}
		this.data["cmi.suspend_data"] = getValue("cmi.suspend_data");
		updateRemote();
		return "true";
	},
	LMSFinish: function() {
		return "true";
	},
	LMSGetValue: function(key) {
//		window.console && console.log('LMSGetValue("' + key + '") - ' + this.data[key]);
		return this.data[key];
	},
	LMSSetValue: function(key, value) {
//		window.console && console.log('LMSSetValue("' + key + '") - ' + value);
		this.data[key] = value;
		setValue(key,value,365);
		return "true";
	},
	LMSCommit: function() {
		return "true";
	},
	LMSGetLastError: function() {
		return 0;
	},
	LMSGetErrorString: function() {
		return "Fake error string.";
	},
	LMSGetDiagnostic: function() {
		return "Fake diagnostic information."
	}
}
