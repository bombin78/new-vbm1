<template>
  <div class="top-header">
    <div class="container">

      <ul class="nav navbar-nav top-nav">
        <li class="top-nav__item">
          <a class="top-nav__link" href="#">
            <i class="top-nav__icon fa fa-phone"></i>+7 (920) 151-65-98
          </a>
        </li>
        <li class="top-nav__item">
          <a class="top-nav__link" href="#">
            <i class="top-nav__icon fa fa-envelope-o"></i>info@vbm1.ru
          </a>
        </li>
        <li class="top-nav__item">
          <a class="top-nav__link" href="#">
            <i class="top-nav__icon fa fa-clock-o"></i>пн-пт: c 08:00 до 17:00
          </a>
        </li>
      </ul>

      <div class="nav navbar-nav navbar-right">
        <nuxt-link class="login" to="/login">Вход</nuxt-link>
      </div>

    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/_variables.scss';

.top-header {
  background: #111f29;
}

.login {
  padding: 0 15px 0 30px;
  color: #fff;

  line-height: 50px;
}

.top-nav {

  &__item {
    &:first-child {
      .top-nav__link {
        padding: 0;
      }
    }
  }

  &__link {

    font: 400 14px/50px $roboto;
    color: #fff;
    padding: 0 0 0 30px;

    &:focus,
    &:hover {
      background-color: transparent;
      color: $bc;
    }
  }

  &__icon {
    color: $bc;
    font-size: 18px;
    padding-right: 10px;
  }
}
</style>
