const app = Vue.createApp({
    data() {
        return {
           listTage:[
            {name:"shahin" , dep: "computer"},
            {name:"redoy" , dep: "computer"},
            {name:"utso" , dep: "computer"},
            {name:"jibon" , dep: "computer"},
            {name:"uzzol" , dep: "computer"}
           ] 
           ,
           revue:""
        }
    },
    computed:{
        total(){
            console.log("hello")
           return this.listTage.length
        }
    },

    methods: {
        remove(i){
            this.listTage.splice(i, 1)

        },
        total(){
            console.log("hello")
           return this.listTage.length
        }
    },
}).mount(".shahin")
