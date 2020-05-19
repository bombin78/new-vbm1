<template>
  <section class="call_min_area">
    <div class="container">
      <h2>+880 123 456 789</h2>
      <p>Contact With Us. We are the top Construction Company. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <div class="call_btn">
        <a href="#" class="button_all">GET IN TOUCH</a>
        <a href="#" class="button_all">QUICK QUOTE</a>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_variables.scss';
.call_min_area{
    background: $bc;
    text-align: center;
    padding-top: 85px;
    padding-bottom: 100px;
    h2{
        font: 400 60px $roboto;
        color: #fff;
    }
    P{
        font: 400 30px/36px $roboto;
        color: #fefefe;
        text-transform: uppercase;
        max-width: 900px;
        margin: 0 auto;
        padding-top: 8px;
        padding-bottom: 20px;
    }
    .call_btn{
        a{
            display: inline-block;
            border: 2px solid #fff;
            font: 400 18px/56px $roboto;
            color: #fefefe;
            margin-left: 20px;
            &:first-child{
                margin-left: 0;
            }
        }
    }
}
</style>
