export const state =()=> ({
  restaurantsSuggest: [],
  restaurantsNew: [],
  res_detail:[]
})
export const mutations= {
  setRestaurantsSuggest(state,restaurantsSuggest) {
    state.restaurantsSuggest=restaurantsSuggest;
  },
  setRestaurantNew(state,restaurantsNew) {
    state.restaurantsNew=restaurantsNew;
  },
  SET_RESTAURANT(state,restaurant)
  {
  }
}


export const actions = {
   getRestaurantDetail ({commit},id) {
    console.log(id);
      this.$axios.get('http://127.0.0.1:8000/res-detail/'+id).then((res)=>{
        console.log(res);
      })

    // commit('SET_RESTAURANT', response)
  },
}
export const getters = {

}
