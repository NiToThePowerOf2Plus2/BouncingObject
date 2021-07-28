import React from "react";

export default class Bounce extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            x: 0,
            revDirection: false,
        }
    }
    //failed: idea is to render different letters of one specific word and let them appear in different time but keep bouncing each alone! 
    showObj = (obj,delay) => {
        setTimeout(
            ()=> {return <h1 style={{
                fontSize: "20px",
                height: "18px",
                width: "16px",
                position: "absolute",
                padding: 0,
                margin: 0,
                bottom: this.state.revDirection ? -this.state.x : this.state.x
            }}>{obj}</h1>},
            delay
        )
    }
    componentDidMount(){
        //logic works but needs fixing
        setInterval(
            ()=>{
                if(this.state.x === 60-14){
                    this.setState({
                        revDirection:true,
                        x:this.state.x*-1
                    })
                    
                }else if(this.state.x === 0){
                    this.setState({
                        revDirection:false,
                        x:this.state.x+1
                    })
                }
                else{
                    this.setState({ 
                        x:this.state.x+1
                    })
                }
            }
            ,
            1
        );
    }
    //height = document.getElementById('main-container').clientHeight;
    
    style = {
        container:{
            borderRadius: "10% 0 0 0",
            height: "100px",
            width: "100px",
            padding: "0 0 0 10px",
            margin: 0,
            backgroundColor: "skyblue",
            borderBottom: "solid lightgreen 40px",
            position: "relative",
            textAlign: "center",
            fontFamily: "helvetica"
        },
        /* ball: {
            fontSize: "20px",
            height: "18px",
            width: "16px",
            textAlign:"center",
            backgroundColor:"lightgreen",
            position: "absolute",
            left: "50px",
            padding: 0,
            margin: 0,
            bottom: this.state.x //not working "this.state not defined...but why!??"
        } */
    };
    render(){
        return(
            <div id="main-container" style={this.style.container}>
                <h1 style={{
                    WebkitTextStroke: "0.2px black",
                    color: "white",
                    fontSize: "45px",
                    height: "18px",
                    width: "16px",
                    position: "absolute",
                    padding: 0,
                    margin: 0,
                    left: "23px",
                    bottom: this.state.revDirection ? -this.state.x : this.state.x
                }}>{this.state.x <= 56 && this.state.x >= 1 ? 'Hi!' : '😃'}</h1>
            </div>
        )
    }
}