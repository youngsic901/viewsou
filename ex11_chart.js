let datas = [
    ['치즈 김밥', 3],
    ['멸치 김밥', 6],
    ['햄버거', 2],
    ['피자', 1],
    ['도넛', 3]
];

google.charts.load('current', {packages:['corechart']});
google.charts.setOnLoadCallback(drawFunc);  // 콜백함수 설정

function drawFunc() {
    let data = google.visualization.arrayToDataTable([
        ['종류', '갯수'],
        ...datas
    ]);
    let options = {title: '먹고 싶은 음식', is3D:true};
    let chart = new google.visualization.PieChart(document.querySelector("#chart_div"));
    chart.draw(data, options);
}