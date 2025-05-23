export default {
    data() {
        return {
            posts:[]
        }
    },
    methods: {
        fetchData() {
            fetch("https://api.open-meteo.com/v1/forecast?latitude=37.5172&longitude=127.0473&current_weather=true")
            .then(response => {
                if(!response.ok) {
                    throw new Error('네트워크 오류');
                }
                return response.json();
            })
            .then(json => {
                this.posts = json;
            })
            .catch(error => {
                console.log('읽기 오류');
            });
        }
    },
    template:`
        <div id="weatherHead">
            <h2>날씨정보 읽기</h2>
            <button @click="fetchData">날씨정보 읽기</button>
        </div>
        <div v-if="posts.length !== 0" id="weatherBody">
            <ul>
                <li>예보시간 : {{posts.current_weather.time}}</li>
                <li>온도 : {{posts.current_weather.temperature}}</li>
                <li>풍속 : {{posts.current_weather.windspeed}}</li>
                <li>풍향 : {{posts.current_weather.winddirection}}</li>
            </ul>
        </div>
    `
}