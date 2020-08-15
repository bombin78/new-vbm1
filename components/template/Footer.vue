<template>
<footer class="footer">

  <div class="container">
    <div class="footer__row row">

      <div class="col-md-3 col-sm-6 footer__cell about">
        <h2 class="title">О нашей компании</h2>
        <nuxt-link
          no-prefetch
          class="about__brand"
          @click.native="setHeaderParams('/')"
          :to="'/'">ООО "ВИБРОБУРМАШ"
        </nuxt-link>
        <p class="about__text">
          Разработка, изготовление и ремонт специальных машин на железнодорожном ходу и сменным навесным оборудованием к ним.
        </p>
        <ul class="socail-icon">
          <li class="socail-icon__item twitter">
            <a class="socail-icon__link" href="#">
              <i class="fa fa-facebook" aria-hidden="true"></i>
            </a>
          </li>
          <li class="socail-icon__item">
            <a class="socail-icon__link" href="#">
              <i class="fa fa-twitter" aria-hidden="true"></i>
            </a>
          </li>
          <li class="socail-icon__item">
            <a class="socail-icon__link" href="#">
              <i class="fa fa-google-plus" aria-hidden="true"></i>
            </a>
          </li>
          <li class="socail-icon__item">
            <a class="socail-icon__link" href="#">
              <i class="fa fa-linkedin" aria-hidden="true"></i>
            </a>
          </li>
        </ul>
      </div>

      <div class="col-md-3 col-sm-6 footer__cell quick">
        <h2 class="title">Быстрые ссылки</h2>
        <ul class="quick-link">
          <li class="quick-link__item">
            <a class="quick-link__link" href="#">
              <i class="fa fa-chevron-right"></i>Добавить ссылку 1
            </a>
          </li>
          <li class="quick-link__item">
            <a class="quick-link__link" href="#">
              <i class="fa fa-chevron-right"></i>Добавить ссылку 2
            </a>
          </li>
          <li class="quick-link__item">
            <a class="quick-link__link" href="#">
              <i class="fa fa-chevron-right"></i>Добавить ссылку 3
            </a>
          </li>
          <li class="quick-link__item">
            <a class="quick-link__link" href="#">
              <i class="fa fa-chevron-right"></i>Добавить ссылку 4
            </a>
          </li>
          <li class="quick-link__item">
            <a class="quick-link__link" href="#">
              <i class="fa fa-chevron-right"></i>Добавить ссылку 5
            </a>
          </li>
          <li class="quick-link__item">
            <a class="quick-link__link" href="#">
              <i class="fa fa-chevron-right"></i>Добавить ссылку 6
            </a>
          </li>
        </ul>
      </div>

      <div class="col-md-3 col-sm-6 footer__cell">
        <h2 class="title">Придумать подраздел</h2>
        <ul class="list">
          <li class="list__item">
            <a href="#" class="list__link">
              Добавить какой-нибудь текст подраздела.
              Данный текст будет работать как ссылка
            </a>
          </li>
          <li class="list__item">
            <a href="#" class="list__link">
              Добавить еще какой-нибудь текст,
              который будет работать как ссылка
            </a>
          </li>
        </ul>
      </div>

      <div class="col-md-3 col-sm-6 footer__cell">
        <h2 class="title">Связаться с нами</h2>
        <address class="address">
          <p class="address__text">Есть вопросы, комментарии или просто хотите поздороваться::</p>
          <ul class="address__list">
            <li class="address__item">
              <a class="address__link" href="#">
                <i class="fa fa-envelope" aria-hidden="true"></i>info@vbm1.ru
              </a>
            </li>
            <li class="address__item">
              <a class="address__link" href="#">
                <i class="fa fa-phone" aria-hidden="true"></i>+7 (920) 151-65-98
              </a>
            </li>
            <li class="address__item">
                <a class="address__link" href="#">
                  <i class="fa fa-map-marker" aria-hidden="true"></i>
                  <span>Тверская обл., г.Бологое, ул.Кирпичная, д.1А., офис.1 </span>
                </a>
            </li>
          </ul>
        </address>
      </div>

    </div>
  </div>

  <div class="copyright">
    Copyright 2017 All rights reserved. Designed by
    <a class="copyright__link" href="https://colorlib.com">
      Colorlib.
    </a>
  </div>

</footer>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/_variables.scss';

.footer {
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

  &__row {
    padding-top: 95px;
    padding-bottom: 50px;
  }

  &__cell {
    padding-bottom: 50px;
  }
}

.title {
  font: 400 18px $os;
  text-transform: uppercase;
  color: #fff;
  padding-bottom: 25px;
}

.about {

  &__brand {
    color: #fefefe;

    &:hover,
    &:focus {
      color: $bc;
    }
  }

  &__text {
    font: 400 14px/26px $os;
    color: #fefefe;
    padding-top: 22px;
  }
}

.socail-icon {
  padding: 0;
  margin: 0;
  padding-top: 25px;

  &__item {
    display: inline-block;
    list-style: none;
    padding-left: 8px;

    &:first-child {
      padding: 0;
    }
  }

  &__link {
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

.quick-link {
  padding: 0;
  margin: 0;

  &__item {
    list-style: none;
  }

  &__link {
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

.list {

  margin-bottom: 0;
  padding-left: 0;

  &__item {
    font: 400 14px/28px $roboto;
    display: block;
    padding-bottom: 15px;
  }

  &__link {
    color: #fefefe;

    &:hover,
    &:focus {
      color: $bc;
    }
  }
}

.address {

  &__text {
    font: 400 14px/28px $roboto;
    color: #fff;
    padding: 0;
  }

  &__list {
    padding: 0;
    margin: 0;
    padding-top: 15px;
  }

  &__item {
    list-style: none;
  }

  &__link {
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

    span {
      display: inline-block;
      padding-left: 35px;
      margin-top: -30px;
    }
  }
}

.copyright {
  background: #090909;
  font: 400 14px/100px $roboto;
  color: #fefefe;
  text-align: center;

  &__link {
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
</style>
