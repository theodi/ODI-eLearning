<?php
	$cmd = "cat src/course/en/components.json | grep parentId | sed -r 's/^[[:space:]]*//' | uniq";
	$ret = exec($cmd,$all);

	for ($i=0;$i<count($all);$i++) {
		$block = substr($all[$i],strpos($all[$i],"b-"),strrpos($all[$i],'"'));
		$block = substr($block,0,strpos($block,'"'));
		if ($i % 2 != 0) {
			echo "." . $block . " {\n";
			echo "\tbackground-color: @odi-color- ;\n";
			echo "}\n";
		}	
	}
?>
