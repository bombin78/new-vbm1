<template>
  <section class="our_services_area">
    <div class="container">
      <div class="title wow fadeInUp">
        <h2>Our Services</h2>
        <h4>Lorem Ipsum is simply dummy text of the printing and typesetting industry</h4>
      </div>
      <div class="portfolio_inner_area">
        <div class="portfolio_filter">
          <ul>
            <li data-filter="*" class="active"><a href=""> All</a></li>
            <li data-filter=".photography"><a href="">ARCHITECTURE</a></li>
            <li data-filter=".branding"><a href="">Building</a></li>
            <li data-filter=".webdesign"><a href="">CONSTRUCTION</a></li>
            <li data-filter=".adversting"><a href="">DESIGN</a></li>
            <li data-filter=".painting"><a href="">Painting</a></li>
          </ul>
        </div>
        <div class="portfolio_item">
          <div class="grid-sizer"></div>
          <div class="single_facilities col-xs-4 p0 painting photography adversting">
            <div class="single_facilities_inner">
              <img src="/images/gallery/sv-1.jpg" alt="">
              <div class="gallery-hover">
                <h4>Construction</h4>
                <ul>
                  <li><a href="#"><i class="fa fa-link" aria-hidden="true"></i></a></li>
                  <li><a href="#"><i class="fa fa-search" aria-hidden="true"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="single_facilities col-xs-4 p0 webdesign">
            <div class="single_facilities_inner">
              <img src="/images/gallery/sv-2.jpg" alt="">
              <div class="gallery-hover">
                <h4>Construction</h4>
                <ul>
                  <li><a href="#"><i class="fa fa-link" aria-hidden="true"></i></a></li>
                  <li><a href="#"><i class="fa fa-search" aria-hidden="true"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="single_facilities col-xs-4 painting p0 photography branding">
            <div class="single_facilities_inner">
              <img src="/images/gallery/sv-3.jpg" alt="">
              <div class="gallery-hover">
                <h4>Construction</h4>
                <ul>
                  <li><a href="#"><i class="fa fa-link" aria-hidden="true"></i></a></li>
                  <li><a href="#"><i class="fa fa-search" aria-hidden="true"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="single_facilities col-xs-4 p0 adversting webdesign adversting">
            <div class="single_facilities_inner">
              <img src="/images/gallery/sv-4.jpg" alt="">
              <div class="gallery-hover">
                <h4>Construction</h4>
                <ul>
                  <li><a href="#"><i class="fa fa-link" aria-hidden="true"></i></a></li>
                  <li><a href="#"><i class="fa fa-search" aria-hidden="true"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="single_facilities col-xs-4 p0 painting adversting branding">
            <div class="single_facilities_inner">
              <img src="/images/gallery/sv-5.jpg" alt="">
              <div class="gallery-hover">
                <h4>Construction</h4>
                <ul>
                  <li><a href="#"><i class="fa fa-link" aria-hidden="true"></i></a></li>
                  <li><a href="#"><i class="fa fa-search" aria-hidden="true"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="single_facilities col-xs-4 p0 webdesign photography magazine adversting">
            <div class="single_facilities_inner">
              <img src="/images/gallery/sv-6.jpg" alt="">
              <div class="gallery-hover">
                <h4>Construction</h4>
                <ul>
                  <li><a href="#"><i class="fa fa-link" aria-hidden="true"></i></a></li>
                  <li><a href="#"><i class="fa fa-search" aria-hidden="true"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/_variables.scss';

.our_services_area {
    background: #2e3841;
    padding-bottom: 100px;
    .title {
        h2 {
            color: #fff;
        }
        h4 {
            color: #fefefe;
        }
    }
    .portfolio_inner_area {
        padding-top: 60px;
        .portfolio_filter {
            padding-bottom: 55px;
            ul {
                text-align: center;
                margin: 0;
                padding: 0;
                li {
                    list-style: none;
                    display: inline-block;
                    padding-left: 30px;
                    &:first-child {
                        padding: 0;
                    }
                    a {
                        font: 400 14px $os;
                        text-transform: uppercase;
                        color: #f5f5f5;
                    }
                    &.active,
                    &:focus,
                    &:hover {
                        a {
                            color: $bc;
                        }
                    }
                }
            }
        }
        .portfolio_item {
            .single_facilities {
                .single_facilities_inner {
                    position: relative;
                    img {
                        max-width: 100%;
                    }
                    .gallery-hover {
                        background-color: rgba(248, 184, 29, 0.851);
                        position: absolute;
                        top: 20px;
                        left: 20px;
                        right: 20px;
                        bottom: 20px;
                        overflow: hidden;
                        display: block;
                        text-align: center;
                        padding-top: calc(50% - 70px);
                        cursor: pointer;
                        opacity: 0;
                        @include transition;
                        h4 {
                            color: #fff;
                            font: 700 14px $roboto;
                            padding-bottom: 30px;
                            text-transform: uppercase;
                            position: relative;
                            left: -65%;
                            @include transition;
                        }
                        ul {
                            padding: 0;
                            margin: 0;
                            position: relative;
                            right: -67%;
                            @include transition;
                            li {
                                list-style: none;
                                display: inline-block;
                                padding-left: 17px;
                                &:first-child {
                                    padding: 0;
                                }
                                a {
                                    font-size: 14px;
                                    color: #fff;
                                    line-height: 45px;
                                    width: 45px;
                                    border-radius: 50%;
                                    border: 1px solid #fff;
                                    display: block;
                                    &:focus,
                                    &:hover {
                                        color: $bc;
                                        background: #fff;
                                    }
                                }
                            }
                        }
                    }
                    &:focus,
                    &:hover {
                        .gallery-hover {
                            opacity: 1;
                            h4 {
                                left: 0;
                            }
                            ul {
                                right: 0;
                            }
                        }
                    }
                }
            }
        }
    }
}

.grid-sizer {
    width: 33.33333333%;
}

.our_services_tow {
    background: #f5f5f5;
    padding-bottom: 100px;
    overflow: hidden;
    display: block;
    .architecture_area {
        padding-top: 60px;
        .portfolio_filter_2 {
            border: 1px solid #dfe3e4;
            display: block;
            overflow: hidden;
            ul {
                padding: 0;
                li {
                    float: left;
                    list-style: none;
                    width: 20%;
                    text-align: center;
                    @include transition;
                    border-right: 1px solid #dfe3e4;
                    height: 150px;
                    &:last-child {
                        border-right: 0;
                    }
                    a {
                        font: 400 18px $roboto;
                        color: $h2;
                        display: block;
                        padding-top: 40px;
                        padding-bottom: 35px;
                        i {
                            font-size: 36px;
                            display: block;
                            padding-bottom: 10px;
                        }
                    }
                    &.active,
                    &:focus,
                    &:hover {
                        a {
                            color: $bc;
                        }
                        border-bottom: 5px solid $bc;
                    }
                }
            }
        }
        .portfolio_2 {
            padding-top: 90px;
            .single_facilities {
                img {
                    max-width: 100%;
                }
                .who_we_area {
                    .subtitle {
                        padding-bottom: 30px;
                        h2 {
                            &:after {
                                background: $bc;
                            }
                        }
                    }
                    p {
                        font: 400 14px/26px $roboto;
                        color: $p;
                        padding-bottom: 30px;
                    }
                    a {
                        margin-top: 20px;
                    }
                }
            }
        }
    }
    .services_pages {
        padding-top: 0;
    }
}
.grid-sizer-2 {
    width: 41.66666667%;
}

@media (max-width:499px){
  .our_services_area .portfolio_inner_area .portfolio_item .single_facilities .single_facilities_inner .gallery-hover{
    display: none;
  }
}
</style>
