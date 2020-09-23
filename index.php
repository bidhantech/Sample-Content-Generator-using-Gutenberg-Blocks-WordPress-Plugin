<?php
/*
Plugin Name: Sample Content Generator - using Gutenberg Blocks
Version: 0.9
Author: bidhantech
Author URI: https://website.bidhantech.in
Description: A Sample Content Generator plugin which uses Gutenberg Blocks & does not use the traditional lorem ipsum texts.
Text Domain: sample_content_generator
Requires at least: 4.5
Tested up to: 5.4
Requires PHP: 5.6
License: GNU General Public License v2 or later
License URI: https://www.gnu.org/licenses/gpl-2.0.html
*/


function sample_content_generator_using_gutenberg_blocks(){
    wp_enqueue_script( 'sample-content-generator', plugin_dir_url( __FILE__ ) . "index.js" , array("wp-blocks","wp-editor"),"0.9",TRUE );
}

add_action( 'enqueue_block_editor_assets', 'sample_content_generator_using_gutenberg_blocks' );
