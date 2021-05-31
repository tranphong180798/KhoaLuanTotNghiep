<template>
  <div id="objProfile">
    <div id="accordion" style="margin:0px 12px 20px 12px">
      <div class="card">
        <div id="headingOne">
          <h5 class="mb-0">
            <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne"
                    aria-expanded="true" aria-controls="collapseOne">
              <i class="fas fa-bars"></i>
            </button>
          </h5>
        </div>

        <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
          <div class="card-body" style="padding: 0.25px">
            <ul class="menu-collap">
              <li><a href="#collection" data-toggle="tab" class="mb-2">
                <i style="color: blue" class="mr-10 fa fa-history" aria-hidden="true"></i>Bộ sưu tập
                <i class="fas fa-angle-right arrow-menu-left"></i>
              </a>
              </li>
              <li><a href="#saved" data-toggle="tab" class="mb-2">
                <i style="color: red" class="mr-10 fas fa-save"></i>Nhà hàng đã lưu
                <i class="fas fa-angle-right arrow-menu-left"></i></a></li>
              <li><a href="#owner-res" data-toggle="tab" class="mb-2">
                <i style="color: lawngreen" class="mr-10 fas fa-location-arrow"></i>Địa điểm của bạn
                <i class="fas fa-angle-right arrow-menu-left"></i></a></li>
              <li><a href="#profile" data-toggle="tab" class="mb-2">
                <i style="color: purple" class="mr-10 fas fa-user"></i>Thông tin cá nhân
                <i class="fas fa-angle-right arrow-menu-left"></i></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="row" style="padding: 0px 20px">
      <div id="menu-left" class="col-md-4 col-lg-3">
        <section id="menu-left-panel" is-hidden="yes">
          <!-- Card -->
          <div class="card booking-card card-menu-left" style="width: 18rem;">
            <!-- Card content -->
            <div class="card-body">

              <!-- Title -->
              <div class="row">
                <div class="ml-10 mr-10">
                  <img class="avatar" src="images/Screenshot_50.png">
                </div>
                <div style="padding: 8px 0px">
                  <h5 class="card-title font-weight-bold"><a>discover</a></h5>
                </div>
              </div>
              <!-- Data -->
              <ul class="menu-sidebar-custom nav nav-tabs" style="border-bottom: none">
                <li><a href="#collection" data-toggle="tab" class="mb-2">
                  <i style="color: blue" class="mr-10 fa fa-history" aria-hidden="true"></i>collection
                  <i class="fas fa-angle-right arrow-menu-left"></i>
                </a>
                </li>
                <li><a href="#saved" data-toggle="tab" class="mb-2">
                  <i style="color: red" class="mr-10 fas fa-save"></i>saved
                  <i class="fas fa-angle-right arrow-menu-left"></i></a></li>
                <li><a href="#owner-res" data-toggle="tab" class="mb-2">
                  <i style="color: lawngreen" class="mr-10 fas fa-location-arrow"></i>own_res
                  <i class="fas fa-angle-right arrow-menu-left"></i></a></li>
                <li><a href="#profile" data-toggle="tab" class="mb-2">
                  <i style="color: purple" class="mr-10 fas fa-user"></i>info
                  <i class="fas fa-angle-right arrow-menu-left"></i></a>
                </li>
              </ul>

              <!-- Text -->
            </div>

          </div>
          <!-- Card -->

        </section>
      </div>
      <div class="col-md-8 col-lg-9 tab-content">
        <div id="collection" class="tab-pane fade in active">
          <div class="row" id="collection-list">
            <div class="saved-res">
              <section>
                <img class="comment-image"
                     src="https://mdbootstrap.com/img/Photos/Horizontal/Food/8-col/img (5).jpg">
              </section>
            </div>
            <div class="saved-res">
              <section>
                <img class="comment-image"
                     src="https://mdbootstrap.com/img/Photos/Horizontal/Food/8-col/img (5).jpg">
              </section>
            </div>
            <div class="saved-res">
              <section>
                <img class="comment-image"
                     src="https://mdbootstrap.com/img/Photos/Horizontal/Food/8-col/img (5).jpg">
              </section>
            </div>
            <div class="saved-res">
              <section>
                <img class="comment-image"
                     src="https://mdbootstrap.com/img/Photos/Horizontal/Food/8-col/img (5).jpg">
              </section>
            </div>
            <div class="saved-res">
              <section>
                <img class="comment-image"
                     src="https://mdbootstrap.com/img/Photos/Horizontal/Food/8-col/img (5).jpg">
              </section>
            </div>
          </div>
        </div>
        <div id="saved" style="padding-left: 10px" class="tab-pane fade">
          <div class="row" id="saved-list">
            <div class="saved-res">
              <section>
                <div class="card booking-card" style="max-width: 22rem;">
                  <div class="view overlay"><img
                    src="https://mdbootstrap.com/img/Photos/Horizontal/Food/8-col/img (5).jpg"
                    alt="Card image cap" class="card-img-top"> <a href="#!">
                    <div class="mask rgba-white-slight waves-effect waves-light"></div>
                  </a></div>
                  <div class="card-body"><h4 class="card-title font-weight-bold"><a href="#">Texas
                    Chicken</a>
                  </h4>
                    <ul class="list-unstyled list-inline rating mb-0">
                      <li class="list-inline-item mr-0"><i class="fas fa-star amber-text"></i>
                      </li>
                      <li class="list-inline-item mr-0"><i class="fas fa-star amber-text"></i>
                      </li>
                      <li class="list-inline-item mr-0"><i class="fas fa-star amber-text"></i>
                      </li>
                      <li class="list-inline-item mr-0"><i class="fas fa-star amber-text"></i>
                      </li>
                      <li class="list-inline-item"><i class="fas fa-star-half-alt amber-text"></i>
                      </li>
                      <li class="list-inline-item"><p class="text-muted">4.5 (413)</p></li>
                    </ul>
                    <a class="mb-2"><i class="fas fa-map-marker-alt"></i>&nbsp; 55 Đặng Thùy Trâm,
                      quận....</a>
                    <p class="card-text"></p>
                  </div>
                </div>
              </section>
            </div>
            <div class="saved-res">
              <section>
                <div class="card booking-card" style="max-width: 22rem;">
                  <div class="view overlay"><img
                    src="https://mdbootstrap.com/img/Photos/Horizontal/Food/8-col/img (5).jpg"
                    alt="Card image cap" class="card-img-top"> <a href="#!">
                    <div class="mask rgba-white-slight waves-effect waves-light"></div>
                  </a></div>
                  <div class="card-body"><h4 class="card-title font-weight-bold"><a>Texas Chicken</a>
                  </h4>
                    <ul class="list-unstyled list-inline rating mb-0">
                      <li class="list-inline-item mr-0"><i class="fas fa-star amber-text"></i>
                      </li>
                      <li class="list-inline-item mr-0"><i class="fas fa-star amber-text"></i>
                      </li>
                      <li class="list-inline-item mr-0"><i class="fas fa-star amber-text"></i>
                      </li>
                      <li class="list-inline-item mr-0"><i class="fas fa-star amber-text"></i>
                      </li>
                      <li class="list-inline-item"><i class="fas fa-star-half-alt amber-text"></i>
                      </li>
                      <li class="list-inline-item"><p class="text-muted">4.5 (413)</p></li>
                    </ul>
                    <a class="mb-2"><i class="fas fa-map-marker-alt"></i>&nbsp; 55 Đặng Thùy Trâm,
                      quận....</a>
                    <p class="card-text"></p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
        <div id="owner-res" style="padding-left: 10px" class="tab-pane fade">
          <div class="row" id="owner-res-list">
          </div>
        </div>
        <div id="profile" style="padding-left: 10px" class="tab-pane fade">
          <div class="mb-20">
            <h4>THÔNG TIN CÁ NHÂN</h4>
          </div>
          <div class="user-info">
            <div class="row  mb-20">
              <div class="col-md-3 input-name">
                <b style="font-size: initial"></b>
              </div>
              <div class="col-md-9">
                <img id="avatar-profile" style="width: 150px; height: 150px" class="avatar mb-10"
                     src="images/Screenshot_50.png">
                <input type="file" id="image" class="m"
                       style="border: unset !important; background: white">
              </div>
            </div>
            <div class="row  mb-15">
              <div class="col-md-3 input-name">
                <b style="font-size: initial">Mật khẩu mới</b>
              </div>
              <div class="col-md-9">
                <input id="new-password" type="password" placeholder="Mật khẩu mới"
                       class="form-control">
              </div>
            </div>
            <div class="row mb-15">
              <div class="col-md-3 input-name">
                <b style="font-size: initial">Mật khẩu cũ</b>
              </div>
              <div class="col-md-9">
                <input id="old-password" type="password" placeholder="Mật khẩu cũ" class="form-control">
              </div>
            </div>
            <div class="row mb-15">
              <div class="col-md-3 input-name">
                <b style="font-size: initial"></b>
              </div>
              <div class="col-md-9">
                <button id="btn-update-profile" class="btn btn-success">Lưu</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "index",

}
</script>

<style scoped>

</style>
