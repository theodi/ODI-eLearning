<?php
	$cmd = "cat src/course/en/components.json | grep parentId | sed -r 's/^[[:space:]]*//' | uniq";
	$ret = exec($cmd,$all);

	echo "[\n";
	for ($i=0;$i<count($all);$i++) {
		$block = substr($all[$i],strpos($all[$i],"b-"),strrpos($all[$i],'"'));
		$block = substr($block,0,strpos($block,'"'));
		if ($i == count($all)-1) {
			output_summary($block,$i);
		} else {
			output_block($block,$i);
			echo ",\n";
		}	
	}
	echo "\n]";

	function output_block($block,$i) {
		echo "\t{\n";
		echo "\t\t" . '"_id": "' . $block . '",' . "\n";
		echo "\t\t" . '"_parentId": "a-01",' . "\n";
		echo "\t\t" . '"_type": "block",' . "\n";
		if ($i % 2 == 0) {
			echo "\t\t" . '"_classes": "",' . "\n";
		} else {
			echo "\t\t" . '"_classes": "inverted",' . "\n";
		}
		echo "\t\t" . '"_trackingId": '.$i.',' . "\n";
		echo "\t\t" . '"_trickle": {' . "\n";
		echo "\t\t\t" . '"_isEnabled":false' . "\n";
		echo "\t\t" . '}' . "\n";
		echo "\t" . '}';
	}
	
	function output_summary($block,$i) {
		echo "\t{\n";
		echo "\t\t" . '"_id": "' . $block . '",' . "\n";
		echo "\t\t" . '"_parentId": "a-01",' . "\n";
		echo "\t\t" . '"_type": "block",' . "\n";
		echo "\t\t" . '"_classes": "summary",' . "\n";
		echo "\t\t" . '"_trackingId": '.$i.',' . "\n";
		echo "\t\t" . '"_trickle": {' . "\n";
		echo "\t\t\t" . '"_isEnabled":false' . "\n";
		echo "\t\t" . '}' . "\n";
		echo "\t" . '}';
	}
?>
