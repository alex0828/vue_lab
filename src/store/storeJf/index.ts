import { defineStore } from "pinia";
export const userStore = defineStore('JF', {
    state: () => ({
        projectThree: <string[]>[
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
        projectFive: <string[]>['AAA', 'BBB', 'CCC', 'DDD'],
        projectLight: {
            lightBoxShowSeven: false,
            lightBoxShowNine: false
        },
        projectNine: {
            dataDetail: []
        },
        projectTwelve:{
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
        countChangeTwelve(num:number){
            this.projectTwelve.count += num
        }
    }
})