const app = Vue.createApp({
    data() {
        return {
            data:{
                name:"shahin",
                roll:580221,
                dep:"cmt"
            }
        }
    },
    methods: {
        tm(){
            let t = new Date();
            return new Date()
        }
    },
}).mount(".shahin");
