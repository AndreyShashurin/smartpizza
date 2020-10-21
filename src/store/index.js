import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pizza: [
      { 
        id: 1, 
        message: 'Пепперони', 
        price: 100, 
        icon: require("@/assets/img/pepperoni.jpg"), 
        type: 'Средняя 30 см, традиционное тесто', 
        ingredients: [
          'колбаса пепперони сырокопченая',
          'моцарелла', 
          'помидоры',
          'орегано, базилик'
        ] 
      },
      { 
        id: 2, 
        message: 'Маргарита', 
        price: 550, 
        icon: require("@/assets/img/pepperoni.jpg"), 
        type: 'Средняя 30 см, традиционное тесто', 
        ingredients: [
          'колбаса пепперони сырокопченая',
          'моцарелла', 
          'помидоры',
          'орегано, базилик'
        ] 
      },
      { 
        id: 3, 
        message: '4 сыра', 
        price: 450, 
        icon: require("@/assets/img/pepperoni.jpg"), 
        type: 'Маленькая 25 см, традиционное тесто', 
        ingredients: [
          'колбаса пепперони сырокопченая',
          '4 вида сыра', 
          'помидоры',
          'орегано, базилик'
        ]  
      },
      { 
        id: 4, 
        message: 'Мясная', 
        price: 550, 
        icon: require("@/assets/img/pepperoni.jpg"), 
        type: 'Средняя 30 см, традиционное тесто', 
        ingredients: [
          'колбаса пепперони сырокопченая',
          'моцарелла', 
          'помидоры',
          'орегано, базилик'
        ]  
      },
      { 
        id: 5,
        message: 'С креветками', 
        price: 450, 
        icon: require("@/assets/img/pepperoni.jpg"), 
        type: 'Маленькая 25 см, традиционное тесто', 
        ingredients: [
          'креветки',
          'моцарелла', 
          'помидоры'
        ] 
      }
    ],
    order: [2, 3],
    sort: false
  },
  mutations: {
    order(state, payload) {
      state.order.push(payload);
    },
    deleteId(state, payload) {
      let index = state.order.indexOf(payload)
      state.order.splice(index, 1)
    },
    sortPrice: state => {
      state.pizza.sort((a, b) => {
        if(state.sort) {
          return a.price - b.price
        } else {
          return b.price - a.price
        }
      })
      state.sort = !state.sort
    }
  },
  getters: {
    getOrders: state => {
      return state.pizza.filter(element => state.order.includes(element.id))
    },
    filterPizza: state => payload => {
      return state.pizza.filter(data => data.message.toLowerCase().includes(payload.toLowerCase()))
    },
    getOrderId: state => id => {
      return state.pizza.find(todo => todo.id === id);
    }
  },
  actions: {
  },
  modules: {
  }
})
