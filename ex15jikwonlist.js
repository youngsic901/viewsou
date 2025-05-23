const {createApp} = Vue;

createApp({
    data() {
        return {
            jikwonno:'',
            jikwonname:'',
            jikwons:[],
            isLogin:false,
            array:'asc',
            busername:'',
            showModal:false
        }
    },
    methods: {
        login() {
            const params = new URLSearchParams();
            params.append("jikwonno", this.jikwonno);
            params.append("jikwonname", this.jikwonname);

            axios.post("http://localhost:8080/react/login.jsp", params, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            })
            .then(response => {
                if(response.data.length > 0){
                    this.isLogin = true;
                    this.fetchJikwons();
                } else {
                    this.isLogin = false;
                    this.showModal = true;
                }
            })
            .catch(error => {
                console.log("에러");
            })
        },
        fetchJikwons() {
            const params = new URLSearchParams();
            params.append("array", this.array);
            params.append("busername", this.busername);

            axios.post("http://localhost:8080/react/jikwon.jsp", params, {
                headers:{
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            })
            .then(response => {
                this.jikwons = response.data;
                console.log(this.jikwons);
            })
            .catch(error => {
                console.log("에러");
            })
        }
    }
}).mount("#app");