<?php
wp_enqueue_style('wp-hangman-font');
wp_enqueue_style('wp-hangman-styles');
?>
<div id="hangman-game">
	<div id="hangman-available-characters">
		<ul id="hangman-available-characters-list"></ul>
	</div>
	<div id="hangman-answer-placeholders"></div>
	<div id="hangman-notices"></div>
	<div id="hangman-figure">
		<canvas id="hangman-canvas"></canvas>
	</div>
</div>
