export default {
    data() {
        return {
            isClient: '',
            posts: [],
        }
    },
    methods: {
        fetchData() {
            fetch("http://openapi.seoul.go.kr:8088/sample/json/SeoulLibraryTimeInfo/1/5/")
            .then(response => {
                if(!response.ok) {
                    throw new Error('네트워크 오류');
                }
                return response.json();
            })
            .then(json => {
                this.isClient = 'fetch 방식';
                this.posts = json;
            })
            .catch(error => {
                console.log('읽기 오류');
            });
        },
        axiosData() {
            axios.get("http://openapi.seoul.go.kr:8088/sample/json/SeoulLibraryTimeInfo/1/5/")
            .then(response => {
                this.isClient = 'axios 사용';
                this.posts = response.data;
            })
            .catch(error => {
                console.log('읽기 오류');
            });
        }
    },
    template:`
        <div id="libHead">
            <h2>도서관정보 읽기</h2>
            <button @click="fetchData">fetch</button>| <button @click="axiosData">axios</button>
            <h3>{{isClient}}</h3>
        </div>
        <div v-if="posts.length !== 0" id="libBody">
            <ul v-for="post in posts.SeoulLibraryTimeInfo.row" :key="post.LBRRY_SEQ_NO">
                <li>도서관 이름 : {{post.LBRRY_NAME}}</li>
                <li>주소 : {{post.ADRES}}</li>
                <li>전화 : {{post.TEL_NO || '정보 없음'}}</li>
            </ul>
        </div>
    `
}