document.addEventListener('DOMContentLoaded', function() {
    const {createApp, ref} = Vue; // ref : 반응형 데이터 생성을 위한 함수
    
    createApp({
        setup() { //  컴포넌트의 초기 생태와 로직을 설정
            const bookList = ref([ // ref로 감싸져 있으면 반응형 데이터로 동작함
                {name:"자바 뽀개기", price:25000},
                {name:"MariaDB 끝내기", price:35000},
                {name:"코뿔소 JS", price:45000},
                {name:"리액트 잡아먹기", price:20000},
                {name:"뷰 박살내기", price:25000},
            ]);
    
            const selectedBooks = ref([]); // 사용자가 선택한 책 목록을 저장하는 배열
    
            return {bookList, selectedBooks};
        }
    }).mount('#app');
});
