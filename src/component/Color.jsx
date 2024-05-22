import React from "react";

export class Color extends React.Component{
    
    render() {
        let Style={
            backgroundColor:this.props.hexCode
        }
        return(
            <div className="colorcode">
             <span>   
                 <div className="color" style={Style}>                  
                  <p>{this.props.hexCode}</p>
                </div>
                </span>

                
            </div>
        )
    }
}
