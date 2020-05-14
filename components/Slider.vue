<template>
<section class="slider_area row m0">
  <div class="slider_inner">
    <div :data-thumb="item.src" :data-src="item.title" v-for="item of list" :key="item.id">
      <div class="camera_caption">
        <div class="container">
          <h5 class=" wow fadeInUp animated">{{item.title}}</h5>
          <h3 class=" wow fadeInUp animated" data-wow-delay="0.5s">{{item.subtitle}}</h3>
          <p class=" wow fadeInUp animated" data-wow-delay="0.8s">{{item.text}}</p>
          <a class=" wow fadeInUp animated" data-wow-delay="1s" href="#">{{item.btnName}}</a>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<script>
export default {
  mounted() {
    if( $('.slider_inner').length ){
      $('.slider_inner').camera({
        loader: true,
        navigation: true,
        autoPlay:false,
        time: 4000,
        playPause: false,
        pagination: false,
        thumbnails: false,
        overlayer: true,
        hover: false,
        minHeight: '500px',
      });
    }
  },
  data() {
    return {
      list: [{
          id: 1,
          src: '/images/slider-1.jpg',
          title: 'Welcome to our',
          subtitle: 'CLEAN, MODERN, MULTIPURPOSE THEME',
          text: 'Our team of professionals will help you turn your dream home or flat into a reality fast. The Love Boat promises something for everyone. Now the world don\'t move to the beat of just one',
          btnName: 'Read More',
        },
        {
          id: 2,
          src: '/images/slider-2.jpg',
          title: 'Welcome to our',
          subtitle: 'CLEAN, MODERN, MULTIPURPOSE THEME',
          text: 'Our team of professionals will help you turn your dream home or flat into a reality fast. The Love Boat promises something for everyone. Now the world don\'t move to the beat of just one',
          btnName: 'Read More',
        },
      ],
    };
  },
}
</script>

<style lang="css">
@import '@/plugins/camera-slider/camera.css';

.slider_area {
  .slider_inner {
    .camera_caption {
      height: 100%;

      div {
        background: transparent;
        position: absolute;
        width: 100%;
        text-align: center;
        z-index: 1;
        top: 50%;
        transform: translateY(-50%);
        text-transform: uppercase;
        text-shadow: none;
        left: 0;

        h5 {
          color: $bc;
          font: 400 24px $roboto;
        }

        h3 {
          color: #fff;
          font: 400 30px $roboto;
          padding-top: 27px;
        }

        p {
          padding-top: 60px;
          color: #fff;
          font: 400 14px/26px $roboto;
          max-width: 750px;
          margin: 0 auto;
          padding-bottom: 90px;
        }

        a {
          font: 700 18px/59px $roboto;
          width: 180px;
          text-align: center;
          background: $bc;
          display: block;
          text-shadow: none;
          margin: 0 auto;
          outline: none !important;
          box-shadow: none;
          border: 0;
          color: $h2;
          position: relative;
          z-index: 2;
          padding: 0;

          &:before {
            content: "";
            position: absolute;
            z-index: -1;
            background: #fff;
            top: 0;
            bottom: 0;
            left: 0;
            display: block;
            right: 0;
            transform: scaleY(0);
            transform-origin: 50%;
            transition-property: transform;
            transition-duration: 0.3s;
            transition-timing-function: ease-out
          }

          &:hover,
          &:focus {
            &:before {
              transform: scaleY(1);
            }
          }
        }
      }
    }

    .camera_prev,
    .camera_next {
      opacity: 1 !important;
      background-color: transparent;

      span {
        display: none;
      }
    }

    .camera_prev {
      position: relative;

      &:after {
        content: "";
        position: absolute;
        top: -20px;
        background: url("/images/prev.png") no-repeat;
        left: 382px;
        height: 50px;
        width: 50px;
      }
    }

    .camera_next {
      &:after {
        content: "";
        position: absolute !important;
        top: 0;
        background: url("/images/next.png") no-repeat;
        right: 382px;
        height: 50px;
        width: 50px;
      }
    }

    .camera_fakehover {
      top: 20px;
    }
  }
}

/* .slider_area_tow {
  .slider_inner {
    .camera_caption {
      div {
        .container {
          width: 1170px !important;
          text-align: left;
          position: relative;
          top: 250px;

          p {
            margin: 0;
          }

          a {
            margin: 0;
          }
        }

      }
    }
  }

  .slider_inner .camera_prev:after {
    left: 230px;
  }

  .slider_inner .camera_next:after {
    right: 230px;
  }
}

.banner_area {
  background: url("../images/banner-bg.jpg") no-repeat fixed;
  background-position: center;
  text-align: center;
  position: relative;
  z-index: 1;
  padding-bottom: 70px;

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

  h2 {
    color: #fff;
    font: 400 40px $os;
    text-transform: uppercase;
    padding-top: 85px;
  }

  .breadcrumb {
    background-color: transparent;
    padding-top: 15px;

    li {
      a {
        font: 400 14px $roboto;
        color: #fefefe;

        &.active {
          color: $bc;
        }
      }
    }
  }
} */
</style>
