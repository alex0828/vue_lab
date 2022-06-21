import { defineStore } from "pinia";
import mock from "@/mock/index"
import axios from 'axios'
export const userStore = defineStore('Tim', {
    state: () => ({
        filterSearchProject: <string[]>[
            "Ada",
            "Aaliyah",
            "Adela",
            "Basia",
            "Bonnie",
            "Brook",
            "Candice",
            "Celeste",
            "Cheryl",
            "Ella",
            "Eudora",
            "Gemma",
        ],
        listDemoProject: <string[]>['AAA', 'BBB', 'CCC'],
        projectLight: {
            lightBoxShowSeven: false,
            lightBoxShowNine: false
        },
        counter:{
            count:0
        },
        apiList: []
        
    }),
    getters: {},
    actions: {
        lightBoxSevenChange() {
            this.projectLight.lightBoxShowSeven = !this.projectLight.lightBoxShowSeven;
        },
        lightBoxNineChange() {
            this.projectLight.lightBoxShowNine = !this.projectLight.lightBoxShowNine;
        },
        increase(){
            this.counter.count ++
        },
        decrease(){
            this.counter.count -= 1
        },

        async fetchUsers() {
            try {
              const {data} = await axios.get('/product/list')
              this.apiList = data
              }
              catch (error) {
                  console.log(mock)
                  alert(error)
                  console.log(error)
              }
          }
    }
})