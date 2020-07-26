<template>
  <header class="header">

    <vbm-top-header />

    <nav ref="menu" class="navbar navbar-default header-area" id="main_navbar">
      <div class="container">

        <div class="col-md-3 p0">
          <div class="navbar-header">

            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#min_navbar">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>

            <nuxt-link
              no-prefetch
              class="navbar-brand"
              @click.native="setHeaderParams('/')"
              :to="'/'">ООО "ВИБРОБУРМАШ"
            </nuxt-link>

          </div>
        </div>

        <div class="col-md-9 p0">
          <vbm-menu
            :list="menuList"
            :setHeaderParams="setHeaderParams"/>
        </div>
      </div>
    </nav>

    <vbm-slider v-if="isShowBottomHeader"/>
    <vbm-banner
      v-if="!isShowBottomHeader"
      :title="title"
      :list="breadcrumbList"
      :setHeaderParams="setHeaderParams"/>

  </header>
</template>

<script>
import VbmBanner from '@/components/template/Banner';
import VbmMenu from '@/components/template/Menu';
import VbmSlider from '@/components/template/Slider';
import VbmTopHeader from '@/components/template/TopHeader';

export default {
  components: {
    VbmBanner,
    VbmMenu,
    VbmSlider,
    VbmTopHeader,
  },
  methods: {
    setHeaderParams: function(routeName) {

      let rootItem = this.menuList.find(item => item.name === '/');

      this.isShowBottomHeader = true;
      this.title = rootItem.title;
      this.breadcrumbList = [rootItem];

      if(routeName !== '/' && routeName !== 'index') {

        this.isShowBottomHeader = false;

        this.menuList.forEach(item => {

          if(item.name === routeName) {

            this.title = item.title;
            this.breadcrumbList.push(item);
          } else if (item.dropdownMenu.length > 0) {

            item.dropdownMenu.forEach(subItem => {
              if(subItem.name === routeName) {
                this.title = subItem.title;
                this.breadcrumbList.push(item,subItem);
              }
            });
          }
        });
      }
    }
  },
  created() {
    this.setHeaderParams(this.$route.name);
  },
  mounted() {
    if ($('#main_navbar').length){
         $('#main_navbar').affix({
            offset: {
                top: 50,
                bottom: function () {
                    return (this.bottom = $('.footer').outerHeight(true))
                }
            }
        });
    };
  },
  data() {
    return {
      isShowBottomHeader: false,
      title: '',
      breadcrumbList: [],
      menuList: [
        {
          id: 1,
          title: 'Главная',
          name: '/',
          dropdownMenu: [],
        },
        {
          id: 2,
          title: 'О компании',
          name: 'o-kompanii',
          dropdownMenu: [],
        },
        {
          id: 3,
          title: 'Производство',
          name: 'proizvodstvo',
          dropdownMenu: [
            {
              id: 31,
              title: 'Изготовление новых машин МС-1Г.2',
              name: 'izgotovlenie-novykh-mashin-ms-1g2',
            },
            {
              id: 32,
              title: 'Изготовление навесного оборудования',
              name: 'izgotovlenie-navesnogo-oborudovaniya',
            },
            {
              id: 33,
              title: 'Изготовление запасных частей',
              name: 'izgotovlenie-zapasnykh-chastej',
            },
            {
              id: 34,
              title: 'Ремонт ж.д.техники: МС, АВФ, АДМ, ж.д.кранов',
              name: 'remont-zdtekhniki',
            },
          ]
        },
        {
          id: 4,
          title: 'Аренда',
          name: 'arenda',
          dropdownMenu: [
            {
              id: 41,
              title: 'Аренда ж.д.техники с экипажом и без него',
              name: 'arenda-zdtekhniki',
            },
          ]
        },
        {
          id: 5,
          title: 'Каталог',
          name: 'katalog',
          dropdownMenu: [
            {
              id: 51,
              title: 'Запчасти для ж.д. кранов',
              name: '',
            },
            {
              id: 52,
              title: 'Запчасти для автомотрис',
              name: '',
            },
            {
              id: 53,
              title: 'Железнодорожная техника б/у',
              name: 'prodazha-zdtekhniki',
            },
          ],
        },
        {
          id: 6,
          title: 'Контакты',
          name: 'kontakty',
          dropdownMenu: [],
        },
      ],
    };
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_variables.scss';

.header-area {

  background: #fff;
  border-radius: 0;
  border: 0;
  margin: 0;
  width: 100%;
  z-index: 9999;
  top: 0;
  box-shadow: 0 0 20px 0 rgba(21,47,95,0.2);

  .show {
      height: 80px;
      border-bottom: 1px solid transparent;
  }
}

.navbar-brand {
  margin-right: -25px;
  padding: 21px 15px;
  height: 60px;
  font-size: 22px;
}

.navbar-default .navbar-nav > .open > a,
.navbar-default .navbar-nav > .open > a:focus,
.navbar-default .navbar-nav > .open > a:hover {
    background-color: transparent;
}

.affix + .theme-bar,
.affix + .banner {
  margin-top: 65px;
}
</style>
