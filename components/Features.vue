<template>
  <section class="our_feature_area">
    <div class="container">
      <div class="tittle wow fadeInUp">
        <h2>Наши преимущества</h2>
        <h4>Lorem Ipsum is simply dummy text of the printing and typesetting industry</h4>
      </div>
      <div class="feature_row row">
        <div class="col-md-6 feature_img">
          <img src="/images/feature-man.jpg" alt="">
        </div>
        <div class="col-md-6 feature_content">
          <div class="subtittle">
            <h2>ПОЧЕМУ ВЫБИРАЮТ НАС</h2>
            <h5>There are many variations of passages of Lorem Ipsum available.</h5>
          </div>
          <div class="media">
            <div class="media-left">
              <a href="#">
                <i class="fa fa-wrench" aria-hidden="true"></i>
              </a>
            </div>
            <div class="media-body">
              <a href="#">БОЛЕЕ 6 ЛЕТ ОПЫТА РАБОТЫ</a>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting indus-try. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
            </div>
          </div>
          <div class="media">
            <div class="media-left">
              <a href="#">
                <i class="fa fa-rocket" aria-hidden="true"></i>
              </a>
            </div>
            <div class="media-body">
              <a href="#">КВАЛИФИЦИРОВАННЫЙ СПЕЦИАЛИСТЫ</a>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting indus-try. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
            </div>
          </div>
          <div class="media">
            <div class="media-left">
              <a href="#">
                <i class="fa fa-users" aria-hidden="true"></i>
              </a>
            </div>
            <div class="media-body">
              <a href="#">Лучшее обслуживание клиентов</a>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting indus-try. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/_variables.scss';

.our_feature_area {
    padding-bottom: 90px;
    background: #fefefe;
    .feature_row {
        padding-top: 70px;
        .feature_img {
            padding-top: 10px;
            img {
                max-width: 100%;
            }
        }
        .feature_content {
            .subtittle {
                padding-bottom: 40px;
            }
            .media {
                padding-bottom: 15px;
                .media-left {
                    padding-right: 30px;
                    a {
                        i {
                            font-size: 24px;
                            color: $bc;
                            line-height: 50px;
                            width: 60px;
                            text-align: center;
                            background: #333333;
                            border: 5px solid $bc;
                        }
                    }
                }
                .media-body {
                    a {
                        font: 700 18px $roboto;
                        color: $h2;
                        text-transform: uppercase;
                        &:focus,
                        &:hover {
                            color: $bc;
                        }
                    }
                    p {
                        font: 400 14px/26px $roboto;
                        color: $p;
                        padding-top: 20px;
                    }
                }
            }
        }
    }
}
</style>
