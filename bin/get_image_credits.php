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
			$out["description"] = "Source: " . $source . "<br/>Credit: " . $graphic["*credit"] . "<br/>Licence: " . $graphic["*license"];
			$out["_link"] = $graphic["*source"];
			$graphics[] = $out;
		} 
	}
	
	echo json_encode($graphics,JSON_PRETTY_PRINT);


?>
