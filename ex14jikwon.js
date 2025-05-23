const {createApp} = Vue;

createApp({
    data() {
        return {
            jikwons:[]
        }
    },
    methods: {
        showFunc() {
            axios.get("http://localhost:8080/react/jikwon.jsp")
            .then(response => {
                this.jikwons = response.data;
            })
            .catch(error => {
                console.log("에러");
            })
        }
    }
}).mount("#app");