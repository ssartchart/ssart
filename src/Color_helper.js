export const LabelColor=(datasets) =>{
    
    let colors = ["steelblue","red","yellow","green"];
    let label = [];
    datasets.forEach((d,index) => {
        if (d.backgroundColor != null){
            colors[index] = d.backgroundColor;
        }
        label[index] = d.label;
    });

    const color = d3.scaleOrdinal().range(colors);

    return {label : label,
            color : color};

}


export const LabelsColor=(datasets) =>{
    
    let colors = ["steelblue","red","yellow","green"];

    if (datasets.backgroundColor != null){
        datasets.backgroundColor.forEach((d,index) => {
            colors[index] = d;
        });
    }

    const color = d3.scaleOrdinal().range(colors);

    return {label : datasets.labels,
        color : color};

}