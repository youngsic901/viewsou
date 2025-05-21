(function() {
    const {createApp} = Vue;
    
    createApp({
        data() {
            return {
                key1: '값1',
                key2: '값2',
                message:'This is test message',
                htmlString:'<p style="color: blue;">파란 글자</p>',
                su1:'0',
                su2:'0',
                txtMsg: '',
                daumLogo:'https://t1.daumcdn.net/liveboard/daumtop_notice/20250113/daum.png'
            }
        },
        methods:{
            myFunc() {
                console.log("버튼 클릭 : ", this.message);
            },
            myChange1() {
                this.message = "아자 아자"
            },
            myChange2() {
                this.message = "뷰 이벤트 처리 성공"
            }
        }
    }).mount('#app');
})();