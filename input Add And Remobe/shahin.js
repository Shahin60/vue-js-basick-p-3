const app = Vue.createApp({
    data() {
        return {
            skill: [
            {name:"html"}, 
            {name: "css"}, 
            {name:"java"}],
            neweData:{},
        }
    },
    methods: {
        time() {
            var tc = new Date();
            return new Date();
        },
        neweAdd() {
            this.skill.push(this.neweData);
            this. neweData ={};
        },
        remove(i){
            this.skill.splice(i,1);
        }
    },
}).mount(".shahin");