<template>
  <section class="row about">
    <div class="container">
      <div class="tittle wow fadeInUp">
        <h2>ABOUT US</h2>
        <h4>Lorem Ipsum is simply dummy text of the printing and typesetting industry</h4>
      </div>
      <div class="row about__row">
        <div class="col-md-7 col-sm-6 description">
          <div class="subtittle">
            <h2>Кто мы</h2>
          </div>
          <p class="description__text">
            Наша организация занимается разработкой, изготовлением и ремонтом специальных машин на железнодорожном ходу и
            сменным навесным оборудованием к ним. Мы выпускаем комплексы на автомобильном ходу, предназначенные для строительства
            сетей энергоснабжения и электрификации железных дорог, промышленного и гражданского строительства. Кроме того,
            компания занимается предоставлением услуг по аренде, продаже ранее эксплуатируемой ж.д. техники.
          </p>
          <a href="#" class="description__btn button_all">Contact Now</a>
        </div>
        <div class="col-md-5 col-sm-6 about-client">
          <img src="/images/about_client.jpg" alt="">
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/_variables.scss';

.about{

  background: #fefefe;

  &__row {

    padding-top: 70px;
    padding-bottom: 70px;
  }
}

.description {

  &__text {
    font: 400 14px/26px $roboto;
    color: $p;
    padding-top: 28px;
    padding-bottom: 54px;
  }
}

.about-client {
    padding-top: 7px;
    img {
        max-width: 100%;
    }
}

@media (max-width:767px){

  .about .about__row .about-client {
    padding-top: 40px;
  }
}
</style>
