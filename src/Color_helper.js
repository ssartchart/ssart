export const LabelColor=(datasets) =>{
    
    let colors = ["steelblue","red","yellow","green"];

    datasets.forEach((d,index) => {
        if (d.backgroundColor != null){
            colors[index] = d.backgroundColor;
        }
    });

    const color = d3.scaleOrdinal().range(colors);

    return color;

}


export const LabelsColor=(datasets) =>{
    
    let colors = ["steelblue","red","yellow","green"];

    if (datasets.backgroundColor != null){
        datasets.backgroundColor.forEach((d,index) => {
            colors[index] = d;
        });
    }

    const color = d3.scaleOrdinal().range(colors);

    return color;

}