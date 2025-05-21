document.addEventListener('DOMContentLoaded', function() {
    const {createApp} = Vue;

    createApp({
        data() {
            return {
                list : ['커피', '사이다', '맥주', '콜라'],
                objArray:[
                    {name:'강릉', taketime:'3시간'},
                    {name:'부산', taketime:'6시간'},
                    {name:'춘천', taketime:'2시간'},
                ],
                myArr:['일', '이', '삼', '사', '오'],
                numArr:[1, 2, 3, 4, 5],
            }
        },
        methods:{
            addList() {
                this.myArr.push('추가');
            },
            addListIndex(para) {
                this.myArr.splice(para, 0, '추가자료');
            },
            changeList(para){
                this.myArr.splice(para, 1, '수정');
            },
            deleteList(para){
                this.myArr.splice(para, 1);
            },
        }
    }).mount("#app");
});