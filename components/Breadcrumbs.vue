<template>
  <ol class="breadcrumb">
    <li><a href="index.html">Home</a></li>
    <li><a href="#" class="active">About Us</a></li>
  </ol>
</template>

<script>
export default {}
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
