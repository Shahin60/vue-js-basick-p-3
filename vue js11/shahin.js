const app = Vue.createApp({
    data() {
        return {
            height: false
        }
    },
    methods: {
        heaigh(){
            this.height = !this.height;
        }
    },
}).mount(".shahin");