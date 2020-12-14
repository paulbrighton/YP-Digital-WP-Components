<?php get_header(); ?>
<!-- Multi column layout with minimal styling -->
<div class="c-contact-form">
  <div class="o-container">
    <div class="o-row">
      <div id="page-header" class="o-row__col o-row__col--span-12">
        <h1 class="c-page-header">Contact Forms</h1>
        <h2>Contact Form 1</h2>
        <p class="c-contact-form-subtitle">Three column for name, email and subject.</p>
        <?php echo do_shortcode('[contact-form-7 id="113" title="Contact form 1"]') ?>
      </div>
    </div>
  </div>
</div>
<!-- Single column layout with minimal styling -->
<div class="c-contact-form--full-width" id="contact-form">
  <div class="o-container">
    <div class="o-row">
      <div class="o-row__col o-row__col--span-12">
        <h2>Contact Form 2</h2>
        <p class="c-contact-form--full-width-subtitle">Equal width contact form.</p>
        <div class="c-contact-form--full-width__container">
          <?php echo do_shortcode('[contact-form-7 id="114" title="Contact Form 2"]'); ?>
        </div>
      </div>
    </div>
  </div>
</div>

<?php get_footer(); ?>