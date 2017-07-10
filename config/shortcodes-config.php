<?php
/**
 * Shortcodes configuration array.
 *
 * @package     TimJensen\WP_Hangman
 * @author      Tim Jensen <tim@timjensen.us>
 * @license     GNU General Public License 2.0+
 * @link        https://www.timjensen.us
 * @since       0.2.0
 */

namespace TimJensen\WP_Hangman;

/**
 * Shortcode configuration.
 *
 * @see https://codex.wordpress.org/Function_Reference/add_shortcode
 */
return [
	'tag'     => 'hangman',
	'args'    => [
		'answer'     => 'hangman',
	],
	'view'    => WP_HANGMAN_VIEWS_DIR . '/hangman-view.php',
	'scripts' => [
		[
			'handle' => 'hangman-app-script',
			'src'    => WP_HANGMAN_ASSETS_URL . '/app.js',
			'ver'    => '0.1.0',
			'localize_script' => [
//				'data' => 'hangman-app-script-test',
				'encode' => 'base64',
			],
		],
	],
];
