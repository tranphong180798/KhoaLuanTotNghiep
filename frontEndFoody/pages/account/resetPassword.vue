<template>
  <div class="wrap" id="reset-password" class="mb-5 login" api-reset-password="{{route('api.account.reset_password')}}" token="{{$token}}">
    <div class="register">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <img class="w-100 register-img images" data-src="../assets/images/profile/quen-mat-khau.png" alt="">
          </div>
          <div class="col-md-6">
            <h3 class="register-title">QUÊN MẬT KHẨU</h3>
            <form>
              <div class="form-group">
                <label class="register-label" for="email">Tạo lại mật khẩu mới</label>
                <input v-validate="'required|min:6'" data-vv-as="Mật khẩu mới" name="password"
                       v-model="data_create.password" type="password" class="form-control register-input" id="email" placeholder="Nhập mật khẩu mới của bạn">
                <div v-cloak v-show="errors.has('password')" class="error">
                  <i class="fas fa-exclamation-circle error-icon"></i>
                  <span class="error-text">@{{ errors.first('password') }}</span>
                </div>
              </div>
              <div class="form-group">
                <label class="register-label" for="email">Nhập lại mật khẩu mới</label>
                <input data-vv-as="Nhập lại mật khẩu mới"  v-validate="'required|min:6|confirmed:password'" name="password_confirm"
                       type="password" class="form-control register-input" id="email" placeholder="Nhập lại mật khẩu mới của bạn">
                <div v-cloak v-show="errors.has('password_confirm')" class="error">
                  <i class="fas fa-exclamation-circle error-icon"></i>
                  <span class="error-text">@{{ errors.first('password_confirm') }}</span>
                </div>
              </div>
              <button v-show="!loading" @click.stop.prevent="resetPassword()" type="submit" class="button button-register">GỬI</button>
              <button v-show="loading" type="submit" class="button button-register"><i class="fas fa-spinner fa-spin mr-3"></i>GỬI</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
name: "resetPassword"
}
</script>

<style scoped>

</style>
