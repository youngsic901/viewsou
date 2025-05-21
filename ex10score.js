(function() {
    const {createApp} = Vue;

    createApp({
        data() {
            return {
                name:'',
                java:0,
                react:0,
                vue:0,
                students:[
                    {name:'김치국', java:90, react:78, vue:88},
                    {name:'신통해', java:88, react:77, vue:66}
                ],
            }
        },
        methods:{
            inputStudent(){
                this.students.push({name:this.name, java:this.java, react:this.react, vue: this.vue});
                this.name='';
                this.java=0;
                this.react=0;
                this.vue=0;
            }
        },
        computed:{
            total() {
                // let total = 0;
                // this.students.forEach(element => {
                //     total += element.java + element.react + element.vue;
                // });
                // return total;
                return this.students
                .map(student => student.java + student.react + student.vue)
                .reduce((sumOfAllScores, studentTotalScore) => sumOfAllScores + studentTotalScore, 0);
            }
        }
    }).mount("#app");
})();