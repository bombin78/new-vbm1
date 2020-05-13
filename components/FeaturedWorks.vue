<template>
  <section class="featured_works row" data-stellar-background-ratio="0.3">
    <div class="tittle wow fadeInUp">
      <h2>Our Featured Works</h2>
      <h4>Lorem Ipsum is simply dummy text of the printing and typesetting industry</h4>
    </div>
    <div class="featured_gallery">
      <div class="col-md-3 col-sm-4 col-xs-6 gallery_iner p0">
        <img src="/images/gallery/gl-1.jpg" alt="">
        <div class="gallery_hover">
          <h4>Bolt Apartments</h4>
          <a href="#">VIEW PROJECT</a>
        </div>
      </div>
      <div class="col-md-3 col-sm-4 col-xs-6 gallery_iner p0">
        <img src="/images/gallery/gl-2.jpg" alt="">
        <div class="gallery_hover">
          <h4>Bolt Apartments</h4>
          <a href="#">VIEW PROJECT</a>
        </div>
      </div>
      <div class="col-md-3 col-sm-4 col-xs-6 gallery_iner p0">
        <img src="/images/gallery/gl-3.jpg" alt="">
        <div class="gallery_hover">
          <h4>Bolt Apartments</h4>
          <a href="#">VIEW PROJECT</a>
        </div>
      </div>
      <div class="col-md-3 col-sm-4 col-xs-6 gallery_iner p0">
        <img src="/images/gallery/gl-4.jpg" alt="">
        <div class="gallery_hover">
          <h4>Bolt Apartments</h4>
          <a href="#">VIEW PROJECT</a>
        </div>
      </div>
      <div class="col-md-3 col-sm-4 col-xs-6 gallery_iner p0">
        <img src="/images/gallery/gl-5.jpg" alt="">
        <div class="gallery_hover">
          <h4>Bolt Apartments</h4>
          <a href="#">VIEW PROJECT</a>
        </div>
      </div>
      <div class="col-md-3 col-sm-4 col-xs-6 gallery_iner p0">
        <img src="/images/gallery/gl-6.jpg" alt="">
        <div class="gallery_hover">
          <h4>Bolt Apartments</h4>
          <a href="#">VIEW PROJECT</a>
        </div>
      </div>
      <div class="col-md-3 col-sm-4 col-xs-6 gallery_iner p0">
        <img src="/images/gallery/gl-7.jpg" alt="">
        <div class="gallery_hover">
          <h4>Bolt Apartments</h4>
          <a href="#">VIEW PROJECT</a>
        </div>
      </div>
      <div class="col-md-3 col-sm-4 col-xs-6 gallery_iner p0">
        <img src="/images/gallery/gl-8.jpg" alt="">
        <div class="gallery_hover">
          <h4>Bolt Apartments</h4>
          <a href="#">VIEW PROJECT</a>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/_variables.scss';

.featured_works {
    background: url("/images/protfolio_bg.jpg") no-repeat fixed;
    background-position: center;
    text-align: center;
    position: relative;
    z-index: 1;
    padding-bottom: 100px;
    &:after {
        content: "";
        position: absolute;
        top: 0;
        background-color: rgba(0, 0, 0, .9);
        left: 0;
        right: 0;
        bottom: 0;
        display: block;
        z-index: -1;
    }
    display: block;
    overflow: hidden;
    padding-bottom: 100px;
    .tittle {
        h2 {
            color: #fff;
        }
        h4 {
            color: #fefefe;
        }
    }
    .featured_gallery {
        padding-top: 60px;
        .gallery_iner {
            position: relative;
            overflow: hidden;
            img {
                max-width: 100%;
            }
            &:after {
                content: "";
                position: absolute;
                background-color: rgba(248, 184, 29, .70);
                display: block;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                z-index: 1;
                opacity: 0;
                @include transition;
            }
            .gallery_hover {
                position: absolute;
                top: 45%;
                left: 0;
                transform: translateY(-50%);
                right: 0;
                text-align: center;
                z-index: 2;
                h4 {
                    color: #fff;
                    font: 700 14px $roboto;
                    text-transform: uppercase;
                    padding-bottom: 18px;
                    position: relative;
                    right: -100%;
                    @include transition;
                }
                a {
                    width: 200px;
                    font: 400 14px/60px $roboto;
                    text-align: center;
                    display: block;
                    border-radius: 10px;
                    background: #333333;
                    color: #fff;
                    position: relative;
                    left: -100%;
                    @include transition;
                    text-transform: uppercase;
                    margin: 0 auto;
                    &:focus,
                    &:hover {
                        background: #fff;
                        color: $bc;
                    }
                }
            }
            &:focus,
            &:hover {
                &:after {
                    opacity: 1;
                }
                .gallery_hover {
                    h4 {
                        right: 0;
                    }
                    a {
                        left: 0;
                    }
                }
            }
        }
    }
}
</style>
