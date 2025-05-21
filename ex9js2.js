(function() {
    const {createApp} = Vue;
    
    createApp({
        data() {
            return {
                ypay:5000,
                busers:[
                    {bunho:'10', irum:'총무부', junhwa:'111-1111'},
                    {bunho:'20', irum:'축구부', junhwa:'111-2222'},
                    {bunho:'30', irum:'야구부', junhwa:'111-3333'},
                    {bunho:'40', irum:'배구부', junhwa:'111-4444'},
                ],
                cssStyleTest:{
                    color:'red', fontsize:'10px'
                }
            }
        },
    }).mount('#app2');
})();