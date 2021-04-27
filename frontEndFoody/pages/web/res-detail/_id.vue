<template>
  <div id="detail-page"
       >
    <div class="breadcrumb-area">
      <div class="container">
        <div class="breadcrumb-content">
          <ul>
            <li><a href="index.html">Home</a></li>
            <li class="active">Single Product</li>
          </ul>
        </div>
      </div>
    </div>
    <!-- Li's Breadcrumb Area End Here -->
    <!-- content-wraper start -->
    <div class="content-wraper my-card">
      <div class="container">
        <div class="row single-product-area">
          <div class="col-lg-5 col-md-6">
            <div class="lg-image">

              <a v-if="res_detail.res.IsFoody" class="popup-img venobox vbox-item" :href="res_detail.res.PhotoUrl"
                 data-gall="myGallery">
                <img id="detail-product-img" :src="res_detail.res.PhotoUrl" alt="product image">
              </a>

              <a v-else class="popup-img venobox vbox-item" :href="res_detail.res.PhotoUrl"
                 data-gall="myGallery">
                <img id="detail-product-img" :src="res_detail.res.PhotoUrl" alt="product image">
              </a>
            </div>
          </div>

          <div class="col-lg-7 col-md-6">
            <div class="product-details-view-content pt-20">
              <div class="product-info">
                                <span
                                  class="product-details-ref">{{this.res_detail.res.restaurant_detail.category ? this.res_detail.res.restaurant_detail : ""}}</span>
                <h2 class="pl-15"
                    style="font-size: 25px !important; margin: 7px 0px 0px -17px;">{{res_detail.res.Name}}</h2>
                <div class="price-box pt-20">
                  <div class="row">
                    <div class="col-sm-1 haha-custom">
                      <span class="rating-point-main">{{res_detail.res.AvgRating}}</span>
                    </div>
                    <div class="col-sm-11 form-inline">
                      <div class="mr-20">
                        <p class="point-rating-header">{{res_detail.res.QualityRating ? res_detail.res.AvgRating :"" }}</p>
                        <p style="margin-top: -14px; color: #898989">Chất lượng</p>
                      </div>
                      <div class="mr-20" style="width: 58px">
                        <p class="point-rating-header">{{res_detail.res.ServiceRating ? res_detail.res.AvgRating : ""}}</p>
                        <p style="margin-top: -14px; color: #898989">Dịch vụ</p>
                      </div>
                      <div class="mr-20" style="width: 58px">
                        <p class="point-rating-header">{{res_detail.res.PriceRating ? res_detail.res.AvgRating : ""}}</p>
                        <p style="margin-top: -14px; color: #898989">Giá cả</p>
                      </div>
                      <div class="mr-20" style="width: 58px">
                        <p class="point-rating-header">{{res_detail.res.PositionRating ? res_detail.res.AvgRating : ""}}</p>
                        <p style="margin-top: -14px; color: #898989">Vị trí</p>
                      </div>
                      <div class="mr-20" style="width: 72px">
                        <p class="point-rating-header">{{res_detail.res.SpaceRating ? res_detail.res.AvgRating : ""}}</p>
                        <p style="margin-top: -14px; color: #898989">Không gian</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="product-desc">
                  <div class="mb-5">
                    <i class="mr-10 fas fa-location-arrow"></i>{{res_detail.res.Address}}
                  </div>
                  <div class="mb-5">
                    <i class="mr-10 fas fa-clock"></i>{{res_detail.res.restaurant_detail.open_time}}
                  </div>
                  <div class="mb-5">
                    <i class=" mr-10 fas fa-tags"></i>{{res_detail.res.restaurant_detail.price}}
                  </div>
                </div>
                <div class="product-additional-info mb-20">
                  <a class="wishlist-btn" style="color: blue" data-toggle="modal"
                     data-target="#comment" href="wishlist.html">
                    <i class="fa fa-comment"></i>Bình luận</a>
                  <a id="btn-save" class="wishlist-btn  ml-20">
                    <i class="fa fa-bookmark"></i>Lưu
                  </a>
                  <div class="product-social-sharing pt-15">

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


    <!-- content-wraper end -->
    <!-- Begin Product Area -->
    <div class="product-area pt-35">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="li-product-tab">
              <ul class="nav li-product-menu">
                <li><a class="active" data-toggle="tab" href="#reviews"><span>Reviews</span></a></li>
                <li><a data-toggle="tab" href="#description"><span>Description</span></a>
                </li>
              </ul>
            </div>
            <!-- Begin Li's Tab Menu Content Area -->
          </div>
        </div>

        <div class="tab-content row">
          <div class="col-lg-9">
            <div id="description" class="tab-pane" role="tabpanel">
              <div class="product-description">
                <span>The best is yet to come! Give your walls a voice with a framed poster. This aesthethic, optimistic poster will look great in your desk or in an open-space office. Painted wooden frame with passe-partout for more depth.</span>
              </div>
            </div>
            <div id="product-details" class="tab-pane" role="tabpanel">
              <div class="product-details-manufacturer">
                <a href="#">
                  <img src="/images/product-details/1.jpg" alt="Product Manufacturer Image">
                </a>
                <p><span>Reference</span> demo_7</p>
                <p><span>Reference</span> demo_7</p>
              </div>
            </div>

            <div id="reviews" class="tab-pane active show" role="tabpanel">
              <div id="review-list" class="product-reviews">

                <div class="my-card comment-panel" v-for="(comment,index) in res_detail.comments.data" :key="index">
                  <div class="comment-header">
                    <div class="row">
                      <div class="mt-10 mb-10 ml-20 mr-10">
                        <img class="avatar" :src="comment.customer.Avatar ? (comment.customer.IsFoody ? comment.customer.Avatar : '/'.$comment.customer.Avatar) : '/images/menu/logo/avatar.jpg'">
                      </div>
                      <div class="mt-10">
                        <p class="comment-user"
                           style="margin-bottom: -5px !important;">{{comment.customer.DisplayName}}</p>
                        <p class="comment-time">{{comment.CreatedOnTimeDiff}}</p>
                      </div>
                      <p class="rating-point">{{comment.AvgRating}}</p>
                    </div>
                  </div>

                  <div class="my-comment-body">
                    <div class="comment-content">
                      <p style="color: black; margin-bottom: 0px !important;">{{comment.Description}}
                      </p>
                    </div>
                    <div class="comment-picture">
                      <div class="row" style="padding: 20px">

                        <div class="col-sm-4"
                             style="text-align: center; padding: 2px !important;"
                            v-for="(pic,index) in comment.comment_pictures" :key="index"
                             v-if="index==2&&comment.comment_pictures >3"
                        >
                          <p>+{{comment.comment_pictures - 3}}</p>
                          <img class="comment-image last-comment-image"
                               :src="pic.IsFoody ? pic.Url : '/'+pic.Url">
<!--                               is-foody="{{picIsFoody}}"-->
<!--                               urls="{{json_encode($comment['comment_pictures'])}}"-->

                        </div>
<!--                        <div class="col-sm-4"-->
<!--                             style="text-align: center; padding: 2px !important; ">-->
<!--                          <img class="comment-image " style="text-align: center"-->
<!--                               :src="pic.IsFoody ? pic.Url : '/'+pic.Url">-->
<!--&lt;!&ndash;                               is-foody="{{$pic['IsFoody']}}"&ndash;&gt;-->
<!--&lt;!&ndash;                               urls="{{json_encode($comment['comment_pictures'])}}"&ndash;&gt;-->
<!--&lt;!&ndash;                               src="{{$pic['IsFoody'] ? $pic['Url'] : '/'.$pic['Url']}}">&ndash;&gt;-->
<!--                        </div>-->
                      </div>
                    </div>
                  </div>
                  <div class="comment-footer" >
                    <div class="row mb-5" >
                      <div class="mr-20">
                        <i style="color: blue" class="fa fa-heart mr-5"></i><span
                        >{{comment.TotalLike}} </span>người
                        đã thích
                      </div>
                    </div>
                  </div>
                    <hr class="my-hr">
                    <div class="row mb-5 action" >
                      <div class="mr-20 like" style="margin-left: 35px;margin-top: 10px" >
                        <i class="fa fa-heart mr-5"></i><span>Like</span>
                      </div>
                      <div class="mr-20 btn-report-comment"  style="margin-left: 35px;margin-top: 10px">
                        <a data-toggle="modal" data-target="#report">
                          <i class="fa fa-exclamation-triangle report-btn mr-5"></i>
                          <span>report</span>
                        </a>
                      </div>
                    </div>

<!--                @endforeach-->
<!--                {{&#45;&#45;                                <div  id="load-more" class="see-more"><a>Tải nhiều hơn<i&#45;&#45;}}-->
<!--                {{&#45;&#45;                                            class="ml-5 fas fa-angle-double-down"></i></a></div>&#45;&#45;}}-->
<!--                <div-->
<!--                  style="text-align: center">{{$comments->links('Web.Pagination.comment-pagination')}}</div>-->
<!--              </div>-->
<!--            </div>-->

                </div>
              </div>
            </div>


          </div>

          <div class="col-lg-3">
            <div class="my-card mt-25 rating-card" style="box-shadow: 0px 0px 10px 0px #4285f4 !important;">
              <div>
                <p style="color: black!important; text-align: center; font-size: initial"><b>{{res_detail.res.TotalReviews}} </b>người
                  dùng đã chia sẻ</p>
              </div>
              <hr style="margin: 10px 0px">
              <div class="row">
                <div class="col-6" style="padding-right: 5px !important; text-align: right">
                  <p style="color: green" class="point_rating_detail">25</p>
                  <p style="color: red" class="point_rating_detail">7</p>
                  <p style="color: blue" class="point_rating_detail">7</p>
                  <p style="color: purple" class="point_rating_detail">2</p>
                </div>
                <div class="col-6" style=" padding-left: 5px !important; text-align: left">
                  <p>Tuyệt vời</p>
                  <p>Khá tốt</p>
                  <p>Trung bình</p>
                  <p>Kém</p>
                </div>
              </div>
              <hr style="margin: 10px 0px">
              <div>
                <div class="row">
                  <div class="col-4" style="padding-right: 5px !important; text-align: right">
                    <p class="mbI-0" style="color: black!important;">Vị trí</p>
                  </div>
                  <div class="col-6" style=" padding-left: 5px !important; text-align: left">
                    <div class="progress" style="border-radius: 0; height: 15px; margin-top: 3px">
                      <div class="progress-bar" role="progressbar" aria-valuenow="70"
                           aria-valuemin="10" aria-valuemax="100" :style="widthNe()">
                        <span class="sr-only">70% Complete</span>
                      </div>
                    </div>
                  </div>
                  <div class="col-2 plI-0 prI-0">{{res_detail.res.PostionRating ? res_detail.res.AvgRating : ""}}</div>
                </div>
                <div class="row">
                  <div class="col-4" style="padding-right: 5px !important; text-align: right">
                    <p class="mbI-0" style="color: black!important;">Giá cả</p>
                  </div>
                  <div class="col-6" style=" padding-left: 5px !important; text-align: left">
                    <div class="progress" style="border-radius: 0; height: 15px; margin-top: 3px">
                      <div class="progress-bar" role="progressbar" aria-valuenow="70"
                           aria-valuemin="10" aria-valuemax="100" :style="widthNe()">
                        <span class="sr-only">70% Complete</span>
                      </div>
                    </div>
                  </div>
                  <div class="col-2 plI-0 prI-0">{{res_detail.res.PriceRating ? res_detail.res.AvgRating : ""}}</div>
                </div>
                <div class="row">
                  <div class="col-4" style="padding-right: 5px !important; text-align: right">
                    <p class="mbI-0" style="color: black!important;">Chất lượng</p>
                  </div>
                  <div class="col-6" style=" padding-left: 5px !important; text-align: left">
                    <div class="progress" style="border-radius: 0; height: 15px; margin-top: 3px">
                      <div class="progress-bar" role="progressbar" aria-valuenow="70"
                           aria-valuemin="10" aria-valuemax="100" :style="widthNe()">
                        <span class="sr-only">70% Complete</span>
                      </div>
                    </div>
                  </div>
                  <div class="col-2 plI-0 prI-0">{{res_detail.res.QualityRating ? res_detail.res.AvgRating : ""}}</div>
                </div>
                <div class="row">
                  <div class="col-4" style="padding-right: 5px !important; text-align: right">
                    <p class="mbI-0" style="color: black!important;">Dịch vụ</p>
                  </div>
                  <div class="col-6" style=" padding-left: 5px !important; text-align: left">
                    <div class="progress" style="border-radius: 0; height: 15px; margin-top: 3px">
                      <div class="progress-bar" role="progressbar" aria-valuenow="70"
                           aria-valuemin="10" aria-valuemax="100" style="widthNe()">
                        <span class="sr-only">70% Complete</span>
                      </div>
                    </div>
                  </div>
                  <div class="col-2 plI-0 prI-0">{{res_detail.res.ServiceRating ? res_detail.res.AvgRating : ""}}</div>
                </div>
                <div class="row">
                  <div class="col-4" style="padding-right: 5px !important; text-align: right">
                    <p class="mbI-0" style="color: black!important;">Không gian</p>
                  </div>
                  <div class="col-6" style=" padding-left: 5px !important; text-align: left">
                    <div class="progress" style="border-radius: 0; height: 15px; margin-top: 3px">
                      <div class="progress-bar" role="progressbar" aria-valuenow="70"
                           aria-valuemin="10" aria-valuemax="100" style="widthNe()">
                        <span class="sr-only">70% Complete</span>
                      </div>
                    </div>
                  </div>
                  <div class="col-2 plI-0 prI-0">{{res_detail.res.SpaceRating ? res_detail.res.SpaceRating : ""}}</div>
                </div>
              </div>
              <hr style="margin: 10px 0px">
              <div style="text-align: center">
                <b style="font-size: x-large; color: #03ae03">{{res_detail.res.AvgRating}}</b> điểm
              </div>
              <div>
                <button style="margin-left: 0px; width: 100%" class="btn btn-primary"><a
                  data-toggle="modal" data-target="#comment">Viết bình luận</a></button>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>


    <!-- Model comment -->
    <div class="modal fade modal-wrapper" id="comment">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-body">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
            <div class="modal-inner-area row">
              <div class="col-lg-5 col-md-6 col-sm-6">
                <!-- Product Details Left -->
                <div class="product-details-left">
                  <div class="product-details-images slider-navigation-1">
                    <div class="lg-image">

                      <img v-if="res_detail.res.IsFoody" src="res_detail.res.PhotoUrl" alt="product image">

                      <img v-else :src="res_detail.res.PhotoUrl" alt="product image">

                    </div>
                  </div>
                  <div style="text-align: center; margin-top: 10px">
                    <p style="font-size: large; font-weight: bold; color: chocolate">Đánh giá</p>
                  </div>
                  <div class="row">
                    <div class="col-4" style="padding-right: 5px !important; text-align: right">
                      <p>Vị trí</p>
                      <p>Giá cả</p>
                      <p>Chất lượng</p>
                      <p>Dịch vụ</p>
                      <p>Không gian</p>
                    </div>
                    <div class="col-6" style=" padding-left: 5px !important; text-align: left">
                      <input id="PositionRating" class="custom-range" type="range" min="1" max="10">
                      <input id="PriceRating" class="custom-range" type="range" min="1" max="10">
                      <input id="QualityRating" class="custom-range" type="range" min="1" max="10">
                      <input id="ServiceRating" class="custom-range" type="range" min="1" max="10">
                      <input id="SpaceRating" class="custom-range" type="range" min="1" max="10">
                    </div>
                    <div class="col-2" style="padding-left: 5px !important; text-align: left">
                      <p id="PositionRatingLabel" style="color: #9c25b9!important;">5</p>
                      <p id="PriceRatingLabel" style="color: #00c851 !important;">5</p>
                      <p id="QualityRatingLabel" style="color: black!important;">5</p>
                      <p id="ServiceRatingLabel" style="color: red!important;">5</p>
                      <p id="SpaceRatingLabel" style="color: red!important;">5</p>
                    </div>
                  </div>
                  <div style="text-align: center;">
                    <p style="font-size: large; font-weight: bold">Trung bình:
                      <span id="AvgRatingLabel"
                            style="margin-left:5px; font-size: large; font-weight: bold; color: red">5</span>
                    </p>
                  </div>
                </div>
                <!--// Product Details Left -->
              </div>

              <div class="col-lg-7 col-md-6 col-sm-6">
                <div class="product-details-view-content">
                  <div class="product-info">
                    <h2>{{res_detail.res.Name}}</h2>
                    <span class="product-details-ref"><i class="mr-10 fas fa-location-arrow"></i>{{res_detail.res.Address}}</span>
                    <div class="product-desc">
                                        <textarea id="discription_ta" placeholder="Nhập bình luận">
                                        </textarea>
                    </div>
                    <p>Chọn hình</p>
                    <div class="row">
                      <div class="row ml-10" id="temp-images">

                      </div>
                      <div style="margin-left: 14px" class="select-img-comment"><input id="image"
                                                                                       style="margin-top: -5px; opacity: 0; height: 140px" type="file"><i
                        id="add-img-comment" class="fas fa-plus"></i></div>
                    </div>
                    <div>
                      <button class="btn btn-success" id="btn-create-comment">Gửi
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


    <div style="margin-top: 100px" id="report" class="modal fade modal-wrapper" tabindex="-1" role="dialog">
      <div class="modal-dialog  modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Báo cáo <i style="color: red" class="fa fa-exclamation-triangle"></i></h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <b>Nội dung: </b>
            <textarea id="ta-report" placeholder="Nhập nội dung"></textarea>
            <button id="btn-submit-report" class="btn btn-success">Gửi</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData ({store, route}) {
    await store.dispatch("getRestaurantDetail",route.params.id);
  },
  computed:{
    res_detail () {
      return this.$store.state.res_detail ?  this.$store.state.res_detail : {} ;
    }
  },
  methods:{
    widthNe(){

      return 'width:'+this.res_detail.res.PostionRating ?? this.res_detail.res.AvgRating *10+'%';
    },
  },




}
</script>

<style scoped>

</style>
