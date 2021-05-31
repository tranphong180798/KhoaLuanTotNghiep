<template>
  <div>
  <a style="text-decoration: underline " class="ml-40 mb-10" data-toggle="modal" data-target="#coordination">
    <i class="fas fa-map-marker-alt"></i>
    <span>Chọn ví trí của bạn</span>
  </a>
  <div id="map2" style="overflow: hidden;height: 275px;max-width: 1135px; margin: 150px auto;
    border-radius: 10px;"></div>
  <div class="row" style="margin-left: 15px; margin-top: 20px" id="moreObj"
       >
  </div>
  <div style="text-align: center">
    <button style="width: 150px" id="btn-load-more" class="btn btn-primary">Tải thêm</button>
  </div>
  <div style="margin-top: 100px" id="coordination" class="modal fade modal-wrapper" tabindex="-1" role="dialog">
    <div class="modal-dialog  modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Nhấn chọn địa điểm</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div style="width:100%;height:400px;" id="map-to-choose" class="form-control">

          </div>
          <input style="display: none" type="text" id="long">
          <input style="display: none" type="text" id="lat">
          <div style="text-align: right">
            <button id="btn-choose-coor" class="btn btn-success">Tìm kiếm</button>
            <button id="btn-get-current" class="btn btn-primary">Lấy vị trí hiện tại</button>
          </div>
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
