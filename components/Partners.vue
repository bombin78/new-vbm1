<template>
  <section class="our_partners_area">
    <div class="container">
      <div class="tittle wow fadeInUp">
        <h2>Our Partners</h2>
        <h4>Lorem Ipsum is simply dummy text of the printing and typesetting industry</h4>
      </div>
      <div class="partners">
        <div class="item"><img src="/images/client_logo/client_logo-1.png" alt=""></div>
        <div class="item"><img src="/images/client_logo/client_logo-2.png" alt=""></div>
        <div class="item"><img src="/images/client_logo/client_logo-3.png" alt=""></div>
        <div class="item"><img src="/images/client_logo/client_logo-4.png" alt=""></div>
        <div class="item"><img src="/images/client_logo/client_logo-5.png" alt=""></div>
      </div>
    </div>
    <div class="book_now_aera">
      <div class="container">
        <div class="row book_now">
          <div class="col-md-10 booking_text">
            <h4>Booking now if you need build your dream home.</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div class="col-md-2 p0 book_bottun">
            <a href="#" class="button_all">book now</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/_variables.scss';

.our_partners_area {
    background: #f5f5f5;
    .partners {
        padding-top: 60px;
        padding-bottom: 90px;
        .item {
            img {
                width: 100%;
            }
        }
    }

    .book_now_aera {
        background: $bc;
        padding: 50px 0;
        .book_now {
            .booking_text {
                padding-top: 8px;
                h4 {
                    font: 700 18px $roboto;
                    color: $h2;
                }
                p {
                    font: 400 14px/26px $roboto;
                    color: $p;
                    padding-top: 5px;
                }
            }
            .book_bottun {
                a {
                    width: 200px;
                    background: #333333;
                    border-radius: 10px;
                    color: #fff;
                }
            }
        }
    }
}
</style>
