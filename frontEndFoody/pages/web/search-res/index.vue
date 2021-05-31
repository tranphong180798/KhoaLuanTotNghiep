<template>
  <div class="row" style="margin-left: 15px; margin-top: 20px" id="searchObj" >
    <div class="saved-res"
      v-if="res_list"
      v-for="res in res_list" :key="index"
    >
      <section>
        <div class="card booking-card" style="max-width: 22rem;">
          <div class="view overlay"><img :src="res.PhotoUrl" alt="Card image cap" class="card-img-top"> <a :href=`"/res-detail/${res.Id}"`>
            <div class="mask rgba-white-slight waves-effect waves-light"></div>
          </a></div>
          <div class="card-body"><h4 class="card-title font-weight-bold"><a href="/res-detail/174482">{{$res.name_summary}}</a>
            <p class="mt-10"><i class="mr-10 fas fa-clock"></i><span>&nbsp;{{res.restaurant_detail.open_time ? res.restaurant_detail.open_time : 'Không có dữ liệu'}}</span></p>
          </h4>
            <a class="mb-2"><i class="fas fa-map-marker-alt"></i>&nbsp;{{res.address_summary}}</a>
            <p class="card-text"></p>
          </div>
        </div>
      </section>
    </div>

  </div>
</template>

<script>
export default {
name: "index",
  data(){
  return {
    res_list:{}
  }
  }
}
</script>

<style scoped>

</style>
