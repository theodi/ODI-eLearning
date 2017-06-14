<?php
	error_reporting(E_ALL ^ E_NOTICE);
	$content = file_get_contents("src/course/en/components.json");
	$data = json_decode($content,true);

	$attarr = [];

	for ($i=0;$i<count($data);$i++) {
		$titles = get_titles($data[$i],$titles,"");
		process_array($data[$i],"",$titles);
	}

	$json = json_encode($attarr,JSON_PRETTY_PRINT);
	echo $json;

	function get_titles($array,$titles,$parent) {
		if ($array["_parentId"]) {
			$parent = $array["_parentId"];
		}
		if ($array["title"]) {
			$title = $array["title"];
		}
		if ($array["displayTitle"]) {
			$title = $array["displayTitle"];
		}
		if (!$titles[$parent] && $title && $parent) {
			$titles[$parent] = $title;
		}
		foreach($array as $key => $value) {
			if (is_array($value)) {
				$titles = get_titles($value,$titles,$parent);
			}
		}
		return $titles;
	}	

	function process_array($array,$parent,$titles) {
		global $attarr;
		if ($array["_parentId"]) {
			$parent = $array["_parentId"];
		}
		$title = $titles[$parent];
		if ($array["attribution"]) {
			$attribution = $array["attribution"];
			process_attribution($title,$attribution);
		}
		foreach($array as $key => $value) {
			if (is_array($value)) {
				$level++;
				process_array($value,$parent,$titles);
			}
		}
		return $parent;
	}

	function process_attribution($title,$attribution) {
		global $attarr;

		$parts = explode('"', $attribution);
		$link = $parts[1];

		$parts = strip_tags($attribution);
		$parts = explode('[', $parts);

		$credit = trim($parts[0]);
		$licence = substr(trim($parts[1]),0,-1);
		$source = "Freepik";
		if (strpos($licence, "Shutterstock") !== false) {
			$source = "Shutterstock";
		}
		$description = "Source: " . $source . "<br/>Credit: " . $credit . "<br/>Licence: " . $licence; 

		$att = [];
		$att["_type"] = "link";
		$att["title"] = trim($title);
		$att["description"] = $description;
		$att["_link"] = $link;

		$attarr[] = $att;
	}
?>