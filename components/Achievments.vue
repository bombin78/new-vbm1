<template>
  <section class="our_achievments_area" data-stellar-background-ratio="0.3">
    <div class="container">
      <div class="tittle wow fadeInUp">
        <h2>Our Achievments</h2>
        <h4>Lorem Ipsum is simply dummy text of the printing and typesetting industry</h4>
      </div>
      <div class="achievments_row row">
        <div class="col-md-3 col-sm-6 p0 completed">
          <i class="fa fa-connectdevelop" aria-hidden="true"></i>
          <span class="counter">800</span> 
          <h6>PROJECT COMPLETED</h6>
        </div>
        <div class="col-md-3 col-sm-6 p0 completed">
          <i class="fa fa-home" aria-hidden="true"></i>
          <span class="counter">230</span>
          <h6>HOUSE RENOVATIONS</h6>
        </div>
        <div class="col-md-3 col-sm-6 p0 completed">
          <i class="fa fa-child" aria-hidden="true"></i>
          <span class="counter">1390</span>
          <h6>WORKERS EMPLOYED</h6>
        </div>
        <div class="col-md-3 col-sm-6 p0 completed">
          <i class="fa fa-trophy" aria-hidden="true"></i>
          <span class="counter">125</span>
          <h6>AWARDS WON</h6>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/_variables.scss';

.our_achievments_area {
    background: url("/images/achievments_bg.jpg") no-repeat fixed;
    background-position: center;
    text-align: center;
    position: relative;
    z-index: 1;
    padding-bottom: 100px;
    &:after {
        content: "";
        position: absolute;
        top: 0;
        background-color: rgba(0, 0, 0, .8);
        left: 0;
        right: 0;
        bottom: 0;
        display: block;
        z-index: -1;
    }
    .tittle {
        h2 {
            color: #fff;
        }
        h4 {
            color: #fefefe;
        }
    }
    .achievments_row {
        padding-top: 60px;
        .completed {
            text-align: center;
            border-right: 3px solid #fff;
            &:last-child {
                border: 0;
            }
            i {
                font-size: 30px;
                color: #fff;
                display: block;
                padding-top: 10px;
            }
            .counter {
                font: 700 40px $roboto;
                color: $bc;
                display: block;
                padding-top: 23px;
            }
            h6 {
                font: 400 14px $roboto;
                color: #fff;
                padding-top: 20px;
                text-transform: uppercase;
                padding-bottom: 5px;
            }
        }
    }
}
</style>
