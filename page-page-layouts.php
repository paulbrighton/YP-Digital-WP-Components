<?php get_header(); ?>
<div class="o-container u-margin-top-50 u-margin-bottom-50">
  <div class="o-row">
    <div id="page-header" class="o-row__col o-row__col--span-12">
      <h1 class="c-page-header">Page Layouts</h1>
    </div>
  </div>

  <div class="o-row c-text-img-right">
    <div class="c-text-img-right__text o-row__col o-row__col--span-12 u-flex u-flex-direction-col u-justify-center u-align-middle o-row__col--span-6@medium">
      <h2>Text with Image Right</h2>
    </div>
    <div class="o-row__col o-row__col--span-12 o-row__col--span-6@medium">
      <div class="c-text-img-right__image">
        <?php
        $image = get_field('animation_image', 21);
        $size = 'full';
        if ($image) {
          echo wp_get_attachment_image($image, $size);
        }
        ?>
      </div>
    </div>
  </div>

  <div class="o-row u-flex-direction-row-reverse c-text-img-left">
    <div class="c-text-img-left__text o-row__col o-row__col--span-12 u-flex u-flex-direction-col u-justify-center u-align-middle o-row__col--span-6@medium">
      <h2>Text with Image Left</h2>
    </div>
    <div class="o-row__col o-row__col--span-12 o-row__col--span-6@medium">
      <div class="c-text-img-left__image">
        <?php
        $image = get_field('animation_image', 21);
        $size = 'full';
        if ($image) {
          echo wp_get_attachment_image($image, $size);
        }
        ?>
      </div>
    </div>
  </div>

  <h2>Card Layout</h2>
  <div class="c-selection">
    <div class="c-selection__container c-front-page">
      <div class="o-row">

        <div class="o-row__col o-row__col--span-12 o-row__col--span-4@medium c-selection__card">
          <h3 class="c-selection__card-title"><?php the_field('selection_card_title'); ?></h3>
          <div class="c-selection__card-icon u-margin-bottom-25 u-margin-top-15">
            <?php
            $image = get_field('selection_card_image');
            $size = 'full'; // (thumbnail, medium, large, full or custom size)
            if ($image) {
              echo wp_get_attachment_image($image, $size);
            }
            ?>
          </div>
          <p class="c-selection__card-text"><?php the_field('selection_card_text'); ?></p>
          <div class="c-button__container u-flex u-justify-center">
            <a href="<?php the_field('selection_card_button_link'); ?>" class="c-button--selection-card"><?php the_field('selection_card_button_text'); ?></a>
          </div>
        </div>

        <div class="o-row__col o-row__col--span-12 o-row__col--span-4@medium c-selection__card">
          <h3 class="c-selection__card-title"><?php the_field('selection_card_title'); ?></h3>
          <div class="c-selection__card-icon u-margin-bottom-25 u-margin-top-15">
            <?php
            $image = get_field('selection_card_image');
            $size = 'full'; // (thumbnail, medium, large, full or custom size)
            if ($image) {
              echo wp_get_attachment_image($image, $size);
            }
            ?>
          </div>
          <p class="c-selection__card-text"><?php the_field('selection_card_text'); ?></p>
          <div class="c-button__container u-flex u-justify-center">
            <a href="<?php the_field('selection_card_button_link'); ?>" class="c-button--selection-card"><?php the_field('selection_card_button_text'); ?></a>
          </div>
        </div>

        <div class="o-row__col o-row__col--span-12 o-row__col--span-4@medium c-selection__card">
          <h3 class="c-selection__card-title"><?php the_field('selection_card_title'); ?></h3>
          <div class="c-selection__card-icon u-margin-bottom-25 u-margin-top-15">
            <?php
            $image = get_field('selection_card_image');
            $size = 'full'; // (thumbnail, medium, large, full or custom size)
            if ($image) {
              echo wp_get_attachment_image($image, $size);
            }
            ?>
          </div>
          <p class="c-selection__card-text"><?php the_field('selection_card_text'); ?></p>
          <div class="c-button__container u-flex u-justify-center">
            <a href="<?php the_field('selection_card_button_link'); ?>" class="c-button--selection-card"><?php the_field('selection_card_button_text'); ?></a>
          </div>
        </div>

      </div>
    </div>
  </div>
</div>

<div class="c-full-width-text-img__container">
  <div class="o-container--full c-full-width-text-img__header">
    <h2>Full Width Text with Image </h2>
  </div>
  <!-- Full Width Image with Text -->
  <div class="c-full-width-text-img">
    <div class="c-full-width-text-img__image">
      <?php
      $image = get_field('full_width_text_image');
      $size = 'full'; // (thumbnail, medium, large, full or custom size)
      if ($image) {
        echo wp_get_attachment_image($image, $size);
      }
      ?>
    </div>

    <div class="c-full-width-text-img__text">
      <div class="c-full-width-text-img__text-container">
        <h3 class="c-full-width-text-img__title">Full Width Text with Image Left</h3>
        <p class="c-full-width-text-img__text-body">Malesuada asperiores, mattis suspendisse ornare accusamus senectus lectus quasi praesentium,</p>
        <a href="" class="c-button c-button--gradient">Read More</a>
      </div>
    </div>
  </div>

  <!-- Full Width Image with Text Reversed -->
  <div class="c-full-width-text-img-reversed">
    <div class="c-full-width-text-img-reversed__image">
      <?php
      $image = get_field('full_width_text_image');
      $size = 'full'; // (thumbnail, medium, large, full or custom size)
      if ($image) {
        echo wp_get_attachment_image($image, $size);
      }
      ?>
    </div>

    <div class="c-full-width-text-img-reversed__text">
      <div class="c-full-width-text-img-reversed__text-container">
        <h3 class="c-full-width-text-img-reversed__title">Full Width Text with Image Right</h3>
        <p class="c-full-width-text-img-reversed__text-body">Malesuada asperiores, mattis suspendisse ornare accusamus senectus lectus quasi praesentium,</p>
        <a href="" class="c-button c-button--gradient">Read More</a>
      </div>
    </div>
  </div>
</div>

<?php get_footer(); ?>