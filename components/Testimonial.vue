<template>
  <section class="testimonial_area row">
    <div class="container">
      <div class="title wow fadeInUp">
        <h2>Our TESTIMONIALS</h2>
        <h4>Lorem Ipsum is simply dummy text of the printing and typesetting industry</h4>
      </div>
      <div class="testimonial_carosel">
        <div class="item">
          <div class="media">
            <div class="media-left">
              <a href="#">
                <img class="media-object" src="/images/testimonial-2.jpg" alt="">
              </a>
            </div>
            <div class="media-body">
              <h4 class="media-heading">Emran Khan</h4>
              <h6>Web Developer</h6>
            </div>
          </div>
          <p><i class="fa fa-quote-right" aria-hidden="true"></i>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati
            cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio<i class="fa fa-quote-left" aria-hidden="true"></i></p>
        </div>
        <div class="item">
          <div class="media">
            <div class="media-left">
              <a href="#">
                <img class="media-object" src="/images/testimonial-3.jpg" alt="">
              </a>
            </div>
            <div class="media-body">
              <h4 class="media-heading">Emran Khan</h4>
              <h6>Web Developer</h6>
            </div>
          </div>
          <p><i class="fa fa-quote-right" aria-hidden="true"></i>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati
            cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio<i class="fa fa-quote-left" aria-hidden="true"></i></p>
        </div>
        <div class="item">
          <div class="media">
            <div class="media-left">
              <a href="#">
                <img class="media-object" src="/images/testimonial-1.jpg" alt="">
              </a>
            </div>
            <div class="media-body">
              <h4 class="media-heading">Prodip ghosht</h4>
              <h6>Brand Manager</h6>
            </div>
          </div>
          <p><i class="fa fa-quote-right" aria-hidden="true"></i>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati
            cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio<i class="fa fa-quote-left" aria-hidden="true"></i></p>
        </div>
        <div class="item">
          <div class="media">
            <div class="media-left">
              <a href="#">
                <img class="media-object" src="/images/testimonial-2.jpg" alt="">
              </a>
            </div>
            <div class="media-body">
              <h4 class="media-heading">Jakaria Khan</h4>
              <h6>Brand Manager</h6>
            </div>
          </div>
          <p><i class="fa fa-quote-right" aria-hidden="true"></i>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati
            cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio<i class="fa fa-quote-left" aria-hidden="true"></i></p>
        </div>
        <div class="item">
          <div class="media">
            <div class="media-left">
              <a href="#">
                <img class="media-object" src="/images/testimonial-1.jpg" alt="">
              </a>
            </div>
            <div class="media-body">
              <h4 class="media-heading">Prodip ghosht</h4>
              <h6>Brand Manager</h6>
            </div>
          </div>
          <p><i class="fa fa-quote-right" aria-hidden="true"></i>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati
            cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio<i class="fa fa-quote-left" aria-hidden="true"></i></p>
        </div>
        <div class="item">
          <div class="media">
            <div class="media-left">
              <a href="#">
                <img class="media-object" src="/images/testimonial-2.jpg" alt="">
              </a>
            </div>
            <div class="media-body">
              <h4 class="media-heading">Jakaria Khan</h4>
              <h6>Brand Manager</h6>
            </div>
          </div>
          <p><i class="fa fa-quote-right" aria-hidden="true"></i>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati
            cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio<i class="fa fa-quote-left" aria-hidden="true"></i></p>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/_variables.scss';

.testimonial_area {
    padding-bottom: 90px;
    background: #fefefe;
    .testimonial_carosel {
        padding-top: 60px;
        .item {
            .media {
                max-width: 260px;
                margin: 0 auto;
                padding-bottom: 35px;
                .media-left {
                    padding-right: 30px;
                    a {
                        img {
                            width: auto;
                        }
                    }
                }
                .media-body {
                    padding-top: 40px;
                    h4 {
                        font: 700 14px $roboto;
                        text-transform: uppercase;
                        color: $h2;
                    }
                    h6 {
                        font: 400 italic 14px $roboto;
                        color: $p;
                        padding-top: 5px;
                    }
                }
            }
            p {
                font: 400 italic 14px/26px $roboto;
                color: $bc;
                max-width: 945px;
                margin: 0 auto;
                text-align: center;
                padding-bottom: 50px;
                i {
                    color: $p;
                    font-size: 18px;
                    display: block;

                }
                .fa-quote-left {
                    text-align: right;
                    padding-top: 5px;
                }
                .fa-quote-right {
                    text-align: left;
                    padding-bottom: 5px;
                }
            }
        }
        .owl-controls {
            text-align: center;
            .owl-dots {
                .owl-dot {
                    height: 10px;
                    width: 10px;
                    border: 2px solid $p;
                    margin-left: 15px;
                    display: inline-block;
                    @include transition;
                    border-radius: 50%;
                    &.active,
                    &:focus,
                    &:hover {
                        background: $bc;
                        border: 2px solid $bc;
                    }
                }
            }
        }
    }
}
</style>
