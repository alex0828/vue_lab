import { defineStore } from "pinia";
import product from '@/server/index';
export const userStore = defineStore('user', {
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

        getAssetsListHandler ({ commit }) {
            return new Promise(resolve => {
              try {
                product({ methods: 'get' }).then((res) => resolve(res))
              } catch (err) {
                resolve({ data: { code: -1, msg: err, success: false } })
              }
            })
        },
        saveAxiosData(data){
            this.apiList = data
        }
    }
})