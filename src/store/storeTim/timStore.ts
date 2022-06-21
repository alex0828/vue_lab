import { defineStore } from "pinia";
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
        }
        
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
        }
    }
})