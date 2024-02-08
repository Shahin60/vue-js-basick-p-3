const app = Vue.createApp({
    data() {
        return {
            shoHeight: false,
            skil: [
               { name: "html", saill: 4},
                {name: "css", skill: 5},
                {name: "java", skill: 3},
                {name: "vue", skill: 10},
                {name: "js", skill: 2}

            ]
        }
    },
    methods: {
        degeble() {
            this.shoHeight = !this.shoHeight;
        }
    },
}).mount(".shahin");