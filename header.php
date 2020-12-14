<!DOCTYPE html>
<html <?php language_attributes(); ?>>

<head>
  <meta charset="<?php bloginfo('charset'); ?>">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
  <div id="wptime-plugin-preloader"></div>
  <?php wp_body_open(); ?>
  <header role="banner" class="c-header__title">
    <h1>YP Digital FW Components</h1>
  </header>
  <div class="c-component-nav o-container">
    <?php if (has_nav_menu('components')) {
      wp_nav_menu(array(
        'theme_location' => 'components'
      ));
    }
    ?>
  </div>

  <div class="header__divider"></div>
  <div class="o-container u-margin-top-20">
    <div class="o-row">
      <p class="c-info-description">A collection of reusable components with minimal styling to be used in YP Digital projects. The code can be viewed on <a href="https://github.com/paulbrighton/YP-Digital-WP-Components">GitHub</a>.</p>
    </div>
  </div>

  <main id="content" role="main">