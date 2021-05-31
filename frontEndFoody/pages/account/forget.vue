<template>
  <div class="row" id="forgetObj" api-forget="{{route('api.account.send_mail')}}"
       data-login-google = "{{$data_login_google ?? null}}">
    <div class="col-md-6">
      <img id="img-login" style="width: 100%" src="{{asset('images/background/hihihi-1.jpg')}}">
    </div>
    <div class="col-md-6 col-sm-12 panel-login-right">
      <div class="container">
        <h4 class="mb-20">QUÊN MẬT KHẨU</h4>
        <div class="my-card" style="padding: 20px;border-radius: 15px; box-shadow: -1px 1px 9px 0px #00c851">
          <div class="login-form-group">
            <b>Email:</b>
            <input id="txb-email" type="email" value="thanhdoan1411998@gmail.com" placeholder="Email" class="form-control">
            <p class="error"></p>
          </div>
          <div class="login-form-group form-inline">
            <a style="text-decoration: underline" href="/login">Đăng nhập</a>
          </div>
          <div class="login-form-group">
            <button id="btn-send-email" type="submit" class="btn btn-primary">Gửi</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "forget"
}
</script>

<style scoped>

</style>
