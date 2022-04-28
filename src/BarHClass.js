
class BarHClass{
    constructor(svg, data, color, width, height, margin) {

        var max = Math.max.apply(null, data);
        
        console.log("barH Class 생성자 호출");
        svg
        .selectAll('rect').data(data).enter()
            .append('rect').attr('rx',5)
            .attr('height', 30)  //가로 그래프 높이 (클수록 두꺼워 짐)
            .attr('y', (d,i)=>i*50) // 다음 rect y축 위치 정해줌 (최소 가로그래프 높이 이상 되어야함)
            .attr('class', (d,i)=>color[i])
            .attr('width', '1')
            .transition().duration(1000)
            .attr('width', d=>(d*100)/max+"%"); //데이터 값에 대한 백분율로 width 주기 (max data는 width와 크기 같음)

        svg.node(); //?
    };
}

export default BarHClass;
