<template>
  <section class="latest_blog_area">
    <div class="container">
      <div class="tittle wow fadeInUp">
        <h2>Our Latest Blog</h2>
        <h4>Lorem Ipsum is simply dummy text of the printing and typesetting industry</h4>
      </div>
      <div class="row latest_blog">
        <div class="col-md-4 col-sm-6 blog_content">
          <img src="/images/blog/lb-1.jpg" alt="">
          <a href="#" class="blog_heading">Our Latest Project</a>
          <h4><small>by </small><a href="#">Emran Khan</a><span>/</span><small>ON </small> October 15, 2016</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sagittis iaculis velit in tristique. Curabitur ac urna urna. Sed sollicitudin at nisi sed accumsan... <a href="#">Read More</a></p>
        </div>
        <div class="col-md-4 col-sm-6 blog_content">
          <img src="/images/blog/lb-2.jpg" alt="">
          <a href="#" class="blog_heading">Our Latest Project</a>
          <h4><small>by </small><a href="#">Prodip Ghosh</a><span>/</span><small>ON </small> October 15, 2016</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sagittis iaculis velit in tristique. Curabitur ac urna urna. Sed sollicitudin at nisi sed accumsan... <a href="#">Read More</a></p>
        </div>
        <div class="col-md-4 col-sm-6 blog_content">
          <img src="/images/blog/lb-3.jpg" alt="">
          <a href="#" class="blog_heading">Our Latest Project</a>
          <h4><small>by </small><a href="#">Prodip Ghosh</a><span>/</span><small>ON </small> October 15, 2016</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sagittis iaculis velit in tristique. Curabitur ac urna urna. Sed sollicitudin at nisi sed accumsan... <a href="#">Read More</a></p>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/_variables.scss';

.latest_blog_area {
    padding-bottom: 70px;
    background: #fefefe;
    .latest_blog {
        padding-top: 60px;
        .blog_content {
            padding-bottom: 25px;
            img {
                max-width: 100%;
            }
            .blog_heading {
                font: 700 18px $roboto;
                color: $h2;
                display: block;
                padding-top: 45px;
                &:focus,
                &:hover {
                    color: $bc;
                }
            }
            h4 {
                font: 400 14px $roboto;
                color: $p;
                text-transform: uppercase;
                padding-top: 25px;
                a {
                    font: 400 14px $roboto;
                    color: $p;
                    &:focus,
                    &:hover {
                        color: $bc;
                    }
                }
                span {
                    color: $bc;
                    width: 40px;
                    text-align: center;
                    display: inline-block;
                }
                small {}
            }
            p {
                font: 400 14px/26px $roboto;
                color: $p;
                text-align: justify;
                padding-top: 30px;
                a {
                    font-weight: 700;
                    color: $h2;
                    &:focus,
                    &:hover {
                        color: $bc;
                    }
                }
            }
        }
    }
}

// .blog_tow_area {
//     padding-top: 100px;
//     padding-bottom: 70px;
//     .blog_tow_row {
//         .renovation {
//             padding-bottom: 30px;
//             img {
//                 max-width: 100%;
//             }
//             .renovation_content {
//                 border: 1px solid #888;
//                 padding: 28px;
//                 .clipboard {
//                     background: $bc;
//                     border: 1px solid #fff;
//                     width: 60px;
//                     border-radius: 50%;
//                     display: block;
//                     position: relative;
//                     margin-top: -60px;
//                     text-align: center;
//                     z-index: 1;
//                     i {
//                         font-size: 24px;
//                         color: #fefefe;
//                         line-height: 60px;
//                     }
//                 }
//                 .tittle {
//                     font: 700 14px/1 $roboto;
//                     color: $h2;
//                     text-align: left;
//                     text-transform: uppercase;
//                     display: block;
//                     padding-top: 30px;
//                     &:focus,
//                     &:hover {
//                         color: $bc;
//                     }
//                 }
//                 .date_comment {
//                     padding-top: 20px;
//                     a {
//                         font: 400 14px $roboto;
//                         color: #888;
//                         padding-right: 60px;
//                         i {
//                             padding-right: 10px;
//                         }
//                     }
//                 }
//                 p {
//                     font: 400 14px/26px $roboto;
//                     color: $p;
//                     padding-top: 30px;
//                     padding-bottom: 5px;
//                 }
//             }
//         }
//     }
// }
</style>
