export const Data_pre_processing = (labels, datasets, type="namevalue")=>{

    switch(type){
        case "namevalue":
            datasets.forEach((dataset,index) => {
                const label_index = index;
                if (dataset.label == null){
                    dataset.label = "label_"+(label_index+1);
                }
                
                if (typeof(dataset.data[0]) !== null && Array.isArray(dataset.data[0])){
                    let rv = [];
                    for (let i = 0; i < Math.min(dataset.data.length,labels.length); ++i){
                        rv[i] = {name:dataset.data[i][0],value: dataset.data[i][1]};
                    }
                    dataset.data = rv;
                }
                    // 값으로 입력한 경우 object 로 변경
                else if (typeof(dataset.data[0]) !== null && typeof(dataset.data[0]) !== 'object'){
                    let rv = [];
                    for (let i = 0; i < Math.min(dataset.data.length,labels.length); ++i){
                        rv[i] = {name:labels[i],value: dataset.data[i]};
                    }
                    dataset.data = rv;
                }
                else {
                    let rv = [];
                    for (let i = 0; i < Math.min(dataset.data.length,labels.length); ++i){
                        let keys = Object.keys(dataset.data[i]);
                        if(!keys.includes("name") || !keys.includes("value")){
                            let values = Object.values(dataset.data[i]);
                            rv[i] = {name:values[0], value: values[1]};
                        }
                        else{
                            rv[i] = dataset.data[i];
                        }
                        
                        
                    }
                    dataset.data = rv;
                }
        
                dataset.data.forEach(d=>{
                    d.label = dataset.label;
                    d.label_index = label_index;
                });
            });
            break;
        case "xy":
            datasets.forEach((dataset,index) => {
                const label_index = index;
                if (dataset.label == null){
                    dataset.label = "label_"+(label_index+1);
                }                
                if (typeof(dataset.data[0]) !== null && Array.isArray(dataset.data[0])){
                    let rv = [];
                    for (let i = 0; i < Math.min(dataset.data.length,labels.length); ++i){
                        switch(dataset.data[i].length){
                            case 1:
                                rv[i] = {x:labels[i],y: dataset.data[i][0]};
                                break;
                            default:
                                rv[i] = {x:dataset.data[i][0],y: dataset.data[i][1]};
                                break;
                        }
                    }
                    dataset.data = rv;
                }
                    // 값으로 입력한 경우 object 로 변경
                else if (typeof(dataset.data[0]) !== null && typeof(dataset.data[0]) !== 'object'){
                    let rv = [];
                    for (let i = 0; i < Math.min(dataset.data.length,labels.length); ++i){
                        rv[i] = {x:labels[i],y: dataset.data[i]};
                    }
                    dataset.data = rv;
                }
                else {
                    let rv = [];
                    for (let i = 0; i < Math.min(dataset.data.length,labels.length); ++i){
                        let keys = Object.keys(dataset.data[i]);
                        if(!keys.includes("x") || !keys.includes("y")){
                            let values = Object.values(dataset.data[i]);
                            rv[i] = {x:values[0], y: values[1]};
                        }
                        else{
                            rv[i] = dataset.data[i];
                        }
                        
                        
                    }
                    dataset.data = rv;
                }
        
                dataset.data.forEach(d=>{
                    d.label = dataset.label;
                    d.label_index = label_index;
                });
            });
            break;
        case "xyr":
            datasets.forEach((dataset,index) => {
                const label_index = index;
                if (dataset.label == null){
                    dataset.label = "label_"+(label_index+1);
                }                
                if (typeof(dataset.data[0]) !== null && Array.isArray(dataset.data[0])){
                    let rv = [];
                    for (let i = 0; i < Math.min(dataset.data.length,labels.length); ++i){
                        switch(dataset.data[i].length){
                            case 1:
                                rv[i] = {x:labels[i],y: dataset.data[i][0], r:1};
                                break;
                            case 2:
                                rv[i] = {x:dataset.data[i][0],y: dataset.data[i][1],r:1};
                                break;
                            default:
                                rv[i] = {x:dataset.data[i][0],y: dataset.data[i][1],r:dataset.data[i][2]};
                                break;
                        }
                        rv[i] = {x:dataset.data[i][0],y: dataset.data[i][1],r:dataset.data[i][2]};
                    }
                    dataset.data = rv;
                }
                    // 값으로 입력한 경우 object 로 변경
                else if (typeof(dataset.data[0]) !== null && typeof(dataset.data[0]) !== 'object'){
                    let rv = [];
                    for (let i = 0; i < Math.min(dataset.data.length,labels.length); ++i){
                        rv[i] = {x:labels[i],y: dataset.data[i], r:1};
                    }
                    dataset.data = rv;
                }
                else {
                    let rv = [];
                    for (let i = 0; i < Math.min(dataset.data.length,labels.length); ++i){
                        let keys = Object.keys(dataset.data[i]);
                        if(!keys.includes("x") || !keys.includes("y")){
                            let values = Object.values(dataset.data[i]);
                            rv[i] = {x:values[0], y: values[1],r: values[2]};
                        }
                        else if(!keys.includes("r")){
                            rv[i] = dataset.data[i];
                            rv[i].r = 1;
                        }
                        else{
                            rv[i] = dataset.data[i];
                        }
                        
                        
                    }
                    dataset.data = rv;
                }
        
                dataset.data.forEach(d=>{
                    d.label = dataset.label;
                    d.label_index = label_index;
                });
            });
            break;   

        case "namevaluedataone":
            console.log(labels);
            if (datasets[0].data == null){
                datasets.forEach((dataset,index) => {
                    const label_index = index;
                    // if (dataset.name == null){
                    //     dataset.name = "label_"+(label_index+1);
                    // }
                    // // console.log(typeof(dataset));
                    if (typeof(dataset) !== null && Array.isArray(dataset)){
                        console.log(2);
                        dataset =  {name:dataset[0],value: dataset[1], label_index: index};
                    }
                        // 값으로 입력한 경우 object 로 변경
                    else if (typeof(dataset) !== null && typeof(dataset) !== 'object'){
                        
                        console.log(dataset)
                        dataset = {name:labels[index],value: dataset, label_index: index};
                        
                    }
                    else {
                        let keys = Object.keys(dataset);
                        keys = keys.filter(d=>{return  d!== "color"})
                        console.log(keys)
                        console.log(dataset)
                        if(!keys.includes("name") && !keys.includes("value")){
                            if (keys.length > 2){
                                let values = Object.values(dataset[index]);
                                dataset =  {name:values[0], value: values[1], label_index: index};
                            }
                            if (keys.length == 1){
                                let values = Object.values(dataset[index]);
                                dataset =  {name:labels[index], value: values[0], label_index: index};
                            }
                        }
                        else if(keys.includes("name") && keys.includes("value")){
                            console.log(2)
                            let values = Object.values(dataset);
                            dataset =  {name:dataset["name"], value: dataset["value"], label_index: index};
                        }
                        else if(keys.includes("value")){
                            console.log(3)
                            let values = Object.values(dataset);
                            dataset =  {name:labels[index], value: dataset["value"], label_index: index};
                        }
                        else{
                            console.log(4)
                            dataset =  {name:labels[index], value: dataset['value'], label_index: index};
                        }
                    }
                    
                    datasets[index] = dataset;
                    
                });
            }
            else{
                datasets[0].data.forEach((dataset,index) => {
                    const label_index = index;
                    if (typeof(dataset) !== null && Array.isArray(dataset)){
                        console.log(2);
                        dataset =  {name:dataset[0],value: dataset[1], label_index: index};
                    }
                        // 값으로 입력한 경우 object 로 변경
                    else if (typeof(dataset) !== null && typeof(dataset) !== 'object'){
                        
                        console.log(dataset)
                        dataset = {name:labels[index],value: dataset, label_index: index};
                        
                    }
                    else {
                        let keys = Object.keys(dataset);
                        keys = keys.filter(d=>{return  d!== "color"})
                        console.log(keys)
                        console.log(dataset)
                        if(!keys.includes("name") && !keys.includes("value")){
                            if (keys.length > 2){
                                let values = Object.values(dataset[index]);
                                dataset =  {name:values[0], value: values[1], label_index: index};
                            }
                            if (keys.length == 1){
                                let values = Object.values(dataset[index]);
                                dataset =  {name:labels[index], value: values[0], label_index: index};
                            }
                        }
                        else if(keys.includes("name") && keys.includes("value")){
                            console.log(2)
                            let values = Object.values(dataset);
                            dataset =  {name:dataset["name"], value: dataset["value"], label_index: index};
                        }
                        else if(keys.includes("value")){
                            console.log(3)
                            let values = Object.values(dataset);
                            dataset =  {name:labels[index], value: dataset["value"], label_index: index};
                        }
                        else{
                            console.log(4)
                            dataset =  {name:labels[index], value: dataset['value'], label_index: index};
                        }
                    }
                    datasets[0].data[index] = dataset;
                });
                datasets = datasets[0].data;
            }
            
        break;
    }
    
    return datasets;
}