import { createStore } from 'vuex'

export default createStore({
  state () {
    return {
      count: 0,
      projectThree: ['Ada', 'Aaliyah', 'Adela', 'Basia', 'Bonnie', 'Brook', 'Candice', 'Celeste', 'Cheryl', 'Ella', 'Eudora', 'Gemma'],
      projectFive: ['AAA', 'BBB', 'CCC', 'DDD'],
      projectSeven: {
        lightBoxShow: false
      },
      projectTwelve: {
        count: 0
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
    projectSeverButtonControler (state, payload) {
      state.projectSeven.lightBoxShow = payload.isOpen
    }
  },
  actions: {
  },
  modules: {
  }
})
