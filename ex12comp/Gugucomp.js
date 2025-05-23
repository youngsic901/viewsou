export default {
    data() {
        return {
            inputNumber:'',
            result:''
        };
    },
    methods: {
        calcGugudan() {
            const num = parseInt(this.inputNumber);
            if(!isNaN(num) && num > 0) {
                this.result = Array.from({length:9}, (_, i) => 
                    `${num} x ${i + 1} = ${num * (i + 1)}`
                ).join('<br>');
            } else {
                this.result = "정확한 정수를 입력해 주세요";
            }
        },
    },
    template:`
        <div>
            <h2>구구단</h2>
            단 입력후 버튼 클릭<br>
            <input type="number" v-model="inputNumber" min="2" placeholder="단입력" >
            <button @click="calcGugudan">확인</button>
            <br>
            <div v-html="result"></div>
        </div>
    `
}