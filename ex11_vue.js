(function () {
    const {createApp} = Vue;

    createApp({
        data() {
            return {
                dataArray:datas
            };
        },
        methods: {
            addFunc(idx) {
                this.dataArray[idx][1]++;
                this.updateChart();
            },
            subFunc(idx) {
                this.dataArray[idx][1]--;
                this.updateChart();
            },
            updateChart() {
                drawFunc(); // 구글 차트 다시 그리기
            }
        }
    }).mount("#app");
})();