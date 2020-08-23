<template>
  <div class="collapse navbar-collapse" id="min_navbar">
    <ul class="nav navbar-nav navbar-right menu">
      <li
        class="dropdown menu__item"
        v-for="item of list"
        :key="item.id">

        <nuxt-link
          no-prefetch
          exact
          active-class="active"
          class="menu__link"
          data-toggle="dropdown"
          @click.native="setHeaderParams(item.name)"
          :to="item.name">{{item.title}}
        </nuxt-link>

        <ul v-if="item.dropdownMenu.length > 0" class="dropdown-menu">
          <li
            class="dropdown-menu__item"
            v-for="dropdownItem of item.dropdownMenu"
            :key="dropdownItem.id">
            <nuxt-link
              no-prefetch
              class="dropdown-menu__link"
              @click.native="setHeaderParams(dropdownItem.name)"
              :to="dropdownItem.name">{{dropdownItem.title}}
            </nuxt-link>
          </li>
        </ul>

      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['list', 'setHeaderParams'],
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_variables.scss';

.menu {

  &__item {

    &:hover {
      @media (min-width: 768px) {
        .dropdown-menu {
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

  &__link {
    font: 700 14px/60px $roboto;
    color: $h2;
    text-transform: uppercase;
    padding: 0 0 0 30px;
  }
}

// Для переопределения стилей bootstrap
.nav.navbar-nav {
  .dropdown {
    .menu__link {

      &.active {
        color: $bc;
        background-color: transparent;
      }

      &:focus,
      &:hover {
          color: $bc;
      }
    }
  }
}

.dropdown-menu {

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

  &:before,
  &:after {
    content: "";
    position: absolute;
    height: 5px;
    width: 100%;
    background: $h2;
    transform: translateZ(0);
    backface-visibility: hidden;
    transform: scaleX(0);
    transition: all 800ms ease-in-out;
  }

  &:before {
    top: 0;
    transform-origin: 0 50%;
  }

  &:after {
    bottom: 0;
    background: $h2;
    transform-origin: 100% 50%;
  }

  &__item {
    display: block;
  }

  &__link {
    display: block;
    padding: 12px 8px;
    line-height: normal;
    color: $h2;
    text-transform: uppercase;
    font: 700 14 normal $roboto;
  }
}
</style>
