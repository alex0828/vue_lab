import { createStore } from 'vuex'

export default createStore({
  state () {
    return {
      count: 0,
      projectThree: ['Ada', 'Aaliyah', 'Adela', 'Basia', 'Bonnie', 'Brook', 'Candice', 'Celeste', 'Cheryl', 'Ella', 'Eudora', 'Gemma'],
      projectFive: ['AAA', 'BBB', 'CCC', 'DDD'],
      projectLight: {
        lightBoxShow: false
      },
      projectTwelve: {
        count: 0
      },
      projectNine: {
        dataDetail: []
      }
    }
  },
  getters: {
  },
  mutations: {
    countChange (state, payload) {
      state.count += payload.amount
    },
    countChangeTwelve (state, payload) {
      state.projectTwelve.count += payload.amount
    },
    projectLightButtonControler (state, payload) {
      state.projectLight.lightBoxShow = payload.isOpen
    }
  },
  actions: {
  },
  modules: {
  }
})
