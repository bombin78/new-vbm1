<template>
  <section class="top_header_area">
    <div class="container">
      <ul class="nav navbar-nav top_nav">
        <li><a href="#"><i class="fa fa-phone"></i>+1 (168) 314 5016</a></li>
        <li><a href="#"><i class="fa fa-envelope-o"></i>info@thethemspro.com</a></li>
        <li><a href="#"><i class="fa fa-clock-o"></i>Mon - Sat 12:00 - 20:00</a></li>
      </ul>
      <ul class="nav navbar-nav navbar-right social_nav">
        <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
        <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
        <li><a href="#"><i class="fa fa-google-plus" aria-hidden="true"></i></a></li>
        <li><a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
        <li><a href="#"><i class="fa fa-pinterest-p" aria-hidden="true"></i></a></li>
        <li><a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
      </ul>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/_variables.scss';

.top_header_area {
    background: #111f29;
    .top_nav {
        li {
            a {
                font: 400 14px/50px $roboto;
                color: #fff;
                padding: 0 0 0 30px;
                i {
                    color: $bc;
                    font-size: 18px;
                    padding-right: 10px;
                }
                &:focus,
                &:hover {
                    background-color: transparent;
                    color: $bc;
                }
            }
            &:first-child {
                a {
                    padding: 0;
                }
            }
        }
    }
    .social_nav {
        margin: 0;
        padding-top: 12px;
        li {
            a {
                font-size: 14px;
                color: #fff;
                padding: 0;
                text-align: center;
                height: 24px;
                width: 24px;
                border-radius: 50%;
                margin-left: 10px;
                i {
                    line-height: 24px;
                }
                &:focus,
                &:hover {
                    background: $bc;
                    color: #111f29;
                }
            }
        }
    }
}

.top_header_area.top_header {
    background-color: transparent;
    position: relative;
    overflow: hidden;
    .right_top_header {
        background: #111f29;
        display: block;
        overflow: hidden;
        padding-left: 20px;
        &:after {
            content: "";
            position: absolute;
            right: 0;
            width: 50%;
            background: #111f29;
            height: 50px;
            z-index: -1;
        }
    }
}
</style>
