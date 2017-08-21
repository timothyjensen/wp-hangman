<?php
/**
 * @var array  $atts    Parsed shortcode attributes.
 * @var string $content Shortcode content.
 */
wp_enqueue_style( 'wp-hangman-font' );
wp_enqueue_style( 'wp-hangman-styles' );

?>
<div id="hangman-game">
	<div class="hangman-flex-item">
		<?php if ( $content ) : ?>
			<div id="hangman-intro-content">
				<?php echo $content; ?>
			</div>
		<?php endif; ?>
		<div id="hangman-answer-placeholders"></div>
		<div id="hangman-available-characters">
			<ul id="hangman-available-characters-list"></ul>
		</div>
	</div>
	<div class="hangman-flex-item score">
		<div id="hangman-notices"></div>
		<div id="hangman-figure">
			<canvas id="hangman-canvas"></canvas>
		</div>
	</div>
</div>
