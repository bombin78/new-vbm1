<template>
  <section class="our_feature_area">
    <div class="container">
      <div class="tittle wow fadeInUp">
        <h2>Наши преимущества</h2>
        <h4>Небольшой вступительный текст о наших преимуществах</h4>
      </div>
      <div class="feature_row row">
        <div class="col-md-6 feature_img">
          <img src="/images/components/features/rzd-pm-1312.gif" alt="">
        </div>
        <div class="col-md-6 feature_content">
          <div class="subtittle">
            <h2>ПОЧЕМУ ВЫБИРАЮТ НАС</h2>
            <h5>Текст о том, почему выбирают ООО Вибробурмаш</h5>
          </div>
          <div class="media">
            <div class="media-left">
              <a href="#">
                <i class="fa fa-wrench" aria-hidden="true"></i>
              </a>
            </div>
            <div class="media-body">
              <a href="#">БОЛЕЕ 6 ЛЕТ ОПЫТА РАБОТЫ</a>
              <p>Небольшой текст про опыт работы</p>
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
              <p>Небольшой текст про квалифицированных специалистов</p>
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
              <p>Небольшой текст про обслуживание клиентов</p>
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
                margin-top: 40px;
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
