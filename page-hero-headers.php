<?php get_header(); ?>
<div class="o-container u-margin-top-50">
  <h1>Hero Headers</h1>
</div>

<div class="hero-with-nav-overlay">
  <div class="o-container">
    <h2>Hero with Logo and Nav Overlay</h2>
  </div>
  <?php if (wp_is_mobile()) : ?>
    <div style="background: url('<?php the_field('home_hero_mobile'); ?>') center center; background-size: cover; background-repeat: no-repeat;" class="c-header__hero">
    <?php else : ?>
      <div style="background: url('<?php the_field('home_hero'); ?>') center center; background-size: cover; background-repeat: no-repeat;" class="c-header__hero">
      <?php endif; ?>
      <div class="c-header__overlay">
        <div class="o-row c-header__info">
          <div class="o-row__col o-row__col--span-8 o-row__col--span-7@medium o-row__col--span-8@xlarge">
            <div class="c-header__logo">
              <?php if (has_custom_logo()) {
                the_custom_logo();
              } else { ?>
                <a class="c-header__blogname" href="<?php echo esc_url(home_url('/')); ?>"><?php esc_html(bloginfo('name')); ?></a>
              <?php } ?>
            </div>
          </div>
          <div class="o-row__col o-row__col--span-4 o-row__col--span-5@medium o-row__col--span-4@xlarge">
            <div class="c-header__nav">
              <div class="c-header__nav--mobile">
                <a class="openbtn"><i class="fas fa-bars"></i></a>
                <div id="myNav" class="overlay">
                  <a href="javascript:void(0)" class="closebtn"><i class="fas fa-times"></i></a>
                  <div class="overlay-content">
                    <nav>
                      <?php if (has_nav_menu('primary')) {
                        wp_nav_menu(array(
                          'theme_location' => 'primary',
                          'menu_class' => 'nav-menu'
                        ));
                      }
                      ?>
                    </nav>
                  </div>
                </div>
              </div>

              <div class="c-header__nav--desktop">
                <?php if (has_nav_menu('primary')) {
                  wp_nav_menu(array(
                    'theme_location' => 'primary',
                    'menu_class' => 'nav-menu--desktop'
                  ));
                }
                ?>
              </div>
            </div>
          </div>
        </div>
        <div class="c-header__text">
          <h1><?php the_field('home_hero_text'); ?></h1>
        </div>

      </div>
      <?php if (wp_is_mobile()) : ?>
      <?php else : ?>
      </div>
    <?php endif; ?>
    </div>
</div>


<div class="o-container u-margin-bottom-50">
  <h2>Hero with Text Overlay</h2>
</div>
<div class="c-hero-with-text">
  <div style="background: url('<?php the_field('hero_text_overlay_img'); ?>') center center; background-size: cover; background-repeat: no-repeat;" class="c-hero-with-text__image">
    <div class="c-hero-with-text__text">
      <h1>Hero Header</h1>
      <p>Assumenda netus voluptatem ultrices, distinctio, dignissim! Wisi tempore dignissim leo modi scelerisque laoreet dui conubia diam, impedit nobis, accumsan porta, esse!</p>
      <a class="c-hero-with-text__btn" href="">Read More</a>
    </div>
  </div>
</div>
<?php get_footer(); ?>