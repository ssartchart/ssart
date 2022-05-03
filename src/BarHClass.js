
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
    // 툴팁 효과 + 하이라이트
    tooltip(){
        const tooltop = document.getElementById('tooltip');
        const color = this.color;
        this.slice.selectAll("rect")
        .on("mouseover", function(d){ 
            const x = event.pageX;
            const y = event.pageY;
            // const target = event.target;
            const positionLeft =x;
            const positionTop = y;
            d3.select(this).style("fill", d3.rgb(color(d.label_index)).darker(2));
            console.log("툴팁 확인 BarHC");
            const value = d.value;
            const name =  d.name;
            const key = d3.rgb(color(d.label_index));
            // const color = d;
            
            tooltop.innerText = "value : " + value +"\n" + "name : " + name +"\n" + "color : " +key ; // 값 + 데이터 
            // tooltop.style.background = '#ddd';
            tooltop.style.top = positionTop -30+ 'px';
            tooltop.style.left = positionLeft -80 + 'px';
            // tooltip.style("left", (d3.event.pageX+10)+"px");
            // tooltip.style("top",  (d3.event.pageY-10)+"px");
            tooltop.style.opacity = "1.0";
        })
        .on("mouseout", function(d){ 
            d3.select(this).style("fill", color(d.label_index));
            tooltop.style.opacity = "0";
        });

    }
    // 애니메이션 효과
    animation(delay=1000,duration=1000){
        this.slice.selectAll("rect")
            .attr("y", d=>{ return this.y(0); })
            .attr("height", d=>{ return this.y(this.y_min) - this.y(0); })
            .transition()
            .delay(d=>{return Math.random()*delay;})
            .duration(duration)
            .attr("y", d=>{ return this.y(d.value); })
            .attr("height", d=>{ return this.y(this.y_min) - this.y(d.value); });
    
    }
}

export default BarHClass;
