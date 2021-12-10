import React, { Component } from "react";
import Profil from "./profil/Profil";

export class App extends Component {
  state = {
    Person: {
      fullName: "amira saadi",
      bio: "change is the end result of all true learning",
      imgSrc:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.emRAV-ty7bncfqR4w90AjgHaLG%26pid%3DApi&f=1",
      profession: "student in Go My Code",
    },
    isShow: false

  }
  // };
  handlshow=()=>{
    this.setState({isShow :!this.state.isShow });
  }
  render() {
    return (
      <div style={{marginTop:"20px",textAlign:"center"}}>
        <button on onClick={this.handlshow}>{this.state.isShow ? "Hide" : "Show"}</button>
        {this.state.isShow===true ? <Profil
         fullName={this.state.Person.fullName}
         bio={this.state.Person.bio}
         imgSrc={this.state.Person.imgSrc}
         profession={this.state.Person.profession}
        />:null}
        
        {/*  */}
      </div>
    );
  }
}

export default App;
