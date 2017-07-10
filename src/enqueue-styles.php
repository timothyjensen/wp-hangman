<?php
/**
 * Enqueue Styles
 *
 * @package     TimJensen\WP_Hangman
 * @author      Tim Jensen <tim@timjensen.us>
 * @license     GNU General Public License 2.0+
 * @link        https://www.timjensen.us
 * @since       0.1.0
 */

namespace TimJensen\WP_Hangman;

add_action( 'wp_enqueue_scripts', __NAMESPACE__ . '\\enqueue_styles' );
/**
 * Enqueues the front end styles.
 *
 * @since 0.1.0
 *
 * @return void
 */
function enqueue_styles() {
	wp_enqueue_style( 'wp-hangman-styles', WP_HANGMAN_ASSETS_URL . '/styles.css', null, '0.1.0' );
}
