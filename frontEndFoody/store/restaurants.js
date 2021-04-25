export const state =()=> ({
  restaurantsSuggest: [],
  restaurantsNew: [],
})
export const mutations= {
  setRestaurantsSuggest(state,restaurantsSuggest) {

    state.restaurantsSuggest=restaurantsSuggest;
    console.log(state.restaurantsSuggest)
  },
  setRestaurantNew(state,restaurantsNew) {
    state.restaurantsNew=restaurantsNew;
    console.log(state.restaurantsNew)
  },
}


export const actions = {


}
export const getters = {
  isAuthesnticated(state) {
    return state.auth.loggedIn
  },

}
