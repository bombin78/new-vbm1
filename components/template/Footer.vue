<template>
<footer class="footer_area">
  <div class="container">
    <div class="footer_row row">
      <div class="col-md-3 col-sm-6 footer_about">
        <h2>ABOUT OUR COMPANY</h2>
        <img src="images/footer-logo.png" alt="">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <ul class="socail_icon">
          <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
          <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
          <li><a href="#"><i class="fa fa-google-plus" aria-hidden="true"></i></a></li>
          <li><a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
        </ul>
      </div>
      <div class="col-md-3 col-sm-6 footer_about quick">
        <h2>Quick links</h2>
        <ul class="quick_link">
          <li><a href="#"><i class="fa fa-chevron-right"></i>Building Construction</a></li>
          <li><a href="#"><i class="fa fa-chevron-right"></i>Home Renovation</a></li>
          <li><a href="#"><i class="fa fa-chevron-right"></i>Hardwood Flooring</a></li>
          <li><a href="#"><i class="fa fa-chevron-right"></i>Repairing Of Roof</a></li>
          <li><a href="#"><i class="fa fa-chevron-right"></i>Commercial Construction</a></li>
          <li><a href="#"><i class="fa fa-chevron-right"></i>Concreate Transport</a></li>
        </ul>
      </div>
      <div class="col-md-3 col-sm-6 footer_about">
        <h2>Twitter Feed</h2>
        <a href="#" class="twitter">@colorlib: Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.</a>
        <a href="#" class="twitter">@colorlib: Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.</a>
      </div>
      <div class="col-md-3 col-sm-6 footer_about">
        <h2>CONTACT US</h2>
        <address>
          <p>Have questions, comments or just want to say hello:</p>
          <ul class="my_address">
            <li><a href="#"><i class="fa fa-envelope" aria-hidden="true"></i>info@thethemspro.com</a></li>
            <li><a href="#"><i class="fa fa-phone" aria-hidden="true"></i>+880 123 456 789</a></li>
            <li><a href="#"><i class="fa fa-map-marker" aria-hidden="true"></i><span>Sector # 10, Road # 05, Plot # 31, Uttara, Dhaka 1230 </span></a></li>
          </ul>
        </address>
      </div>
    </div>
  </div>
  <div class="copyright_area">
    Copyright 2017 All rights reserved. Designed by <a href="https://colorlib.com">Colorlib.</a>
  </div>
</footer>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/_variables.scss';

.footer_area {
  background: url("/images/footer.jpg") no-repeat;
  position: relative;
  background-size: cover;
  background-position: center;
  z-index: 1;

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

  .footer_row {
    padding-top: 95px;
    padding-bottom: 50px;

    .footer_about {
      padding-bottom: 50px;

      h2 {
        font: 400 18px $os;
        text-transform: uppercase;
        color: #fff;
        padding-bottom: 25px;
      }

      img {
        max-width: 100%;
      }

      p {
        font: 400 14px/26px $os;
        color: #fefefe;
        padding-top: 22px;
      }

      .socail_icon {
        padding: 0;
        margin: 0;
        padding-top: 25px;

        li {
          display: inline-block;
          list-style: none;
          padding-left: 8px;

          &:first-child {
            padding: 0;
          }

          a {
            border: 2px solid $bc;
            display: block;
            line-height: 26px;
            width: 30px;
            text-align: center;
            position: relative;
            z-index: 1;

            &:after {
              content: "";
              position: absolute;
              left: 0;
              top: 0;
              bottom: 0;
              right: 0;
              background: $bc;
              z-index: -1;
              transform: scaleY(0);
              transform-origin: 50%;
              transition-property: transform;
              transition-duration: 0.3s;
              transition-timing-function: ease-out
            }

            i {
              font-size: 14px;
              color: #fff;
              display: inline-block;
              padding-top: 7px;
            }

            &:hover,
            &:focus {
              &:after {
                transform: scaleY(1);
              }
            }
          }
        }
      }

      //quick_link
      .quick_link {
        padding: 0;
        margin: 0;

        li {
          list-style: none;

          a {
            font: 400 14px/28px $roboto;
            color: #fefefe;
            position: relative;
            padding-left: 30px;

            i {
              font-size: 14px;
              color: $bc;
              padding-right: 20px;
              position: absolute;
              left: 0;
              bottom: 0;
              @include transition;
            }

            &:hover,
            &:focus {
              color: $bc;

              i {
                left: 8px;
              }
            }
          }
        }
      }

      //twitter
      .twitter {
        font: 400 14px/28px $roboto;
        color: #fefefe;
        display: block;
        padding-bottom: 15px;

        &:hover,
        &:focus {
          color: $bc;
        }
      }

      //address
      address {
        p {
          font: 400 14px/28px $roboto;
          color: #fff;
          padding: 0;
        }

        .my_address {
          padding: 0;
          margin: 0;
          padding-top: 15px;

          li {
            list-style: none;

            a {
              font: 400 14px/28px $roboto;
              color: #fff;

              i {
                color: $bc;
                padding-right: 20px;
                font-size: 14px;
                display: inline-block;
              }

              &:hover,
              &:focus {
                color: $bc;
              }
            }

            span {
              display: inline-block;
              padding-left: 35px;
              margin-top: -30px;
            }
          }
        }
      }
    }
  }

  .copyright_area {
    background: #090909;
    font: 400 14px/100px $roboto;
    color: #fefefe;
    text-align: center;

    a {
      font-weight: 700;
      font-size: 14px;
      text-transform: uppercase;
      color: $bc;

      &:hover,
      &:focus {
        color: #fefefe;
      }
    }
  }
}
</style>
