<template>
  <section class="our_team_area">
    <div class="container">
      <div class="tittle wow fadeInUp">
        <h2>Our Team</h2>
        <h4>Lorem Ipsum is simply dummy text of the printing and typesetting industry</h4>
      </div>
      <div class="row team_row">
        <div class="col-md-3 col-sm-6 wow fadeInUp">
          <div class="team_membar">
            <img src="/images/team/tm-1.jpg" alt="">
            <div class="team_content">
              <ul>
                <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                <li><a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
              </ul>
              <a href="#" class="name">Prodip Ghosh</a>
              <h6>Founder &amp; CEO</h6>
            </div>
          </div>
        </div>
        <div class="col-md-3 col-sm-6 wow fadeInUp" data-wow-delay="0.2s">
          <div class="team_membar">
            <img src="/images/team/tm-2.jpg" alt="">
            <div class="team_content">
              <ul>
                <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                <li><a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
              </ul>
              <a href="#" class="name">Emran Khan</a>
              <h6>Web-Developer</h6>
            </div>
          </div>
        </div>
        <div class="col-md-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
          <div class="team_membar">
            <img src="/images/team/tm-3.jpg" alt="">
            <div class="team_content">
              <ul>
                <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                <li><a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
              </ul>
              <a href="#" class="name">Prodip Ghosh</a>
              <h6>Founder &amp; CEO</h6>
            </div>
          </div>
        </div>
        <div class="col-md-3 col-sm-6 wow fadeInUp" data-wow-delay="0.4s">
          <div class="team_membar">
            <img src="/images/team/tm-4.jpg" alt="">
            <div class="team_content">
              <ul>
                <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                <li><a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
              </ul>
              <a href="#" class="name">Jakaria Khan</a>
              <h6>Founder &amp; CEO</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/_variables.scss';

.our_team_area {
    padding-bottom: 70px;
    background: #fefefe;
    .team_row {
        padding-top: 70px;
        .team_membar {
            height: 378px;
            display: block;
            overflow: hidden;
            position: relative;
            margin-bottom: 30px;
            img {
                max-width: 100%;
            }
            .team_content {
                background: $bc;
                text-align: center;
                padding-top: 20px;
                padding-bottom: 30px;
                position: absolute;
                bottom: 0;
                left: 0;
                right: 0;
                display: block;
                ul {
                    padding: 0;
                    margin: 0;
                    height: 0;
                    overflow: hidden;
                    @include transition;
                    li {
                        list-style: none;
                        padding-left: 20px;
                        display: inline-block;
                        &:first-child {
                            padding: 0;
                        }
                        a {
                            font-size: 14px;
                            color: #fff;
                            line-height: 43px;
                            width: 45px;
                            text-align: center;
                            border-radius: 50%;
                            border: 1px solid #fff;
                            display: block;
                            &:focus,
                            &:hover {
                                color: $bc;
                                background: #fff;
                            }
                        }
                    }
                }
                .name {
                    font: 700 14px $roboto;
                    color: #fff;
                    display: block;
                    text-transform: uppercase;
                    padding-top: 10px;
                }
                h6 {
                    font: 400 14px $roboto;
                    color: #fff;
                    padding-top: 5px;
                }
            }
            &:focus,
            &:hover {
                .team_content {
                    ul {
                        height: 50px;
                    }
                }
            }
        }
    }
}
</style>
