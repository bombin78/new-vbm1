<template>
  <ol class="breadcrumb">
    <li v-for="(item, index) of list" :key="item.id">
        <nuxt-link
          no-prefetch
          @click.native="setViewParams(item)"
          :active-class="(index === list.length - 1)? 'active': ''"
          :to="item.name">{{item.title}}
        </nuxt-link>
    </li>
  </ol>
</template>

<script>
export default {
  props: ['list', 'setViewParams'],
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_variables.scss';

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
</style>
