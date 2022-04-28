export const Data_pre_processing = (labels, datasets)=>{
    datasets.forEach((dataset,index) => {
        const label_index = index;
        if (dataset.label == null){
            dataset.label = "label_"+(label_index+1);
        }

            // 값으로 입력한 경우 object 로 변경
        if (typeof(dataset.data[0]) !== null && typeof(dataset.data[0]) !== 'object'){
            let rv = [];
            for (let i = 0; i < Math.min(dataset.data.length,labels.length); ++i){
                rv[i] = {name:labels[i],value: dataset.data[i]};
            }
            dataset.data = rv;
        }

        dataset.data.forEach(d=>{
            d.label = dataset.label;
            d.label_index = label_index;
        });
    });
    return datasets;
}