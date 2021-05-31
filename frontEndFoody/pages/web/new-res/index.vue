<template>
  <div class="container">
    <div id="newObj" class="box">
      <h1>Thêm nhà hàng</h1>
      <hr>
      <div class="row">
        <div class="col-md-12">
          <div>
            <label for="Name">Tên nhà hàng</label>
            <input id="name" value="Nhà Hàng A" name="Name" type="text" class="form-control">
          </div>
        </div>
        <div class="col-md-12">
          <div>
            <label for="Name">Mô tả</label>
            <textarea id="description" class="form-control">hehe</textarea>
          </div>
        </div>
        <div class="col-md-12">
          <div>
            <label for="Address">Địa chỉ</label>
            <input id="address" value="hcm" name="Address" type="text" class="form-control">
          </div>
        </div>
        <div class="col-md-12">
          <div>
            <label for="">Hình ảnh nhà hàng</label>
            <input type="file" id="image" class="m"
                   style="border: unset !important; background: white">
          </div>
        </div>
        <div class="col-md-12">
          <div>
            <label for="Address">coordination</label>
          </div>
        </div>
        <div class="col-md-12" >
          <div style="width:100%;height:400px;" id="map" class="form-control">

          </div>
        </div>
        <div class="col-md-12">
          <label name="space1"></label>
        </div>
        <div class="col-md-6">
          <div>
            <label for="Latitude">Vĩ độ</label>
            <input id="latitude" name="Latitude" type="text" disabled="true" class="form-control">
          </div>
        </div>
        <div class="col-md-6">
          <div>
            <label for="Longitude">Kình độ</label>
            <input id="longitude" name="Longitude" type="text" disabled="true" class="form-control">
          </div>
        </div>
        <div class="col-md-12">
          <div>
            <label for="">Phân loại</label>
<!--            <select id="category" name="Categories" class="form-control">-->
<!--              @foreach($categories as $key=>$category)-->
<!--              <option-->
<!--                -->
<!--                value="{{$category['id']}}" {{$key==0 ? 'selected' : ''}}>{{$category['name']}}</option>-->
<!--              @endforeach-->
<!--            </select>-->
          </div>
        </div>
        <div class="col-md-6">
          <div>
            <label for="">Quận mấy</label>
<!--            <select id="district" name="District" class="form-control">-->
<!--              @foreach($districts as $key=>$district)-->
<!--              <option value="{{$district}}" {{$key==0 ? 'selected' : ''}}>{{$district}}</option>-->
<!--              @endforeach-->
<!--            </select>-->

          </div>
        </div>
        <div class="col-md-6">
          <div>
            <label for="City">Thành phố</label>
            <select id="city" name="City" class="form-control">
              <option value="Tp.HCM">Tp.HCM</option>
            </select>
          </div>
        </div>
        <div class="col-md-3">
          <div>
            <label for="">Giờ mở cửa</label>
            <select id="open-hour" name="OpenHour" class="form-control">
<!--              @for($i=0 ; $i<24; $i ++)-->
<!--              <option {{$i==0 ? 'selected' : ''}} value="{{$i}}">{{$i}}</option>-->
<!--              @endfor-->
            </select>
          </div>
        </div>
        <div class="col-md-3">
          <div>
            <label for="">Phút mở cửa</label>
            <select id="open-minute" name="OpenMinute" class="form-control">
<!--              @for($i=0 ; $i<60; $i ++)-->
<!--              <option {{$i==0 ? 'selected' : ''}} value="{{$i}}">{{$i}}</option>-->
<!--              @endfor-->
            </select>
          </div>
        </div>
        <div class="col-md-3">
          <div>
            <label for="">Giờ đóng cửa</label>
            <select id="close-hour" name="CloseHour" class="form-control">
<!--              @for($i=0 ; $i<24; $i ++)-->
<!--              <option {{$i==0 ? 'selected' : ''}} value="{{$i}}">{{$i}}</option>-->
<!--              @endfor-->
            </select>
          </div>
        </div>
        <div class="col-md-3">
          <div>
            <label for="">Phút đóng cửa</label>
            <select id="close-minute" name="CloseMinute" class="form-control">
<!--              @for($i=0 ; $i<60; $i ++)-->
<!--              <option {{$i==0 ? 'selected' : ''}} value="{{$i}}">{{$i}}</option>-->
<!--              @endfor-->
            </select>
          </div>
        </div>
        <div class="col-md-6">
          <div>
            <label for="min-price">Giá thấp nhất</label>
            <input id="min-price" value="10000" name="MinPrice" type="number" step="1000" class="form-control">
          </div>
        </div>
        <div class="col-md-6">
          <div>
            <label for="min-price">Giá cao nhất</label>
            <input id="max-price" value="20000" name="MaxPrice" type="number" step="1000" class="form-control">
          </div>
        </div>
        <div class="col-md-12">
          <label name="space2"></label>
        </div>
        <div class="col-md-12 text-center">
          <button id="btn-create" class="btn btn-success">Gửi</button>
        </div>

      </div>
      <!-- /.row-->
      <div class="col-lg-12">
        <label name="space3"></label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:"index",
  head() {
    return {
      title: this.title,
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: 'description',
          name: 'description',
          content: 'My custom description'
        }
      ],
      script:[
        {
          src:"https://maps.googleapis.com/maps/api/js?key=AIzaSyCzlVX517mZWArHv4Dt3_JVG0aPmbSE5mE&callback=initMap",
        }
      ]
    }
  },
  methods:{
     initMap(){
       const myLatlng = { lat: 10.776530, lng: 106.700981 };
       const map = new google.maps.Map(document.getElementById("map"), {
         zoom: 16,
         center: myLatlng,
       });
       // Create the initial InfoWindow.
       let infoWindow = new google.maps.InfoWindow({
         content: "Click vào để lấy tọa độ!!",
         position: myLatlng,
       });
       infoWindow.open(map);
     }

},
  created() {
   // this.initMap();
  },
  mounted() {
// if (!process.server) {
    if (typeof google === 'undefined') {
      const script = document.createElement('script')
      script.onload = this.onScriptLoaded
      script.type = 'text/javascript'
      script.src = `https://maps.googleapis.com/maps/api/js?
      key=${apiKey}&libraries=places`
      document.head.appendChild(script)
    } else {
       this.initMap()
    }

    // }

  }
}
</script>

<style scoped>

</style>
