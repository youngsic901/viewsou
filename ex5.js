document.addEventListener('DOMContentLoaded', function() {
    const app = Vue.createApp({
        
      data() {
        return {
          number1: 0, // 주사위의 시행 결과를 저장할 변수
          number2: 0, // 주사위의 시행 결과에 10을 더한 값을 저장할 변수
          count: 0,
        };
      },
      methods: {
        rollDiceEvent() {
          // 주사위 시행 시 처리 핸들러
          let num = Math.floor(Math.random() * 6 + 1); // 1 ~ 6 사이 정수 생성
          this.number1 = num;
        },
        rollDiceEvent2(arg) {
          let num = Math.floor(Math.random() * 6 + 1 + arg);
          this.number2 = num;
        },
      },
    }).mount("#app");
});
