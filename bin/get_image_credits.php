<?php

	$contents = file_get_contents("src/course/en/components.json");
	$array = json_decode($contents,true);
	$graphics = [];
	

	for ($i=0;$i<count($array);$i++) {
		$object = $array[$i];
		parseObject($object);
	}

	function parseObject($object) {
		foreach ($object as $key => $value) {
			if (is_array($value)) {
				parseObject($value);
			} 
			if ($key == "_graphic" && !is_int($key)) {
				processGraphic($value);
			}
		}
	}

	function processGraphic($graphic) {
		global $graphics;	
		$out = [];
		if ($graphic["title"]) {
			$out["_type"] = "link";
			$out["title"] = $graphic["title"];
			$source = "Unclear";
			if (strpos($graphic["*source"],"shutterstock") > 0) {
				$source = "Shutterstock";
			}
			if (strpos($graphic["*source"],"flickr") > 0) {
				$source = "Flickr";
			}
			if (strpos($graphic["*source"],"theodi") > 0) {
				$source = "The Open Data Institute";
			}
			if (strpos($graphic["*source"],"data.gov.uk") > 0) {
				$source = "data.gov.uk";
			}
			if (strpos($graphic["*source"],"data.gov.sg") > 0) {
				$source = "data.gov.sg";
			}
			if (strpos($graphic["*source"],"fixmystreet") > 0) {
				$source = "Fix my street";
			}
			if ($graphic["*licence"] != "") {
				$graphic["*license"] = $graphic["*licence"];
			}
			$out["description"] = "Source: " . $source . "<br/>Credit: " . $graphic["*credit"] . "<br/>Licence: " . $graphic["*license"];
			$out["_link"] = $graphic["*source"];
			$graphics[] = $out;
		} 
	}
	
	echo json_encode($graphics,JSON_PRETTY_PRINT);


?>
