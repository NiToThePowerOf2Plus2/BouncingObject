import React from "react";

export default class Bounce extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            x: 0
        }
    }
    style = {
        container:{
            height: "100px",
            width: "100px",
            padding: 0,
            margin: 0,
            backgroundColor: "lightgray",
            borderBottom: "solid black 3px",
            position: "relative",
        },
        ball: {
            fontSize: "20px",
            height: "18px",
            width: "16px",
            textAlign:"center",
            backgroundColor:"lightgreen",
            position: "absolute",
            bottom: 0,
            left: "50px",
            padding: 0,
            margin: 0,
        }
    };
    render(){
        return(
            <div style={this.style.container}>
                <h1 style={this.style.ball}>O</h1>
            </div>
        )
    }
}