<?php
	//add smarty libraries to php path
	

	// full path to Smarty.class.php
	define('SMARTY_DIR' , './smarty-2.6.26/');

	// load Smarty library
	require_once(SMARTY_DIR . 'Smarty.class.php');


	// The setup.php file is a good place to load
	// required application library files, and you
	// can do that right here. An example:
	// require('guestbook/guestbook.lib.php');

class Smarty_RamsCMS extends Smarty {

   function Smarty_RamsCMS()
   	{

        // Class Constructor.
        // These automatically get set with each new instance.

        $this->Smarty();
        
        $this->left_delimiter='<--{';
        $this->right_delimiter='}-->';

        $this->template_dir = './smarty/templates/';
        $this->compile_dir  = './smarty/templates_c/';
        $this->config_dir   = './smarty/configs/';
        $this->cache_dir    = './smarty/cache/';

        $this->caching = true;
        $this->assign('app_name', 'Rams CMS');
   }
}

?>