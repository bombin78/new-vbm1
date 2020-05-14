<template>
  <nav class="navbar navbar-default header_aera" id="main_navbar">
    <div class="container">

      <div class="searchForm">
        <form action="#" class="row m0">
          <div class="input-group">
            <span class="input-group-addon"><i class="fa fa-search"></i></span>
            <input type="search" name="search" class="form-control" placeholder="Type & Hit Enter">
            <span class="input-group-addon form_hide"><i class="fa fa-times"></i></span>
          </div>
        </form>
      </div>

      <div class="col-md-2 p0">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#min_navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="index.html"><img src="images/logo.png" alt=""></a>
        </div>
      </div>

      <div class="col-md-10 p0">
        <div class="collapse navbar-collapse" id="min_navbar">
          <ul class="nav navbar-nav navbar-right">
            <li class="dropdown submenu">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown">Home</a>
              <ul class="dropdown-menu">
                <li><a href="index.html">Home</a></li>
                <li><a href="index-2.html">Home 2</a></li>
              </ul>
            </li>
            <li class="dropdown submenu">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown">About Us</a>
              <ul class="dropdown-menu other_dropdwn">
                <li><a href="about.html">About Us</a></li>
                <li><a href="about-2.html">About Us-2</a></li>
              </ul>
            </li>
            <li class="dropdown submenu">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown">Services</a>
              <ul class="dropdown-menu other_dropdwn">
                <li><a href="services.html">Services</a></li>
                <li><a href="services-2.html">Services-2</a></li>
              </ul>
            </li>
            <li><a href="#">Gallery</a></li>
            <li class="dropdown submenu">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown">Blog</a>
              <ul class="dropdown-menu">
                <li><a href="blog.html">Blog</a></li>
                <li><a href="blog-2.html">Blog-2</a></li>
              </ul>
            </li>
            <li><a href="contact.html">Contact</a></li>
            <li><a href="#" class="nav_searchFrom"><i class="fa fa-search"></i></a></li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  mounted() {
    if ($('#main_navbar').length){
         $('#main_navbar').affix({
            offset: {
                top: 10,
                bottom: function () {
                    return (this.bottom = $('.footer').outerHeight(true))
                }
            }
        });
    };
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_variables.scss';

.header_aera {
    background: #fff;
    border-radius: 0;
    border: 0;
    margin: 0;
    width: 100%;
    z-index: 9999;
    top: 0;
    box-shadow: 0 0 20px 0 rgba(21,47,95,0.2);

    .searchForm {
        height: 0;
        overflow: hidden;
        transition: all 300ms linear 0s;
        .input-group-addon {
            border-radius: 0;
            border: none;
            font-size: 14px;
            padding: 0 45px;
            background: $bc;
            color: #fff;
            cursor: pointer;
        }
        .form-control {
            height: 79px;
            padding: 0 15px;
            border-radius: 0;
            border: none;
            color: #fff;
            background: $bc;
            text-align: center;
            font: 400 16px $roboto;
            box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6);
            @include placeholder {
                font: 400 16px $roboto;
                color: #fff;
            }
        }
    }
    .show {
        height: 80px;
        border-bottom: 1px solid transparent;
    }
    .navbar-header {
        .navbar-brand {
            padding-top: 39px;
            img {
                max-width: 100%;
            }
        }
    }
    .navbar-collapse {
        .navbar-nav.navbar-right {
            li {
                a {
                    font: 700 14px/100px $roboto;
                    color: $h2;
                    text-transform: uppercase;
                    padding: 0 0 0 30px;
                    &:focus,
                    &:hover {
                        color: $bc;
                    }
                }
                .nav_searchFrom {
                    width: 100px;
                    background: $bc;
                    color: #fff;
                    padding: 0;
                    text-align: center;
                    margin-left: 15px;
                    &:focus,
                    &:hover {
                        color: $h2;
                    }
                }
                &.submenu {
                    .other_dropdwn {
                        @media (min-width: 768px) {
                            margin-right: -122px;
                        }
                    }
                    ul {
                        border: none;
                        box-shadow: none;
                        border-radius: 0;
                        min-width: 190px;
                        transition: all 500ms ease-in-out;
                        background: $bc;
                        @media (min-width: 768px) {
                            margin-right: -150px;
                            display: block;
                            transform: rotateX(-90deg);
                            transform-origin: top;
                        }
                        li {
                            display: block;
                            a {
                                line-height: normal;
                                font: 700 14 normal $roboto;
                                padding: 12px 8px;
                                display: block;
                            }
                        }
                        &:before {
                            content: "";
                            width: 100%;
                            height: 5px;
                            background: $h2;
                            position: absolute;
                            top: 0;
                            transform: translateZ(0);
                            backface-visibility: hidden;
                            transform: scaleX(0);
                            transform-origin: 0 50%;
                            transition: all 800ms ease-in-out;
                        }
                        &:after {
                            content: "";
                            width: 100%;
                            height: 5px;
                            position: absolute;
                            bottom: 0;
                            background: $h2;
                            transform: translateZ(0);
                            backface-visibility: hidden;
                            transform: scaleX(0);
                            transform-origin: 100% 50%;
                            transition: all 800ms ease-in-out;
                        }
                    }
                }
                &:hover {
                    &.submenu {
                        @media (min-width: 768px) {
                            ul {
                                transform: rotateX(0deg);
                                &:before {
                                    transform: scaleX(1);
                                }
                                &:after {
                                    transform: scaleX(1);
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

.header_aera_tow {
    background-color: transparent;
    position: relative;
    box-shadow: none;
    .navbar_right_fulid {
        background: #fff;
        height: 100px;
        padding-left: 20px;
        box-shadow: 0 0 40px 0 rgba(21,47,95,0.2);
        &:after {
            content: "";
            position: absolute;
            right: 0;
            height: 100px;
            background: #fff;
            width: 30%;
            z-index: -1;
            box-shadow: 0 0 40px 0 rgba(21,47,95,0.2);
        }
        ul.nav.navbar-nav.navbar-right {
            margin-right: 0;
        }
    }
}

.navbar-default .navbar-nav > .open > a,
.navbar-default .navbar-nav > .open > a:focus,
.navbar-default .navbar-nav > .open > a:hover {
    background-color: transparent;
}
</style>
