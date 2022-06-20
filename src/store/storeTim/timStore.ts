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

        count:0 as number
    }),
    getters: {},
    actions: {
        increase(){
            this.count ++
        },
        decrease(){
            this.count -= 1
        }
    }
})