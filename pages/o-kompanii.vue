<template>
  <main>

    <section class="row about">
      <div class="container">
        <!-- <div class="title wow fadeInUp">
          <h2>ABOUT US</h2>
          <h4>Lorem Ipsum is simply dummy text of the printing and typesetting industry</h4>
        </div> -->
        <div class="row about__row">

          <div class="col-md-5 col-sm-6 about-client about-pages-client">
            <img src="images/pages/about/adm.JPG" alt="">
          </div>

          <div class="col-md-7 col-sm-6 description">
            <div class="subtitle description__title">
              <h2>Кто мы</h2>
            </div>
            <p class="description__text">
              ООО "Вибробурмаш" занимается разработкой, изготовлением и ремонтом специальных машин на железнодорожном ходу и
              сменным навесным оборудованием к ним. Мы выпускаем комплексы на автомобильном ходу, предназначенные для строительства
              сетей энергоснабжения и электрификации железных дорог, промышленного и гражданского строительства. Кроме того,
              компания предоставляет услуги по аренде и продаже ранее эксплуатируемой ж.д. техники.
            </p>
            <p class="description__text">
              Предприятие осуществляет все виды ремонтов железно-дорожной техники – спец.машин АВФ-1, АВФ-1М.2, МС-1, МС-1м и
              рабочих органов к ним, сменного оборудования к машинам МС, а также дрезин АДМ и ж/д кранов типа КЖ, КЖС, КЖДЭ.
            </p>
          </div>

        </div>

        <div class="row about__row">

          <div class="col-md-7 col-sm-6 description">

            <div class="subtitle description__title">
              <h2>Наши новые разработки:</h2>
            </div>
            <ul class="description__list">
              <li class="description__item">
                Подвижная железнодорожная установка МС-1г.2 для вибропогружения свай и свайных фундаментов опор контактной сети.
              </li>
              <li class="description__item">
                Комплекс МВС-1 для вибропогружения свайных фундаментов опор контактной сети и свай на базе автомобиля "УРАЛ-4320-1968-40".
              </li>
              <li class="description__item">
                Краноманипуляторную установку на платформе 13-4012.
              </li>
              <li class="description__item">
                Бурильное и пневмоударное буровое оборудование к машинам МС.
              </li>
              <li class="description__item">
                Сменное оборудование к машинам МС для установки металлических винтовых свайных фундаментов опор контактной сети.
              </li>
            </ul>

            <p class="description__text">
              Наша техника и оборудование успешно работает на железных дорогах России и во многих строительных организациях,
              занимающихся работами по ремонту сетей энергоснабжения и электрификации стальных магистралей.
            </p>

            <p class="description__text">
              В число основополагающих принципов предприятия входит высокое качество производимых работ, выполнение заказов в установленные сроки.
              Цена на нашу продукцию договорная.
            </p>

            <a href="#" class="description__btn button_all">Свяжитесь сейчас</a>
          </div>

          <div class="col-md-5 col-sm-6 about-client about-pages-client">
            <img src="images/pages/about/ms1g2_2.jpg" alt="">
          </div>

        </div>
      </div>

    </section>

    <vbm-call-min />
    <vbm-featured-works />

  </main>
</template>

<script>
import VbmCallMin from '@/components/CallMin';
import VbmFeaturedWorks from '@/components/FeaturedWorks';

export default {
  components: {
    VbmCallMin,
    VbmFeaturedWorks,
  }
}
</script>

<style lang="scss" scoped>
// @import '@/assets/scss/_variables.scss';
//
// .about {
//
//   background: #fefefe;
//
//   &__row {
//
//     padding-bottom: 70px;
//     &:nth-of-type(1) {
//       padding-top: 70px;
//     }
//   }
// }
//
// .description {
//
//   &__text {
//     font: 400 14px/26px $roboto;
//     color: $p;
//     margin-bottom: 0;
//     padding-top: 28px;
//     //padding-bottom: 54px;
//
//     &:nth-last-of-type(1) {
//       padding-bottom: 54px;
//     }
//   }
//
//   &__list {
//     padding-left: 15px;
//   }
//
//   &__item {
//     padding-top: 12px;
//     font: 400 14px/24px $roboto;
//     color: $p;
//   }
// }
//
// .about-client {
//   padding-top: 7px;
//   img {
//     max-width: 100%;
//   }
// }
//
// .button_all {
//   width: 210px;
// }
//
// @media (max-width:767px){
//
//   .about .about__row .about-client {
//     padding-top: 40px;
//   }
//   .about-client.about-pages-client{
//       padding-top: 0 !important;
//       padding-bottom: 30px;
//   }
// }
</style>
