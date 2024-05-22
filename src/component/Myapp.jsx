import React  from "react";
import { Color } from "./Color";

export class Myapp extends React.Component{
    constructor(){
        super();
        this.state={
            colorNum:8,
            colors:[]
        };
        for(let i=0;i<this.state.colorNum;i++){
                this.state.colors.push({hexCode: this.generateColor()})
        }
    }
    // generateColor
    generateColor(){
        return'#'+ Math.random().toString(16).substr(-6);
    }
    updatecolor(index){
        let colors = this.state.colors.slice();
        const currentColor= this.generateColor();
        colors[index].hexCode=currentColor;
        this.setState({
            colors:colors
        })
    }

    render(){
        return(
            <div className="colorContainer">
                {this.state.colors.map((color,index)=>
                <Color key={`color-${index}`} index={index}
                update ={this.updatecolor.bind(this)}
                    hexCode={color.hexCode}
                />
              )}
            </div>
        )
    }
}