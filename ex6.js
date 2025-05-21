
document.addEventListener('DOMContentLoaded', function() {
    const {createApp, ref} = Vue;
    
    createApp({
        setup() {
            const value1 = ref(0);
            const value2 = ref(0);
            const result = ref(0);
    
            const calcFunc = (op) => {
                switch (op){
                    case '+':
                        result.value = value1.value + value2.value;
                        break;
                    case '-':
                        result.value = value1.value - value2.value;
                        break;
                    case '*':
                        result.value = value1.value * value2.value;
                        break;
                    case '/':
                        if(value2.value === 0){
                            alert("0으로 나눌 수 없습니다.");
                            result.value = 'NaN';
                        } else {
                            result.value = value1.value / value2.value;
                        }
                        break;
                }
            }
    
            return {value1, value2, result, calcFunc};
        }
    }).mount("#app")
});