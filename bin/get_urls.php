<?php

	$content = file_get_contents('src/course/en/components.json');
	$array = explode('href',$content);
	for($i=0;$i<count($array);$i++) {
		$current = $array[$i];
		$url = substr($current,2,strlen($current));
		$url = substr($url,0,strpos($url,"'"));
		$todo[$url] = true;
	}
	foreach ($todo as $url => $values) {
		echo "\t\t{\n";
		echo "\t\t\t" . '"_type": "link",' . "\n";
		echo "\t\t\t" . '"title": "",' . "\n";
		echo "\t\t\t" . '"description": "",' . "\n";
		echo "\t\t\t" . '"_link": "' . $url . '"' . "\n";
		echo "\t\t},\n";
	}
?>
