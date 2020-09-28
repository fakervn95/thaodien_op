<!DOCTYPE html>
<html <?php language_attributes(); ?> >
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title><?php bloginfo('name'); ?></title>

	<!-- css -->
	<link rel="stylesheet" href="<?php echo BASE_URL; ?>/css/slick.css">
	<link rel="stylesheet" href="<?php echo BASE_URL; ?>/css/animate.css">
	<link rel="stylesheet" href="<?php echo BASE_URL; ?>/css/font-awesome.min.css">
	<link rel="stylesheet" href="<?php echo BASE_URL; ?>/css/bootstrap.min.css">
	<link rel="stylesheet" href="<?php echo BASE_URL; ?>/css/onepage-scroll.css">
	<link rel="stylesheet" href="<?php echo BASE_URL; ?>/css/keyframe.css">
	<link rel="stylesheet" href="<?php echo BASE_URL; ?>/css/jquery.fancybox.min.css">
	<link rel="stylesheet" href="<?php echo BASE_URL; ?>/css/style.css">
	<!-- js -->
	<script src="<?php echo BASE_URL; ?>/js/jquery.min.js"></script>
	<?php wp_head(); ?>
</head>


<body <?php body_class() ?>>

	<div class="bg_opacity"></div>
	
	<div id="menu_mobile_full">
		<nav class="mobile-menu">
			<p class="close_menu"><span><i class="fa fa-times" aria-hidden="true"></i></span></p>
			<?php 
			$args = array('theme_location' => 'menu_mobile');
			?>
			<?php wp_nav_menu($args);?>
		</nav>
	</div>

	<header class="header">
		<div class="logo">
			<?php if(has_custom_logo()):?>
				<?php the_custom_logo(); ?>
				<?php else: echo 'No logo'; 
				endif;?>
			</div>
		</header>