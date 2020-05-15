<template>
  <section class="top_header_area">
    <div class="container">
      <ul class="nav navbar-nav top_nav">
        <li><a href="#"><i class="fa fa-phone"></i>+7 (920) 151-65-98</a></li>
        <li><a href="#"><i class="fa fa-envelope-o"></i>info@vbm1.ru</a></li>
        <li><a href="#"><i class="fa fa-clock-o"></i>пн-пт: c 08:00 до 17:00</a></li>
      </ul>
      <ul class="nav navbar-nav navbar-right">
        <a href="#">Войти</a>
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
