<template>
  <main>
    <vbm-banner />

    <section class="not_found_area">
      <h2>404 PAGE NOT FOUND</h2>
      <p>This page is temporarily unavailable. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <h1>404</h1>
      <form action="#" class="search_error">
        <input type="search" name="search" class="form-control" placeholder="Search">
        <a href="#"><i class="fa fa-search"></i> </a>
      </form>
    </section>

  </main>
</template>

<script>
import VbmBanner from '@/components/template/Banner';

export default {
  components: {
    VbmBanner,
  }
}
</script>

<style lang="scss" scoped>
// @import '@/assets/scss/_variables.scss';
//
// .not_found_area{
//     text-align: center;
//     padding: 100px 0;
//     h2{
//         font: 400 48px/1 $roboto;
//         color: $bc;
//         text-transform: uppercase;
//     }
//     p{
//         font: 400 14px $roboto;
//         color: $p;
//         padding-top: 50px;
//     }
//     h1{
//         font: 700 72px/1 $roboto;
//         color: $bc;
//         padding-top: 50px;
//         text-transform: uppercase;
//         padding-bottom: 90px;
//     }
//     .search_error{
//         position: relative;
//         max-width: 555px;
//         margin: 0 auto;
//         input{
//             border: 1px solid #dfe3e4;
//             box-shadow: none;
//             color: #d3dadf;
//             height: 50px;
//             display: block;
//             border-radius: 0;
//             padding-left: 20px;
//             @include placeholder{
//                 color: #d3dadf;
//             }
//         }
//         a{
//             line-height: 50px;
//             position: absolute;
//             right: 0px;
//             bottom: 0px;
//             width: 50px;
//             color: #d3dadf;
//         }
//         &:hover, &:focus{
//             a{
//                 background: $bc;
//                 color: #fff;
//             }
//         }
//     }
// }
</style>
