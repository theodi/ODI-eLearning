var api_url = "http://localhost/~davetaz/backend/";
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

function updateRemote() {
    if(window.localStorage!==undefined) {
        send = {};
	send.data = JSON.stringify(localStorage);
        $.ajax({
           type: "POST",
           url: api_url + "store.php",         
           data: send,
           success: function(ret) {
//		console.log("Data stored in cloud");
	   }
        });
    } else {
    }
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
