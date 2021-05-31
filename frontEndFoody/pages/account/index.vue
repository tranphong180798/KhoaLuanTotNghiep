<template>
  <div class="padding-top"></div>
  <section class="blog">
    <div class="container">
      <h1 class=""><a class="blog-link" href="javascript:void(0)">TÀI KHOẢN</a></h1>
    </div>
  </section>
  <div class="wrap" id="profile-contents"
       >
    <section class="account">
      <div class="container">
        <div class="account-info">
          <div class="avatar-wrapper upload-profile-button">
            <img class="profile-pic avatar" :src="user.avatar.url != '' ? user.avatar.url : '../assets/images/default-thumbnail.png'" />
            <input ref="file" class="file-upload" type="file" accept="image/*" />
          </div>
          <!-- <img class="account-img images"
               :src="user.avatar.url != ''? user.avatar.url : '../assets/images/avatar.jpg'" alt="avatar"> -->
          <span v-cloak class="account-name">@{{ data_create.name }}</span>
        </div>
        <div class="row">
          <div class="col-md-6">
            <form>
              <div class="form-group">
                <input v-model="data_create.name" type="text" class="form-control account-input"
                       placeholder="Họ Tên">
                <i class="fas fa-user-circle account-icon"></i>
              </div>
              <div class="form-group">
                <input v-model="data_create.phone" type="phone" class="form-control account-input"
                       placeholder="0123.456.789">
                <i class="fas fa-phone-alt account-icon"></i>
              </div>
              {{--                            <div class="form-group account-custom">--}}
              {{--                                <input type="password" class="form-control account-input" placeholder="******">--}}
              {{--                                <i class="fas fa-lock account-icon"></i>--}}
              {{--                            </div>--}}

              <button type="submit" v-if="!loading" @click.stop.prevent="updateProfile()"
                      class="button button-account">Thay đổi
              </button>
              <button type="submit" v-if="loading" class="button button-account"><i
                class="fas fa-spinner fa-spin"></i>Thay đổi
              </button>
            </form>
          </div>
          <div class="col-md-6  account-package">
            <div class="account-upgrade ">
              <template v-if="package_used!=null">
                <span class="account-upgrade-text ">Gói sử dụng</span>
                <h5 class="account-upgrade-title ">@{{ package_used.product ? package_used.product.name : '' }}</h5>
                <span class="account-upgrade-text ">Ngày hết hạn: @{{package_used.expire | dd-mm-yyyy }}</span>
              </template>
              <button class="button button-account mt-5 mb-3" data-toggle="modal" data-target="#upGrade">Nâng
                cấp gói
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="modal fade modal-group" id="upGrade" tabindex="-1" role="dialog"
         aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close modal-header-close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <h3 class="modal-add-title">Nâng cấp gói </h3>
            <div class="card modal-card">
              <div class="card-body" v-for="item in products">
                <label class="modal-card-title">
                  <input  v-validate="'required'" data-vv-as="Gói" name="package" v-model="product_to_upgrade"
                          :value="item" type="radio" name="upgrade"
                          class=" modal-card-radio"/>
                  Gói @{{item.number_account}} tài khoản - @{{item.price/1000}}
                  k/@{{item.expire}} tháng<i class="fas fa-angle-down"></i>
                </label>
                <!-- <a class="modal-card-title" href="">Gói 1 tài khoản - 30k/1 tháng<i class="fas fa-angle-down"></i></a> -->
                <ul class="modal-card-list">
                  {{--                                    <li>--}}
                  {{--                                        <div class="form-group mt-3 mb-0">--}}
                    {{--                                            <select class="form-control disc-item-mon" id="exampleFormControlSelect1">--}}
                      {{--                                                <option value="1">1 Tháng</option>--}}
                      {{--                                                <option value="3">3 Tháng</option>--}}
                      {{--                                                <option value="6">6 Tháng</option>--}}
                      {{--                                                <option value="12">12 Tháng</option>--}}
                      {{--                                            </select>--}}
                    {{--                                        </div>--}}
                  {{--                                    </li>--}}
                  <li class="modal-card-item">Tư vấn sử dụng</li>
                  <li class="modal-card-item">Đấy đủ tính năng</li>
                  <li class="modal-card-item">Cập nhật miễn phí</li>
                  <li class="disc-item">Bảo Hành Trọng Gói</li>
                  {{--                                    <li class="modal-card-item">Hoàn tiền trong vòng 7 ngày hoặc đổi phần mềm có giá trị--}}
                  {{--                                        tương đương.--}}
                  {{--                                    </li>--}}
                </ul>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" @click="redirect()" class="button button-discount"
                    data-dismiss="modal">NÂNG CẤP GÓI
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "index"
}
</script>

<style scoped>

</style>
