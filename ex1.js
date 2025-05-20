document.addEventListener("DOMContentLoaded", function () {
  const { createApp } = Vue;

  createApp({
    data() {
      return {
        message1: "Hello vue",
        message2: "안녕!" + "반가워",
        message3: Math.random() * 9,
      };
    },
    methods: {
      updateMessage() {
        this.message1 = "update hello";
        this.message2 = "update 안녕";
        this.message3 = Math.random() * 9;
        console.log("fffjfjfj");
      },
    },
    // 생명주기 관련 메소드 확인
    beforeCreate() {
      // 초기화
      console.log("beforecreate()");
    },
    created() {
      // 화면에 반응성 주입
      console.log("created()");
    },
    mounted() {
      // 속성값 대입
      console.log("mounted()");
    },
    beforeUpdate() {
      // 인스턴스의 데이터 변경
      console.log("beforeUpdate()");
    },
    updated() {
      // 화면 렌더링 및 데이터 갱신
      console.log("updated()");
    },
    beforeDestroy() {
      // 마무리 단계
      console.log("beforeDestroy()");
    },
  }).mount("#app2");
});
