<?php
/**
 * Plugin Name:     WP Hangman
 * Plugin URI:      https://github.com/cjkoepke/hangman
 * Description:     Embed a hangman game using a shortcode.
 * Author:          Tim Jensen <tim@timjensen.us>
 * Author URI:      https://www.timjensen.us/
 * Text Domain:     wp-hangman
 * Domain Path:     /languages
 * Version:         0.2.1
 *
 * @package         WP_Hangman
 */

namespace TimJensen\WP_Hangman;

if ( ! defined( 'WP_HANGMAN_ASSETS_URL' ) ) {
	define( 'WP_HANGMAN_ASSETS_URL', plugin_dir_url( __FILE__ ) . 'assets' );
}

if ( ! defined( 'WP_HANGMAN_VIEWS_DIR' ) ) {
	define( 'WP_HANGMAN_VIEWS_DIR', __DIR__ . '/views' );
}

require __DIR__ . '/src/class-add-shortcode.php';
require __DIR__ . '/src/enqueue-styles.php';

$hangman_shortcode = new Add_Shortcode(
	include __DIR__ . '/config/shortcodes-config.php'
);

$hangman_shortcode->init();
