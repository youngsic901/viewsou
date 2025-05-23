(function () {
    // 전체 자료 컴포넌트
    const AllData = {
        template:`
            <div>
                <h3>전체자료</h3>
                <table v-if="allData.length">
                    <thead>
                        <tr>
                            <th>부서번호</th><th>부서명</th><th>직원명</th><th>고객명</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="data in allData" :key="data.jikwonno">
                            <td>{{data.buserno}}</td>
                            <td>{{data.busername}}</td>
                            <td>{{data.jikwonname}}</td>
                            <td>{{data.gogekname}}</td>
                        </tr>
                    </tbody>
                </table>
                <p v-else>전체 데이터 조회 실패</p>
            </div>
        `,
        data() {
            return {
                allData:[],
            };
        },
        mounted() {
            axios.get('http://localhost/joindata')
            .then(Response => {
                this.allData = Response.data;
            })
            .catch(error => {
                console.log('error fetch data:', error);
            })
        },
    };

    const BuserData = {
        template:`
            <div>
                <h3>부서자료</h3>
                <table v-if="buserData.length">
                    <thead>
                        <tr>
                            <th>부서번호</th><th>부서명</th><th>위치</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="data in buserData" :key="data.buserno">
                            <td>{{data.buserno}}</td>
                            <td>{{data.busername}}</td>
                            <td>{{data.buserloc}}</td>
                        </tr>
                    </tbody>
                </table>
                <p v-else>부서 데이터 조회 실패</p>
            </div>
        `,
        data() {
            return {
                buserData:[],
            };
        },
        mounted() {
            axios.get('http://localhost/busers')
            .then(Response => {
                this.buserData = Response.data;
            })
            .catch(error => {
                console.log('error fetch buserData:', error);
            })
        },
    };

    const JikwonData = {
        template:`
            <div>
                <h3>직원자료</h3>
                <table v-if="jikwondata.length">
                    <thead>
                        <tr>
                            <th>직원번호</th><th>직원명</th><th>직급</th><th>연봉</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="data in jikwondata" :key="data.jikwonno">
                            <td>{{data.jikwonno}}</td>
                            <td>{{data.jikwonname}}</td>
                            <td>{{data.jikwonjik}}</td>
                            <td>{{data.jikwonpay}}</td>
                        </tr>
                    </tbody>
                </table>
                <p v-else>직원 데이터 조회 실패</p>
            </div>
        `,
        data() {
            return {
                jikwondata:[],
            };
        },
        mounted() {
            axios.get('http://localhost/jikwons')
            .then(Response => {
                this.jikwondata = Response.data;
            })
            .catch(error => {
                console.log('error fetch jikwondata:', error);
            })
        },
    };

    const GogekData = {
        template:`
            <div>
                <h3>고객자료</h3>
                <table v-if="gogekData.length">
                    <thead>
                        <tr>
                            <th>고객번호</th><th>고객명</th><th>전화번호</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="data in gogekData" :key="data.gogekno">
                            <td>{{data.gogekno}}</td>
                            <td>{{data.gogekname}}</td>
                            <td>{{data.gogektel}}</td>
                        </tr>
                    </tbody>
                </table>
                <p v-else>고객 데이터 조회 실패</p>
            </div>
        `,
        data() {
            return {
                gogekData:[],
            };
        },
        mounted() {
            axios.get('http://localhost/gogeks')
            .then(Response => {
                this.gogekData = Response.data;
            })
            .catch(error => {
                console.log('error fetch gogekData:', error);
            })
        },
    };

    // Vue Router 설정
    const routes = [
        {path:'/', component:AllData},
        {path:'/busers', component:BuserData},
        {path:'/jikwons', component:JikwonData},
        {path:'/gogeks', component:GogekData},
    ];

    const router = VueRouter.createRouter({
        history:VueRouter.createWebHistory(),
        routes,
    })

    // Vue 앱 생성
    const app = Vue.createApp({});
    app.use(router);
    app.mount('#app');
})();