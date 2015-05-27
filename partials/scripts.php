<section id="scripts">
<?php
$output = array();
$videos = get_posts('posts_per_page=-1');
if ($videos) {
  foreach($videos as $post) {
    $meta = get_post_meta($post->ID);
    $output[] = array(
      'caption' => $post->post_title,
      'webm' => $meta['_igv_webm'][0]
    );
  }
  echo '<script>';
  echo 'var videos = ' . json_encode($output);
  echo '</script>';
}
?>

  <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
  <script>window.jQuery || document.write('<script src="<?php bloginfo('stylesheet_directory'); ?>/js/vendor/jquery-2.1.1.min.js"><\/script>')</script>
  <?php wp_footer(); ?>
</section>