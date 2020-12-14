<?php get_header(); ?>
<div class="o-container u-margin-top-50 u-margin-bottom-50">
  <div class="o-row">
    <div id="page-header" class="o-row__col o-row__col--span-12">
      <h1 class="c-page-header">Slick Sliders</h1>
    </div>
  </div>
  <div class="o-row u-margin-bottom-50">
    <div class="o-row__col o-row__col--span-12">
      <h2 class="c-slider__header">Slider with dots</h2>
      <div class="slider-dots c-slider--dots">
        <div class="c-slider__item">
          <?php
          $image = get_field('slider_image_1');
          $size = 'full'; // (thumbnail, medium, large, full or custom size)
          if ($image) {
            echo wp_get_attachment_image($image, $size);
          }
          ?>
        </div>

        <div class="c-slider__item">
          <?php
          $image = get_field('slider_image_2');
          $size = 'full'; // (thumbnail, medium, large, full or custom size)
          if ($image) {
            echo wp_get_attachment_image($image, $size);
          }
          ?>
        </div>

        <div class="c-slider__item">
          <?php
          $image = get_field('slider_image_3');
          $size = 'full'; // (thumbnail, medium, large, full or custom size)
          if ($image) {
            echo wp_get_attachment_image($image, $size);
          }
          ?>
        </div>
      </div>
    </div>
  </div>

  <div class="o-row u-margin-bottom-50">
    <div class="o-row__col o-row__col--span-12">
      <h2 class="c-slider__header">Slider with Arrows Inside</h2>
      <div class="slider-arrows c-slider--arrows-inside">
        <div class="c-slider--arrows__item">
          <?php
          $image = get_field('slider_image_1');
          $size = 'full'; // (thumbnail, medium, large, full or custom size)
          if ($image) {
            echo wp_get_attachment_image($image, $size);
          }
          ?>
        </div>

        <div class="c-slider--arrows__item">
          <?php
          $image = get_field('slider_image_2');
          $size = 'full'; // (thumbnail, medium, large, full or custom size)
          if ($image) {
            echo wp_get_attachment_image($image, $size);
          }
          ?>
        </div>

        <div class="c-slider--arrows__item">
          <?php
          $image = get_field('slider_image_3');
          $size = 'full'; // (thumbnail, medium, large, full or custom size)
          if ($image) {
            echo wp_get_attachment_image($image, $size);
          }
          ?>
        </div>
      </div>
    </div>
  </div>

  <div class="o-row">
    <div class="o-row__col o-row__col--span-12">
      <h2 class="c-slider__header">Slider with Arrows Outside</h2>
      <div class="slider-arrows c-slider--arrows-outside">
        <div class="c-slider--arrows__item">
          <?php
          $image = get_field('slider_image_1');
          $size = 'full'; // (thumbnail, medium, large, full or custom size)
          if ($image) {
            echo wp_get_attachment_image($image, $size);
          }
          ?>
        </div>

        <div class="c-slider--arrows__item">
          <?php
          $image = get_field('slider_image_2');
          $size = 'full'; // (thumbnail, medium, large, full or custom size)
          if ($image) {
            echo wp_get_attachment_image($image, $size);
          }
          ?>
        </div>

        <div class="c-slider--arrows__item">
          <?php
          $image = get_field('slider_image_3');
          $size = 'full'; // (thumbnail, medium, large, full or custom size)
          if ($image) {
            echo wp_get_attachment_image($image, $size);
          }
          ?>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="container-full u-margin-bottom-50">
  <h2 class="c-slider__header">Slider with Overflow</h2>
  <div class="slick-overflow c-slider--overflow">
    <div class="c-slider--arrows__item">
      <?php
      $image = get_field('slider_image_1');
      $size = 'full'; // (thumbnail, medium, large, full or custom size)
      if ($image) {
        echo wp_get_attachment_image($image, $size);
      }
      ?>
    </div>

    <div class="c-slider--arrows__item">
      <?php
      $image = get_field('slider_image_2');
      $size = 'full'; // (thumbnail, medium, large, full or custom size)
      if ($image) {
        echo wp_get_attachment_image($image, $size);
      }
      ?>
    </div>

    <div class="c-slider--arrows__item">
      <?php
      $image = get_field('slider_image_3');
      $size = 'full'; // (thumbnail, medium, large, full or custom size)
      if ($image) {
        echo wp_get_attachment_image($image, $size);
      }
      ?>
    </div>

    <div class="c-slider--arrows__item">
      <?php
      $image = get_field('slider_image_1');
      $size = 'full'; // (thumbnail, medium, large, full or custom size)
      if ($image) {
        echo wp_get_attachment_image($image, $size);
      }
      ?>
    </div>

    <div class="c-slider--arrows__item">
      <?php
      $image = get_field('slider_image_2');
      $size = 'full'; // (thumbnail, medium, large, full or custom size)
      if ($image) {
        echo wp_get_attachment_image($image, $size);
      }
      ?>
    </div>

    <div class="c-slider--arrows__item">
      <?php
      $image = get_field('slider_image_3');
      $size = 'full'; // (thumbnail, medium, large, full or custom size)
      if ($image) {
        echo wp_get_attachment_image($image, $size);
      }
      ?>
    </div>
  </div>
</div>
<?php get_footer(); ?>