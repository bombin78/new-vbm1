<template>
  <form>

    <h1>Login</h1>

    <div class="form-group">
      <input type="text" class="form-control">
    </div>

    <div class="form-group">
      <input type="password" class="form-control">
    </div>

    <p>
      <nuxt-link to="/">Главная</nuxt-link>
    </p>

    <button type="button" class="btn btn-primary">Login</button>

  </form>
</template>

<script>
export default {
  layout: 'empty',
}
</script>

<style lang="scss" scoped>
// form {
//     width: 600px;
// }
</style>
