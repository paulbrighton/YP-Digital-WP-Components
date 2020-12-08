<?php get_header(); ?>
<div class="o-container u-margin-top-50 u-margin-bottom-50">
  <h2>Animate on Scroll with AOS</h2>
  <div class="o-row c-animate">
    <div data-aos="fade-right" class="c-animate__text o-row__col o-row__col--span-12 u-flex u-flex-direction-column u-justify-center u-align-middle o-row__col--span-6@medium">
      <h2><?php the_field('animation_title') ?></h2>
      <h3><?php the_field('animation_sub_title') ?></h3>
    </div>
    <div data-aos="fade-left" class="o-row__col o-row__col--span-12 o-row__col--span-6@medium">
      <div class="c-animate__image">
        <?php
        $image = get_field('animation_image');
        $size = 'full';
        if ($image) {
          echo wp_get_attachment_image($image, $size);
        }
        ?>
      </div>
    </div>
  </div>

  <div class="o-row u-flex-direction-row-reverse c-animate-reverse">
    <div data-aos="flip-right" class="c-animate-reverse__text o-row__col o-row__col--span-12 u-flex u-flex-direction-column u-justify-center u-align-middle o-row__col--span-6@medium">
      <h2><?php the_field('animation_title') ?></h2>
      <h3><?php the_field('animation_sub_title_2') ?></h3>
    </div>
    <div data-aos="flip-left" class="o-row__col o-row__col--span-12 o-row__col--span-6@medium">
      <div class="c-animate-reverse__image">
        <?php
        $image = get_field('animation_image');
        $size = 'full';
        if ($image) {
          echo wp_get_attachment_image($image, $size);
        }
        ?>
      </div>
    </div>
  </div>

  <div class="o-row c-animate">
    <div data-aos="fade-up" data-aos-duration="1500" class="c-animate__text o-row__col o-row__col--span-12 u-flex u-flex-direction-column u-align-middle u-justify-center o-row__col--span-6@medium">
      <h2><?php the_field('animation_title') ?></h2>
      <h3><?php the_field('animation_sub_title_3') ?></h3>
    </div>
    <div data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500" class="o-row__col o-row__col--span-12 o-row__col--span-6@medium">
      <div class="c-animate__image">
        <?php
        $image = get_field('animation_image');
        $size = 'full';
        if ($image) {
          echo wp_get_attachment_image($image, $size);
        }
        ?>
      </div>
    </div>
  </div>

  <div class="o-row u-flex-direction-row-reverse c-animate-reverse">
    <div data-aos="zoom-in-left" class="c-animate__text o-row__col o-row__col--span-12 u-flex u-flex-direction-column u-justify-center u-align-middle o-row__col--span-6@medium">
      <h2><?php the_field('animation_title') ?></h2>
      <h3><?php the_field('animation_sub_title_4') ?></h3>
    </div>
    <div data-aos="zoom-in-right" class="o-row__col o-row__col--span-12 o-row__col--span-6@medium">
      <div class="c-animate__image">
        <?php
        $image = get_field('animation_image');
        $size = 'full';
        if ($image) {
          echo wp_get_attachment_image($image, $size);
        }
        ?>
      </div>
    </div>
  </div>
</div>
<?php get_footer(); ?>
