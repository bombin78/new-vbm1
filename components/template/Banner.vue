<template>
    <div class="banner_area" data-stellar-background-ratio="0.5">
      <h2>{{title}}</h2>
      <vbm-breadcrumbs :list="list" :setViewParams="setViewParams"/>
    </div>
</template>

<script>
import VbmBreadcrumbs from '@/components/template/Breadcrumbs';

export default {
  components: {
    VbmBreadcrumbs,
  },
  props: ['title', 'list', 'setViewParams'],
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_variables.scss';

.banner_area {
  background: url("/images/banner-bg.jpg") no-repeat fixed;
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
}
</style>
