<template>
<div>
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
          <v-row v-show="!restaurantsSuggest" class="">
            <v-skeleton-loader class="ma-6 ml-5" width="275" type="card"></v-skeleton-loader>
            <v-skeleton-loader class="ma-6 ml-5" width="275" type="card"></v-skeleton-loader>
            <v-skeleton-loader class="ma-6 ml-5" width="275" type="card"></v-skeleton-loader>

            <v-skeleton-loader class="ma-6 ml-5" width="275" type="card"></v-skeleton-loader>
            <v-skeleton-loader class="ma-6 ml-5" width="275" type="card"></v-skeleton-loader>
            <v-skeleton-loader class="ma-6 ml-5" width="275" type="card"></v-skeleton-loader>
          </v-row>
          <v-card
            style="margin-top: 60px;position: relative"
            v-for="(restaurant, index) in restaurantsSuggest"
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
                  <v-row v-show="!restaurantsSuggest" class="">
                    <v-skeleton-loader class="ma-6 ml-5" width="275" type="card"></v-skeleton-loader>
                    <v-skeleton-loader class="ma-6 ml-5" width="275" type="card"></v-skeleton-loader>
                    <v-skeleton-loader class="ma-6 ml-5" width="275" type="card"></v-skeleton-loader>

                    <v-skeleton-loader class="ma-6 ml-5" width="275" type="card"></v-skeleton-loader>
                    <v-skeleton-loader class="ma-6 ml-5" width="275" type="card"></v-skeleton-loader>
                    <v-skeleton-loader class="ma-6 ml-5" width="275" type="card"></v-skeleton-loader>
                  </v-row>
                  <v-card
                    style="margin-top: 60px;position: relative"
                    v-for="(restaurant, index) in restaurantsNew"
                    :key="index"
                    elevation="10"
                    color="white"
                    class="ma-6 ml-5"
                    width="275"
                    height="470"
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

          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import RestaurantDetail from "../components/RestaurantDetail";
export default {
  components: {RestaurantDetail},
  created() {
    this.$axios.post('http://127.0.0.1:8000/api/res/get-suggest').then((res)=>{
      this.restaurantsSuggest=res.data.data;
      this.$store.commit("setRestaurantsSuggest",this.restaurantsSuggest)
    });
    this.$axios.get('http://127.0.0.1:8000/api/newListRestaurant').then((res)=>{
      this.restaurantsNew=res.data.data;
      this.$store.commit("setRestaurantNew", this.restaurantsNew)
    });
  },
  data(){
    return {
      restaurantsSuggest:[],
      restaurantsNew: []
    }
  }
}
</script>
