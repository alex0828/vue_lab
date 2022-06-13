import { createStore } from 'vuex'
import { product } from '@/server/index.js'
import mock from '@/mock/index'
export default createStore({
  state () {
    return {
      itemList: ['Ada', 'Aaliyah', 'Adela', 'Basia', 'Bonnie', 'Brook', 'Candice', 'Celeste', 'Cheryl', 'Ella', 'Eudora', 'Gemma'],
      ModalDemo: {
        isOpen: false
      },
      AxiosList: [],
      AxiosDetail: [],
      count: 0
    }
  },
  getters: {
    getAssetsList: state => {
      return state.AjaxList
    }
  },
  mutations: {
    changeOpen (state) {
      state.ModalDemo.isOpen = true
    },
    changeClose (state) {
      state.ModalDemo.isOpen = false
    },
    saveAxiosData (state, list) {
      state.AxiosList = list
    },
    getAxiosDataDetail (state, detail) {
      state.AxiosDetail = detail
    },
    dec (state) {
      state.count -= 1
    },
    inc (state) {
      state.count++
    }
  },
  actions: {
    getAssetsListHandler ({ commit }) {
      return new Promise(resolve => {
        try {
          product({ methods: 'get' }).then((res) => resolve(res))
        } catch (err) {
          resolve({ data: { code: -1, msg: err, success: false } })
          console.log(mock)
        }
      })
    }
  },
  modules: {
  }
})
