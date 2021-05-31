<template>
  <div class="row" id="registerObj" api-register="{{route('api.account.register')}}">
    <div class="col-md-6">
      <img id="img-login" style="width: 100%" src="{{asset('images/background/hihihi-1.jpg')}}">
    </div>
    <div class="col-md-6 col-sm-12 panel-login-right">
      <div class="container">
        <h4 class="mb-20">ĐĂNG KÝ</h4>
        <div class="my-card" style="padding: 20px;border-radius: 15px; box-shadow: -1px 1px 9px 0px #00c851">
          <div class="login-form-group">
            <b>Email:</b>
            <input id="txb-email" type="email" value="b@gmail.com" placeholder="Email" class="form-control">
            <p class="error"></p>
          </div>
          <div class="login-form-group">
            <b>Mật khẩu:</b>
            <input id="txb-password" value="1" type="password" placeholder="Mật khẩu" class="form-control">
          </div>
          <div class="login-form-group">
            <b>Nhập lại mật khẩu:</b>
            <input id="txb-re-password" value="1" type="password" placeholder="Nhập lại mật khẩu" class="form-control">
          </div>
          <div class="login-form-group form-inline">
            <a style="text-decoration: underline" href="/login">Đã có tài khoản</a>
          </div>
          <div class="login-form-group">
            <button id="btn-register" type="submit" class="btn btn-primary">Đăng ký</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "register"
}
</script>

<style scoped>

</style>
