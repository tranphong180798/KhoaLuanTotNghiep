<template>
<div id="app" >
  <div class="body-wrapper "  api-logout="http://127.0.0.1:8000/api/account/logout">

    <!-- Begin Header Area -->
    <header>
      <!-- Begin Header Middle Area -->
      <div class="header-middle pl-sm-0 pr-sm-0 pl-xs-0 pr-xs-0 container">
        <div class="container">
          <div class="row">
            <!-- Begin Header Logo Area -->
            <div class="col-lg-3">
              <div class="logo pb-sm-30 pb-xs-30">
                <a href="/">
                  <img src="/images/new_logo2.png" alt="">
                </a>
              </div>
            </div>
            <!-- Header Logo Area End Here -->
            <!-- Begin Header Middle Right Area -->
            <div class="col-lg-9 pl-0 ml-sm-15 ml-xs-15">
              <!-- Begin Header Middle Searchbox Area -->
              <div class="hm-searchbox">
                <input type="text" id="search-input" placeholder="Enter your search key ...">
                <button class="li-btn" id="btn-search"><i class="fa fa-search"></i></button>
              </div>
              <!-- Header Middle Searchbox Area End Here -->
              <!-- Begin Header Middle Right Area -->
              <div class="header-middle-right">
                <ul class="hm-menu">
                  <!-- Begin Header Middle Wishlist Area -->
                  <li class="hm-wishlist">
                    <a onclick="startRecording()" style="border-radius: 55px" data-toggle="tooltip" data-placement="top" title="" data-original-title="Điều khiển bằng giọng nói">
                      <i class="fas fa-microphone"></i>
                    </a>
                  </li>
                  <!-- Header Middle Wishlist Area End Here -->
                  <!-- Begin Header Mini Cart Area -->
                  <li class="hm-minicart hide-elm" id="login-info">
                    <div class="hm-minicart-trigger">
                      <div class="item-icon"><img id="avatar" src="/images/menu/logo/avatar.jpg"></div>
                      <span id="display-name" class="item-text">Đoàn &nbsp;<i class="fas fa-angle-down"></i></span>
                    </div>
                    <span></span>
                    <div class="minicart">
                      <ul class="minicart-product-list">
                        <li>
                          <div class="minicart-product-details">
                            <h6><a href="/profile"><i style="color: blue" class="icon-menu-user fas fa-chalkboard-teacher"></i>Quản lý tài khoản</a></h6>
                          </div>
                        </li>
                        <li>
                          <div class="minicart-product-details">
                            <h6><a href="/new-res"><i style="color: greenyellow" class="icon-menu-user far fa-calendar-minus"></i>Thêm mới địa điểm</a></h6>
                          </div>
                        </li>
                        <li>
                          <div class="minicart-product-details">
                            <h6><a href="/admin"><i style="color: blueviolet" class="icon-menu-user far fa-calendar-minus"></i>Admin</a></h6>
                          </div>
                        </li>
                      </ul>
                      <div class="minicart-button" id="btn-logout">
                        <a class="li-button li-button-fullwidth li-button-red">
                          <span>Đăng xuất</span>
                        </a>
                      </div>
                    </div>
                  </li>
                  <!-- Header Mini Cart Area End Here -->
                </ul>
                <button class="btn btn-primary" id="btn-login-index">Đăng nhập</button>
              </div>
              <!-- Header Middle Right Area End Here -->
            </div>
            <!-- Header Middle Right Area End Here -->
          </div>
        </div>
      </div>
      <!-- Header Middle Area End Here -->
      <!-- Begin Header Bottom Area -->
      <div class="header-bottom  d-none d-lg-block d-xl-block sticky">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <!-- Begin Header Bottom Menu Area -->
              <div class="hb-menu">
                <nav style="display: block;">
                  <ul>
                    <li><a href="/more-res/open">Đang mở cửa</a></li>
                    <li><a href="/more-res/nearest">Gần nhất</a></li>
                    <li><a href="/more-res/suggest">Gợi ý</a>
                    </li>


                    <li>
                      <div class="form-inline">
                        <a class="mr-10" data-toggle="tooltip" data-placement="top" data-original-title="Việt Nam" href="http://127.0.0.1:8000/change-language/vi">
                          <img style="width: 34px; height: 34px" src="~/assets/images/vietnam.png">
                        </a>
                        <a data-toggle="tooltip" data-placement="top" data-original-title="English" href="http://127.0.0.1:8000/change-language/en">
                          <img style="width: 30px; height: 30px" src="~/assets/images/united-kingdom.png">
                        </a>
                      </div>

                    </li>
                    <li style="position: absolute;right: 0px; top: 4px">

                    </li>
                  </ul>
                </nav>
              </div>
              <!-- Header Bottom Menu Area End Here -->
            </div>
          </div>
        </div>
      </div>
      <!-- Header Bottom Area End Here -->
      <!-- Begin Mobile Menu Area -->
      <div class="mobile-menu-area d-lg-none d-xl-none col-12">
        <div class="container">
          <div class="row">
            <div class="mobile-menu">
            </div>
          </div>
        </div>
      </div>
      <!-- Mobile Menu Area End Here -->
    </header>

    <!-- Header Area End Here -->
    <!-- Begin Slider With Banner Area -->
    <div id="index-obj" class="slider-with-banner" api-get-nearest="/api/res/get-nearest" api-get-saved-res="http://127.0.0.1:8000/api/res/get-saved-res" api-get-suggest="http://127.0.0.1:8000/api/res/get-suggest">
      <div class="container">
        <div class="row">
          <!-- Begin Slider Area -->
          <div class="col-lg-12 col-md-12">
            <div class="slider-area">
              <div class="slider-active owl-carousel owl-loaded owl-drag">
                <!-- Begin Single Slide Area -->

                <!-- Single Slide Area End Here -->
                <!-- Begin Single Slide Area -->

                <!-- Single Slide Area End Here -->
                <!-- Begin Single Slide Area -->

                <!-- Single Slide Area End Here -->
                <div class="owl-stage-outer owl-height" style="height: 475px;"><div class="owl-stage" style="transform: translate3d(-3510px, 0px, 0px); transition: all 0.25s ease 0s; width: 8190px;"><div class="owl-item cloned" style="width: 1170px;"><div class="single-slide align-center-left animation-style-02 bg-2">
                  <div class="slider-progress"></div>
                  <div class="slider-content">
                    <h2>Ưu đãi cuối tuần</h2>
                    <div class="default-btn slide-btn">
                      <a class="links" href="shop-left-sidebar.html">XEM NGAY</a>
                    </div>
                  </div>
                </div></div><div class="owl-item cloned" style="width: 1170px;"><div class="single-slide align-center-left animation-style-01 bg-3">
                  <div class="slider-progress"></div>
                  <div class="slider-content">
                    <h2>Thực đơn đặc biệt ngày cuối tuần</h2>
                    <div class="default-btn slide-btn">
                      <a class="links" href="shop-left-sidebar.html">XEM NGAY</a>
                    </div>
                  </div>
                </div></div><div class="owl-item" style="width: 1170px;"><div class="single-slide align-center-left  animation-style-01 bg-1">
                  <div class="slider-progress"></div>
                  <div class="slider-content">
                    <h2>Khuyến mãi 50% ngay hôm nay</h2>
                    <div class="default-btn slide-btn">
                      <a class="links" href="shop-left-sidebar.html">XEM NGAY</a>
                    </div>
                  </div>
                </div></div><div class="owl-item active" style="width: 1170px;"><div class="single-slide align-center-left animation-style-02 bg-2">
                  <div class="slider-progress"></div>
                  <div class="slider-content">
                    <h2>Ưu đãi cuối tuần</h2>
                    <div class="default-btn slide-btn">
                      <a class="links" href="shop-left-sidebar.html">XEM NGAY</a>
                    </div>
                  </div>
                </div></div><div class="owl-item" style="width: 1170px;"><div class="single-slide align-center-left animation-style-01 bg-3">
                  <div class="slider-progress"></div>
                  <div class="slider-content">
                    <h2>Thực đơn đặc biệt ngày cuối tuần</h2>
                    <div class="default-btn slide-btn">
                      <a class="links" href="shop-left-sidebar.html">XEM NGAY</a>
                    </div>
                  </div>
                </div></div><div class="owl-item cloned" style="width: 1170px;"><div class="single-slide align-center-left  animation-style-01 bg-1">
                  <div class="slider-progress"></div>
                  <div class="slider-content">
                    <h2>Khuyến mãi 50% ngay hôm nay</h2>
                    <div class="default-btn slide-btn">
                      <a class="links" href="shop-left-sidebar.html">XEM NGAY</a>
                    </div>
                  </div>
                </div></div><div class="owl-item cloned" style="width: 1170px;"><div class="single-slide align-center-left animation-style-02 bg-2">
                  <div class="slider-progress"></div>
                  <div class="slider-content">
                    <h2>Ưu đãi cuối tuần</h2>
                    <div class="default-btn slide-btn">
                      <a class="links" href="shop-left-sidebar.html">XEM NGAY</a>
                    </div>
                  </div>
                </div></div></div></div><div class="owl-nav"><div class="owl-prev"><i class="fa fa-angle-left"></i></div><div class="owl-next"><i class="fa fa-angle-right"></i></div></div><div class="owl-dots"><div class="owl-dot"><span></span></div><div class="owl-dot active"><span></span></div><div class="owl-dot"><span></span></div></div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Slider With Banner Area End Here -->
    <!-- Begin suggested Product Area -->
    <section class="product-area li-laptop-product pt-60 pb-45">
      <div class="container">
        <div class="row">
          <!-- Begin Li's Section Area -->
          <div class="col-lg-12">
            <div class="li-section-title">
              <h2>
                <span>Gợi ý</span>
              </h2>
            </div>
            <div class="product-container">
              <div class="row" id="suggested-res-list"></div>
            </div>

          </div>
          <!-- Li's Section Area End Here -->
        </div>
      </div>
    </section>
   <div style="margin:0 auto" class="container">
    <v-row  >
      <v-col >
        <v-row class="mt-4 ml-1" >
          <v-row v-show="!restaurants" class="">
            <v-skeleton-loader class="ma-6 ml-5" width="275" type="card"></v-skeleton-loader>
            <v-skeleton-loader class="ma-6 ml-5" width="275" type="card"></v-skeleton-loader>
            <v-skeleton-loader class="ma-6 ml-5" width="275" type="card"></v-skeleton-loader>

            <v-skeleton-loader class="ma-6 ml-5" width="275" type="card"></v-skeleton-loader>
            <v-skeleton-loader class="ma-6 ml-5" width="275" type="card"></v-skeleton-loader>
            <v-skeleton-loader class="ma-6 ml-5" width="275" type="card"></v-skeleton-loader>
          </v-row>
          <v-card
            style="margin-top: 60px;position: relative"
            v-for="(restaurant, index) in restaurants"
            :key="index"
            elevation="10"
            color="white"
            class="ma-6 ml-5"
            width="275"
            height="450"
          >
            <RestaurantDetail :restaurant="restaurant"  />
          </v-card>

        </v-row>
      </v-col>
    </v-row>
   </div>
    <!-- suggested Product End Here -->
    <!-- Li's Static Banner Area End Here -->
    <!-- Begin nearest Product Area -->
    <section class="product-area li-laptop-product pt-60 pb-45">
      <div class="container">
        <div class="row">
          <!-- Begin Li's Section Area -->
          <div class="col-lg-12">
            <div class="li-section-title">
              <h2>
                <span>Gần nhất</span>
              </h2>
            </div>
            <div class="product-container">
              <div class="row" id="nearest-list">

              </div>
            </div>

          </div>
          <!-- Li's Section Area End Here -->
        </div>
      </div>
    </section>
    <div id="map" style="overflow: hidden;height: 275px;max-width: 1135px; margin-top: 150px;margin: auto;
    border-radius: 10px;"></div>
    <!-- nearest Product End Here -->
    <!-- Begin banner -->
    <div class="li-static-home" style="margin-top: 20px">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <!-- Begin Li's Static Home Image Area -->
            <div class="li-static-home-image"></div>
            <!-- Li's Static Home Image Area End Here -->
            <!-- Begin Li's Static Home Content Area -->
            <div class="li-static-home-content">
              <p>Khuyến mãi <span>20%</span>mỗi cuối tuần</p>
              <h2>Chuối nhà hàng</h2>
              <h2>2 O'CLOCK</h2>
              <p class="schedule">
                Giá chỉ từ
                <span> 50.000 đ</span>
              </p>
              <div class="default-btn">
                <a href="shop-left-sidebar.html" class="links">Xem ngay</a>
              </div>
            </div>
            <!-- Li's Static Home Content Area End Here -->
          </div>
        </div>
      </div>
    </div>
    <!-- banner End Here -->
    <!-- Begin saved Product Area -->
    <section class="product-area li-laptop-product pt-60 pb-45">
      <div class="container">
        <div class="row">
          <!-- Begin Li's Section Area -->
          <div class="col-lg-12">
            <div class="li-section-title">
              <h2>
                <span>Đã lưu</span>
              </h2>
            </div>
            <div class="product-container">
              <div class="row" id="saved-res-list">

              </div>
            </div>

          </div>
          <!-- Li's Section Area End Here -->
        </div>
      </div>
    </section>
    <!-- saved ProductEnd Here -->
    <!-- Begin new Products Area -->
    <section class="product-area li-laptop-product pt-60 pb-45">
      <div class="container">
        <div class="row">
          <!-- Begin Li's Section Area -->
          <div class="col-lg-12">
            <div class="li-section-title">
              <h2>
                <span>Mới nhất</span>
              </h2>
            </div>
            <div style="margin:0 auto" class="container">
              <v-row  >
                <v-col >
                  <v-row class="mt-4 ml-1" >
                    <v-row v-show="!restaurants" class="">
                      <v-skeleton-loader class="ma-6 ml-5" width="275" type="card"></v-skeleton-loader>
                      <v-skeleton-loader class="ma-6 ml-5" width="275" type="card"></v-skeleton-loader>
                      <v-skeleton-loader class="ma-6 ml-5" width="275" type="card"></v-skeleton-loader>

                      <v-skeleton-loader class="ma-6 ml-5" width="275" type="card"></v-skeleton-loader>
                      <v-skeleton-loader class="ma-6 ml-5" width="275" type="card"></v-skeleton-loader>
                      <v-skeleton-loader class="ma-6 ml-5" width="275" type="card"></v-skeleton-loader>
                    </v-row>
                    <v-card
                      style="margin-top: 60px;position: relative"
                      v-for="(restaurant, index) in restaurants"
                      :key="index"
                      elevation="10"
                      color="white"
                      class="ma-6 ml-5"
                      width="275"
                      height="450"
                    >
                      <RestaurantDetail :restaurant="restaurant"  />
                    </v-card>

                  </v-row>
                </v-col>
              </v-row>
            </div>

          </div>
          <!-- Li's Section Area End Here -->
        </div>
      </div>
    </section>



    <!-- Li's Trendding Products Area End Here -->
    <!-- Begin Footer Area -->

    <div class="system_message">
      <div class="title"></div>
    </div>

    <!-- Model more comment picture -->
    <div id="commentPictureModel" class="modal fade modal-wrapper" tabindex="-1" role="dialog">
      <div class="modal-dialog  modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-body">
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
              <ol class="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" class=""></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
              </ol>
              <div class="carousel-inner" id="list-comment-picture">









              </div>
              <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <i style="font-size: x-large" class="fas fa-angle-left"></i>
                <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <i style="font-size: x-large" class="fas fa-angle-right"></i>
                <span class="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Quick View | Modal Area End Here -->

  </div>

</div>
</template>

<script>
import RestaurantDetail from "../components/RestaurantDetail";
export default {
  components: {RestaurantDetail},
  created() {
    console.log(1);
    this.$axios.post('http://127.0.0.1:8000/api/res/get-suggest').then((res)=>{
      console.log(res.data.data);
      this.restaurants=res.data.data;
    });
    this.$axios.get('http://127.0.0.1:8000/api/newListRestaurant').then((res)=>{
          console.log(res.data)
    });
  },
  data(){
    return {
      restaurants:[],
    }
  }
}
</script>
