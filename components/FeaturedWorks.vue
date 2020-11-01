<template>
  <section class="featured-works row" data-stellar-background-ratio="0.3">

    <div class="title wow fadeInUp">
      <h2>Мы предлагаем</h2>
      <h4>Добавить небольшой текст (не более 10 слов) </h4>
    </div>

    <div class="gallery">
      <div
        class="col-md-3 col-sm-4 col-xs-6 p0 gallery__inner"
        v-for="item of list"
        :key="item.id">

        <img
          class="gallery__img"
          :src="item.src"
          :alt="item.alt">

        <div class="gallery__hover">
          <h4 class="gallery__title">
            {{item.title}}
          </h4>
          <nuxt-link
            no-prefetch
            class="gallery__link"
            :to="item.name">Показать проект
          </nuxt-link>
        </div>

      </div>
    </div>

  </section>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          id: 1,
          title: 'Изготовление новых машин МС-1Г.2',
          name: 'izgotovlenie-novykh-mashin-ms-1g2',
          src: '/images/components/featured-works/ms1g2_1.jpg',
          alt: '',
        },
        {
          id: 2,
          title: 'Изготовление навесного оборудования',
          name: 'izgotovlenie-navesnogo-oborudovaniya',
          src: '/images/components/featured-works/drilling-equipment.jpg',
          alt: '',
        },
        {
          id: 3,
          title: 'Изготовление запасных частей',
          name: 'izgotovlenie-zapasnykh-chastej',
          src: '/images/components/featured-works/dVPoKx.jpg',
          alt: '',
        },
        {
          id: 4,
          title: 'Ремонт ж.д.техники: МС, АВФ, АДМ, ж.д.кранов',
          name: 'remont-zdtekhniki',
          src: '/images/components/featured-works/kran_562.jpg',
          alt: '',
        },
        {
          id: 5,
          title: 'Аренда ж.д.техники с экипажом и без него',
          name: 'arenda-zdtekhniki',
          src: '/images/components/featured-works/250761485.jpg',
          alt: '',
        },
        {
          id: 6,
          title: 'Продажа запчастей для ж.д. кранов',
          name: '',
          src: '/images/components/featured-works/f_5e7ba2653bc4c.jpg',
          alt: '',
        },
        {
          id: 7,
          title: 'Продажа запчастей для автомотрис',
          name: '',
          src: '/images/components/featured-works/1100.jpg',
          alt: '',
        },
        {
          id: 8,
          title: 'Продажа ж.д. техники б/у',
          name: 'prodazha-zdtekhniki',
          src: '/images/components/featured-works/mpt.JPG',
          alt: '',
        },
      ],
    };
  },
}
</script>

<style lang="scss" scoped>
// @import '@/assets/scss/_variables.scss';
//
// .featured-works {
//
//     background: url("/images/protfolio_bg.jpg") no-repeat fixed;
//     background-position: center;
//     text-align: center;
//     position: relative;
//     z-index: 1;
//     padding-bottom: 100px;
//
//     &:after {
//         content: "";
//         position: absolute;
//         top: 0;
//         background-color: rgba(0, 0, 0, .9);
//         left: 0;
//         right: 0;
//         bottom: 0;
//         display: block;
//         z-index: -1;
//     }
//     display: block;
//     overflow: hidden;
//     padding-bottom: 100px;
// }
//
// .title {
//   h2 {
//       color: #fff;
//   }
//   h4 {
//       color: #fefefe;
//   }
// }
//
// .gallery {
//
//   padding-top: 60px;
//
//   &__inner {
//
//     position: relative;
//     overflow: hidden;
//
//     &:after {
//       content: "";
//       position: absolute;
//       background-color: rgba(248, 184, 29, .70);
//       display: block;
//       top: 0;
//       left: 0;
//       right: 0;
//       bottom: 0;
//       z-index: 1;
//       opacity: 0;
//       @include transition;
//     }
//
//     &:focus,
//     &:hover {
//
//       &:after {
//           opacity: 1;
//       }
//
//       .gallery {
//         &__title {
//             right: 0;
//         }
//         &__link {
//             left: 0;
//         }
//       }
//     }
//   }
//
//   &__img {
//       max-width: 100%;
//   }
//
//   &__hover {
//
//     position: absolute;
//     top: 45%;
//     left: 0;
//     transform: translateY(-50%);
//     right: 0;
//     text-align: center;
//     z-index: 2;
//   }
//
//   &__title {
//
//     color: #fff;
//     font: 700 14px $roboto;
//     text-transform: uppercase;
//     padding-bottom: 18px;
//     position: relative;
//     right: -100%;
//     @include transition;
//   }
//
//   &__link {
//
//     width: 200px;
//     font: 400 14px/60px $roboto;
//     text-align: center;
//     display: block;
//     border-radius: 10px;
//     background: #333333;
//     color: #fff;
//     position: relative;
//     left: -100%;
//     @include transition;
//     text-transform: uppercase;
//     margin: 0 auto;
//
//     &:focus,
//     &:hover {
//         background: #fff;
//         color: $bc;
//     }
//   }
// }
//
// @media (max-width:360px){
//   .gallery {
//     &__hover{
//         display: none;
//     }
//   }
// }
</style>
