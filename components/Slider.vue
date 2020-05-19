<template>
  <section class="theme-bar row m0">

    <div id="slider" class="nivo-slider">
        <img
          :src="item.url"
          :data-thumb="item.url"
          :alt="item.title"
          :title="`#htmlcaption-${item.id}`"
          v-for="item of list"
          :key="item.id">
    </div>

    <div
      :id="`htmlcaption-${item.id}`"
      class="nivo-html-caption"
      v-for="item of list"
      :key="item.id">
        <div class="container">
          <h5 class=" wow fadeInUp animated" v-html="item.title"></h5>
          <h3 class=" wow fadeInUp animated" data-wow-delay="0.5s">{{item.subtitle}}</h3>
          <p class=" wow fadeInUp animated" data-wow-delay="0.8s">{{item.text}}</p>
          <a class=" wow fadeInUp animated" data-wow-delay="1s" href="#">{{item.btnName}}</a>
        </div>
      </div>
    </div>

  </section>
</template>

<script>
export default {
  mounted () {
    $('#slider').nivoSlider({
        controlNav: false,
        pauseTime:7000,
      });
  },
  data () {
    return {
      list: [
        {
          id: 1,
          url: '/images/slider/img-1.jpeg',
          title: 'Компания ООО "ВИБРОБУРМАШ" рада приветствовать Вас<br> на своем официальном сайте!',
          subtitle: 'Изготавливаем и ремонтируем',
          text: 'Работаем более 6-ти лет. Имеем производственные мощности, персонал и техническую документацию на выполняемые работы. Выполням текущий, средний и капитальный ремонты дрезин ДГку, автомотрис АДМ, мотовозов МПТ, ж.д.кранов КЖ, КЖС, КЖДЭ.',
          btnName: 'Читать больше',
        },
        {
          id: 2,
          url: '/images/slider/img-2.jpg',
          title: 'Здесь Вы можете ознакомиться с нашими предложениями.<br> Если возникли вопросы Наши специалисты проконсультируют<br> и помогут подобрать наиболее оптимальное решение',
          subtitle: 'Оказываем широкий спектр услуг',
          text: 'Обеспечиваем высокое качество ремонтных работ в установленные сроки. Имеем возможность выполнять модернизацию.',
          btnName: 'Читать больше',
        },
      ],
    }
  },
}
</script>

<style lang="scss">
@import '@/assets/scss/_variables.scss';

.theme-bar{

  .nivo-slider {
    position: relative;
  }

  &:hover {
    .nivo-caption {
        bottom: 0;
    }
  }

  .nivo-caption {
    height: 100%;
    background: rgba(0,0,0,0.8);

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

  .nivo-prevNav,
  .nivo-nextNav {
    position: absolute;
    top: 50% !important;
    margin-top: -25px !important;

    text-indent: -9999px;

    &:after {
      content: "";
      position: absolute;
      top: 0;
      height: 50px;
      width: 50px;
      background: url("/images/prev.png") no-repeat;
    }
  }

  .nivo-prevNav {

    &:after {
      left: 0;
      background: url("/images/prev.png") no-repeat;
    }
  }

  .nivo-nextNav {

    &:after {
      right: 0;
      background: url("/images/next.png") no-repeat;
    }
  }
}
</style>
