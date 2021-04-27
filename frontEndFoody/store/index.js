export const state =()=> ({
  restaurantsSuggest: [],
  restaurantsNew: [],
  res_detail: {}
})
export const mutations= {
  setRestaurantsSuggest(state,restaurantsSuggest) {
    state.restaurantsSuggest=restaurantsSuggest;
  },
  setRestaurantNew(state,restaurantsNew) {
    state.restaurantsNew=restaurantsNew;
  },
  set_ResaurantDetail(state,res)
  {
    state.res_detail=res;
    console.log(state.res_detail);
  }
}


export const actions = {
   async getRestaurantDetail ({commit},id) {
     const res = await this.$axios.$get('http://127.0.0.1:8000/res-detail/' + id);
       commit("set_ResaurantDetail", res);



    // commit('SET_RESTAURANT', response)
  },
}
export const getters = {

}
