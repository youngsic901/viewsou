document.addEventListener('DOMContentLoaded', function() {
    const {createApp} = Vue;

    createApp({
        data() {
            return {
                season: true, // 계절 상태를 true(여름)로 초기화
                myVisible: false, // 체크박스 상태를 false로 초기화
                count: 0,
            }
        },
        methods:{
            addFunc() {
                this.count++;
            }
        }
    }).mount("#app");
});