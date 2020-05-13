<template>
  <section class="slider_area row m0">
      <div class="slider_inner">
          <div
            :data-thumb="item.src"
            :data-src="item.title"
            v-for="item of list"
            :key="item.id">
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
  mounted () {
    // if( $('.slider_inner').length ){
    //   $('.slider_inner').camera({
    //     loader: true,
    //     navigation: true,
    //     autoPlay:false,
    //     time: 4000,
    //     playPause: false,
    //     pagination: false,
    //     thumbnails: false,
    //     overlayer: true,
    //     hover: false,
    //     minHeight: '500px',
    //   });
    // }
  },
  data() {
    return {
      list: [
        {
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

<style>
@import '@/plugins/vendors/camera-slider/camera.css';
</style>
