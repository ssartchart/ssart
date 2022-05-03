import {Set_Axis} from './Axis_helper.js';

export class LineChart{
    constructor({chart_area,labels,datasets,color,width,height,margin,padding,y_max,y_min}){
        const x_domain = labels.map(d => d);        
        const y_domain = [y_min,  (y_max != null) ? y_max : d3.max(datasets, label=>{
                return d3.max(label.data, d=>{
                    return d.value;});            
                })];        
        const Axis = Set_Axis({chart_area,x_domain,y_domain,width,height,margin,padding});


        this.color = color;
        this.y_min = y_min;
        this.x = Axis.x;
        this.y = Axis.y;
        
    }
}