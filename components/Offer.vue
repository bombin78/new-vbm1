<template>
  <section class="what_we_area row">
    <div class="container">
      <div class="title wow fadeInUp">
        <h2>WHAT WE OFFER</h2>
        <h4>Lorem Ipsum is simply dummy text of the printing and typesetting industry</h4>
      </div>
      <div class="row construction_iner">
        <div class="col-md-4 col-sm-6 construction">
          <div class="cns-img">
            <img src="/images/cns-1.jpg" alt="">
          </div>
          <div class="cns-content">
            <i class="fa fa-home" aria-hidden="true"></i>
            <a href="#">BUILDING CONSTRUCTION</a>
            <p>Lorem Ipsum is simply dummy text of the print-ing and typesetting industry. Lorem Ipsum has been the industry's standard dummy </p>
          </div>
        </div>
        <div class="col-md-4 col-sm-6 construction">
          <div class="cns-img">
            <img src="/images/cns-2.jpg" alt="">
          </div>
          <div class="cns-content">
            <i class="fa fa-keyboard-o" aria-hidden="true"></i>
            <a href="#">PROJECT PLANNING</a>
            <p>Lorem Ipsum is simply dummy text of the print-ing and typesetting industry. Lorem Ipsum has been the industry's standard dummy </p>
          </div>
        </div>
        <div class="col-md-4 col-sm-6 construction">
          <div class="cns-img">
            <img src="/images/cns-3.jpg" alt="">
          </div>
          <div class="cns-content">
            <i class="fa fa-gavel" aria-hidden="true"></i>
            <a href="#">HOUSE RENOVATION</a>
            <p>Lorem Ipsum is simply dummy text of the print-ing and typesetting industry. Lorem Ipsum has been the industry's standard dummy </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/_variables.scss';

.what_we_area {
    background: #f8b81d;
    .title {
        h2 {
            &:after {
                background: #fff;
            }
        }
        h4 {
            color: #333;
        }
    }
    .construction_iner {
        padding-top: 60px;
        padding-bottom: 70px;
        .construction {
            text-align: center;
            padding-bottom: 30px;
            cursor: move;
            .cns-img {
                z-index: 2;
                img {
                    max-width: 100%;
                }
            }
            .cns-content {
                background: #fff;
                padding: 0 30px 20px;
                margin-top: -30px;
                i {
                    color: #fff;
                    font-size: 24px;
                    background: #333333;
                    line-height: 60px;
                    width: 60px;
                    display: block;
                    margin: 0 auto;
                    z-index: 1;
                    @include transition;
                    position: relative;
                }
                a {
                    font: 700 18px $roboto;
                    text-transform: uppercase;
                    color: $h2;
                    padding-top: 17px;
                    display: block;
                }
                p {
                    font: 400 14px/26px $roboto;
                    color: $p;
                    padding-top: 20px;
                }
            }

            &:focus,
            &:hover {
                a {
                    color: $bc;
                }
                i {
                    font-size: 35px;
                }
            }
        }
    }
}
</style>
