<template>
<!--  v-if="restaurant"-->
  <v-card  :loading="loading" class="mx-auto" flat >
    <template slot="progress">
      <v-progress-linear color="deep-purple" height="5" indeterminate></v-progress-linear>
    </template>

<!--    <v-carousel  cycle height="200" hide-delimiter-background show-arrows-on-hover>-->
<!--        <v-img height="200" :src="restaurant.PhotoUrl" />-->
<!--    </v-carousel>-->

    <div >
      <v-img height="200" :src="restaurant.PhotoUrl" />
    </div>
    <v-card-title class="font-weight-bold red--text" style="width: 220px;overflow: hidden;text-overflow: ellipsis">
      <nuxt-link :to="`web/res-detail/${restaurant.Id}`"> {{restaurant.name_summary}}</nuxt-link>
     </v-card-title>
    <v-card-subtitle >
      <div class="d-flex" v-if="restaurant.restaurant_detail!==null">
        <p><v-icon class="blue--text">mdi-calendar-clock</v-icon> {{restaurant.restaurant_detail.open_time}}</p>
      </div>
      <div class="d-flex" v-else>
        <p><v-icon class="blue--text">mdi-calendar-clock</v-icon> ?</p>
      </div>
      <p ><v-icon class="blue--text">mdi-map-marker</v-icon> {{restaurant.address_summary}}</p>
    </v-card-subtitle>
    <v-chip-group  style="margin-left: 45px ;position: absolute;bottom: -50px;">
      <v-chip color="teal darken-1" class="white--text" label
      >Rao bán
      </v-chip>
      <v-chip color="deep-orange accent-3 " class="white--text" label>Nổi bật</v-chip>
    </v-chip-group>
  </v-card>
</template>

<script>
export default {
name: "RestaurantDetail",
  props: {
    restaurant: {
      default: {},
    },
  },
  data: () => ({
    loading: false,
    selection: 1,
  }),
  methods: {
    reserve() {
      this.loading = true

      setTimeout(() => (this.loading = false), 2000)
    },
  },
  created() {

  }
}
</script>

<style scoped>

</style>
