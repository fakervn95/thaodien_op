<?php 
/*
Template Name: page-template-trangchu
*/
get_header(); 
?>	
<div class="g_content">
  <div class="aio_content_page">
    <?php if(have_posts()):?>
      <?php while(have_posts()) : the_post();
             the_content();
          endwhile;
       ?>
     <?php else: echo 'No data'; ?>
    <?php endif; ?>
  </div>
</div>


<?php get_footer(); ?>
